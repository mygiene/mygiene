import React from "react";

import UserNavigation from "../BaseComponent/UserNavigation";
import OrderItem from "./OrderItem";
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
            <OrderItem />
          </div>
        </div>
      </div>
    </OrderWapper>
  );
};

export default OrdersPage;
