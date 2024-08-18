// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnl16IK9L0djSlzXafB-GSMymTTPPIA5E",
  authDomain: "vite-contact-51acc.firebaseapp.com",
  projectId: "vite-contact-51acc",
  storageBucket: "vite-contact-51acc.appspot.com",
  messagingSenderId: "371600630219",
  appId: "1:371600630219:web:dfa7e86ee1aba2dc78d64e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);