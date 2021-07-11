import { useContext } from "react";
import { StoreContext } from "../../store";
import StyledWrapper from "./styles.cart";

export const Cart = () => {
  const [, , cartItems] = useContext(StoreContext);
  return (
    <StyledWrapper>
      <h2>Cart Items</h2>
      {cartItems.map((prod) => {
        return (
          <li>
            Product
            <br /> Name:{prod.pName} <br /> Quantity: {prod.qt}
          </li>
        );
      })}
    </StyledWrapper>
  );
};
