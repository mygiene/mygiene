import React from "react";
import { FaIcon } from "../BaseComponent/FaIcon";
import { deliveryStatus } from "../payment-details";
import RefundCondition from "./RefundCondition";

export const createListFromObject = (data) => {
  const keys = Object.keys(data).filter((f) => !Number(f) && Number(f) !== 0);
  let list = [];
  keys.forEach((f) => {
    list.push({ label: f, value: data[f] });
  });
  return list;
};
export const deliveryStatusList = createListFromObject(deliveryStatus);

const OrderItem = ({
  createdAt,
  statusDateTime,
  cartItems,
  orderUserId,
  paymentIntentId,
  shippingAddress,
  status = 1,
  id,
  totalAmount,
}) => {
  const statusLabel = status
    ? deliveryStatusList.find((f) => Number(f.value) == Number(status)).label
    : "";

  return (
    <div className="order-item">
      <div className="order-status">
        <div className="first-step">
          <span>Order Placed</span>
          <span>
            {new Date(createdAt.seconds * 1000).toLocaleString("en-US", {
              timeZone: "Australia/Sydney",
            })}
          </span>
        </div>
        <div className="current-step">
          <span>{statusLabel}</span>
          <span>
            {statusDateTime
              ? new Date(statusDateTime.seconds * 1000).toLocaleString(
                  "en-US",
                  {
                    timeZone: "Australia/Sydney",
                  }
                )
              : ""}
          </span>
        </div>
      </div>
      <div className="order__card">
        <div className="order__card-image">
          <img src="/kitAssets/cover.png" />
        </div>
        <div className="order__card-content">
          <div className="content-outer">
            <h3>mygiene grooming kit</h3>
            <span className="price">${totalAmount} AUD</span>
            <div className="quantity-order">
              <span>
                <strong>Quantity </strong> <span>: {cartItems.qt}</span>
              </span>
              <span className="order-outer">
                <strong>Order Id </strong> <span> : {id}</span>
              </span>
            </div>
          </div>
          <div>
            <RefundCondition />
          </div>
        </div>

        <button className="download-icon">
          <FaIcon className="fa fa-download" />
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
