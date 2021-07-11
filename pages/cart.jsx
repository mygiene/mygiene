import { Cart } from "../components/cart/index.jsx";
import { MetaHead } from "../components/Meta-Head.jsx";

const Page = () => {
  return (
    <>
      <MetaHead title="Your Cart" />
      <Cart />
    </>
  );
};

export default Page;
