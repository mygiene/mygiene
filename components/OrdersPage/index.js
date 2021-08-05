import React, { useContext, useEffect, useState } from "react";
import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";

import UserNavigation from "../BaseComponent/UserNavigation";
import OrderItem from "./OrderItem";
import OrderWapper from "./style.order";
const OrdersPage = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [orders, setorders] = useState([]);
  useEffect(async () => {
    if (user) fetchOrders();
  }, []);
  async function fetchOrders() {
    const allOrders = [];
    const response = firestore
      .collection("orders")
      .where("orderUserId", "==", user.id);
    const ordersData = await response.get();
    ordersData.docs.forEach((order) => {
      allOrders.push({ ...order.data(), id: order.id });
    });
    setorders(allOrders);
  }
  return (
    <OrderWapper>
      <div className="container">
        <div className="top-section">
          <div>
            <h3>Account</h3>
          </div>
          <hr />
        </div>
        <div className="orders-view">
          <UserNavigation />

          <div className="right-side">
            {orders?.length > 0 ? (
              orders.map((m) => <OrderItem {...m} />)
            ) : (
              <p>You havent ordered anything.</p>
            )}
          </div>
        </div>
      </div>
    </OrderWapper>
  );
};

export default OrdersPage;
