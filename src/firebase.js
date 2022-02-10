import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAcQ-AjT7g4W8BiC7iO2fMWk2pGP5Vq2yw",
    authDomain: "authentication-9df64.firebaseapp.com",
    projectId: "authentication-9df64",
    storageBucket: "authentication-9df64.appspot.com",
    messagingSenderId: "829747400347",
    appId: "1:829747400347:web:57e0fcf06912b1e371803e"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
