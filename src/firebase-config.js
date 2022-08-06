// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQwui_hEI9rhtHFA2aEbsdcM-OOA4KVsc",
  authDomain: "products-28a49.firebaseapp.com",
  projectId: "products-28a49",
  storageBucket: "products-28a49.appspot.com",
  messagingSenderId: "680497243777",
  appId: "1:680497243777:web:ee2557bd4a69b9fb5ecf80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);