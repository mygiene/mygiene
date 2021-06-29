import { useContext } from "react";
import { auth } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  const [state] = useContext(StoreContext);
  function signout() {
    auth
      .signOut()
      .then((r) => dispatch({ type: "isLoggedIn", payload: false }))
      .catch((err) => console.log({ err }));
  }
  console.log({ state });
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
