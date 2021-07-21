import { useContext } from "react";
import { StoreContext } from "../../store";
import { CartItem } from "./cart-item";
import StyledWrapper from "./styles.cart";

export const Cart = () => {
  const [, , cartItems] = useContext(StoreContext);
  return (
    <StyledWrapper>
      <h2>YOUR CART ITEMS</h2>

      {cartItems && <CartItem key={cartItems.pId} {...cartItems} />}
    </StyledWrapper>
  );
};
