import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5A7kNDg6Q6nw4obLNoyoe6Bp9X6Wzhd0",
  authDomain: "react-insta-clone-fe552.firebaseapp.com",
  databaseURL: "https://react-insta-clone-fe552.firebaseio.com",
  projectId: "react-insta-clone-fe552",
  storageBucket: "react-insta-clone-fe552.appspot.com",
  messagingSenderId: "230118795890",
  appId: "1:230118795890:web:db693823703c8a9b5230eb",
  measurementId: "G-7VG5PJC3CY"
});
const db=firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


  export  {db , auth , storage};