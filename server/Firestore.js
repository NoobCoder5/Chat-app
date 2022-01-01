const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
// ...
const firebaseConfig = {
  apiKey: "AIzaSyAGI2EaJb1pc-4mZMgFU6o5t2WLqhZEOR4",
  authDomain: "chat-app-fe8d3.firebaseapp.com",
  projectId: "chat-app-fe8d3",
  storageBucket: "chat-app-fe8d3.appspot.com",
  messagingSenderId: "1040538799350",
  appId: "1:1040538799350:web:e984df8c2fc6f4d08730d7",
  measurementId: "G-ZHF41SW409"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  module.exports = db