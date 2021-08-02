import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";

const Order = () => {
  const Router = useRouter();
  console.log(Router.query);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [details, setDetails] = useState({});
  const fetchInfo = async () => {
    const data = await firestore
      .collection(`orders`)
      .where("orderUserId", "==", user.id)
      .get();
    setDetails(data.data());
  };

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
  console.log(details);
  return (
    <div>
      <h1>ORDER DETAIL PAGE</h1>
    </div>
  );
};

export default Order;
