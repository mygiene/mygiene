import React, { useState } from "react";
import FooterWrapper from "./styles.footer";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
const RemoveFooter = ["/login", "/signup", "/recovery", "/404"];
import Image from "next/image";
export const Footer = () => {
  if (RemoveFooter.includes(useRouter().pathname)) {
    return <></>;
  }
  const [email, setemail] = useState("");
  const [error, seterror] = useState();
  const [loading, setloading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post("/api/newsletter", { email });
      seterror(null);
      setemail("");
      setloading(false);
      toast.info(
        "Thank you for reaching out to us, you have subscribed to our news letter."
      );
    } catch (e) {
      setloading(false);
      if (e.response.data.error.title === "Member Exists") {
        seterror("You have already subscribed to our New Letter.");
      } else seterror("Oops, something went wrong! Try again later. ");
    }
  }

  return (
    <FooterWrapper>
      <div className="footer">
        <div className="footer__logo">
          <Link href="/">
            <a href="/">
              <h2>mygiene</h2>
            </a>
          </Link>

          <span>All in one grooming kit for men.</span>
          <div className="footer__social__icons">
            <div>
              <a
                href="https://www.instagram.com/mygiene_aus/?hl=en"
                target="blank"
              >
                <Image
                  src="/footerAssets/insta.png"
                  alt="https://www.instagram.com/mygiene_aus/?hl=en"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/Mygiene-101946625040573"
                target="blank"
              >
                <Image
                  src="/footerAssets/fb.png"
                  alt="https://www.facebook.com/Mygiene-101946625040573"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__content">
          <div className="footer__content-first">
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/about-us">
                  <a href="/about-us">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <a href="/contact-us">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content-second">
            <h3>Support</h3>
            <ul>
              <li>
                <Link href="/terms">
                  <a href="/terms">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/refund">
                  <a href="/refund">Returns & Refund</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a href="/privacy">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__content-third">
          <form onSubmit={handleSubmit}>
            <h3>Stay up to date</h3>
            <div className="input-field">
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Your email address"
                autoComplete="off"
              />
              <button type="submit">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
            <p style={{ color: "rgb(255,100,0)" }}>
              {!loading && !!error && error}
            </p>
          </form>
        </div>
      </div>
      <div
        className="footer__bottom"
        style={{ backgroundColor: "black", height: "3rem" }}
      >
        <div className="footer__bottom-left">
          <span style={{ color: "white" }}>
            &copy; 2021 mygeine Inc. All rights reserved
          </span>
        </div>
      </div>
    </FooterWrapper>
  );
};
