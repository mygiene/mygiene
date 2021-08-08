import mailchimp from "@mailchimp/mailchimp_transactional";

const mailInstance = mailchimp(process.env.MANDRILL_API_KEY);

export default async function handler(req, res) {
  const { name, email, message, subject } = req.body;
  const mailMessage = {
    from_email: email,
    subject,
    text: message,
    to: [
      {
        email: "freddie@example.com",
        type: "to",
      },
    ],
  };
  const response = await mailInstance.messages.send({
    message: mailMessage,
  });
  console.log(response);
}
