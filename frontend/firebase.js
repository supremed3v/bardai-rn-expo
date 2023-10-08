// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpajk9WTpZ9TbxA68pOZrXnVqAuY_Ml2k",
  authDomain: "bard-ai-6c00d.firebaseapp.com",
  projectId: "bard-ai-6c00d",
  storageBucket: "bard-ai-6c00d.appspot.com",
  messagingSenderId: "63887247155",
  appId: "1:63887247155:web:ab219251fb14fa36886046",
  measurementId: "G-W6L625SMSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
