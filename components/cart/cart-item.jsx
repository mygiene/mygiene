import { useContext, useEffect, useState } from "react";
import { firestore } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { AuthContext } from "../auth/auth";
import { FaIcon } from "../BaseComponent/FaIcon";
import { ItemWrapper } from "./styles.cart";

export const DeliveryPrice = "10";

export const CartItem = (props) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [, , cartItems, setCartItems] = useContext(StoreContext);
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [quantity, setquantity] = useState(cartItems?.qt || 1);
  const [product, setproduct] = useState();
  const [submitting, setsubmitting] = useState(false);
  const total = expressDelivery
    ? (+product?.price * +quantity + +DeliveryPrice).toFixed(2)
    : (+product?.price * +quantity).toFixed(2);

  useEffect(async () => {
    if (cartItems) {
      try {
        const productRef = await firestore
          .doc(`products/${cartItems.pId}`)
          .get();
        const productData = productRef.data(); // name desc amount, deliveryamount quantity
        setproduct({ ...productData });
      } catch (error) {}
    }
  }, []);

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
    setsubmitting(true);
    if (user) {
      try {
        await firestore
          .doc(`users/${user.id}`)
          .update({
            cartItems: { ...user.cartItems, qt: user.cartItems.qt + 1 },
          })
          .then(() => {
            setCartItems({ ...user.cartItems, qt: user.cartItems.qt + 1 });
            setquantity((q) => q + 1);
          });
      } catch (error) {
        console.log(error);
      }
      setsubmitting(false);
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
      setsubmitting(false);
    }
  }

  async function decrease() {
    if (quantity > 1) {
      setsubmitting(true);
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
        setsubmitting(false);
      } else {
        if (cartItems) {
          const updatedCart = {
            ...cartItems,
            qt: cartItems.qt - 1,
          };
          setCartItems(updatedCart);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
        setsubmitting(false);
      }
    }
  }
  return (
    <>
      {product?.name && quantity && (
        <ItemWrapper>
          <div className="item-wrapper">
            <div className="item-img">
              <img
                src="/cartAssets/kit-without-background.png"
                alt="item image"
              />
            </div>
            <div className="item-content">
              <div className="item-name-quantity">
                <div className="item-name">{product?.name}</div>
                <div className="item-quantity">
                  <button
                    disabled={submitting || quantity < 2}
                    onClick={decrease}
                  >
                    <FaIcon className="fa-minus" />
                  </button>
                  <span>{quantity}</span>
                  <button disabled={submitting} onClick={increase}>
                    <FaIcon className="fa-plus" />
                  </button>
                </div>
                <div className="item-price">
                  {`$ ${product?.price}`}
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
                <div>Total</div>
                <div>$ {total} USD</div>
              </div>
              <div className="checkout-btn">
                <button>Continue to Checkout</button>
              </div>
            </div>
          </div>
        </ItemWrapper>
      )}
    </>
  );
};
