import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyDvOKsf8bhmsf8bevaZCkcEwXTy7IyQT0I",
    authDomain: "coder-60030.firebaseapp.com",
    projectId: "coder-60030",
    storageBucket: "coder-60030.appspot.com",
    messagingSenderId: "933459828675",
    appId: "1:933459828675:web:8e51caf653798b4e0e6776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();