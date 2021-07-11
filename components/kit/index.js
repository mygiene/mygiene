import { useContext, useEffect, useState } from "react";
import { firestore } from "../../firebase/utils";
import { StoreContext } from "../../store";
import { AuthContext } from "../auth/auth";
import StyledWrapper from "./style.kit";

const allProd = [
  { pId: "product1", pName: "kit 1" },
  { pId: "product2", pName: "kit 2" },
];

export const Kit = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  const [, , , setCartItems] = useContext(StoreContext);

  const [cart, setcart] = useState([]);
  const [products, setproducts] = useState(allProd);
  console.log({ cart });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cart"));
    if (storedData) {
      setcart(storedData);
    }
  }, []);

  useEffect(() => {
    if (user) {
      firestore
        .doc(`users/${user.id}`)
        .update({ cartItems: cart })
        .then((res) => console.log("updated cart from kit page"))
        .catch((err) => console.log(err.message));
    }
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function add(product) {
    const prod = cart.find((p) => p.pId === product.pId);
    if (!prod) {
      setcart((oldCart) => [...oldCart, { ...product, qt: 1 }]);
    } else {
      const updatedCart = cart.map((p) =>
        p.pId === prod.pId ? { ...p, qt: p.qt + 1 } : { ...p }
      );
      setcart(updatedCart);
    }
  }
  function remove(product) {
    const prod = cart.find((p) => p.pId === product.pId);
    if (!prod) {
      //skip and do nothing
    } else if (prod.qt === 1) {
      const updatedCart = cart.filter((f) => f.pId !== prod.pId);
      setcart(updatedCart);
    } else {
      const updatedCart = cart.map((p) =>
        p.pId === prod.pId ? { ...p, qt: (p.qt || 1) - 1 } : { ...p }
      );
      setcart(updatedCart);
    }
  }

  return (
    <StyledWrapper>
      Kit page
      <br /> <br />
      {products.map((p) => {
        return (
          <div
            style={{
              border: "1px solid black",
              margin: "2rem",
              padding: "2rem",
            }}
          >
            Product Name: {p.pName}
            <button onClick={() => add(p)}>+</button>
            <button onClick={() => remove(p)}>-</button>
          </div>
        );
      })}
    </StyledWrapper>
  );
};
