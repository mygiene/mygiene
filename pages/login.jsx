import router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../components/auth/auth";
import LoginPage from "../components/LoginPage";

const Page = () => {
  // const { user } = useContext(AuthContext);
  // if (user) router.push("/");
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Page;
