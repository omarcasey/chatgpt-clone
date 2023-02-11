import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAccqHKAHdG7jsZNE9hlsNAg6JRy5QVhHk",
    authDomain: "chatgpt-clone-e290e.firebaseapp.com",
    projectId: "chatgpt-clone-e290e",
    storageBucket: "chatgpt-clone-e290e.appspot.com",
    messagingSenderId: "863565536512",
    appId: "1:863565536512:web:d55c06c97dae8403c427e5"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }