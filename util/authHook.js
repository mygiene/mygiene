import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/auth/auth";
import { auth, handleUserProfile } from "../firebase/utils";

export const useFirebaseAuthentication = () => {
  const { authState: state, authDispatcher } = useContext(AuthContext);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          //set provider with current user
          console.log(snapshot.data());
          const currentUsr = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          // setAuthState({ user: currentUsr, pending: false });
          authDispatcher({
            type: userTypes.setCurrentUser,
            payload: currentUsr,
          });
          authDispatcher({ type: "PENDING", payload: false });

          toast.success(`Hi ${snapshot.data().displayName}, Welcome Back 🙂`);
        });
      } else {
        // setAuthState({ user: userAuth, pending: false });
        authDispatcher({ type: userTypes.setCurrentUser, payload: userAuth });
        authDispatcher({ type: "PENDING", payload: false });
      }
    });
    return () => {
      unlisten();
    };
  }, []);
  return state;
};
