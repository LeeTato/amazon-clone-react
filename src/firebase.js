// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCVscLnBCwQGSuWChNDtmaYsrEsk_4d5oI",
    authDomain: "clone-react-a34f4.firebaseapp.com",
    projectId: "clone-react-a34f4",
    storageBucket: "clone-react-a34f4.appspot.com",
    messagingSenderId: "422757603813",
    appId: "1:422757603813:web:1f69a868076a62cb61770c",
    measurementId: "G-434SVTPZSJ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };