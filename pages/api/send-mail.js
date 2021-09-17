// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    const msg = {
      from: "batrasudhanshu09@gmail.com", // Change to your recipient
      to: "rmaini.10@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return res.status(200).json({ error: "null" });
      })
      .catch((error) => {
        console.error({ error: error.response.body.errors });
        return res.status(403).json({ error: "true" });
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.response.data });
  }
}
