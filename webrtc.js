import { db, auth } from './firebase-config.js';
import { doc, setDoc, getDoc, collection, addDoc, onSnapshot, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

let pc = new RTCPeerConnection(servers);
let currentCamStream = null;
let currentScreenStream = null;
let broadcasterUnsubs = [];
let adminUnsubs = [];

function clearBroadcasterUnsubs() {
    broadcasterUnsubs.forEach(unsub => unsub());
    broadcasterUnsubs = [];
}

function clearAdminUnsubs() {
    adminUnsubs.forEach(unsub => unsub());
    adminUnsubs = [];
}

// Call this from index.html
export async function startBroadcasting(type = 'both', localVideoCamEl = null, localVideoScreenEl = null, isReconnect = false) {
    if (!auth.currentUser) return;
    
    clearBroadcasterUnsubs();
    
    // Reset connection
    pc.close();
    pc = new RTCPeerConnection(servers);
    
    const reconnectBroadcaster = () => {
        if (!auth.currentUser) return;
        console.log("Broadcaster attempting reconnect...");
        startBroadcasting(type, localVideoCamEl, localVideoScreenEl, true).catch(e => {
            console.log("Broadcaster reconnect failed (offline?), trying again in 3s...", e);
            setTimeout(reconnectBroadcaster, 3000);
        });
    };

    pc.oniceconnectionstatechange = () => {
        if (pc.iceConnectionState === 'disconnected' || pc.iceConnectionState === 'failed') {
            console.log("Broadcaster connection lost, scheduling restart...");
            setTimeout(reconnectBroadcaster, 3000);
        }
    };
    
    let camError = null;
    let screenError = null;

    if (!isReconnect) {
        let camActive = currentCamStream && currentCamStream.getTracks().some(t => t.readyState === 'live');
        let screenActive = currentScreenStream && currentScreenStream.getTracks().some(t => t.readyState === 'live');
        
        // We capture both, but silently continue if they deny one or the other.
        try {
            if ((type === 'camera' || type === 'both') && !camActive) {
                try {
                    currentCamStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                } catch (firstErr) {
                    console.log("Audio+Video failed, trying video only...", firstErr);
                    currentCamStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                }
            }
        } catch(e) { 
            console.log("Camera denied or not found", e); 
            camError = e.name + ": " + e.message; 
        }
        
        try {
            if ((type === 'screen' || type === 'both') && !screenActive) {
                try {
                    currentScreenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
                } catch (firstErr) {
                    console.log("Screen Audio+Video failed, trying video only...", firstErr);
                    currentScreenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
                }
            }
        } catch(e) { 
            console.log("Screen share denied", e); 
            screenError = e.name + ": " + e.message;
        }
    }
    
    if (!currentCamStream && !currentScreenStream) {
        return { success: false, error: (type === 'camera' ? camError : screenError) }; // return the specific error
    }
    
    // Attach tracks to the new PeerConnection
    if (currentCamStream) {
        currentCamStream.getTracks().forEach((track) => pc.addTrack(track, currentCamStream));
        if (localVideoCamEl && !isReconnect) {
            localVideoCamEl.srcObject = currentCamStream;
            localVideoCamEl.style.display = 'block';
        }
    }
    
    if (currentScreenStream) {
        currentScreenStream.getTracks().forEach((track) => pc.addTrack(track, currentScreenStream));
        if (localVideoScreenEl && !isReconnect) {
            localVideoScreenEl.srcObject = currentScreenStream;
            localVideoScreenEl.style.display = 'block';
        }
    }
    
    const callDoc = doc(db, 'webrtc_calls', auth.currentUser.uid);
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');
    
    await setDoc(callDoc, {}); // Clear old data
    
    pc.onicecandidate = (event) => {
        event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
    };
    
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);
    
    const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
    };
    
    await setDoc(callDoc, { offer });
    
    const unsubCall = onSnapshot(callDoc, (snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
        }
    });
    broadcasterUnsubs.push(unsubCall);
    
    const unsubAnswer = onSnapshot(answerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                const candidate = new RTCIceCandidate(change.doc.data());
                pc.addIceCandidate(candidate);
            }
        });
    });
    broadcasterUnsubs.push(unsubAnswer);
}

