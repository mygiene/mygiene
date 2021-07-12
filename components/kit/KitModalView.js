import React from "react";
import { ModalWrapper } from "./style.kit";

const KitModalView = (props) => {
  return (
    <ModalWrapper>
      <div>
        <h2>{props.name}</h2>
        <img src={props.image} />
        <span>{props.content}</span>
      </div>
    </ModalWrapper>
  );
};

export default KitModalView;
