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
let localStream = null;
let remoteStream = null;

// Call this from client_live.html
export async function startBroadcasting(type = 'camera', localVideoEl) {
    if (!auth.currentUser) return alert("Must be logged in!");
    
    // Reset connection
    pc.close();
    pc = new RTCPeerConnection(servers);
    
    if (type === 'camera') {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    } else {
        localStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    }
    
    localVideoEl.srcObject = localStream;
    
    localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
    });
    
    const callDoc = doc(db, 'webrtc_calls', auth.currentUser.uid);
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');
    
    // Clear old data to start fresh
    await setDoc(callDoc, {});
    
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
    
    remoteStream = new MediaStream();
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
