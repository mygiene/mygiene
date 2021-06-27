import { useEffect } from "react";
import { auth } from "../../firebase/utils";

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) return;
      console.log({ userAuth });
    });
  }, []);
  return <div>{children}</div>;
};
