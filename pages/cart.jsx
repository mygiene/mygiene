import { Cart } from "../components/cart/index.jsx";
import { MetaHead } from "../components/Meta-Head.js";

const Page = () => {
  return (
    <>
      <MetaHead title="Your Cart" url="/cart" />
      <Cart />
    </>
  );
};

export default Page;
