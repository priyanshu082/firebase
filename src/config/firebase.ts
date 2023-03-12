// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7DXjfjvqTPec0JvLyxg6ipEdviwTrHgU",
  authDomain: "fir-f4fe1.firebaseapp.com",
  projectId: "fir-f4fe1",
  storageBucket: "fir-f4fe1.appspot.com",
  messagingSenderId: "333295443001",
  appId: "1:333295443001:web:2e8ea0d20b24ef561bc1e8",
  measurementId: "G-FJY21QX4PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)
export const provider= new GoogleAuthProvider()