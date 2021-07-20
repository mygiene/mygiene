import React from "react";
import { FaIcon } from "../BaseComponent/FaIcon";
import RefundCondition from "./RefundCondition";

const OrderItem = () => {
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
          <div>
            <h3>mygiene grooming kit</h3>
            <span>$150.00 USD</span>
            <span>Quantity : 1</span>
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
