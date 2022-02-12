import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDojmhsiaoYaYjKYaiDWtMn63npxLb5Dmw",
  authDomain: "crwn-db-52198.firebaseapp.com",
  projectId: "crwn-db-52198",
  storageBucket: "crwn-db-52198.appspot.com",
  messagingSenderId: "708264596096",
  appId: "1:708264596096:web:62a47aca27252e176acc65",
  measurementId: "G-TM7FBG1K7J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
