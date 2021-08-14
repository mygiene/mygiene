import { useContext, useEffect } from "react";
import { auth } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useRouter } from "next/router";
import { AuthContext } from "../auth/auth";
import { setCurrentUser } from "../../store/user/userActions";
import { Elements } from "@stripe/react-stripe-js";
import { stripePublishableKey } from "../../stripe/config";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

const stripePromise = loadStripe(stripePublishableKey);

export const Layout = ({ children }) => {
  const {
    authState: { user, isAdmin },
  } = useContext(AuthContext);
  const [state, dispatch] = useContext(StoreContext);
  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));
    } else dispatch(setCurrentUser(null));
  }, [user]);

  return (
    <div className="layout">
      <Elements stripe={stripePromise}>
        <Header />
        {children}
        <Footer />
      </Elements>
    </div>
  );
};
