import { MetaHead } from "../components/Meta-Head.jsx";
import { AuthContext } from "../components/auth/auth.js";
import ThanksPage from "../components/ThanksPage/index.js";
import { useContext } from "react";

const URL = process.env.NEXT_PUBLIC_URL;

const Page = () => {
  const { authState } = useContext(AuthContext);
  const user = authState.user || null;
  if (user)
    return (
      <>
        <MetaHead title="Order Placed" />
        <ThanksPage />
      </>
    );
  else {
    window.location = `${URL}/login`;
  }
};

export default Page;
