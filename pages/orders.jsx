import router from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/auth/auth.js";
import { StoreContext } from "../store/index.js";
import StyledWrapper from "../styles/styles.common.js";

const Page = () => {
  const { authState } = useContext(AuthContext);
  const user = authState.user || null;
  if (user) return <StyledWrapper>MY ORDERs</StyledWrapper>;
  else Router.push("/login");
};

export default Page;
