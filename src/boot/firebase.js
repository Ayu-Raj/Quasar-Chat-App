// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";


  var firebaseConfig = {
    apiKey: "AIzaSyDwPqfavDEQtuIAiMJTmxqXv12dhTbjr2w",
    authDomain: "my-project-1547972152029.firebaseapp.com",
    databaseURL: "https://my-project-1547972152029.firebaseio.com",
    projectId: "my-project-1547972152029",
    storageBucket: "my-project-1547972152029.appspot.com",
    messagingSenderId: "223058668897",
    appId: "1:223058668897:web:8e0033058b78426b156920"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth()
  let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }