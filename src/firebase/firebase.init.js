// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-_rdEtMeVpKZtlEio7SYou58cjfXh9bo",
  authDomain: "coffee-store-12211.firebaseapp.com",
  projectId: "coffee-store-12211",
  storageBucket: "coffee-store-12211.firebasestorage.app",
  messagingSenderId: "337423713897",
  appId: "1:337423713897:web:9c5a8b1047b41c9cdc44f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);