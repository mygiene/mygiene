import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { firestore } from "../../firebase/utils";
import OrderItemWrapper from "./style.orderitem";
import { FaIcon } from "../BaseComponent/FaIcon";
import { deliveryStatusList } from "../OrdersPage/OrderItem";
import { toast } from "react-toastify";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Order = () => {
  const Router = useRouter();
  const [submitting, setsubmitting] = useState(false);
  const [details, setDetails] = useState({});
  const [deliveryStatus, setDeliveryStatus] = useState();

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

  function handleSubmit(e) {
    e.preventDefault();

    if (details?.status === deliveryStatus) {
      toast.info("This status is already been set.");
    }
    setsubmitting(true);

    firestore
      .doc(`orders/${details?.id}`)
      .update({
        status: deliveryStatus,
        statusDateTime: new Date(),
        statusHistory: [
          ...(details || [])?.statusHistory,
          { status: deliveryStatus, dateTime: new Date() },
        ],
      })
      .then(() => {
        toast.success("Delivery Status updated");
        fetchOrder();
        setsubmitting(false);
      })
      .catch((err) => {
        setsubmitting(false);

        toast.info(err.message);
      });
  }

  return (
    <OrderItemWrapper>
      <div className="order-item">
        <div className="heading">
          <h2>ORDER PAGE #{details?.id}</h2>
        </div>
        <form onSubmit={handleSubmit} className="delivery-dropdown">
          <label htmlFor="status">Delivery Status</label>
          <select
            name="status"
            id="status"
            onChange={(e) => setDeliveryStatus(e.target.value)}
            value={deliveryStatus || details?.status}
          >
            {deliveryStatusList.map((m) => (
              <option value={m.value}>{m.label}</option>
            ))}
          </select>
          <button type="submit">Update Status</button>
        </form>
        <div className="details-1">
          <div className="order-details">
            <div className="order-head">
              <FaIcon className="fa-shopping-bag"></FaIcon>
              <span>Order Details</span>
            </div>
            <div className="order-info">
              <p>
                <strong>Order Id </strong>
                <span>{details?.id}</span>
              </p>
              <p>
                <strong>Ordered At</strong>
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
                <span>{details.cartItems?.pId}</span>
              </p>
              <p>
                <strong>Product Name </strong>
                <span>MyGiene Essentials Kit</span>
              </p>
              <p>
                <strong>Quanity</strong>
                <span>{details.cartItems?.qt}</span>{" "}
              </p>
              <p>
                <strong>Individual Price</strong>
                <span>$ {details?.totalAmount / details.cartItems?.qt}</span>
              </p>
            </div>
          </div>
          <div className="customer-details">
            <div className="customer-head">
              <FaIcon className="fa-user"></FaIcon>
              <span>Customer Details</span>
            </div>
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
          <div className="shipping-details">
            <div className="shipping-head">
              <FaIcon className="fa-shopping-cart"></FaIcon>
              <span>Shipping Details</span>
            </div>
            <div className="shipping-info">
              <p>
                <strong>Address Line 1</strong>{" "}
                <span>{details.shippingAddress?.line1}</span>
              </p>
              <p>
                <strong>Address Line 2</strong>{" "}
                <span>{details.shippingAddress?.line2}</span>
              </p>
              <p>
                <strong>Postal Code</strong>{" "}
                <span>{details.shippingAddress?.postal_code}</span>
              </p>
              <p>
                <strong>City </strong>{" "}
                <span>{details.shippingAddress?.city}</span>
              </p>
              <p>
                <strong>State</strong>{" "}
                <span>{details.shippingAddress?.state}</span>
              </p>
              <p>
                <strong>Country</strong>{" "}
                <span>{details.shippingAddress?.country}</span>
              </p>
            </div>
          </div>
          <div className="payment-details">
            <div className="payment-head">
              <FaIcon className="fa-money"></FaIcon>
              <span>Payment Details</span>
            </div>
            <div className="payment-info">
              <p>
                <strong>Payment Id</strong>
                <a
                  target="_blank"
                  href={`https://dashboard.stripe.com/payments/${details?.paymentIntentId}`}
                >
                  {details?.paymentIntentId}
                  <FaIcon className="fa-external-link" />
                </a>
              </p>
              <p>
                <strong>Sub Total</strong>{" "}
                <span> $ {details.cartItems?.cartSubTotal}</span>
              </p>
              <p>
                <strong>Type of Delivery</strong>{" "}
                <span>
                  {details.cartItems?.delivery}{" "}
                  <span>
                    {details.cartItems?.delivery === "standard" ? "$10" : "$15"}
                  </span>
                </span>
              </p>
              <p>
                <strong>Total</strong>
                <span> $ {details?.totalAmount}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="status-timeline">
        <VerticalTimeline>
          {details?.statusHistory?.length > 0 &&
            details.statusHistory.map((m) => {
              const statusLabel = m?.status
                ? deliveryStatusList.find(
                    (f) => Number(f.value) == Number(m?.status)
                  ).label
                : "";
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  // icon={<WorkIcon />}
                >
                  <div>{statusLabel}</div>
                  <div>
                    {new Date(m.dateTime.seconds * 1000).toLocaleString(
                      "en-US",
                      {
                        timeZone: "Australia/Sydney",
                      }
                    )}
                  </div>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
      </div>
    </OrderItemWrapper>
  );
};

export default Order;
