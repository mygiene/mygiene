import React, { useEffect, useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";
import ModalWrapper from "./style.Modal";
import { Modal } from "react-responsive-modal";
const KitModalView = (props) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <FaIcon onClick={onOpenModal} className="fa fa-arrow-down" />

      <Modal
        open={open}
        center
        onClose={onCloseModal}
        styles={{ modal: { background: "#f8e1e1" } }}
      >
        <ModalWrapper>
          <div className="item">
            <h3>{props.title}</h3>
            <div className="item__content">
              <div className="item__content-image">
                <img src={props.image} />
              </div>
              <div className="item__content-text">
                <span>{props.content}</span>
              </div>
            </div>
          </div>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default KitModalView;
