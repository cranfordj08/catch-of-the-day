import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxAuv_Rka8sGl4HIezXkV4vwn4tUvsq90",
    authDomain: "catch-of-the-day---jessica-c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day---jessica-c-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
