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

// const stripePromise = loadStripe(stripePublishableKey);
// const stripePromise = loadStripe(
//   "pk_test_51JHMy7EDTtTQNBA8nr8L1zzxD13kJ9lcSvgUuOVwe5JEQZn932Bewfl5brM8v1jxW7GEGPYkhPVioyZCMuod6uaQ00kitsoJbr"
// );

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
      {/* <Elements stripe={stripePromise}> */}
      <Header />
      {children}
      <Footer />
      {/* </Elements> */}
    </div>
  );
};
