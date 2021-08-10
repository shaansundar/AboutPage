import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = require('./credentials.json');

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

// Firebase product objects
export var db = firebase.firestore();