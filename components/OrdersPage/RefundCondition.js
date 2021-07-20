import React, { useEffect, useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";

import { Modal } from "react-responsive-modal";
import Link from "next/link";
import RefundWrapper from "./style.modal";

const RefundCondition = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <button onClick={onOpenModal}>Raise a Refund/Return Request</button>

      <Modal
        open={open}
        center
        onClose={onCloseModal}
        styles={{ modal: { background: "#f8e1e1" } }}
      >
        <RefundWrapper>
          <h3>Refund/Return Request</h3>
          <div className="content">
            <span>
              At Mygiene we stand behind our product and provide a level of
              quality consistent with industry standards. Please contact Support
              to begin the return and we will walk you through the process at
              <a href="mailto:info@mygiene.com.au">info@mygiene.com.au</a>
            </span>
            <span>
              FYI : For better reach please add subject as "Refund/Return
              Request : [Order_id]"
            </span>
          </div>
        </RefundWrapper>
      </Modal>
    </>
  );
};

export default RefundCondition;
