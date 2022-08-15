import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT9MYf3LJ997LXgKOC7PnowFWXOKd7EJs",
  authDomain: "docs-react-ea586.firebaseapp.com",
  projectId: "docs-react-ea586",
  storageBucket: "docs-react-ea586.appspot.com",
  messagingSenderId: "730471511750",
  appId: "1:730471511750:web:31f96e28c3ae391d63c9c7",
  measurementId: "G-DFEVC1P9SY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const analytics = getAnalytics(app);
