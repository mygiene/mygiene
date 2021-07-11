import { useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";
import { ItemWrapper } from "./styles.cart";

export const CartItem = (props) => {
  const [expressDelivery, setExpressDelivery] = useState(false);
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
              <button>
                <FaIcon className="fa-minus" />
              </button>
              <span>{props.qt}</span>
              <button>
                <FaIcon className="fa-plus" />
              </button>
            </div>
            <div className="item-price">
              $ 150.00
              <span className="remove-btn">
                <button>Remove</button>
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
                  checked={expressDelivery}
                  onChange={() => setExpressDelivery((s) => !s)}
                />
              </span>
              <label for={`express-delivery-${props.pId}`}>
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
