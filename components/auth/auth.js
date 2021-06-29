import { useContext, useEffect } from "react";
import { auth, handleUserProfile } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { setCurrentUser, userTypes } from "../../store/user/userActions";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useContext(StoreContext);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          //set provider with current user
          const currentUsr = setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          console.log();
          dispatch({ type: userTypes.SET_CURRENT_USER, payload: "payload" });
        });
      }
      // else dispatch(setCurrentUser(userAuth));
    });
  }, []);
  return <div>{children}</div>;
};
