export default function handler(req, res) {
  res.send({ key: process.env.STRIPE_WEBHOOK_SECRET });
}
