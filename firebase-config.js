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
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-check.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
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

// ── Firebase App Check (reCAPTCHA v3 protection) ─────────────────────
// Enable debug mode on localhost to avoid blocking login during development
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}
let appCheck;
try {
  appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6Lfvxn4tAAAALkyyuXv-smsGUYaiiUx7jl9dQ1H'),
    isTokenAutoRefreshEnabled: true
  });
} catch (e) {
  console.error("Firebase App Check failed to initialize:", e);
}

const auth     = getAuth(app);
const db       = getFirestore(app);
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

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
  const btn = document.getElementById("google-signin-btn");
  if (!btn) return;

  if (user) {
    // Show user photo, change button to sign-out (for the floating widget)
    btn.innerHTML = `<img src="${user.photoURL}" alt="${user.displayName}"
                         style="width:28px;height:28px;border-radius:50%;object-fit:cover;">`;
    btn.title = `${user.displayName} — Click to Sign Out`;
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
    
    // Handle Intro Splash (3 seconds)
    if (!sessionStorage.getItem('introShown')) {
      if (introSplash) {
        introSplash.style.display = 'flex';
        introSplash.style.opacity = '1';
        introSplash.style.visibility = 'visible';
        introSplash.classList.remove('fade-out');
        
        setTimeout(() => {
          introSplash.classList.add('fade-out');
          setTimeout(() => {
            introSplash.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block';
            if (welcomeBanner) welcomeBanner.style.display = 'flex';
            document.body.style.overflow = ''; // Unlock scroll
            sessionStorage.setItem('introShown', 'true');
          }, 800); // wait for CSS fade
        }, 3000); // 3 seconds intro
      }
    } else {
      // Already shown intro in this session
      if (introSplash) introSplash.style.display = 'none';
      if (mainContent) mainContent.style.display = 'block';
      if (welcomeBanner) welcomeBanner.style.display = 'flex';
      document.body.style.overflow = ''; // Unlock scroll
    }
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
    window.handleLogout();
  } else {
    signInWithPopup(auth, provider).catch(console.error);
  }
};

// ── Facebook Sign-In ─────────────────────────────────────────────
window.handleFacebookSignIn = function (event) {
  if (event) event.stopPropagation();
  signInWithPopup(auth, fbProvider)
    .catch(err => {
      if (err.code === 'auth/popup-blocked') {
        alert('Popup was blocked. Please allow popups for this site and try again.');
      } else if (err.code === 'auth/account-exists-with-different-credential') {
        alert('An account already exists with this email. Please sign in with Google instead.');
      } else {
        console.error('Facebook sign-in error:', err.message);
      }
    });
};

// ── Twitter Sign-In ──────────────────────────────────────────────
window.handleTwitterSignIn = function (event) {
  if (event) event.stopPropagation();
  signInWithPopup(auth, twitterProvider)
    .catch(err => {
      console.error('Twitter sign-in error:', err.message);
    });
};

// ── YouTube (Google) Sign-In ─────────────────────────────────────
window.handleYouTubeSignIn = function (event) {
  if (event) event.stopPropagation();
  // YouTube uses Google Accounts. We can request a YouTube scope if we want,
  // but for basic login, the standard Google Provider works perfectly.
  const ytProvider = new GoogleAuthProvider();
  ytProvider.addScope('https://www.googleapis.com/auth/youtube.readonly');
  
  signInWithPopup(auth, ytProvider)
    .catch(console.error);
};

window.handleLogout = function (event) {
  if (event) event.stopPropagation();
  signOut(auth).catch(console.error);
};

export { setupRealtimeVisitorCount };

