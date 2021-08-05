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
      currency: "usd",
      country: "US",
      requestPayerName: true,
      requestPayerEmail: true,
      total: {
        label: "Billing Total",
        amount: 1999,
        // amount: Math.ceil(+cartTotal * 100),
      },
      //   requestShipping: true,
      // displayItems: [
      //   {
      //     label: "Grooming Kit",
      //     amount: Math.ceil(Number(cartItems?.cartSubTotal) * 100),
      //   },
      //   {
      //     label: "Shipping Charges",
      //     amount: Math.ceil(10 * 100),
      //   },
      // ],
    });
    pr.canMakePayment().then((result) => {
      if (result) {
        setpaymentrequest(pr);
        // pr.show();
      }
    });

    pr.on("paymentmethod", async (e) => {
      await axios
        .post("/api/payments", {
          amount: Math.ceil(total * 100),
          shipping: {
            name: recipientName,
            address: { ...shippingAddress },
          },
        })
        .then(({ data: clientSecret }) => {
          stripe
            .createPaymentMethod({
              type: "card",
              currency: "usd",
              // billing_details: {
              //   name: nameOnCard,
              //   address: { ...billingAddress },
              // },
            })
            .then(async ({ paymentMethod }) => {
              const { error, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret,
                {
                  payment_method: paymentMethod.id,
                },
                { handleActions: false }
              );
              if (error) {
                e.complete("fail");
              }
              e.complete("success");
              if (paymentIntent.status == "requires_action") {
                stripe.confirmCardPayment(clientSecret);
              }
            });
        });
    });
  }, [stripe, elements]);

  console.log({ paymentrequest });

  return (
    <div>
      <h2>Apple-Pay</h2>
      {paymentrequest && (
        <PaymentRequestButtonElement options={{ paymentrequest }} />
      )}
    </div>
  );
};