// Call this from admin_live.html
export async function answerBroadcast(uid, remoteVideoCamEl, remoteVideoScreenEl) {
    if (!auth.currentUser) return alert("Must be logged in!");
    
    clearAdminUnsubs();
    
    pc.close();
    pc = new RTCPeerConnection(servers);
    
    const reconnectAdmin = () => {
        if (!auth.currentUser) return;
        console.log("Admin attempting reconnect...");
        answerBroadcast(uid, remoteVideoCamEl, remoteVideoScreenEl).catch(e => {
            console.log("Admin reconnect failed (offline?), trying again in 3s...", e);
            setTimeout(reconnectAdmin, 3000);
        });
    };

    pc.oniceconnectionstatechange = () => {
        if (pc.iceConnectionState === 'disconnected' || pc.iceConnectionState === 'failed') {
            console.log("Admin connection lost, scheduling restart...");
            setTimeout(reconnectAdmin, 3000);
        }
    };
    
    // Hide both initially
    remoteVideoCamEl.style.display = 'none';
    if(remoteVideoScreenEl) remoteVideoScreenEl.style.display = 'none';
    
    const remoteStreamCam = new MediaStream();
    const remoteStreamScreen = new MediaStream();
    
    remoteVideoCamEl.srcObject = remoteStreamCam;
    if(remoteVideoScreenEl) remoteVideoScreenEl.srcObject = remoteStreamScreen;
    
    let streamMap = new Map();
    let streamCount = 0;
    
    window.audioVisualizerContexts = window.audioVisualizerContexts || {};

    function setupAudioVisualizer(stream, canvasId, colorHex) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        
        try {
            if (window.audioVisualizerContexts[canvasId]) {
                window.audioVisualizerContexts[canvasId].close();
            }
            const actx = new (window.AudioContext || window.webkitAudioContext)();
            window.audioVisualizerContexts[canvasId] = actx;
            
            const source = actx.createMediaStreamSource(stream);
            const analyser = actx.createAnalyser();
            analyser.fftSize = 64; 
            source.connect(analyser);
            
            canvas.style.display = 'block';
            const ctx = canvas.getContext('2d');
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            
            // Extract RGB from hex for rgba
            let r = 57, g = 255, b = 20; // Default green
            if (colorHex) {
                const hex = colorHex.replace('#', '');
                if (hex.length === 6) {
                    r = parseInt(hex.substring(0, 2), 16);
                    g = parseInt(hex.substring(2, 4), 16);
                    b = parseInt(hex.substring(4, 6), 16);
                }
            }
            
            const dbSpanId = canvasId.replace('Visualizer', 'Decibel');
            const dbSpan = document.getElementById(dbSpanId);
            if (dbSpan) dbSpan.style.display = 'inline-block';
            
            function draw() {
                if (!document.getElementById(canvasId) || document.getElementById(canvasId).style.display === 'none') return;
                requestAnimationFrame(draw);
                
                analyser.getByteFrequencyData(dataArray);
                
                const rect = canvas.getBoundingClientRect();
                if (canvas.width !== rect.width || canvas.height !== rect.height) {
                    canvas.width = rect.width;
                    canvas.height = rect.height;
                }
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                const barWidth = (canvas.width / bufferLength) * 1.5;
                let barHeight;
                let x = 0;
                let sum = 0;
                
                for(let i = 0; i < bufferLength; i++) {
                    sum += dataArray[i];
                    barHeight = (dataArray[i] / 255) * canvas.height;
                    const opacity = Math.min(1, Math.max(0.3, dataArray[i] / 255));
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                    x += barWidth + 1;
                }
                
                if (dbSpan) {
                    const average = sum / bufferLength;
                    let db = -100;
                    if (average > 0) {
                        db = 20 * Math.log10(average / 255);
                    }
                    if (db < -100) db = -100;
                    
                    dbSpan.textContent = Math.round(db) + ' dB';
                }
            }
            draw();
        } catch(e) {
            console.error("Audio visualizer error: ", e);
        }
    }
    
    pc.ontrack = (event) => {
        const stream = event.streams[0];
        if (!stream) return;
        
        if (!streamMap.has(stream.id)) {
            streamCount++;
            if (streamCount === 1) {
                streamMap.set(stream.id, { mediaStream: remoteStreamCam, videoEl: remoteVideoCamEl, color: '#d4af37' });
            } else if (remoteVideoScreenEl) {
                streamMap.set(stream.id, { mediaStream: remoteStreamScreen, videoEl: remoteVideoScreenEl, color: '#2980b9' });
            }
        }
        
        const mapped = streamMap.get(stream.id);
        if (mapped) {
            mapped.mediaStream.addTrack(event.track);
            mapped.videoEl.style.display = 'block';
            
            const muteBtn = document.getElementById(mapped.videoEl.id + 'MuteBtn');
            if (muteBtn) muteBtn.style.display = 'block';
            
            if (event.track.kind === 'audio') {
                setupAudioVisualizer(mapped.mediaStream, mapped.videoEl.id + 'Visualizer', mapped.color);
            }
        }
    };
    
    const callDoc = doc(db, 'webrtc_calls', uid);
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');
    
    pc.onicecandidate = (event) => {
        event.candidate && addDoc(answerCandidates, event.candidate.toJSON());
    };
    
    const callData = (await getDoc(callDoc)).data();
    if (!callData || !callData.offer) {
        console.log("No active stream found for this user yet, waiting for reconnect...");
        return; // Will be retried manually or by another mechanism
    }
    
    const offerDescription = callData.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));
    
    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);
    
    const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
    };
    
    await setDoc(callDoc, { answer }, { merge: true });
    
    const unsubOffer = onSnapshot(offerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                let data = change.doc.data();
                pc.addIceCandidate(new RTCIceCandidate(data));
            }
        });
    });
    adminUnsubs.push(unsubOffer);
}

export async function getUsersList() {
    const usersSnap = await getDocs(collection(db, "uniqueVisitors"));
    let users = [];
    usersSnap.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
    });
    return users;
}

// Expose to window for inline onclick handlers in index.html
window.startBroadcasting = startBroadcasting;
window.answerBroadcast = answerBroadcast;
window.getUsersList = getUsersList;
