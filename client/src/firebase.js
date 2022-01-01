import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGI2EaJb1pc-4mZMgFU6o5t2WLqhZEOR4",
  authDomain: "chat-app-fe8d3.firebaseapp.com",
  projectId: "chat-app-fe8d3",
  storageBucket: "chat-app-fe8d3.appspot.com",
  messagingSenderId: "1040538799350",
  appId: "1:1040538799350:web:e984df8c2fc6f4d08730d7",
  measurementId: "G-ZHF41SW409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);