import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";
import OrderItemWrapper from "./style.orderitem";
const Order = () => {
  const Router = useRouter();
  console.log(Router.query);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [details, setDetails] = useState({});
  const fetchInfo = async () => {
    const data = await firestore
      .collection(`orders`)
      .where("orderUserId", "==", user.id)
      .get();
    setDetails(data.data());
  };

  async function fetchOrder() {
    const order = await firestore.doc(`orders/${Router.query?.order}`).get();
    const user = await firestore
      .doc(`users/${order.data()?.orderUserId}`)
      .get();
    setDetails({ ...order.data(), user: user.data(), id: order.id });
  }
  useEffect(() => {
    if (Router.query?.order) fetchOrder();
  }, []);
  console.log(details);
  return (
    <OrderItemWrapper>
      <div className="order-item">
        <div className="heading">
          <h2>ORDER PAGE #{details?.id}</h2>
        </div>
        <div className="details-1">
          <div className="order-details">
            <div className="order-info">
              <p>
                <strong>Order Id </strong>
                <span>{details?.id}</span>
              </p>
              <p>
                <strong>Created At</strong>
                <span>
                  {new Date(details?.createdAt?.seconds * 1000).toLocaleString(
                    "en-US",
                    {
                      timeZone: "Australia/Sydney",
                    }
                  )}
                </span>
              </p>
              <p>
                <strong>Product Id</strong>
              </p>
              <p>
                <strong>Product Name </strong>
                <span>{details.cartItems?.pId}</span>{" "}
              </p>
              <p>
                <strong>Quanity</strong>
                <span>{details.cartItems?.qt}</span>{" "}
              </p>
            </div>
          </div>
          <div className="customer-details">
            <div className="customer-info">
              <p>
                <strong>User Id </strong>
                <span>{details?.orderUserId}</span>
              </p>
              <p>
                <strong>User Name</strong>
                <span>{details.user?.displayName}</span>
              </p>
              <p>
                <strong>Email Id</strong>
                <span>{details.user?.email}</span>
              </p>
              <p>
                <strong>Contact No. </strong>
                <span>{details.user?.mobile || "No Record"}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="details-bottom">
          <div className="payment-details">
            <p>
              <strong>Payment Id</strong>
              <a
                target="_blank"
                href="https://dashboard.stripe.com/test/payments/pi_3JKeDZEDTtTQNBA80EovEMQc"
              >
                {details?.paymentIntentId}
              </a>
            </p>
            <p>
              <strong>Sub Total</strong>{" "}
              <span>{details.cartItems?.cartSubTotal}</span>
            </p>
            <p>
              <strong>Type of Delivery</strong>{" "}
              <span>{details.cartItems.delivery}</span>
            </p>
            <p>
              <strong>Total</strong>
              <span> $ {details?.totalAmount}</span>
            </p>
          </div>
        </div>
      </div>
    </OrderItemWrapper>
  );
};

export default Order;
