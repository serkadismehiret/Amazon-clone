// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIRqb9fgTORw_0PwIcfyKzY3vDGZSs4NU",
  authDomain: "clone-38313.firebaseapp.com",
  projectId: "clone-38313",
  storageBucket: "clone-38313.appspot.com",
  messagingSenderId: "1096580341767",
  appId: "1:1096580341767:web:9acd5dc467b4de67a74aa2",
  measurementId: "G-CBKD7Q49MH"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };