// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIP8z_tJgJO65eJqdGT6KBoRCGEd-nlDg",
  authDomain: "base-apparel-landing-page.firebaseapp.com",
  projectId: "base-apparel-landing-page",
  storageBucket: "base-apparel-landing-page.appspot.com",
  messagingSenderId: "158990146332",
  appId: "1:158990146332:web:bc6ce26a2046e5f5c478d9",
  measurementId: "G-X5HTM37MHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);