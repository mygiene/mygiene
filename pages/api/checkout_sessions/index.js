import Stripe from "stripe";

const URL = process.env.NEXT_PUBLIC_URL;

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ||
    "sk_test_51JFYTaSHrHmkkXVvN5j0psPEjN8e1lrqZisfRIN869rgQlAykySlxGokXKTWVKYtsl2ntDaASmZViSx2qCgyrtKr00Zk4c9C3j"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req?.body?.items ?? [],
        success_url: `${URL}/home?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${URL}/cart`,
      });

      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
