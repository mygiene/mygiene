import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "./config";
// Initialize Firebase

export const fixedByTwoDecimal = (val) => Number(val).toFixed(2);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();
// GoogleProvider.setCustomParameters({ prompt: "select_amount" });
export const signInWithGoogle = () =>
  auth
    .signInWithPopup(GoogleProvider)
    .then((res) => res.user)
    .catch((err) => err);

export const signInWithFacebook = () => {
  FacebookProvider.addScope("email");
  return auth
    .signInWithPopup(FacebookProvider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => err);
};

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    console.log({ userAuth });
    const { displayName, email } = userAuth;
    const timeStamp = new Date();
    const authRoles = ["user"];

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: timeStamp,
        authRoles,
        ...additionalData,
      });
    } catch (error) {}
  }
  return userRef;
};

export default firebase;
