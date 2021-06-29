import { useContext, useEffect } from "react";
import { auth, handleUserProfile } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { setCurrentUser } from "../../store/user/userActions";

export const AuthProvider = ({ children }) => {
  const [, dispatch] = useContext(StoreContext);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          //set provider with current user
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      } else dispatch(setCurrentUser(userAuth));
    });
  }, []);
  return <div>{children}</div>;
};
