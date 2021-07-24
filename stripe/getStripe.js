import { loadStripe } from "@stripe/stripe-js";
import { stripePublishableKey } from "./config";

let stripePromise = null;
export const getStripe = () => {
  if (!stripePromise) stripePromise = loadStripe(stripePublishableKey);
  return stripePromise;
};
