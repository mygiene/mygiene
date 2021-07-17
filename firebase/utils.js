import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./config";

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
// GoogleProvider.setCustomParameters({ prompt: "select_amount" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timeStamp = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: timeStamp,
        ...additionalData,
      });
    } catch (error) {}
  }
  return userRef;
};
