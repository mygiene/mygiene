import { MetaHead } from "../components/Meta-Head.js";
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
        <MetaHead title="Order Placed" url="/success" />
        <ThanksPage />
      </>
    );
  else {
    window.location = `${URL}/login`;
  }
};

export default Page;
