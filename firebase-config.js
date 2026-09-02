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
  
  // Fetch IP and Location — use HTTPS-compatible APIs only
  let ipAddress = 'Unknown';
  let placeName = 'Unknown Location';

  // Primary: ipwho.is — free, HTTPS, no API key needed
  try {
    const res = await fetch('https://ipwho.is/');
    const data = await res.json();
    if (data.success) {
      ipAddress = data.ip || 'Unknown';
      const parts = [data.city, data.region, data.country].filter(Boolean);
      placeName = parts.length > 0 ? parts.join(', ') : 'Unknown Location';
    }
  } catch(e1) {
    // Fallback 1: freeipapi.com — free, HTTPS, no API key needed
    try {
      const res2 = await fetch('https://freeipapi.com/api/json');
      const data2 = await res2.json();
      if (data2.ipAddress) {
        ipAddress = data2.ipAddress;
        const parts2 = [data2.cityName, data2.regionName, data2.countryName].filter(Boolean);
        placeName = parts2.length > 0 ? parts2.join(', ') : 'Unknown Location';
      }
    } catch(e2) {
      // Fallback 2: just get IP
      try {
        const res3 = await fetch('https://api.ipify.org?format=json');
        const data3 = await res3.json();
        if (data3.ip) ipAddress = data3.ip;
      } catch(e3) {}
      console.error("Could not fetch location data", e2);
    }
  }

  const deviceName = getDeviceName();
  // Get readable Indian timezone string (e.g. 11/8/2026, 3:00:00 pm)
  const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Get the primary provider (e.g. google.com, facebook.com, twitter.com)
  const loginProvider = (user.providerData && user.providerData.length > 0) 
    ? user.providerData[0].providerId 
    : 'Unknown';

  if (!snap.exists()) {
    await setDoc(ref, {
      name:      user.displayName || "Unknown",
      email:     user.email || "No Email Provided",
      photo:     user.photoURL || "",
      provider:  loginProvider,
      firstVisit: currentTime,
      lastLogin: currentTime,
      ipAddress: ipAddress,
      placeName: placeName,
      deviceName: deviceName,
      uid:       user.uid
    });
  } else {
    // If they already exist, update login time, IP, location, device, and profile info
    await setDoc(ref, {
      name:      user.displayName || "Unknown",
      email:     user.email || "No Email Provided",
      photo:     user.photoURL || "",
      provider:  loginProvider,
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
    if (welcomePhoto) {
      welcomePhoto.src = user.photoURL || 'assets/images/favicon_circle.png';
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

import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-functions.js";

const functions = getFunctions(app);

// ── Backend reCAPTCHA Verification Helper ────────────────────────
async function verifyRecaptchaBackend() {
  if (typeof grecaptcha === 'undefined' || !grecaptcha.enterprise) {
    alert("reCAPTCHA is not loaded yet.");
    return false;
  }
  
  const token = grecaptcha.enterprise.getResponse();
  if (!token) {
    alert("Please check the 'I am not a robot' box first.");
    return false;
  }

  try {
    const verifyRecaptcha = httpsCallable(functions, 'verifyRecaptcha');
    const result = await verifyRecaptcha({ token: token, action: 'login' });
    if (result.data.success) {
      return true;
    }
  } catch (error) {
    console.error("reCAPTCHA backend verification failed:", error);
    alert("reCAPTCHA verification failed. Please try again.");
    grecaptcha.enterprise.reset();
  }
  return false;
}

// ── Handle Sign-In / Sign-Out button click ──────────────────────
window.handleGoogleSignIn = async function () {
  const btn = document.getElementById("google-signin-btn");
  if (btn && btn.getAttribute("data-signed-in")) {
    return;
  }
  if (await verifyRecaptchaBackend()) {
    signInWithPopup(auth, provider).catch(showAuthError);
  }
};

// ── Facebook Sign-In ─────────────────────────────────────────────
window.handleFacebookSignIn = async function (event) {
  if (event) event.stopPropagation();
  if (await verifyRecaptchaBackend()) {
    signInWithPopup(auth, fbProvider).catch(showAuthError);
  }
};

// ── Twitter Sign-In ──────────────────────────────────────────────
window.handleTwitterSignIn = async function (event) {
  if (event) event.stopPropagation();
  if (await verifyRecaptchaBackend()) {
    signInWithPopup(auth, twitterProvider).catch(showAuthError);
  }
};

// ── YouTube (Google) Sign-In ─────────────────────────────────────
window.handleYouTubeSignIn = async function (event) {
  if (event) event.stopPropagation();
  const ytProvider = new GoogleAuthProvider();
  if (await verifyRecaptchaBackend()) {
    signInWithPopup(auth, ytProvider).catch(showAuthError);
  }
};

// ── Microsoft Sign-In ────────────────────────────────────────────
window.handleMicrosoftSignIn = async function (event) {
  if (event) event.stopPropagation();
  if (await verifyRecaptchaBackend()) {
    signInWithPopup(auth, microsoftProvider).catch(showAuthError);
  }
};

window.handleLogout = function (event) {
  if (event) event.stopPropagation();
  signOut(auth).catch(console.error);
};

export { setupRealtimeVisitorCount };

