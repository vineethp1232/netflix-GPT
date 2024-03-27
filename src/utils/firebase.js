// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTo-ZLxp_4w24sTWH7_0AAOZuxMfrNteQ",
  authDomain: "netflixgpt-f7891.firebaseapp.com",
  projectId: "netflixgpt-f7891",
  storageBucket: "netflixgpt-f7891.appspot.com",
  messagingSenderId: "406865044925",
  appId: "1:406865044925:web:4354a0bf3e7aeef9aeded4",
  measurementId: "G-7N9X197F95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();