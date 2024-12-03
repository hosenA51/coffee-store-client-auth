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



/**
 * 1. firebase-tools (one time)
 * 2. firebase login (one time)
 * 3. one time for each projects: firebase init
 * 4. what you want to do: select hosting
 * 5. select a project (already have one created in firebase console)
 * 6. what will be your public -------- dist
 * 7. single page? y
 * ----------------------
 * ##### EACH time you want to deploy ######
 * 8. npm run build
 * 9. firebase deploy
 */