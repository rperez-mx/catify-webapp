// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr5mRX0r33ciB7qTU8pNiKbdrNtjqfbMc",
  authDomain: "mishigram.firebaseapp.com",
  projectId: "mishigram",
  storageBucket: "mishigram.appspot.com",
  messagingSenderId: "299676268255",
  appId: "1:299676268255:web:d4733415b66376e674db6a",
  measurementId: "G-B7G3X4MS0K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);