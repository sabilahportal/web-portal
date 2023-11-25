// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBzUAf2u5q4-m47SqpZF0gQjb-IWwaFPo',
  authDomain: 'sabilah-portal.firebaseapp.com',
  projectId: 'sabilah-portal',
  storageBucket: 'sabilah-portal.appspot.com',
  messagingSenderId: '432295115798',
  appId: '1:432295115798:web:99059fcb06c64a97014937'
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
