import firebase from 'firebase/app'
import  "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDlb2oTx6MeNxcHC2iKFIOdlDKxOA-vGEI",
    authDomain: "auth-development-20dcb.firebaseapp.com",
    projectId: "auth-development-20dcb",
    storageBucket: "auth-development-20dcb.appspot.com",
    messagingSenderId: "565905590620",
    appId: "1:565905590620:web:bef519e4e7bbd2568d5999",
    measurementId: "G-2852EB3DM7"
  };
const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth();
export default  app;