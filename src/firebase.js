// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuHYqkd8FoR4dbs-pq98CFATi276TJf34",
  authDomain: "challenge-e7a2f.firebaseapp.com",
  projectId: "challenge-e7a2f",
  storageBucket: "challenge-e7a2f.appspot.com",
  messagingSenderId: "502360814696",
  appId: "1:502360814696:web:4ad234cfa82ab850b937dd",
  measurementId: "G-3JRZSV8QB0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
