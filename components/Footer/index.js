import React from "react";
import FooterWrapper from "./styles.footer";
import { useRouter } from "next/router";
import Link from "next/link";
const RemoveFooter = ["/login", "/signup", "/recovery", "/404"];

export const Footer = () => {
  if (RemoveFooter.includes(useRouter().pathname)) {
    return <></>;
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
                <img
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
                <img
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
          <h3>Stay up to date</h3>
          <div className="input-field">
            <input placeholder="Your email address" autoComplete="off" />
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
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
      </div>
    </FooterWrapper>
  );
};
