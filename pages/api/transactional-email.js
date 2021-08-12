import mailchimp from "@mailchimp/mailchimp_transactional";

const mailInstance = mailchimp(process.env.MANDRILL_API_KEY);

export default async function handler(req, res) {
  const { name, email, message, subject } = req.body;
  const mailMessage = {
    from_email: "hello@mygiene.com.au",
    subject,
    text: message,
    to: [
      {
        email: "rakshitmaini@gmail.com",
        type: "to",
      },
    ],
  };
  try {
    const response = await mailInstance.messages.send({
      message: mailMessage,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
