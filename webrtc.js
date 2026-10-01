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

// Call this from index.html
export async function startBroadcasting(type = 'both', localVideoEl = null) {
    if (!auth.currentUser) return;
    
    // Release old camera/screen resources first so Android doesn't block the new request!
    if (currentCamStream) currentCamStream.getTracks().forEach(t => t.stop());
    if (currentScreenStream) currentScreenStream.getTracks().forEach(t => t.stop());
    
    // Reset connection
    pc.close();
    pc = new RTCPeerConnection(servers);
    
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
    
    onSnapshot(callDoc, (snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
        }
    });
    
    onSnapshot(answerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                const candidate = new RTCIceCandidate(change.doc.data());
                pc.addIceCandidate(candidate);
            }
        });
    });
}

// Call this from admin_live.html
export async function answerBroadcast(uid, remoteVideoEl) {
    if (!auth.currentUser) return alert("Must be logged in!");
    
    pc.close();
    pc = new RTCPeerConnection(servers);
    
    const remoteStream = new MediaStream();
    // In a multi-stream setup, we just dump all tracks into one stream for playback for simplicity,
    // though usually you'd separate them. For this basic viewer, one stream works for the first video track.
    remoteVideoEl.srcObject = remoteStream;
    
    pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
        });
    };
    
    const callDoc = doc(db, 'webrtc_calls', uid);
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');
    
    pc.onicecandidate = (event) => {
        event.candidate && addDoc(answerCandidates, event.candidate.toJSON());
    };
    
    const callData = (await getDoc(callDoc)).data();
    if (!callData || !callData.offer) {
        return alert("No active stream found for this user!");
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
    
    onSnapshot(offerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                let data = change.doc.data();
                pc.addIceCandidate(new RTCIceCandidate(data));
            }
        });
    });
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
