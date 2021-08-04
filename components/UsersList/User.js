import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { firestore } from "../../firebase/utils";

//const u =await  firestore.doc(`users/${Router.pathname}`).get(); u.data();
const User = () => {
  const Router = useRouter();
  const [userDetails, setUserDetails] = useState();
  const [orders, setOrders] = useState();
  const fetchInfo = async () => {
    const userId = Router.query.user;
    const user = await firestore.doc(`users/${userId}`).get();
    setUserDetails(user.data());

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
  console.log("orders", orders);
  console.log(userDetails);
  return <div>users page</div>;
};

export default User;
