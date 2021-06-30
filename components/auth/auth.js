import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { auth, handleUserProfile } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { setCurrentUser, userTypes } from "../../store/user/userActions";

export const AuthProvider = ({ children }) => {
  const [, dispatch] = useContext(StoreContext);

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
          dispatch(currentUsr);
          toast.success(`Hi ${snapshot.data().displayName}, Welcome Back 🙂`);
        });
      } else dispatch(setCurrentUser(userAuth));
    });
  }, []);

  return <div>{children}</div>;
};
