import { useContext } from "react";
import { AuthContext } from "../components/auth/auth.js";
import { MetaHead } from "../components/Meta-Head.jsx";

const URL = process.env.NEXT_PUBLIC_URL;

const Page = () => {
  const { authState } = useContext(AuthContext);
  const user = authState.user || null;
  if (user)
    return (
      <>
        <MetaHead title="Orders" />
        MY ORDERs
      </>
    );
  else {
    window.location = `${URL}/login`;
  }
};

export default Page;
