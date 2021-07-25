import { CardElement, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import StyledWrapper from "./style.payment";

const initialState = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

const billingInitialState = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

export const PaymentDetails = () => {
  const elements = useElements();
  const [shippingAddress, setShippingAddress] = useState(initialState);
  const [billingAddress, setBillingAddress] = useState(initialState);
  const [recipientName, setRecipientName] = useState();
  const [nameOnCard, setnameOnCard] = useState();

  function handleFieldChangeShipping(event) {
    const { name, value } = event.target;
    setShippingAddress((add) => ({ ...add, [name]: value }));
  }

  function handleFieldChangeBilling(event) {
    const { name, value } = event.target;
    setBillingAddress((add) => ({ ...add, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const cardElement = elements.getElement("card");
    if (
      !shippingAddress.line1 ||
      !shippingAddress.line2 ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.postalCode ||
      !shippingAddress.country ||
      !billingAddress.line1 ||
      !billingAddress.line2 ||
      !billingAddress.city ||
      !billingAddress.state ||
      !billingAddress.postalCode ||
      !billingAddress.country ||
      !recipientName ||
      !nameOnCard
    )
      return;
  }

  const configCardElement = {
    iconStyle: "solid",
    style: {
      base: {
        fontSize: "16px",
      },
    },
    // hidePostalCode: true,
  };

  const { line1, line2, city, state, postalCode, country } = shippingAddress;
  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit}>
        <div className="shipping">
          <div className="shipping-title">Shipping Address</div>
          <div className="shipping-details">
            <input
              required
              type="text"
              name="line1"
              value={line1}
              onChange={handleFieldChangeShipping}
              placeholder="Address Line 1"
            />
            <input
              required
              type="text"
              name="line2"
              value={line2}
              onChange={handleFieldChangeShipping}
              placeholder="Address Line 2"
            />
            <input
              required
              type="text"
              name="city"
              value={city}
              onChange={handleFieldChangeShipping}
              placeholder="City"
            />
            <input
              required
              type="text"
              name="state"
              value={state}
              onChange={handleFieldChangeShipping}
              placeholder="State"
            />
            <input
              required
              type="text"
              name="postalCode"
              value={postalCode}
              onChange={handleFieldChangeShipping}
              placeholder="Postal Code"
            />

            <CountryDropdown
              required
              onChange={(val) =>
                handleFieldChangeShipping({
                  target: {
                    name: "country",
                    value: val,
                  },
                })
              }
              value={shippingAddress.country}
              className="country-dropdown"
              valueType="full"
            />

            <input
              required
              type="text"
              name="recipientName"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Recipient Name"
            />
          </div>
        </div>
        <div className="billing">
          <div className="billing-title">Billing Address</div>
          <div className="billing-details">
            <input
              required
              type="text"
              name="line1"
              value={billingAddress.line1}
              onChange={handleFieldChangeBilling}
              placeholder="Address Line 1"
            />
            <input
              required
              type="text"
              name="line2"
              value={billingAddress.line2}
              onChange={handleFieldChangeBilling}
              placeholder="Address Line 2"
            />
            <input
              required
              type="text"
              name="city"
              value={billingAddress.city}
              onChange={handleFieldChangeBilling}
              placeholder="City"
            />
            <input
              required
              type="text"
              name="state"
              value={billingAddress.state}
              onChange={handleFieldChangeBilling}
              placeholder="State"
            />
            <input
              required
              type="text"
              name="postalCode"
              value={billingAddress.postalCode}
              onChange={handleFieldChangeBilling}
              placeholder="Postal Code"
            />
            <CountryDropdown
              required
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
              valueType="full"
            />

            <div className="card-details">
              <h3>Card Details</h3>
              <input
                required
                type="text"
                name="nameOnCard"
                value={nameOnCard}
                onChange={(e) => setnameOnCard(e.target.value)}
                placeholder="Name on Card"
              />
              <br />
              <CardElement options={configCardElement} />
            </div>
          </div>
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </StyledWrapper>
  );
};
