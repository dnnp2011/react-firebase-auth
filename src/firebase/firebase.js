import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC6kz9VPDc1FBC7NFbV5NfYOPb5FhmGGec",
    authDomain: "react-firebase-auth-3ec18.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-3ec18.firebaseio.com",
    projectId: "react-firebase-auth-3ec18",
    storageBucket: "react-firebase-auth-3ec18.appspot.com",
    messagingSenderId: "239506491905"
  };
  if (!firebase.apps.length)
    firebase.initializeApp(config);

    const db = firebase.database();
    const auth = firebase.auth();

    export {
      db,
      auth,
    };
