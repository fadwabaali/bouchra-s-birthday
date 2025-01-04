// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgTocPbj6mKEZkHDeygX3Zdu02_NS81UU",
  authDomain: "bouchras-birth.firebaseapp.com",
  projectId: "bouchras-birth",
  storageBucket: "bouchras-birth.firebasestorage.app",
  messagingSenderId: "314737905105",
  appId: "1:314737905105:web:f48faf955e4cdf5cb7e4f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);