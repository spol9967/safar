import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCa2YiQlw5aPSM_LnrfkXXDt3NDB0EOQeI",
    authDomain: "safar-b944d.firebaseapp.com",
    databaseURL: "https://safar-b944d.firebaseio.com",
    projectId: "safar-b944d",
    storageBucket: "safar-b944d.appspot.com",
    messagingSenderId: "411495494357",
    appId: "1:411495494357:web:1902da46f123b257bfe85c",
    measurementId: "G-V7272QHLES"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore();

  export default firebase