import React, { useContext, useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";

import { Modal } from "react-responsive-modal";
import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";
import EditWrapper from "./style.modal";
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
        styles={{ modal: { background: "#f8e1e1", width: "80%" } }}
      >
        <EditWrapper>
          <div className="edit-modal">
            <h3>Edit Profile</h3>
            <div className="edit-form">
              <form onSubmit={handleSubmit}>
                <div className="form-fields">
                  <label>Name</label>
                  <input
                    name="displayName"
                    onChange={handleFieldChange}
                    type="text"
                    value={displayName}
                  />
                </div>

                <div className="form-fields">
                  <label>Email</label>
                  <input
                    name="email"
                    onChange={handleFieldChange}
                    type="text"
                    value={email}
                  />
                </div>
                <div className="form-fields">
                  <label>Contact</label>
                  <input
                    name="mobile"
                    onChange={handleFieldChange}
                    type="text"
                    value={mobile}
                  />
                </div>
                <div className="form-fields-address">
                  <label>Address</label>
                  <div className="address-fields">
                    {address.length > 0 &&
                      address.map((m) => (
                        <div>
                          <input
                            name="type"
                            value={m.type}
                            type="text"
                            placeholder="Type of Address"
                          />
                          <textarea
                            name="address"
                            // onChange={handleFieldChange}
                            type="text"
                            // value={m.address}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="form-button">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </EditWrapper>
      </Modal>
    </>
  );
};

export default EditProfile;
