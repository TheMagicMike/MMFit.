// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "mmfit-6d901.firebaseapp.com",
  projectId: "mmfit-6d901",
  storageBucket: "mmfit-6d901.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign up function
const signUp = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User signed up:", userCredential.user);
      sendVerificationEmail();
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
};

// Login function
const login = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
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
    user.sendEmailVerification()
      .then(() => {
        console.log("Verification email sent.");
      })
      .catch((error) => {
        console.error("Error sending verification email:", error);
      });
  }
};
