import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { firestore } from "../../firebase/utils";
import UserItemWrapper from "./style.useritem";
import OrderItem, { deliveryStatusList } from "../OrdersPage/OrderItem";
import Link from "next/link";
//const u =await  firestore.doc(`users/${Router.pathname}`).get(); u.data();
const User = () => {
  const Router = useRouter();
  const [userDetails, setUserDetails] = useState([]);
  const [orders, setOrders] = useState();

  const fetchInfo = async () => {
    const userId = Router.query.user;
    const user = await firestore.doc(`users/${userId}`).get();
    setUserDetails({ ...user.data(), id: user.id });

    const allOrders = [];
    const response = firestore
      .collection("orders")
      .where("orderUserId", "==", userId);
    const ordersData = await response.get();
    ordersData.docs.forEach((order) => {
      allOrders.push({ ...order.data(), id: order.id });
    });
    setOrders(allOrders);
  };

  useEffect(() => {
    if (Router.query.user) fetchInfo();
  }, []);

  return (
    <UserItemWrapper>
      <div className="user-item">
        <div className="heading">
          <h2>User Page # {userDetails.id}</h2>
        </div>
        <div className="content">
          <div className="profile_details">
            <div className="profile_details-name">
              <span>Name </span>
              <span>{userDetails?.displayName}</span>
            </div>
            <div className="profile_details-email">
              <span>Email Id</span>
              <span>{userDetails?.email}</span>
            </div>
            <div className="profile_details-contact">
              <span>Contact No</span>
              <div>
                <span>{userDetails?.mobile || "No Record"}</span>
              </div>
            </div>

            {/* <div className="profile_details-address">
              <span>Address</span>

              <div>
                {userDetails?.address?.length > 0 &&
                  userDetails?.address.map((m) => (
                    <div>
                      <span>{m.address}</span>
                      <span>({m.type})</span>
                    </div>
                  ))}
              </div>
            </div> */}
          </div>

          <div className="order-details">
            {orders?.length > 0 &&
              orders.map((item, index) => {
                const statusLabel = item.status
                  ? deliveryStatusList.find(
                      (f) => Number(f.value) == Number(item.status)
                    ).label
                  : "";
                return (
                  <Link
                    href={`http://localhost:3010/admin/orders-list/${item.id}`}
                  >
                    <a>
                      <div className="order-item">
                        <div className="order__card">
                          <div className="order__card-image">
                            <img src="/kitAssets/cover.png" />
                          </div>
                          <div className="order__card-content">
                            <div className="content-outer">
                              <h3>mygiene grooming kit</h3>
                              <div className="quantity-order">
                                <span className="order-outer">
                                  <strong>Order Id :</strong>{" "}
                                  <span> {item.id}</span>
                                </span>
                              </div>
                              <div className="order-status">
                                <strong>Status :</strong>{" "}
                                <span> {statusLabel}</span>
                              </div>
                              <div className="price">
                                <span>
                                  <strong>Quantity : </strong>
                                  {item.cartItems.qt}
                                </span>{" "}
                                <strong>Total : ${item.totalAmount}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </UserItemWrapper>
  );
};

export default User;
