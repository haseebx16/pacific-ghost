import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCm-K8f_lePQVc3pBCsXpyYVGS6j8eJ9Lc",
    authDomain: "coastal-ghostwriting.firebaseapp.com",
    projectId: "coastal-ghostwriting",
    storageBucket: "coastal-ghostwriting.firebasestorage.app",
    messagingSenderId: "617118431895",
    appId: "1:617118431895:web:3ffc19ded4f0d8a7bf47d2"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };