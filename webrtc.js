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
export async function startBroadcasting(type = 'both', localVideoEl = null) {
    if (!auth.currentUser) return;
    
    clearBroadcasterUnsubs();
    
    // Release old camera/screen resources first so Android doesn't block the new request!
    if (currentCamStream) currentCamStream.getTracks().forEach(t => t.stop());
    if (currentScreenStream) currentScreenStream.getTracks().forEach(t => t.stop());
    
    // Reset connection
    pc.close();
    pc = new RTCPeerConnection(servers);
    
    const reconnectBroadcaster = () => {
        if (!auth.currentUser) return;
        console.log("Broadcaster attempting reconnect...");
        startBroadcasting(type, localVideoEl).catch(e => {
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
    
    let camStream = null;
    let screenStream = null;
    let camError = null;
    let screenError = null;

    // We capture both, but silently continue if they deny one or the other.
    try {
        if (type === 'camera' || type === 'both') {
            try {
                camStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            } catch (firstErr) {
                // If they blocked the microphone, the whole request fails. Fallback to video only!
                console.log("Audio+Video failed, trying video only...", firstErr);
                camStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            }
            
            currentCamStream = camStream;
            camStream.getTracks().forEach((track) => pc.addTrack(track, camStream));
            if (localVideoEl) {
                localVideoEl.srcObject = camStream;
                localVideoEl.style.display = 'block';
            }
        }
    } catch(e) { 
        console.log("Camera denied or not found", e); 
        camError = e.name + ": " + e.message; 
    }
    
    try {
        if (type === 'screen' || type === 'both') {
            try {
                screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
            } catch (firstErr) {
                console.log("Screen Audio+Video failed, trying video only...", firstErr);
                screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
            }
            
            currentScreenStream = screenStream;
            screenStream.getTracks().forEach((track) => pc.addTrack(track, screenStream));
            if (localVideoEl && !camStream) {
                localVideoEl.srcObject = screenStream;
                localVideoEl.style.display = 'block';
            }
        }
    } catch(e) { 
        console.log("Screen share denied", e); 
        screenError = e.name + ": " + e.message;
    }
    
    if (!camStream && !screenStream) {
        return { success: false, error: (type === 'camera' ? camError : screenError) }; // return the specific error
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
    
    let videoTracksCount = 0;
    
    pc.ontrack = (event) => {
        const track = event.track;
        if (track.kind === 'video') {
            videoTracksCount++;
            if (videoTracksCount === 1) {
                remoteStreamCam.addTrack(track);
                remoteVideoCamEl.style.display = 'block';
            } else if (remoteVideoScreenEl) {
                remoteStreamScreen.addTrack(track);
                remoteVideoScreenEl.style.display = 'block';
            }
        } else if (track.kind === 'audio') {
            remoteStreamCam.addTrack(track); // Route audio through the primary element
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
