// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.x/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCydPYJctWaSnCsAFNlV2k-x1hQo-YOSS8",  // Your API Key
  authDomain: "mmfit-6d901.firebaseapp.com",
  projectId: "mmfit-6d901",
  storageBucket: "mmfit-6d901.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",  // Replace with your actual messaging sender ID
  appId: "YOUR_APP_ID"  // Replace with your actual app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign up function
const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User signed up:", userCredential.user);
      // Optional: Send a verification email after sign-up
      sendVerificationEmail();
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
};

// Login function
const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User logged in:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error logging in:", error.message);
    });
};

// Optional: Send verification email
const sendVerificationEmail = () => {
  const user = auth.currentUser;
  if (user) {
    const actionCodeSettings = {
      url: 'https://your-app-url.com', // Replace with your actual app URL
      handleCodeInApp: true,
    };
    sendEmailVerification(user, actionCodeSettings)
      .then(() => {
        console.log("Verification email sent.");
      })
      .catch((error) => {
        console.error("Error sending verification email:", error);
      });
  }
};
