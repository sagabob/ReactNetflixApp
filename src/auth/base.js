import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCWb8fqyDDQekk2Bo8XixIsx7p0l2NFbkM",
  authDomain: "saga-netflix.firebaseapp.com",
  databaseURL: "https://saga-netflix.firebaseio.com",
  projectId: "saga-netflix",
  storageBucket: "saga-netflix.appspot.com",
  messagingSenderId: "565535460582",
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;
