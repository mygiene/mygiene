import mailchimp from "@mailchimp/mailchimp_transactional";

const mailInstance = mailchimp("lGvJjdECFLP59hrfQfuijw");

export default async function handler(req, res) {
  const { name, email, message, subject } = req.body;
  console.log("api started");
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
    // const response = await mailInstance.users.ping();
    // console.log(response);
    const response = await mailInstance.messages.send({
      message: mailMessage,
    });
    console.log({ response });
  } catch (error) {
    console.log({ error });
    res.send(error);
  }
}
