import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { toast } from "react-toastify";
import { firestore, fixedByTwoDecimal } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { ExpressDelivery, StandardDelivery } from "../../util/helper";
import { AuthContext } from "../auth/auth";
import { FaIcon } from "../BaseComponent/FaIcon";
import { ApplePay } from "./apple-pay";
import StyledWrapper from "./style.payment";
import Link from "next/dist/client/link";
const initialState = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "AU",
};

export const deliveryStatus = {
  "Order Placed": 1,
  Packed: 2,
  Shipped: 3,
  Delivered: 4,
  "Refund Initiated": 5,
  "Refund Completed": 6,
  "Refund Declined": 7,
  "Re-delivered": 8,
  Replaced: 9,
};

export const PaymentDetails = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cardElement = elements?.getElement("card");

  const {
    authState: { user },
  } = useContext(AuthContext);
  const [, , cartItems, setCartItems, cartSubTotal, setCartSubTotal, product] =
    useContext(StoreContext);
  const [shippingAddress, setShippingAddress] = useState(initialState);
  const [billingAddress, setBillingAddress] = useState(initialState);
  const [billingAdd, setBillingAdd] = useState(false);
  const [recipientName, setRecipientName] = useState();
  const [receiptEmail, setReceiptEmail] = useState();
  const [nameOnCard, setnameOnCard] = useState();
  const [submitting, setsubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (billingAdd) {
      setBillingAddress(shippingAddress);
    }
  }, [billingAdd]);

  cardElement?.on("change", function (event) {
    setIsCompleted(false);
    var displayError = document.getElementById("card-errors");
    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = "";
    }
    if (event.complete) {
      setIsCompleted(true);
    }
  });
  const total =
    cartItems?.delivery === "express"
      ? fixedByTwoDecimal(Number(cartSubTotal) + Number(ExpressDelivery.price))
      : fixedByTwoDecimal(
          Number(cartSubTotal) + Number(StandardDelivery.price)
        );

  function handleFieldChangeShipping(event) {
    const { name, value } = event.target;
    setShippingAddress((add) => ({ ...add, [name]: value, country: "AU" }));
  }

  function handleFieldChangeBilling(event) {
    const { name, value } = event.target;
    setBillingAddress((add) => ({ ...add, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      typeof cartItems?.delivery !== "string" ||
      cartItems?.pId !== "grooming_kit" ||
      Number(cartItems?.price) < 1 ||
      cartItems?.qt < 1 ||
      Number(cartSubTotal) < 1
    ) {
      toast.info("Something is wrong with your cart.");
      router.push("/");
    }

    if (
      !shippingAddress.line1 ||
      !shippingAddress.line2 ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.postal_code ||
      !shippingAddress.country ||
      !billingAddress.line1 ||
      !billingAddress.line2 ||
      !billingAddress.city ||
      !billingAddress.state ||
      !billingAddress.postal_code ||
      !billingAddress.country ||
      !recipientName ||
      !nameOnCard
    )
      return;
    setsubmitting(true);
    delete billingAddress.id;
    delete billingAddress.type;
    delete shippingAddress.id;
    delete shippingAddress.type;

    await axios
      .post("/api/payments", {
        amount: Math.ceil(total * 100),
        receiptEmail,
        shipping: {
          name: recipientName,
          address: { ...shippingAddress },
        },
        outOfStock: product.outOfStock,
      })
      .then(({ data: clientSecret }) => {
        stripe
          .createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: {
              name: nameOnCard,
              address: { ...billingAddress },
            },
          })
          .then(({ paymentMethod }) => {
            stripe
              .confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
              })
              .then(async ({ paymentIntent }) => {
                return new Promise((resolve, reject) => {
                  firestore
                    .collection("orders")
                    .add({
                      paymentIntentId: paymentIntent.id,
                      receiptEmail: paymentIntent.receipt_email,
                      shippingAddress: paymentIntent.shipping.address,
                      recipientName: recipientName,
                      totalAmount: fixedByTwoDecimal(
                        Number(paymentIntent.amount) / 100
                      ),
                      cartItems,
                      orderUserId: user.id,
                      createdAt: new Date(),
                      status: deliveryStatus["Order Placed"],
                      statusDateTime: new Date(),
                      statusHistory: [
                        {
                          status: deliveryStatus["Order Placed"],
                          dateTime: new Date(),
                        },
                      ],
                    })
                    .then(async (orderRef) => {
                      await firestore
                        .doc(`users/${user.id}`)
                        .update({
                          cartItems: null,
                        })
                        .then(() => {
                          resolve();
                          router.push(`/success?orderId=${orderRef.id}`);
                        });
                    })
                    .catch((err) => {
                      reject(err);
                      toast.info(err.message);
                      setsubmitting(false);
                    });
                });
              })
              .catch((err) => {
                toast.info(err.message);
                setsubmitting(false);
              });
          });
      })
      .catch((err) => {
        setsubmitting(false);
        console.log({ err });
        toast.info(err.message);
      });
  }

  function handleChangeDropdown(e) {
    const addressPicked =
      user.address.filter((f) => f.id === e.target.value).pop() || initialState;
    setShippingAddress({ ...addressPicked, country: "AU" });
  }

  const configCardElement = {
    iconStyle: "solid",
    style: {
      base: {
        fontSize: "16px",
      },
    },
    hidePostalCode: true,
  };
  const { line1, line2, city, state, postal_code } = shippingAddress;
  return (
    <>
      <StyledWrapper>
        <div className="checkout-page">
          <div className="navigation">
            <div className="back">
              <Link href="/cart">
                <a>
                  <FaIcon className="fa fa-long-arrow-left" />
                  <span>Back</span>
                </a>
              </Link>
            </div>
            <div className="footer__logo">
              <Link href="/">
                <a>
                  <h2>mygiene</h2>
                </a>
              </Link>
            </div>
          </div>
          <div className="head__title">
            <h3>Complete your Order</h3>
          </div>
          <div className="product__card">
            <div className="card">
              <div className="image-outer">
                <div className="product-image">
                  <div className="image">
                    <img src="/kitAssets/cover.png" />{" "}
                  </div>
                </div>
              </div>
              <div className="product__name">
                <span>{product?.name}</span>
              </div>
              <div className="quantity">
                <span>
                  Qt : <span>{cartItems?.qt}</span>
                </span>
              </div>
              <div className="price">
                <span>$ {total} AUD</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="shipping">
              <div className="shipping-title">
                <span>Shipping Address</span>
                {user?.address.length > 0 ? (
                  <div className="dropdown">
                    <select onChange={handleChangeDropdown}>
                      <option value="none-of-these">
                        Pick from Saved Address
                      </option>
                      {user.address.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.type}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <p>No address saved in profile</p>
                )}
              </div>
              <div className="shipping-details">
                <input
                  required
                  disabled={submitting}
                  type="text"
                  name="line1"
                  value={line1}
                  onChange={handleFieldChangeShipping}
                  placeholder="Address Line 1"
                />
                <input
                  required
                  disabled={submitting}
                  type="text"
                  name="line2"
                  value={line2}
                  onChange={handleFieldChangeShipping}
                  placeholder="Address Line 2"
                />
                <input
                  required
                  disabled={submitting}
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleFieldChangeShipping}
                  placeholder="City"
                />
                <input
                  required
                  disabled={submitting}
                  type="text"
                  name="state"
                  value={state}
                  onChange={handleFieldChangeShipping}
                  placeholder="State"
                />
                <input
                  required
                  disabled={submitting}
                  type="text"
                  name="postal_code"
                  value={postal_code}
                  onChange={handleFieldChangeShipping}
                  placeholder="Postal Code"
                />

                <CountryDropdown
                  required
                  disabled
                  onChange={(val) =>
                    handleFieldChangeShipping({
                      target: {
                        name: "country",
                        value: "AU",
                      },
                    })
                  }
                  value={"AU"}
                  className="country-dropdown"
                  valueType="short"
                />

                <input
                  required
                  disabled={submitting}
                  type="text"
                  name="recipientName"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Recipient Name"
                />
                <input
                  required
                  disabled={submitting}
                  type="email"
                  name="receiptEmail"
                  value={receiptEmail}
                  onChange={(e) => setReceiptEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="billing">
              <div className="billing-title">Billing Address</div>
              <div>
                <input
                  id="billing-address"
                  disabled={submitting}
                  type="checkbox"
                  name="standardDelivery"
                  autoComplete="off"
                  checked={billingAdd}
                  onChange={() => setBillingAdd((b) => !b)}
                />
                <label htmlFor="billing-address">
                  Same as Shipping Address
                </label>
              </div>{" "}
              <br />
              {!billingAdd && (
                <div className="billing-details">
                  <input
                    required
                    disabled={submitting}
                    type="text"
                    name="line1"
                    value={billingAddress.line1}
                    onChange={handleFieldChangeBilling}
                    placeholder="Address Line 1"
                  />
                  <input
                    required
                    disabled={submitting}
                    type="text"
                    name="line2"
                    value={billingAddress.line2}
                    onChange={handleFieldChangeBilling}
                    placeholder="Address Line 2"
                  />
                  <input
                    required
                    disabled={submitting}
                    type="text"
                    name="city"
                    value={billingAddress.city}
                    onChange={handleFieldChangeBilling}
                    placeholder="City"
                  />
                  <input
                    required
                    disabled={submitting}
                    type="text"
                    name="state"
                    value={billingAddress.state}
                    onChange={handleFieldChangeBilling}
                    placeholder="State"
                  />
                  <input
                    required
                    type="text"
                    disabled={submitting}
                    name="postal_code"
                    value={billingAddress.postal_code}
                    onChange={handleFieldChangeBilling}
                    placeholder="Postal Code"
                  />
                  <CountryDropdown
                    required
                    disabled={submitting}
                    onChange={(val) =>
                      handleFieldChangeBilling({
                        target: {
                          name: "country",
                          value: val,
                        },
                      })
                    }
                    value={billingAddress.country}
                    className="country-dropdown"
                    valueType="short"
                  />
                </div>
              )}
              <div className="card-details">
                <h3>Card Details</h3>
                <input
                  required
                  disabled={submitting}
                  type="text"
                  name="nameOnCard"
                  value={nameOnCard}
                  onChange={(e) => setnameOnCard(e.target.value)}
                  placeholder="Name on Card"
                />
                <br />

                <CardElement
                  id="card-elem"
                  required
                  disabled={submitting}
                  options={configCardElement}
                />
                <div id="card-errors" role="alert"></div>
              </div>
            </div>
            <button disabled={submitting || !isCompleted} type="submit">
              Pay Now
            </button>
          </form>
        </div>
      </StyledWrapper>
    </>
  );
};
