import Stripe from "stripe";
import { buffer } from "micro";
import { firestore } from "../../../firebase/utils";

const URL = process.env.NEXT_PUBLIC_URL;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    let event;
    try {
      const rawBody = await buffer(req);
      const signature = req.headers["stripe-signature"];

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (error) {
      res.status(400).json({ status: 400, message: error.message });
    }

    // SUCCESSFULLY CONSTRUCTED EVENT
    // console.log("Success value:", event);

    //handle event type and add business logic
    if (event?.type === "checkout.session.completed") {
      // console.log("Payment Recieved", event);
      // firestore.doc(`orders/`)
    } else {
      console.warn(`Unhandled event type, ${event?.type}`);
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
