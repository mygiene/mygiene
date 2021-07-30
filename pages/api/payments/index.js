import Stripe from "stripe";

const URL = process.env.NEXT_PUBLIC_URL;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { amount, shipping } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        shipping,
        amount,
        currency: "aud",
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
