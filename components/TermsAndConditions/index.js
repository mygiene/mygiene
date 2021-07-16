import React from "react";
import Banner from "../BaseComponent/Banner";
import TermsWrapper from "./style.terms";
import Link from "next/link";
import Navigation from "../BaseComponent/Navigation";

const TermsAndConditions = () => {
  return (
    <>
      <TermsWrapper>
        <Banner Image="/banner_1.jpg" title="Terms & Conditions" />

        <div className="container">
          <Navigation />

          <div className="content__right">
            <h3>Terms of Service</h3>
            <p>
              This website is owned and operated by Mygiene company limited.
              Throughout the site, the terms “we”, “us” and “our” refer to
              Mygiene. Mygiene offers this website, including all information
              and services available from this site to you, the user,
              conditioned upon your acceptance of all terms, conditions,
              policies and notices stated here.
              <br />
              <br />
              By visiting our site and/ or purchasing something from us, you
              engage in our “Service” and agree to be bound by the following
              terms and conditions (“Terms of Service”, “Terms”), including
              those additional terms and conditions and policies referenced
              herein. These Terms of Service apply to all users of the site,
              including without limitation users who are browsers, vendors,
              customers, merchants, and/ or contributors of content. Please read
              these Terms of Service carefully before accessing or using our
              website.
              <br />
              <br />
              By accessing or using any part of the site, you agree to be bound
              by these Terms of Service. If you do not agree to all the terms
              and conditions of this agreement, then you may not access the
              website or use any services. If these Terms of Service are
              considered an offer, acceptance is expressly limited to these
              Terms of Service. We reserve the right to update, change or
              replace any part of these Terms of Service by posting updates
              and/or changes to our website.
            </p>
            <details open>
              <summary>Online Store Terms</summary>
              <p>
                By agreeing to these Terms of Service, you represent that you
                may not use our products for any illegal or unauthorized purpose
                nor may you, in the use of the Service, violate any laws in your
                jurisdiction (including but not limited to copyright laws).
              </p>
            </details>
            <details>
              <summary>PRODUCTS OR SERVICES (if applicable)</summary>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell or
                exploit any portion of the Service, use of the Service, or
                access to the Service or any contact on the website through
                which the service is provided, without express written
                permission by us.
                <br />
                <br />
                Certain products or services may be available exclusively online
                through the website. These products or services may have limited
                quantities and are subject to return or exchange only according
                to our Return Policy. We do not warrant that the quality of any
                products, services, information, or other material purchased or
                obtained by you will meet your expectations, or that any errors
                in the Service will be corrected.
              </p>
            </details>
            <details>
              <summary>ACCURACY OF BILLING AND ACCOUNT INFORMATION</summary>
              <p>
                We reserve the right to refuse any order you place with us. We
                may, in our sole discretion, limit or cancel quantities
                purchased per person, per household or per order. These
                restrictions may include orders placed by or under the same
                customer account, the same credit card, and/or orders that use
                the same billing and/or shipping address. In the event we make a
                change to or cancel an order, we may attempt to notify you by
                contacting the e-mail and/or billing address/phone number
                provided at the time the order was made.
                <br />
                <br />
                We are not liable for any harm or damages related to the
                purchase or use of goods, services, resources, content, or any
                other transactions made in connection with any third-party
                websites. Please review carefully the third-party&apos;s
                policies and practices and make sure you understand them before
                you engage in any transaction. Complaints, claims, concerns, or
                questions regarding third-party products should be directed to
                the third-party.
                <br />
                <br />
                For more detail, please review our Returns Policy.
              </p>
            </details>
            <details>
              <summary>ERRORS, INACCURACIES AND OMISSIONS</summary>
              <p>
                Occasionally there may be information on our site or in the
                Service that contains inaccuracies that may relate to product
                descriptions, pricing, promotions, offers, product shipping
                charges, transit times and availability. We reserve the right to
                correct any errors, inaccuracies, and to change or update
                information or cancel orders if any information in the Service
                or on any related website is inaccurate at any time without
                prior notice (including after you have submitted your order).
              </p>
            </details>
            <details>
              <summary>
                DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
              </summary>
              <p>
                You agree that from time to time we may remove the service for
                indefinite periods of time or cancel the service at any time,
                without notice to you. You expressly agree that your use of, or
                inability to use, the service is at your sole risk. The service
                and all products and services delivered to you through the
                service are (except as expressly stated by us) provided &apos;as
                is&apos; and &apos;as available&apos; for your use, without any
                representation, warranties or conditions of any kind, either
                express or implied, including all implied warranties or
                conditions of merchantability, merchantable quality, fitness for
                a particular purpose, durability, title, and non-infringement.
                In no case shall Mygiene, our directors, officers, employees,
                affiliates, agents, contractors, interns, suppliers, service
                providers or licensors be liable for any injury, loss, claim, or
                any direct, indirect, incidental, punitive, special, or
                consequential damages of any kind. Because some states or
                jurisdictions do not allow the exclusion or the limitation of
                liability for consequential or incidental damages, in such
                states or jurisdictions, our liability shall be limited to the
                maximum extent permitted by law.
              </p>
            </details>
            <details>
              <summary>INDEMNIFICATION</summary>
              <p>
                You agree to indemnify, defend and hold harmless Mygiene and our
                parent, subsidiaries, affiliates, partners, officers, directors,
                agents, contractors, licensors, service providers,
                subcontractors, suppliers, interns and employees, harmless from
                any claim or demand, including reasonable attorneys’ fees, made
                by any third-party due to or arising out of your breach of these
                Terms of Service or the documents they incorporate by reference,
                or your violation of any law or the rights of a third-party.
              </p>
            </details>
            <details>
              <summary>SEVERABILITY</summary>
              <p>
                In the event that any provision of these Terms of Service is
                determined to be unlawful, void or unenforceable, such provision
                shall nonetheless be enforceable to the fullest extent permitted
                by applicable law, and the unenforceable portion shall be deemed
                to be severed from these Terms of Service, such determination
                shall not affect the validity and enforceability of any other
                remaining provisions.
              </p>
            </details>
            <details>
              <summary>SEVERABILITY</summary>
              <p>
                The failure of us to exercise or enforce any right or provision
                of these Terms of Service shall not constitute a waiver of such
                right or provision.
                <br />
                <br />
                These Terms of Service and any policies or operating rules
                posted by us on this site or in respect to The Service
                constitutes the entire agreement and understanding between you
                and us and govern your use of the Service, superseding any prior
                or contemporaneous agreements, communications and proposals,
                whether oral or written, between you and us (including, but not
                limited to, any prior versions of the Terms of Service). Any
                ambiguities in the interpretation of these Terms of Service
                shall not be construed against the drafting party.
              </p>
            </details>
            <details>
              <summary>GOVERNING LAW</summary>
              <p>
                These Terms of Service and any separate agreements whereby we
                provide you Services shall be governed by and construed in
                accordance with the laws of Australia.
              </p>
            </details>
            <details>
              <summary>CHANGES TO TERMS OF SERVICE</summary>
              <p>
                You can review the most current version of the Terms of Service
                at any time at this page. We reserve the right, at our sole
                discretion, to update, change or replace any part of these Terms
                of Service by posting updates and changes to our website. It is
                your responsibility to check our website periodically for
                changes. Your continued use of or access to our website or the
                Service following the posting of any changes to these Terms of
                Service constitutes acceptance of those changes.
              </p>
            </details>
            <div className="contact__section">
              <h4>
                CONTACT INFORMATION <br />
                <br />
                <span>
                  Questions about the Terms of Service should be sent to us at
                  <a href="mailto:info@mygiene.com.au">info@mygiene.com.au</a>.
                </span>
              </h4>
            </div>
          </div>
        </div>
      </TermsWrapper>
    </>
  );
};

export default TermsAndConditions;
