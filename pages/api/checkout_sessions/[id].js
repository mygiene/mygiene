import Stripe from "stripe";

const URL = process.env.NEXT_PUBLIC_URL;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const id = req.query.id;

  try {
    if (!id.startsWith("cs_")) throw Error("Incorrect Checkout session ID");

    const checkout_session = await stripe.checkout.sessions.retrieve(id);

    res.status(200).json(checkout_session);

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}
