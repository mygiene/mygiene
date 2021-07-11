import { useContext } from "react";
import { AuthContext } from "../components/auth/auth.js";
import { MetaHead } from "../components/Meta-Head.jsx";

const Page = () => {
  const { authState } = useContext(AuthContext);
  const user = authState.user || null;
  if (user)
    return (
      <>
        <MetaHead title="Profile" />
        MY PROFILE
      </>
    );
  else {
    window.location = "http://localhost:3010/login";
  }
};

export default Page;
