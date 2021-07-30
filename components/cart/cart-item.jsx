import { useContext, useEffect, useState } from "react";
import { firestore, fixedByTwoDecimal } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { AuthContext } from "../auth/auth";
import { FaIcon } from "../BaseComponent/FaIcon";
import { ItemWrapper } from "./styles.cart";
import Link from "next/link";
import axios from "axios";
import { getStripe } from "../../stripe/getStripe";

export const StandardDelivery = {
  price: "10",
  id: "shr_1JHrYuEDTtTQNBA8fPmzIEHt",
};
export const ExpressDelivery = {
  price: "15",
  id: "shr_1JHrfFEDTtTQNBA85aKOjYpe",
};

export const CartItem = (props) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [, , cartItems, setCartItems, cartTotal, setCartTotal] =
    useContext(StoreContext);
  const [delivery, setDelivery] = useState({ standard: true, express: false });
  const [quantity, setquantity] = useState(cartItems?.qt || 1);
  const [product, setproduct] = useState();
  const [submitting, setsubmitting] = useState(false);

  const total = delivery.express
    ? fixedByTwoDecimal(Number(cartTotal) + Number(ExpressDelivery.price))
    : fixedByTwoDecimal(Number(cartTotal) + Number(StandardDelivery.price));

  useEffect(() => {
    setsubmitting(true);
    firestore
      .doc(`users/${user.id}`)
      .update({
        cartItems: {
          ...user.cartItems,
          delivery: delivery.standard ? "standard" : "express",
        },
      })
      .then(() => setsubmitting(false));
  }, [delivery]);

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
            cartItems: {
              ...user.cartItems,
              qt: user.cartItems.qt + 1,
              cartSubTotal: fixedByTwoDecimal(
                product.price * (user.cartItems.qt + 1)
              ),
            },
          })
          .then(() => {
            setCartItems({
              ...user.cartItems,
              qt: user.cartItems.qt + 1,
              cartSubTotal: fixedByTwoDecimal(
                product.price * (user.cartItems.qt + 1)
              ),
            });
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
        setquantity((q) => q + 1);
      } else {
        const updatedCart = { pId: "grooming_kit", qt: 1 };
        setCartItems(updatedCart);
        setquantity(1);

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
            cartItems: {
              ...user.cartItems,
              qt: user.cartItems.qt - 1,
              cartSubTotal: fixedByTwoDecimal(
                product.price * (user.cartItems.qt - 1)
              ),
            },
          });
          setCartItems({
            ...user.cartItems,
            qt: user.cartItems.qt - 1,
            cartSubTotal: fixedByTwoDecimal(
              product.price * (user.cartItems.qt - 1)
            ),
          });
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

  async function redirectToCheckout(e) {
    e.preventDefault();
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      items: [
        { price: "price_1JHrUxEDTtTQNBA8s9G6Ffcv", quantity: cartItems.qt },
      ],
      shippingRate: delivery.express
        ? [ExpressDelivery.id]
        : [StandardDelivery.id],
    });

    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
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
                      disabled={submitting}
                      id={`express-delivery-${props.pId}`}
                      type="checkbox"
                      name="standardDelivery"
                      autoComplete="off"
                      checked={delivery.standard}
                      onChange={() =>
                        setDelivery((s) => ({
                          standard: !s.standard,
                          express: !s.express,
                        }))
                      }
                    />
                  </span>
                  <label htmlFor={`express-delivery-${props.pId}`}>
                    Standard Delivery
                  </label>
                  <span className="service-price">$10.00 AUD</span>
                </div>
                <div className="services">
                  <span>
                    <input
                      disabled={submitting}
                      id={`express-delivery-${props.pId}`}
                      type="checkbox"
                      name="expressDelivery"
                      autoComplete="off"
                      checked={delivery.express}
                      onChange={() =>
                        setDelivery((s) => ({
                          standard: !s.standard,
                          express: !s.express,
                        }))
                      }
                    />
                  </span>
                  <label htmlFor={`express-delivery-${props.pId}`}>
                    Express Delivery
                  </label>
                  <span className="service-price">$15.00 AUD</span>
                </div>
              </div>
              <div className="total">
                <div>Total</div>
                <div>$ {total} AUD</div>
              </div>
              <div className="checkout-btn">
                <Link href={user ? "/payment-details" : "/login"}>
                  <button disabled={submitting}>Continue to Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </ItemWrapper>
      )}
    </>
  );
};
