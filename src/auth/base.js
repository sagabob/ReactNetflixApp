import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB7EQYJ2q63g4_HlXGdpqaUaMT9w7Xrng4",
  authDomain: "saga-auth-5deba.firebaseapp.com",
  databaseURL: "https://saga-auth-5deba.firebaseio.com",
  projectId: "saga-auth-5deba",
  storageBucket: "saga-auth-5deba.appspot.com",
  messagingSenderId: "383765389677",
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;
