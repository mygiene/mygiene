import React from "react";
import { FaIcon } from "../BaseComponent/FaIcon";
import RefundCondition from "./RefundCondition";

const OrderItem = ({
  createdAt,
  cartItems,
  orderUserId,
  paymentIntentId,
  shippingAddress,
  status = 1,
  totalAmount,
}) => {
  return (
    <div className="order-item">
      <div className="order-status">
        <div className="first-step">
          <span>Order Placed</span>
          <span>on Sat,21 January 2021</span>
        </div>
        <div className="current-step">
          <span>Order Placed</span>
          <span>on Sat,21 January 2021</span>
        </div>
      </div>
      <div className="order__card">
        <div className="order__card-image">
          <img src="/kitAssets/cover.png" />
        </div>
        <div className="order__card-content">
          <div className="content-outer">
            <h3>mygiene grooming kit</h3>
            <span className="price">$150.00 AUD</span>
            <div className="quantity-order">
              <span>Quantity : 1</span>
              <span className="order-outer">
                Order Id : <span> 746573746b6579</span>
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
