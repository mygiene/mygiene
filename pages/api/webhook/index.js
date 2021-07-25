import Stripe from "stripe";
import { buffer } from "micro";

const URL = process.env.NEXT_PUBLIC_URL;

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ||
    "sk_test_51JFYTaSHrHmkkXVvN5j0psPEjN8e1lrqZisfRIN869rgQlAykySlxGokXKTWVKYtsl2ntDaASmZViSx2qCgyrtKr00Zk4c9C3j"
);

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
        process.env.STRIPE_WEBHOOK_SECRET ||
          "whsec_2VbbQolHHpONx9B392isfsGqdQUztTHs"
      );
    } catch (error) {
      res.status(400).json({ status: 400, message: error.message });
    }

    // SUCCESSFULLY CONSTRUCTED EVENT
    console.log("Success:", event.id);

    //handle event type and add business logic
    if (event.type === "checkout.session.completed") {
      console.log("Payment Recieved");
    } else {
      console.warn(`Unhandled event type, ${event.type}`);
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
