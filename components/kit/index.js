import { useEffect, useState } from "react";
import { IsCSR } from "../../util/common";
import StyledWrapper from "./style.kit";
const allProd = [
  { pId: "product1", pName: "kit 1" },
  { pId: "product2", pName: "kit 2" },
];

export const Kit = () => {
  // const cartList = JSON.parse(localStorage.getItem("cart"));
  // console.log({ cartList });

  const [cart, setcart] = useState([]);
  const [products, setproducts] = useState(allProd);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cart"));
    if (storedData) {
      setcart(storedData);
    }
  }, []);

  useEffect(() => {
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
  console.log({ cart });

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
