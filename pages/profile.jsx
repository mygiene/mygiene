import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../components/auth/auth.js";
import StyledWrapper from "../styles/styles.common.js";

const Page = () => {
  const { authState } = useContext(AuthContext);
  const user = authState.user || null;
  if (user) return <StyledWrapper>MY PROFILE</StyledWrapper>;
  else Router.push("/login");
};

export default Page;
