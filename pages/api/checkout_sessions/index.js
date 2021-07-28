import Stripe from "stripe";

const URL = process.env.NEXT_PUBLIC_URL;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["AU"],
        },
        shipping_rates: req?.body?.shippingRate || [],
        line_items: req?.body?.items ?? [],
        success_url: `${URL}/success?session_id={CHECKOUT_SESSION_ID}`,
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
