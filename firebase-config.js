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

import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, onSnapshot }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// ── Helper: Show user-friendly sign-in error ────────────────────────
function showAuthError(err) {
  let msg = err.message;
  if (err.code === 'auth/network-request-failed') {
    msg = 'Network error. Please check your internet connection and try again.';
  } else if (err.code === 'auth/unauthorized-domain') {
    msg = 'This website domain is not authorized in Firebase. Please contact the admin to add this domain in Firebase Console → Authentication → Settings → Authorized Domains.';
  } else if (err.code === 'auth/popup-blocked') {
    msg = 'Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.';
  } else if (err.code === 'auth/popup-closed-by-user') {
    return; // User closed the popup — no error needed
  } else if (err.code === 'auth/cancelled-popup-request') {
    return; // Multiple popups — ignore
  }
  alert('Sign-In Error: ' + msg);
}

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
const fbProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');

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

// ── Helper to detect device ──
function getDeviceName() {
  const ua = navigator.userAgent;
  if (/windows phone/i.test(ua)) return "Windows Phone";
  if (/android/i.test(ua)) return "Android";
  if (/iPad|iPhone|iPod/.test(ua)) return "iOS";
  if (/Macintosh/i.test(ua)) return "Mac";
  if (/Windows/i.test(ua)) return "Windows PC";
  if (/Linux/i.test(ua)) return "Linux";
  return "Unknown Device";
}

// ── Record or Update unique visitor (with IP, Time, Location & Device) ──
async function recordUniqueVisitor(user) {
  const ref = doc(db, "uniqueVisitors", user.uid);
  const snap = await getDoc(ref);
  
  // Fetch IP and Location using ip-api.com (free, reliable, no key needed)
  let ipAddress = 'Unknown';
  let placeName = 'Unknown Location';
  try {
    const res = await fetch('https://ip-api.com/json/?fields=status,city,regionName,country,query');
    const data = await res.json();
    if (data.status === 'success') {
      ipAddress = data.query || 'Unknown';
      const parts = [data.city, data.regionName, data.country].filter(Boolean);
      placeName = parts.length > 0 ? parts.join(', ') : 'Unknown Location';
    }
  } catch(e) {
    // Final fallback — just get IP
    try {
      const fallback = await fetch('https://api.ipify.org?format=json');
      const fd = await fallback.json();
      if (fd.ip) ipAddress = fd.ip;
    } catch(e2) {}
    console.error("Could not fetch location data", e);
  }

  const deviceName = getDeviceName();
  // Get readable Indian timezone string (e.g. 11/8/2026, 3:00:00 pm)
  const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  if (!snap.exists()) {
    await setDoc(ref, {
      name:      user.displayName,
      email:     user.email,
      photo:     user.photoURL,
      firstVisit: currentTime,
      lastLogin: currentTime,
      ipAddress: ipAddress,
      placeName: placeName,
      deviceName: deviceName,
      uid:       user.uid
    });
  } else {
    // If they already exist, update login time, IP, location, and device
    await setDoc(ref, {
      lastLogin: currentTime,
      ipAddress: ipAddress,
      placeName: placeName,
      deviceName: deviceName
    }, { merge: true });
  }
}

// ── Update the Sign-In button UI ────────────────────────────────
function updateLoginUI(user) {
  const btn = document.getElementById("google-signin-btn");
  if (!btn) return;
  if (user) {
    // Just show the profile photo in the floating widget, but DON'T make it log out
    btn.innerHTML = `<img src="${user.photoURL || 'assets/images/favicon_circle.png'}" style="width:24px; height:24px; border-radius:50%; border:1px solid #d4af37; object-fit: cover;">`;
    btn.title = `${user.displayName} — Logged In`;
    btn.setAttribute("data-signed-in", "true");
  } else {
    btn.innerHTML = `<i class="fa-brands fa-google"></i>`;
    btn.title = "Sign in with Google";
    btn.removeAttribute("data-signed-in");
  }
}

// ── Listen for auth state changes ───────────────────────────────
onAuthStateChanged(auth, user => {
  window.isUserSignedIn = !!user;
  updateLoginUI(user);
  
  const loginPortal = document.getElementById('login-portal');
  const introSplash = document.getElementById('intro-splash');
  const mainContent = document.getElementById('main-site-content');
  const welcomeBanner = document.getElementById('user-welcome-banner');

  if (user) {
    recordUniqueVisitor(user);
    
    // Set Welcome text
    const welcomeText = document.getElementById('welcome-text');
    const welcomeEmail = document.getElementById('welcome-email');
    const welcomePhoto = document.getElementById('welcome-user-photo');
    if (welcomeText) welcomeText.textContent = user.displayName || 'User';
    if (welcomeEmail) welcomeEmail.textContent = user.email || '';
    if (welcomePhoto && user.photoURL) {
      welcomePhoto.src = user.photoURL;
      welcomePhoto.style.display = "inline-block";
    }
    
    // Hide Login Portal
    if (loginPortal) loginPortal.style.display = 'none';
    
    // Instantly show main content
    if (introSplash) introSplash.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    if (welcomeBanner) welcomeBanner.style.display = 'flex';
    document.body.style.overflow = ''; // Unlock scroll
    sessionStorage.setItem('introShown', 'true');
  } else {
    // User is logged out
    sessionStorage.removeItem('introShown');
    if (loginPortal) loginPortal.style.display = 'flex';
    if (introSplash) introSplash.style.display = 'none';
    if (mainContent) mainContent.style.display = 'none';
    if (welcomeBanner) welcomeBanner.style.display = 'none';
    document.body.style.overflow = 'hidden'; // Lock scroll
  }
});

// ── Handle Sign-In / Sign-Out button click ──────────────────────
window.handleGoogleSignIn = function () {
  const btn = document.getElementById("google-signin-btn");
  if (btn && btn.getAttribute("data-signed-in")) {
    // Already signed in — do nothing
  } else {
    signInWithPopup(auth, provider).catch(showAuthError);
  }
};

// ── Facebook Sign-In ─────────────────────────────────────────────
window.handleFacebookSignIn = function (event) {
  if (event) event.stopPropagation();
  signInWithPopup(auth, fbProvider).catch(showAuthError);
};

// ── Twitter Sign-In ──────────────────────────────────────────────
window.handleTwitterSignIn = function (event) {
  if (event) event.stopPropagation();
  signInWithPopup(auth, twitterProvider).catch(showAuthError);
};

// ── YouTube (Google) Sign-In ─────────────────────────────────────
window.handleYouTubeSignIn = function (event) {
  if (event) event.stopPropagation();
  const ytProvider = new GoogleAuthProvider();
  signInWithPopup(auth, ytProvider).catch(showAuthError);
};

// ── Microsoft Sign-In ────────────────────────────────────────────
window.handleMicrosoftSignIn = function (event) {
  if (event) event.stopPropagation();
  signInWithPopup(auth, microsoftProvider).catch(showAuthError);
};

window.handleLogout = function (event) {
  if (event) event.stopPropagation();
  signOut(auth).catch(console.error);
};

export { setupRealtimeVisitorCount };

