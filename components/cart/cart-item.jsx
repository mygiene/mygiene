import { useContext, useState } from "react";
import { firestore } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { AuthContext } from "../auth/auth";
import { FaIcon } from "../BaseComponent/FaIcon";
import { ItemWrapper } from "./styles.cart";

export const CartItem = (props) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [, , cartItems, setCartItems] = useContext(StoreContext);
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [quantity, setquantity] = useState(cartItems?.qt || 1);

  async function emptyCart() {
    if (user) {
      try {
        await firestore.doc(`users/${user.id}`).update({
          cartItems: null,
        });
        setCartItems(null);
      } catch (error) {
        console.log(error);
      }
    } else {
      localStorage.setItem("cart", null);
      setCartItems(null);
    }
  }

  async function increase() {
    setquantity((q) => q + 1);
    if (user) {
      try {
        await firestore.doc(`users/${user.id}`).update({
          cartItems: { ...user.cartItems, qt: user.cartItems.qt + 1 },
        });
        setCartItems({ ...user.cartItems, qt: user.cartItems.qt + 1 });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log({ cartItems });

      if (cartItems) {
        const updatedCart = {
          ...cartItems,
          qt: cartItems.qt + 1,
        };
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        const updatedCart = { pId: "grooming_kit", qt: 1 };
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }
  }

  async function decrease() {
    if (quantity > 1) {
      setquantity((q) => q - 1);
      if (user) {
        try {
          await firestore.doc(`users/${user.id}`).update({
            cartItems: { ...user.cartItems, qt: user.cartItems.qt - 1 },
          });
          setCartItems({ ...user.cartItems, qt: user.cartItems.qt - 1 });
        } catch (error) {
          console.log(error);
        }
      } else {
        if (cartItems) {
          const updatedCart = {
            ...cartItems,
            qt: cartItems.qt - 1,
          };
          setCartItems(updatedCart);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
        // else {
        //   const updatedCart = { pId: "grooming_kit", qt: 1 };

        //   setCartItems({ pId: "grooming_kit", qt: 1 });
        //   localStorage.setItem("cart", JSON.stringify(updatedCart));
        // }
      }
    }
  }
  return (
    <ItemWrapper>
      <div className="item-wrapper">
        <div className="item-img">
          <img src="/cartAssets/kit-without-background.png" alt="item image" />
        </div>
        <div className="item-content">
          <div className="item-name-quantity">
            <div className="item-name">MYGIENE GROOMING KIT</div>
            <div className="item-quantity">
              <button onClick={decrease}>
                <FaIcon className="fa-minus" />
              </button>
              <span>{quantity}</span>
              <button onClick={increase}>
                <FaIcon className="fa-plus" />
              </button>
            </div>
            <div className="item-price">
              $ 150.00
              <span className="remove-btn">
                <button onClick={emptyCart}>Remove</button>
              </span>
            </div>
          </div>

          <div className="special-requirements">
            <p>SPECIAL REQUIREMENTS</p>
            <div className="services">
              <span>
                <input
                  id={`express-delivery-${props.pId}`}
                  type="checkbox"
                  name="expressDelivery"
                  autoComplete="off"
                  checked={expressDelivery}
                  onChange={() => setExpressDelivery((s) => !s)}
                />
              </span>
              <label htmlFor={`express-delivery-${props.pId}`}>
                Express Delivery
              </label>
              <span className="service-price">$10.00 USD</span>
            </div>
          </div>
          <div className="total">
            <div>Sub Total</div>
            <div>$ 150.00 USD</div>
          </div>
          <div className="checkout-btn">
            <button>Continue to Checkout</button>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
};
