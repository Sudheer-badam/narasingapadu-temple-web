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
import { getFirestore, doc, setDoc, getDoc, deleteDoc, collection, onSnapshot }
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

// Firebase App Check Debug Token (Localhost development)
self.FIREBASE_APPCHECK_DEBUG_TOKEN = "AVweKogafAW1OzxCjTMl3i_deYmm-XWSoIGNH6K1B8MFpwGy4LoGAKhXJgwHK-eSjpGYcSdqaMrl59S4KNX5kEuZ6N9A72xWXIwWxDIHO7zEwS_DAYF3_i4kBFqRCEQcCiu-ksySMec8g0WgMj3AVpt9ZA";

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
async function recordUniqueVisitor(user, lat = null, lng = null) {
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

  // Use Nominatim to get precise address from Lat/Lng if available
  if (lat && lng) {
    try {
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
      const geoData = await geoRes.json();
      if (geoData && geoData.address) {
        const addr = geoData.address;
        // Find the most relevant local area name
        const localArea = addr.village || addr.town || addr.suburb || addr.city_district || addr.city;
        
        // Build a clean, short address like Google Maps (e.g. "Temple Road, Narasingapadu, Andhra Pradesh")
        const parts = [];
        if (addr.road && localArea !== addr.road) parts.push(addr.road);
        if (localArea) parts.push(localArea);
        if (addr.state) parts.push(addr.state);
        
        if (parts.length > 0) {
           placeName = parts.join(', ');
        } else if (geoData.display_name) {
           placeName = geoData.display_name; // fallback
        }
      } else if (geoData && geoData.display_name) {
        placeName = geoData.display_name;
      }
    } catch (e) {
      console.error("Reverse geocoding failed", e);
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
      uid:       user.uid,
      lat:       lat,
      lng:       lng
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
      deviceName: deviceName,
      lat:       lat,
      lng:       lng
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

// ── Admin & Location Config ──
const ADMIN_EMAILS = [
  "badamsudheerreddy@gmail.com",
  "2300033278@kluniversity.in",
  "2300033278cseh2@gmail.com"
];

function enforceLocationAccess(user, onSuccess) {
  const overlay = document.getElementById('location-overlay');
  const errorMsg = document.getElementById('location-error-msg');
  const grantBtn = document.getElementById('grant-location-btn');
  
  if (overlay) overlay.style.display = 'flex';

  function requestLocation() {
    if (errorMsg) errorMsg.style.display = 'none';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // Success
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          await recordUniqueVisitor(user, lat, lng);
          onSuccess();
        },
        (error) => {
          // Denied or error
          if (errorMsg) {
            errorMsg.style.display = 'block';
            if (error.code === error.PERMISSION_DENIED) {
              errorMsg.textContent = "Location access denied. Please enable it in your browser/device settings and click the button again.";
            } else {
              errorMsg.textContent = "Error getting location. Please try again.";
            }
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      if (errorMsg) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = "Geolocation is not supported by your browser.";
      }
    }
  }

  // Request immediately
  requestLocation();

  // Also bind to button for retries
  if (grantBtn) {
    grantBtn.onclick = requestLocation;
  }
}

function checkAdminAndShowMapButton(user) {
  if (ADMIN_EMAILS.includes(user.email)) {
    let adminBtn = document.getElementById('admin-map-btn');
    if (!adminBtn) {
      adminBtn = document.createElement('button');
      adminBtn.id = 'admin-map-btn';
      adminBtn.className = 'btn-primary';
      adminBtn.innerHTML = '<i class="fa-solid fa-map-location-dot"></i> Live Map';
      adminBtn.style.cssText = 'margin-left: 10px; padding: 4px 8px; font-size: 0.75rem; border-radius: 15px; cursor: pointer;';
      adminBtn.onclick = window.showAdminMap;
      
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        const li = document.createElement('li');
        li.appendChild(adminBtn);
        navMenu.insertBefore(li, document.getElementById('user-welcome-banner'));
      }
    }
  }
}

let adminMap = null;
let adminMarkers = {};

window.deleteUserRecord = async function(uid) {
  if (confirm("Are you sure you want to delete this user's data?")) {
    try {
      await deleteDoc(doc(db, "uniqueVisitors", uid));
    } catch (e) {
      console.error("Error deleting user: ", e);
      alert("Error deleting user data.");
    }
  }
};

window.closeAdminMap = function() {
  const container = document.getElementById('admin-map-container');
  if (container) container.style.display = 'none';
  document.body.style.overflow = ''; // Restore scroll
};

window.showAdminMap = function() {
  const container = document.getElementById('admin-map-container');
  if (container) {
    container.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock scroll while map is open
    window.initAdminMap();
  }
};

window.initAdminMap = function() {
  if (typeof L === 'undefined') {
    alert("Map library (Leaflet) is not loaded.");
    return;
  }

  if (!adminMap) {
    adminMap = L.map('admin-map').setView([16.417255, 79.992644], 6);

    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri',
      maxZoom: 22,
      maxNativeZoom: 17
    });

    const street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 22,
      maxNativeZoom: 19
    });
    
    const topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri',
      maxZoom: 22,
      maxNativeZoom: 17
    });

    const labels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 22,
      maxNativeZoom: 17,
      attribution: ''
    });

    // Add default layers
    satellite.addTo(adminMap);
    labels.addTo(adminMap);

    const baseMaps = {
      "Satellite Map": satellite,
      "Street Map": street,
      "Terrain Map": topo
    };

    const overlayMaps = {
      "Borders & Labels": labels
    };

    // Add the Google Maps style layer toggle to top right
    L.control.layers(baseMaps, overlayMaps, { position: 'topright' }).addTo(adminMap);
    
    // Add the map scale control
    L.control.scale({ imperial: true, metric: true }).addTo(adminMap);


    const col = collection(db, "uniqueVisitors");
    onSnapshot(col, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        const uid = change.doc.id;
        
        if (change.type === "added" || change.type === "modified") {
          if (data.lat && data.lng) {
            const position = [data.lat, data.lng];
            
            // Determine device icon
            let deviceIconClass = "fa-solid fa-desktop";
            let deviceNameLower = (data.deviceName || "").toLowerCase();
            if (deviceNameLower.includes("windows")) deviceIconClass = "fa-brands fa-windows";
            else if (deviceNameLower.includes("android")) deviceIconClass = "fa-brands fa-android";
            else if (deviceNameLower.includes("ios") || deviceNameLower.includes("mac")) deviceIconClass = "fa-brands fa-apple";
            
            const infoContent = `
              <div style="color: #333; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center; min-width: 220px; padding: 5px;">
                <div style="font-weight: bold; font-size: 16px; margin-bottom: 2px; display: flex; justify-content: center; align-items: center; gap: 8px;">
                  <img src="${data.photo || ''}" style="width:24px;height:24px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'">
                  ${data.name}
                </div>
                <div style="font-size: 12px; color: #666; margin-bottom: 8px;">${data.email}</div>
                
                <div style="display: inline-block; background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; margin-bottom: 8px; border: 1px solid #c8e6c9;">
                  <span style="display:inline-block; width:8px; height:8px; background:#4caf50; border-radius:50%; margin-right:4px;"></span> LIVE NOW
                </div>
                
                <div style="font-size: 12px; margin-bottom: 10px; font-weight: 600;">
                  <i class="${deviceIconClass}" style="color: #555;"></i> Device: <span style="color:#000;">${data.deviceName || 'Unknown'}</span>
                </div>
                
                <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 10px 0;">
                
                <div style="font-size: 11px; margin-bottom: 8px; color: #444; line-height: 1.4; max-width: 100%; word-wrap: break-word;">
                  <i class="fa-solid fa-location-dot" style="color: #d4af37; margin-right: 4px;"></i> ${data.placeName || 'Location unknown'}
                </div>
                
                <div style="font-size: 13px; font-weight: bold; margin-bottom: 3px;">Lat: ${(data.lat || 0).toFixed(5)}</div>
                <div style="font-size: 13px; font-weight: bold; margin-bottom: 8px;">Lng: ${(data.lng || 0).toFixed(5)}</div>
                
                <div style="font-size: 11px; color: #2e7d32; margin-bottom: 15px; font-weight: 600;">
                  Last Update: ${data.lastLogin}
                </div>
                
                <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lng}', '_blank')" style="width: 100%; background: #007bff; color: white; border: none; padding: 8px; border-radius: 5px; font-weight: bold; cursor: pointer; margin-bottom: 8px; font-size: 13px; box-shadow: 0 2px 4px rgba(0,123,255,0.3);">
                  <i class="fa-solid fa-map-location-dot"></i> Get Directions
                </button>
                
                <button onclick="window.deleteUserRecord('${uid}')" style="width: 100%; background: #dc3545; color: white; border: none; padding: 8px; border-radius: 5px; font-weight: bold; cursor: pointer; font-size: 13px; box-shadow: 0 2px 4px rgba(220,53,69,0.3);">
                  Delete User Data
                </button>
              </div>
            `;

            if (adminMarkers[uid]) {
              adminMarkers[uid].setLatLng(position);
              adminMarkers[uid].getPopup().setContent(infoContent);
            } else {
              // Use default Leaflet marker (blue pin) to match user preference
              const marker = L.marker(position).addTo(adminMap);
              marker.bindPopup(infoContent);
              adminMarkers[uid] = marker;
            }
          }
        }
        if (change.type === "removed") {
          if (adminMarkers[uid]) {
            adminMap.removeLayer(adminMarkers[uid]);
            delete adminMarkers[uid];
          }
        }
      });
    });
    
    // Invalidate size to ensure it renders correctly after unhiding container
    setTimeout(() => { adminMap.invalidateSize(); }, 300);
  } else {
    setTimeout(() => { adminMap.invalidateSize(); }, 300);
  }
};

