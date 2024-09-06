// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbz8lsla-BGRN0v8hmkSziWxOJ2sIf7H8",
  authDomain: "virago-31a8e.firebaseapp.com",
  projectId: "virago-31a8e",
  storageBucket: "virago-31a8e.appspot.com",
  messagingSenderId: "1067930159899",
  appId: "1:1067930159899:web:73650632132ddc533a21be",
  measurementId: "G-DKZGJW5RJM"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and provider
const auth = getAuth(app);  // Initialize the auth instance
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider, signInWithPopup };