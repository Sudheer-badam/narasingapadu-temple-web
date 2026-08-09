// ╔══════════════════════════════════════════════════════════════╗
// ║  Sri Annapurna Sameyta Kasi Visweswara Swami Temple         ║
// ║  Firebase Configuration — Unique Visitor Counter            ║
// ╚══════════════════════════════════════════════════════════════╝
//
// SETUP STEPS:
// 1. Go to https://console.firebase.google.com/
// 2. Click "Add Project" → name it "narasingapadu-temple"
// 3. Go to Project Settings → General → "Your Apps" → Add Web App (</>)
// 4. Copy the firebaseConfig values below from Firebase Console
// 5. Go to Authentication → Sign-in method → Enable "Google"
// 6. Go to Firestore Database → Create database (start in test mode)
// 7. Save this file and refresh the site

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, onSnapshot }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// ─── REPLACE THESE VALUES WITH YOUR FIREBASE PROJECT CONFIG ───
const firebaseConfig = {
  apiKey: "AIzaSyCUygM1Hai7P7viYBbLrMVayAADGGe3PbU",
  authDomain: "narasingapadu-temple.firebaseapp.com",
  projectId: "narasingapadu-temple",
  storageBucket: "narasingapadu-temple.firebasestorage.app",
  messagingSenderId: "418348404034",
  appId: "1:418348404034:web:1b7f1b8490b7be3538ccdb",
  measurementId: "G-QVV9YE4T3Z"
};
// ──────────────────────────────────────────────────────────────

const app      = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth     = getAuth(app);
const db       = getFirestore(app);
const provider = new GoogleAuthProvider();

// ── Listen & display the total unique visitor count in real-time ──
function setupRealtimeVisitorCount() {
  try {
    const col = collection(db, "uniqueVisitors");
    onSnapshot(col, (snapshot) => {
      const count = snapshot.size;
      document.querySelectorAll(".visitor-count-number").forEach(el => {
        el.textContent = count.toLocaleString("en-IN");
      });
    });
  } catch (e) {
    // silently ignore if Firebase is not yet configured
  }
}
// Start listening immediately
setupRealtimeVisitorCount();

// ── Record a new unique visitor (only once per Google account) ──
async function recordUniqueVisitor(user) {
  const ref = doc(db, "uniqueVisitors", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      name:      user.displayName,
      email:     user.email,
      photo:     user.photoURL,
      firstVisit: new Date().toISOString(),
      uid:       user.uid
    });
  }
}

// ── Update the Sign-In button UI ────────────────────────────────
function updateLoginUI(user) {
  const btn     = document.getElementById("google-signin-btn");
  const counter = document.getElementById("visitor-counter-wrapper");
  if (!btn) return;

  if (user) {
    // Show user photo + name, change button to sign-out
    btn.innerHTML = `<img src="${user.photoURL}" alt="${user.displayName}"
                         style="width:28px;height:28px;border-radius:50%;object-fit:cover;">`;
    btn.title = `${user.displayName} — Click to Sign Out`;
    btn.setAttribute("data-signed-in", "true");
    if (counter) counter.style.display = "flex";
  } else {
    btn.innerHTML = `<i class="fa-brands fa-google"></i>`;
    btn.title = "Sign in with Google";
    btn.removeAttribute("data-signed-in");
    if (counter) counter.style.display = "flex"; // still show count
  }
}

// ── Listen for auth state changes ───────────────────────────────
onAuthStateChanged(auth, user => {
  window.isUserSignedIn = !!user;
  updateLoginUI(user);
  if (user) recordUniqueVisitor(user);
});

// ── Handle Sign-In / Sign-Out button click ──────────────────────
window.handleGoogleSignIn = function () {
  const btn = document.getElementById("google-signin-btn");
  if (btn && btn.getAttribute("data-signed-in")) {
    signOut(auth);
  } else {
    signInWithPopup(auth, provider).catch(console.error);
  }
};

export { setupRealtimeVisitorCount };
