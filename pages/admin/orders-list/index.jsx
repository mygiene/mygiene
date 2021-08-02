import React, { useContext } from "react";
import { AuthContext } from "../../../components/auth/auth";
import OrdersList from "../../../components/OrdersList";

const URL = process.env.NEXT_PUBLIC_URL;

const Pages = () => {
  const {
    authState: { isAdmin },
  } = useContext(AuthContext);
  if (isAdmin)
    return (
      <>
        <div>
          <h1>Orders List</h1>
          <OrdersList />
        </div>
      </>
    );
  else window.location = `${URL}`;
};

export default Pages;
