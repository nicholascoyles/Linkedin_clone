import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQQpII8tG489XLXA8pfuGd0yGIamhnBO4",
    authDomain: "linkedin-clone-portfolio.firebaseapp.com",
    projectId: "linkedin-clone-portfolio",
    storageBucket: "linkedin-clone-portfolio.appspot.com",
    messagingSenderId: "887249852938",
    appId: "1:887249852938:web:573eb57568796d6db35df3",
    measurementId: "G-1RGKN7MVQH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };