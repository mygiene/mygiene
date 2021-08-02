import {
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { fixedByTwoDecimal } from "../../firebase/utils";

export const ApplePay = ({ cartItems, cartTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentrequest, setpaymentrequest] = useState();

  useEffect(() => {
    if (!stripe || !elements || !cartItems?.cartSubTotal || !cartTotal) return;

    const pr = stripe.paymentRequest({
      country: "AU",
      currency: "aud",
      //   requestShipping: true,
      displayItems: [
        {
          label: "Grooming Kit",
          amount: Math.ceil(Number(cartItems?.cartSubTotal) * 100),
        },
        {
          label: "Shipping Charges",
          amount: Math.ceil(10 * 100),
        },
      ],
      total: {
        label: "Billing Total",
        amount: Math.ceil(+cartTotal * 100),
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) setpaymentrequest(pr);
    });
  }, [stripe, elements]);

  console.log({ paymentrequest, cartTotal, cartItems });

  return (
    <div>
      <h2>Apple-Pay</h2>
      {paymentrequest && (
        <PaymentRequestButtonElement options={{ paymentrequest }} />
      )}
    </div>
  );
};
