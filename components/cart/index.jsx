import { useContext } from "react";
import { StoreContext } from "../../store";
import { CartItem } from "./cart-item";
import StyledWrapper from "./styles.cart";

export const Cart = () => {
  const [, , cartItems] = useContext(StoreContext);
  return (
    <StyledWrapper>
      <h2>YOUR CART ITEMS</h2>

      {cartItems.length > 0 &&
        cartItems.map((prod) => {
          return <CartItem key={prod.pId} {...prod} />;
        })}
    </StyledWrapper>
  );
};
