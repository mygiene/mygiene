import axios from "axios";

function getRequestParams(email) {
  const MAIL_API_KEY = process.env.MAIL_API_KEY;
  const MAIL_LIST_ID = process.env.MAIL_LIST_ID;

  const DATACENTER = MAIL_API_KEY.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAIL_LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`key:${MAIL_API_KEY}`).toString("base64");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async function handler(req, res) {
  const { email } = req.body;
  if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }
  try {
    const { url, data, headers } = getRequestParams(email);
    const response = await axios.post(url, data, { headers });
    return res.status(200).json({ error: "null" });
  } catch (err) {
    console.log(err.response.data);

    return res.status(400).json({ error: err.response.data });
  }
}
