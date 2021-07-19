import React, { useEffect, useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";

import { Modal } from "react-responsive-modal";

const EditProfile = (props) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <FaIcon onClick={onOpenModal} className="fa fa-edit" />

      <Modal
        open={open}
        center
        onClose={onCloseModal}
        styles={{ modal: { background: "#f8e1e1" } }}
      >
        <div>
          <h3>Edit Profile</h3>
          <div className="edit-form">
            <form>
              <div>
                <label>Name</label>
                <input type="text" />
              </div>
              <br />
              <div>
                <label>Email</label>
                <input type="text" />
              </div>
              <div>
                <label>Contact</label>
                <input type="text" />
              </div>
              <div>
                <label>Address</label>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditProfile;
