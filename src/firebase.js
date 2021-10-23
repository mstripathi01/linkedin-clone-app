import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-4nE-ev0FrYcxLgPh5M8wVNkYhJsulQA",
    authDomain: "linkedin-clone-yt-182f7.firebaseapp.com",
    projectId: "linkedin-clone-yt-182f7",
    storageBucket: "linkedin-clone-yt-182f7.appspot.com",
    messagingSenderId: "276716855067",
    appId: "1:276716855067:web:bf36e3c9adabf5e8993dbe"
  };

  

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {auth,db}

