// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaOt_6hrPlJQNBdikapnWPKW3XjxVQm4k",
  authDomain: "netflixgpt-43bbf.firebaseapp.com",
  projectId: "netflixgpt-43bbf",
  storageBucket: "netflixgpt-43bbf.firebasestorage.app",
  messagingSenderId: "1080937039400",
  appId: "1:1080937039400:web:84f360827d9be915b8d71d",
  measurementId: "G-088R6CRQ29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();