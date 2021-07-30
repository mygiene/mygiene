import { createContext, useEffect, useReducer, useState } from "react";
import { userTypes } from "./user/userActions";

const initialState = {};

export const StoreContext = createContext(initialState);

function reducer(state = initialState, action) {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case "SET_PENDING":
      return { ...state, pending: action.payload };
    default:
      return state;
  }
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartItems, updateCartItems] = useState(null);
  const [cartSubTotal, updateCartSubTotal] = useState(null);

  useEffect(() => {
    const oldCart = JSON.parse(localStorage.getItem("cart"));
    setCartItems(oldCart);
  }, []);

  function setCartItems(cart) {
    updateCartItems(cart);
  }
  function setCartSubTotal(total) {
    updateCartSubTotal(total);
  }

  return (
    <StoreContext.Provider
      value={[
        state,
        dispatch,
        cartItems,
        setCartItems,
        cartSubTotal,
        setCartSubTotal,
      ]}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
