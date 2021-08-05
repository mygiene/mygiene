import React, { useEffect, useState } from "react";

import UserWrapper from "./style.orders";
import Link from "next/link";
import { firestore } from "../../firebase/utils";

const URL = process.env.NEXT_PUBLIC_URL;

const OrdersList = () => {
  const [orders, setorders] = useState([]);

  const fetchOrders = async () => {
    const ordersData = await firestore.collection("orders").get();
    console.log(ordersData);
    const allOrders = [];
    await Promise.all(
      ordersData.docs.map(async (item) => {
        const user = await firestore
          .doc(`users/${item.data().orderUserId}`)
          .get();
        allOrders.push({ ...item.data(), id: item.id, user: user.data() });
      })
    );
    setorders(allOrders);
  };

  async function getUpdatedOrder(item) {
    return userDetail;
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <UserWrapper>
        <div className="users">
          <span className="heading">ORDERS LIST</span>
          <div className="table-outer">
            <table class="container">
              <thead>
                <tr>
                  <th>
                    <h1>S.No.</h1>
                  </th>
                  <th>
                    <h1>ORDER ID</h1>
                  </th>
                  <th>
                    <h1>User</h1>
                  </th>
                  <th>
                    <h1>Created At</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 &&
                  orders.map((item, index) => (
                    <Link href={`/admin/orders-list/${item?.id}`}>
                      <a>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item?.id}</td>
                          <td>{item?.user?.displayName}</td>
                          <td>
                            {new Date(
                              item?.createdAt?.seconds * 1000
                            ).toLocaleString("en-US", {
                              timeZone: "Australia/Sydney",
                            })}
                          </td>
                        </tr>
                      </a>
                    </Link>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </UserWrapper>
    </>
  );
};

export default OrdersList;
