import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC6HH5Nx1_1bPZAH_N7kDbD-_hz6YZ1Dp8",
  authDomain: "newe-lawyer.firebaseapp.com",
  databaseURL: "https://newe-lawyer-default-rtdb.firebaseio.com",
  projectId: "newe-lawyer",
  storageBucket: "newe-lawyer.appspot.com",
  messagingSenderId: "763394332595",
  appId: "1:763394332595:web:34432b69292a25ccd29dc6"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage(); //to store images
// const storageRef = ref(storage);

export {db,auth, provider };

