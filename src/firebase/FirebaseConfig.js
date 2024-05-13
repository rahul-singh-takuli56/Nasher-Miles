// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDpW1OhfwauJkpD2_jkbKbH2PJFO_lqpv4",
    authDomain: "nasher-miles-3e9b7.firebaseapp.com",
    projectId: "nasher-miles-3e9b7",
    storageBucket: "nasher-miles-3e9b7.appspot.com",
    messagingSenderId: "48506068026",
    appId: "1:48506068026:web:5dfea2f7ca06e738316903",
    measurementId: "G-CDGW1JN657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
