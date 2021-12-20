const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
// ...
const firebaseConfig = {
  apiKey: "AIzaSyB8_ajPc0TWkveWqwjD1YF2HMKLM_NgQsg",
  authDomain: "instagram-clone-d117c.firebaseapp.com",
  projectId: "instagram-clone-d117c",
  storageBucket: "instagram-clone-d117c.appspot.com",
  messagingSenderId: "413989621923",
  appId: "1:413989621923:web:de751959eef0de70562f16",
  measurementId: "G-XSFQQFB163"
}; 
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  module.exports = db