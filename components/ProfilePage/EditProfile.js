import React, { useContext, useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";

import { Modal } from "react-responsive-modal";
import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";

const EditProfile = (props) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [form, setform] = useState({
    displayName: props?.name || "",
    email: props?.email || "",
    mobile: props?.mobile || "",
    address: props?.address || [],
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    firestore
      .doc(`users/${user.id}`)
      .update({
        ...form,
      })
      .then(() => {
        console.log("success");
        onCloseModal();
      })
      .catch((err) => console.log(err));
  }
  const { displayName, email, address, mobile } = form;
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
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  name="displayName"
                  onChange={handleFieldChange}
                  type="text"
                  value={displayName}
                />
              </div>
              <br />
              <div>
                <label>Email</label>
                <input
                  name="email"
                  onChange={handleFieldChange}
                  type="text"
                  value={email}
                />
              </div>
              <div>
                <label>Contact</label>
                <input
                  name="mobile"
                  onChange={handleFieldChange}
                  type="text"
                  value={mobile}
                />
              </div>
              <div>
                {address.length > 0 &&
                  address.map((m) => (
                    <div>
                      <label>Address</label>
                      <input name="type" value={m.type} type="text" />
                      <input
                        name="address"
                        onChange={handleFieldChange}
                        type="text"
                        value={m.address}
                      />
                    </div>
                  ))}
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditProfile;
