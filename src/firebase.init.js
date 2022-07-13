// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAirYNa1L_slaG_pLf3m1Jq55GWBddkZVg",
  authDomain: "ema-john-simple-59-f4055.firebaseapp.com",
  projectId: "ema-john-simple-59-f4055",
  storageBucket: "ema-john-simple-59-f4055.appspot.com",
  messagingSenderId: "112802401591",
  appId: "1:112802401591:web:6e0767d2397dfc5d4b9eb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;