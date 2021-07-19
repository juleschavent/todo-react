import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB72iMLHXNe-vpEEDxiLJHhr1YuuE_btho",
    authDomain: "todo-1422f.firebaseapp.com",
    databaseURL: "https://todo-1422f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-1422f",
    storageBucket: "todo-1422f.appspot.com",
    messagingSenderId: "387424968928",
    appId: "1:387424968928:web:3fff4c178fb2d308ae3085"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;