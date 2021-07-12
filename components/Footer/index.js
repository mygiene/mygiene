import React from "react";
import FooterWrapper from "./styles.footer";
import { useRouter } from "next/router";
import Link from "next/link";
const RemoveFooter = ["/login", "/signup", "/recovery"];

export const Footer = () => {
  if (RemoveFooter.includes(useRouter().pathname)) {
    return <></>;
  }

  return (
    <FooterWrapper>
      <div className="footer">
        <div className="footer__logo">
          <h2 style={{ fontFamily: "quam_black" }}>mygiene</h2>
          <br />
          <span>All in one grooming kit for men.</span>
        </div>
        <div className="footer__content">
          <div className="footer__content-first">
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/about-us">About</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer__content-second">
            <h3>Support</h3>
            <ul>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund">Returns & Refund</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__content-third">
          <h3>Stay up to date</h3>
          <div className="input-field">
            <input placeholder="Your email address" autoComplete="off" />
            <img
              src="/footerAssets/sent.png"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
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
        <div className="footer__bottom-right">
          <div>
            <a
              href="https://www.instagram.com/mygiene_aus/?hl=en"
              target="blank"
            >
              <img src="/footerAssets/insta.png" />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/Mygiene-101946625040573"
              target="blank"
            >
              <img src="/footerAssets/fb.png" />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
