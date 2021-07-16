import React from "react";
import Banner from "../BaseComponent/Banner";
import Navigation from "../BaseComponent/Navigation";
import PrivacyWrapper from "./style.privacy";

const PrivacyPolicy = () => {
  return (
    <>
      <PrivacyWrapper>
        <Banner Image="/banner_1.jpg" title="Privacy Policy" />
        <div className="container">
          <Navigation />
          <div className="content__right">
            <h3>Mygiene Privacy Policy</h3>
            <p>
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit or make a purchase from
              <a href="/">www.mygiene.com.au</a>.
            </p>
            <h4>PERSONAL INFORMATION WE COLLECT</h4>
            <p>
              When you visit the Site, we automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the
              Site, we collect information about the individual web pages or
              products that you view, what websites or search terms referred you
              to the Site, and information about how you interact with the Site.
              We refer to this automatically-collected information as “Device
              Information.”
            </p>
            <span>
              We collect Device Information using the following technologies:
            </span>
            <ul>
              <li>
                “Cookies” are data files that are placed on your device or
                computer and often include an anonymous unique identifier. For
                more information about cookies, and how to disable cookies,
                visit{" "}
                <a href="http://www.allaboutcookies.org" target="blank">
                  http://www.allaboutcookies.org
                </a>
                .
              </li>
              <li>
                “Log files” track actions occurring on the Site, and collect
                data including your IP address, browser type, Internet service
                provider, referring/exit pages, and date/time stamps.
              </li>
              <li>
                “Web beacons,” “tags,” and “pixels” are electronic files used to
                record information about how you browse the Site.
              </li>
            </ul>
            <p>
              Additionally when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information from
              you, including your name, billing address, shipping address,
              payment information (including credit card numbers email address,
              and phone number. We refer to this information as “Order
              Information.”
            </p>
            <h4>HOW DO WE USE YOUR PERSONAL INFORMATION?</h4>
            <p>
              We use the Order Information that we collect generally to fulfill
              any orders placed through the Site (including processing your
              payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations). Additionally, we use
              this Order Information to:
            </p>
            <ul>
              <li>
                Communicate with you Screen our orders for potential risk or
                fraud.
              </li>
              <li>
                When in line with the preferences you have shared with us,
                provide you with information or advertising relating to our
                products or services.
              </li>
              <li>
                We use the Device Information that we collect to help us screen
                for potential risk and fraud (in particular, your IP address),
                and more generally to improve and optimize our Site (for
                example, by generating analytics about how our customers browse
                and interact with the Site, and to assess the success of our
                marketing and advertising campaigns).
              </li>
              <li>
                We share your Personal Information with third parties to help us
                use your Personal Information, as described above. We also use
                Google Analytics to help us understand how our customers use the
                site you can read more about how Google uses your Personal
                Information here:
                <a href="https://www.google.com/intl/en/policies/privacy/">
                  https://www.google.com/intl/en/policies/privacy/
                </a>
                . <br />
                You can also opt-out of Google Analytics here:
                <a href="https://tools.google.com/dlpage/gaoptout">
                  https://tools.google.com/dlpage/gaoptout
                </a>
                .
              </li>
              <li>
                Finally, we may also share your Personal Information to comply
                with applicable laws and regulations, to respond to a subpoena,
                search warrant or other lawful request for information we
                receive, or to otherwise protect our rights.
              </li>
            </ul>
            <h4>BEHAVIOURAL ADVERTISING</h4>
            <p>
              As described above, we use your Personal Information to provide
              you with targeted advertisements or marketing communications we
              believe may be of interest to you. For more information about how
              targeted advertising works, you can visit the Network Advertising
              Initiative’s (“NAI”) educational page at
              <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work">
                http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
              </a>
              .
            </p>
            <span>You can opt out of targeted advertising by:</span>
            <ul>
              <li>
                FACEBOOK -
                <a href="https://www.facebook.com/settings/?tab=ads">
                  https://www.facebook.com/settings/?tab=ads
                </a>
              </li>
              <li>
                GOOGLE -
                <a href="https://www.google.com/settings/ads/anonymous">
                  https://www.google.com/settings/ads/anonymous
                </a>
              </li>
              <li>
                BING -
                <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                </a>
              </li>
            </ul>
            <p>
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:
              http://optout.aboutads.info/.
            </p>
            <h4>DO NOT TRACK</h4>
            <p>
              Please note that we do not alter our Site’s data collection and
              use practices when we see a Do Not Track signal from your browser.
            </p>
            <h4>DATA RETENTION</h4>
            <p>
              When you place an order through the Site, we will maintain your
              Order Information for our records unless and until you ask us to
              delete this information.
            </p>
            <h4>MINORS</h4>
            <p>The Site is not intended for individuals under the age of 18.</p>
            <h4>CHANGES</h4>
            <p>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons.
              <br /> For more information about our privacy practices, if you
              have questions, or if you would like to make a complaint, please
              contact us by e-mail at <a>info@mygiene.com.au </a>
            </p>
          </div>
        </div>
      </PrivacyWrapper>
    </>
  );
};

export default PrivacyPolicy;
