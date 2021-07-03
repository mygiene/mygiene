import { useContext, useEffect } from "react";
import { auth } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useRouter } from "next/router";
import { AuthContext } from "../auth/auth";
import { setCurrentUser } from "../../store/user/userActions";

export const Layout = ({ children }) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [state, dispatch] = useContext(StoreContext);
  useEffect(() => {
    // const { user } = authState;
    if (user) {
      dispatch(setCurrentUser(user));
    }
  }, [user]);

  // console.log({ state });
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
