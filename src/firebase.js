import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_vosdCZRBpLesqzSlz0aM1bkjuo8YeLw",
  authDomain: "chat-app-a3887.firebaseapp.com",
  projectId: "chat-app-a3887",
  storageBucket: "chat-app-a3887.appspot.com",
  messagingSenderId: "770807261849",
  appId: "1:770807261849:web:02ee8b626edde0d45f6608",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
