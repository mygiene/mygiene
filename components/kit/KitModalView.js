import React, { useEffect, useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";
import { ModalWrapper } from "./style.kit";

const KitModalView = (props) => {
  const [open, setopen] = useState(false);

  // useEffect(() => {
  //   console.log(window);
  //   if (window !== undefined) {
  //     const modal = document.querySelector("#modal");
  //     // window.onclick = function (event) {
  //     //   console.log({ event });
  //     //   if (event.target == modal) {
  //     //     setopen(false);
  //     //   }
  //     // };
  //     const clickListner = window.addEventListener("click", (event) => {
  //       console.log({ event });
  //       if (event.target !== modal) {
  //         setopen(false);
  //       }
  //     });
  //     return () => {
  //       // clickListner;
  //     };
  //   }
  // }, []);

  function toggle() {
    setopen((s) => !s);
  }
  return (
    <>
      <FaIcon onClick={toggle} className="fa fa-arrow-down" />
      <ModalWrapper>
        <div
          id="modal"
          // style={open ? { display: "block" } : { display: "none" }}
        >
          <button onClick={() => setopen(false)}>X</button>
          <h2>{props.title}</h2>
          <img src={props.image} />
          <span>{props.content}</span>
        </div>
      </ModalWrapper>
    </>
  );
};

export default KitModalView;
