import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { useState, useContext, useEffect } from "react";

import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";
import { FaIcon } from "../BaseComponent/FaIcon";
import ThanksWrapper from "./style.thanks";
const ThanksPage = () => {
  const Router = useRouter();
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [order, setorder] = useState();

  useEffect(() => {
    const orderId = Router?.query?.orderId;
    console.log({ orderId });
    fetchOrder(orderId);
  }, [Router.query, user]);

  async function fetchOrder(orderId) {
    const order = await firestore.doc(`orders/${orderId}`).get();
    setorder({ ...order.data(), id: order.id });
  }

  const shippingAddress = order?.shippingAddress;
  // console.log({ order });
  return (
    <>
      <ThanksWrapper>
        <div className="top__section">
          <div className="logo">
            <Link href="/">
              <a href="/">
                <FaIcon className="fa fa-long-arrow-left" />
                <h2>mygiene</h2>
              </a>
            </Link>
          </div>
          <div className="thankyou__text">
            <h1>Thank you</h1>
            <span>for Shopping with us!</span>
          </div>
        </div>
        <div className="container">
          <div className="order-details">
            <h2>We've received your Order!</h2>

            <span>Hey {user?.displayName},</span>
            <p>
              Great news! We've recieved your order of 'Men's Grooming Kit' and
              we're getting it ready to ship.
            </p>
          </div>
          <div className="order-table">
            <div className="payment-method">
              <h3>Payment method</h3>
              <span>Card</span>
            </div>
            <div className="shipping-address">
              <h3>Shipping Address</h3>
              <span>
                {shippingAddress
                  ? `${shippingAddress?.line1}, ${
                      shippingAddress?.line2 + ", " || ""
                    } ${shippingAddress?.city}, ${
                      shippingAddress?.postal_code
                    }, ${shippingAddress?.state}, Australia`
                  : ""}
              </span>
            </div>
            <div className="email-address">
              <h3>Email Address</h3>
              <span>{order?.receiptEmail || user?.email}</span>
            </div>
            <div className="order-id">
              <h3>Order Id</h3>
              <span>{order?.id || ""}</span>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="customer">
            <div className="customer-image">
              <img src="/thanksAssets/user.png" />
            </div>
            <span>
              If you have any questions about your order or shipment. Contact Us
              at : <a href="mailto:info@mygiene.com.au">info@mygiene.com.au</a>
            </span>
          </div>
          <div className="package">
            <div className="package-image">
              <img src="/thanksAssets/package.png" />
            </div>
            <span>
              If product doesn't meet your expectations, you can return it
              within 30 days after the purchase date.
            </span>
          </div>
        </div>
      </ThanksWrapper>
    </>
  );
};

export default ThanksPage;
