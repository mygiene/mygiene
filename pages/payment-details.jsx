import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { AuthContext } from "../components/auth/auth.js";
import { MetaHead } from "../components/Meta-Head.jsx";
import { PaymentDetails } from "../components/payment-details/index.jsx";
import { stripePublishableKey } from "../stripe/config.js";

const URL = process.env.NEXT_PUBLIC_URL;

const stripePromise = loadStripe(stripePublishableKey);

const Page = () => {
  const { authState } = useContext(AuthContext);
  const user = authState.user || null;
  if (user)
    return (
      <>
        <MetaHead title="Orders" />
        <Elements stripe={stripePromise}>
          <PaymentDetails />
        </Elements>
      </>
    );
  else {
    window.location = `${URL}/login`;
  }
};

export default Page;
