// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoellwj_0S9_fxxH6y98XJM3ZqDYGgm6k",
  authDomain: "nextjs-todo-47115.firebaseapp.com",
  projectId: "nextjs-todo-47115",
  storageBucket: "nextjs-todo-47115.appspot.com",
  messagingSenderId: "411643301929",
  appId: "1:411643301929:web:908fd1887c8244e8308c38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);