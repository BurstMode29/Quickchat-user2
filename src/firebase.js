// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK1iG9QHifHqi2ip5vC1r-p77rQT66Ue8",
  authDomain: "chat-app-86662.firebaseapp.com",
  projectId: "chat-app-86662",
  storageBucket: "chat-app-86662.appspot.com",
  messagingSenderId: "454276748930",
  appId: "1:454276748930:web:086a5e383f6dd22027869b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);