// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWg2UcWyrTZQis1bVqQDJwLEGOlxG5ObE",
  authDomain: "foodsharing-27d66.firebaseapp.com",
  projectId: "foodsharing-27d66",
  storageBucket: "foodsharing-27d66.appspot.com",
  messagingSenderId: "208392563674",
  appId: "1:208392563674:web:f01dd96075f2a481092ee3",
  measurementId: "G-6F1FN2CXC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);