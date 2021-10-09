import { useContext } from "react";
import { StoreContext } from "../../store";
import NoOrder from "../NoOrder";
import { CartItem } from "./cart-item";
import StyledWrapper from "./styles.cart";

export const Cart = () => {
  const [, , cartItems] = useContext(StoreContext);
  return (
    <StyledWrapper>
      <h2>CART ITEMS</h2>

      {cartItems?.qt ? (
        <CartItem key={cartItems.pId} {...cartItems} />
      ) : (
        <div className="empty-cart-block">
          <NoOrder />
        </div>
      )}
    </StyledWrapper>
  );
};