// ── Listen for auth state changes ───────────────────────────────
onAuthStateChanged(auth, user => {
  window.isUserSignedIn = !!user;
  updateLoginUI(user);
  
  const loginPortal = document.getElementById('login-portal');
  const introSplash = document.getElementById('intro-splash');
  const mainContent = document.getElementById('main-site-content');
  const welcomeBanner = document.getElementById('user-welcome-banner');

  if (user) {
    // Hide Login Portal first
    if (loginPortal) loginPortal.style.display = 'none';

    enforceLocationAccess(user, () => {
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
      
      // Instantly show main content
      const locationOverlay = document.getElementById('location-overlay');
      if (locationOverlay) locationOverlay.style.display = 'none';
      if (introSplash) introSplash.style.display = 'none';
      if (mainContent) mainContent.style.display = 'block';
      if (welcomeBanner) welcomeBanner.style.display = 'flex';
      document.body.style.overflow = ''; // Unlock scroll
      sessionStorage.setItem('introShown', 'true');

      checkAdminAndShowMapButton(user);
    });
  } else {
    // User is logged out
    sessionStorage.removeItem('introShown');
    if (loginPortal) loginPortal.style.display = 'flex';
    if (introSplash) introSplash.style.display = 'none';
    if (mainContent) mainContent.style.display = 'none';
    if (welcomeBanner) welcomeBanner.style.display = 'none';
    const locationOverlay = document.getElementById('location-overlay');
    if (locationOverlay) locationOverlay.style.display = 'none';
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


