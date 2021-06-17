import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA5BBFvXMN08rnAvoSmQz1LZmh5wD3H0mA",
  authDomain: "speech-therapy-app-a8452.firebaseapp.com",
  projectId: "speech-therapy-app-a8452",
  storageBucket: "speech-therapy-app-a8452.appspot.com",
  messagingSenderId: "850773612147",
  appId: "1:850773612147:web:dc3f56545ecbb6b333bc06",
  measurementId: "G-1K4NEFKZ5Q",
};
// Initialize Firebase

const fire =
  firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);
// const fire = firebase.initializeApp(firebaseConfig);

export default fire;
