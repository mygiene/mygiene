import router from "next/router";
import { useContext, useEffect } from "react";
import { StoreContext } from "../store/index.js";
import StyledWrapper from "../styles/styles.common.js";

const Page = () => {
  const [state] = useContext(StoreContext);
  useEffect(() => {
    if (!state.currentUser) {
      router.push("/login");
    }
  }, [state]);
  return <StyledWrapper>Orders</StyledWrapper>;
};

export default Page;
