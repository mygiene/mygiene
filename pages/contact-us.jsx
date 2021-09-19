import { useState } from "react";
import Banner from "../components/BaseComponent/Banner";
import { FaIcon } from "../components/BaseComponent/FaIcon";
import { MetaHead } from "../components/Meta-Head.js";
import StyledWrapper from "../styles/styles.contact";
import axios from "axios";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const contactQuote =
  "Please fill up the form below to get in touch and one of our friendly team members will get back to you asap";

const initialState = { name: "", email: "", subject: "", message: "" };

const Page = () => {
  const [form, setform] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, subject } = form;
    // try {
    //   await axios.post("/api/transactional-email", {
    //     name,
    //     email,
    //     subject,
    //     message,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    let templateParams = {
      from_name: name,
      to_name: "mygiene",
      subject_html: subject,
      message_html: message,
      reply_to: email,
    };

    emailjs
      .send(
        "service_9xqton3",
        "template_u8f3khr",
        templateParams,
        "user_Opy8NZFO39PC74O0yvTdC"
      )
      .then(
        () => {
          toast("Mail sent successfully.");
          setform(initialState);
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  const { name, email, subject, message } = form;

  return (
    <>
      <MetaHead title="Contact Us" url="/contact-us" />
      <StyledWrapper>
        <Banner
          Image="/contactAssets/Contact_us_banner_replacement.jpg"
          title="Contact Us"
          quote={contactQuote}
        />
        <div className="contact-outer">
          <div className="contact-intro">
            <div className="head">
              <div className="line"></div>
              <div>CONTACT US</div>
            </div>
            <div className="highlight">GET IN TOUCH TODAY</div>
            <div className="social-icons">
              <div>
                <a
                  href="mailto: hello@mygiene.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcon className="fa-envelope" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/mygiene_aus/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcon className="fa-instagram" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/Mygiene-101946625040573"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcon className="fa-facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="name-email">
                <div className="input-fields">
                  <input
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleFieldChange}
                    placeholder="Full Name"
                    autoComplete="off"
                  />
                </div>
                <div className="input-fields">
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="off"
                    onChange={handleFieldChange}
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="subject-field">
                <input
                  required
                  type="text"
                  name="subject"
                  value={subject}
                  autoComplete="off"
                  onChange={handleFieldChange}
                  placeholder="Subject"
                />
              </div>
              <div className="textarea-field">
                <textarea
                  required
                  placeholder="How can we help you?"
                  value={message}
                  name="message"
                  onChange={handleFieldChange}
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-bg">
            <img src="/contactAssets/form-illustration.png" alt="contact" />
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

export default Page;
