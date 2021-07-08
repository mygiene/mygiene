import { useState } from "react";
import Banner from "../components/BaseComponent/Banner";
import { FaIcon } from "../components/BaseComponent/FaIcon";
import { MetaHead } from "../components/Meta-Head.jsx";
import StyledWrapper from "../styles/styles.contact";

const contactQuote =
  "Please fill up the form below to get in touch and one of our friendly team members will get back to you asap";

const initialState = { name: "", email: "", subject: "", message: "" };

const Page = () => {
  const [form, setform] = useState(initialState);

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  const { name, email, subject, message } = form;
  return (
    <>
      <MetaHead title="Contact Us" />
      <StyledWrapper>
        <Banner
          img="/contactAssets/contact-banner.jpg"
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
                <a href="">
                  <FaIcon className="fa-envelope" />
                </a>
              </div>
              <div>
                <a href="">
                  <FaIcon className="fa-instagram" />
                </a>
              </div>
              <div>
                <a href="">
                  <FaIcon className="fa-facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="name-email">
                <div className="input-fields">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleFieldChange}
                    placeholder="Full Name"
                  />
                </div>
                <div className="input-fields">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleFieldChange}
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="subject-field">
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={handleFieldChange}
                  placeholder="Subject"
                />
              </div>
              <div className="textarea-field">
                <textarea
                  placeholder="How can we help you?"
                  value={message}
                  onChange={handleFieldChange}
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-bg">
            <img src="/contactAssets/form-illustration.png" alt="" />
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

export default Page;
