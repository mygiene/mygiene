import React from "react";
import { FaIcon } from "../BaseComponent/FaIcon";
import Navigation from "../BaseComponent/Navigation";
import UserNavigation from "../BaseComponent/UserNavigation";
import OrderWapper from "./style.order";
const OrdersPage = () => {
  return (
    <OrderWapper>
      <div className="container">
        <div className="top-section">
          <div>
            <h3>Account</h3>
            <span>Name</span>
          </div>
          <hr />
        </div>
        <div className="orders-view">
          <UserNavigation />

          <div className="right-side">
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
                  <h3>mygiene grooming kit</h3>
                  <span>$150.00 USD</span>
                  <span>Quantity : 1</span>
                </div>
                <button className="download-icon">
                  <FaIcon className="fa fa-download" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderWapper>
  );
};

export default OrdersPage;
