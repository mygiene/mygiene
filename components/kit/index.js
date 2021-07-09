import { useEffect, useState } from "react";
import StyledWrapper from "./style.kit";
const initialState = [
  { pId: "product1", pName: "kit 1" },
  { pId: "product2", pName: "kit 2" },
];

export const Kit = () => {
  const [products, setproducts] = useState(initialState);

  useEffect(() => {
    // products.map((m) => {
    //   const p = localStorage.getItem(m.pId);
    //   setproducts([...products]);
    // });
    const items = { ...localStorage };
    console.log(JSON.parse(JSON.stringify(items)));
  }, []);

  function add(pid) {
    const oldProductList = localStorage.getItem(pid);
    console.log({ oldProductList });
    if (!oldProductList)
      localStorage.setItem(pid, JSON.stringify({ pid, qt: 1 }));
    else {
      const parsedOldList = JSON.parse(oldProductList);
      localStorage.setItem(
        pid,
        JSON.stringify({ pid, qt: parsedOldList.qt + 1 })
      );
    }
  }
  function remove(pid) {
    const oldProductList = localStorage.getItem(pid);
    console.log({ oldProductList });
    if (!oldProductList)
      localStorage.setItem(pid, JSON.stringify({ pid, qt: 0 }));
    else {
      const parsedOldList = JSON.parse(oldProductList);
      if (parsedOldList.qt > 0)
        localStorage.setItem(
          pid,
          JSON.stringify({ pid, qt: parsedOldList.qt - 1 })
        );
    }
  }

  return (
    <StyledWrapper>
      Kit page
      <br /> <br />
      {products.map((p) => {
        // const product = products.filter((prod) => prod.pId === p.pid);
        return (
          <div
            style={{
              border: "1px solid black",
              margin: "2rem",
              padding: "2rem",
            }}
          >
            Product Name: {p.pName} Quantity: {}
            //localstorage.key(product[])
            <button onClick={() => add(p.pId)}>+</button>
            <button onClick={() => remove(p.pId)}>-</button>
          </div>
        );
      })}
    </StyledWrapper>
  );
};
