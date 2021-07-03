import { createContext, useReducer } from "react";
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

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;