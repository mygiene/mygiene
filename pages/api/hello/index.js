export default function handler(req, res) {
  res.send({ key: process.env.STRIPE_SECRET_KEY });
}
