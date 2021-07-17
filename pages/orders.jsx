import { useContext } from "react";
import { AuthContext } from "../components/auth/auth.js";
import { MetaHead } from "../components/Meta-Head.jsx";
import OrdersPage from "../components/OrdersPage/index.js";

const URL = process.env.NEXT_PUBLIC_URL;

const Page = () => {
  const { authState } = useContext(AuthContext);
  const user = authState.user || null;
  if (user)
    return (
      <>
        <MetaHead title="Orders" />
        <OrdersPage />
      </>
    );
  else {
    window.location = `${URL}/login`;
  }
};

export default Page;
