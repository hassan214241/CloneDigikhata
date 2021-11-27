import firebaseApp from "firebase/app";
import firebase from "firebase";

// import * as firebase from ‘firebase’
// import “firebase/auth”;
// import “firebase/firestore”
// import firestore from 'firebase/firestore';
// import auth from 'firebase/auth';
import functions from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAoJM6VqnuTc93rhpA4cQAZRQKVGHbUhs8",
  authDomain: "digikhata-4dd08.firebaseapp.com",
  projectId: "digikhata-4dd08",
  storageBucket: "digikhata-4dd08.appspot.com",
  messagingSenderId: "10353909847",
  appId: "1:10353909847:web:47b9d6415ea6dc6bcf8312",
  measurementId: "G-G052K6CYS1",
};

firebaseApp.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
const functio = firebase.functions();

firestore.useEmulator("localhost", 8080);
auth.useEmulator("http://localhost:9099");
functio.useEmulator("localhost", 5001);
