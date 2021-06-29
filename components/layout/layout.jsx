import { useContext } from "react";
import { auth } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  const [state, dispatch] = useContext(StoreContext);
  function signout() {
    auth
      .signOut()
      .then((r) => console.log(r))
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
