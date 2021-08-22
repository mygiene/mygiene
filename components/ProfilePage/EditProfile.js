import React, { useContext, useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";

import { Modal } from "react-responsive-modal";
import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";
import EditWrapper from "./style.modal";

const initialState = {
  newType: "",
  newAddress: "",
};

const EditProfile = (props) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [form, setform] = useState({
    displayName: props?.displayName || "",
    email: props?.email || "",
    mobile: props?.mobile || "",
    address: props?.address || [],
  });
  const [addressForm, setaddressForm] = useState(initialState);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  function handleFieldAddressChange(event) {
    const { name, value } = event.target;
    setaddressForm({ ...addressForm, [name]: value });
  }

  function updateAddress(id, e) {
    e.preventDefault();
    if (id === null || id === undefined) {
      setform((f) => ({
        ...f,
        address: [
          ...f.address.map((m, i) => ({ id: i, ...m })),
          {
            id: f.address.length,
            type: addressForm.newType,
            address: addressForm.newAddress,
          },
        ],
      }));
      setaddressForm(initialState);
    } else {
      const { name, value } = e.target;
      setform((f) => ({
        ...f,
        address: f.address.map((m) => {
          if (m.id === id) return { ...m, [name]: value };
          else return { ...m };
        }),
      }));
    }
  }

  function remove(id, e) {
    e.preventDefault();
    setform((f) => {
      let val;
      return {
        ...f,
        address: f.address
          .map((m) => {
            if (val != null || val != undefined) {
              const updatedNxt = { ...m, id: val };
              val = val + 1;
              return updatedNxt;
            }
            if (m.id !== id) return { ...m };
            else {
              val = id;
              return null;
            }
          })
          .filter(Boolean),
      };
    });
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
  const { newType, newAddress } = addressForm;

  return (
    <>
      <button onClick={onOpenModal}>
        <FaIcon className="fa fa-edit" />
        <span>Edit</span>
      </button>
      <Modal
        open={open}
        center
        onClose={onCloseModal}
        styles={{
          modal: {
            background: "#f8e1e1",
            width: "90%",

            margin: "0",
            padding: "0",
          },
        }}
      >
        <EditWrapper>
          <div className="edit-modal">
            <h3>Edit Profile</h3>
            <div className="edit-form">
              <form onSubmit={handleSubmit}>
                <div className="form-fields">
                  <label>Name</label>
                  <input
                    required
                    name="displayName"
                    onChange={handleFieldChange}
                    type="text"
                    value={displayName}
                  />
                </div>

                <div className="form-fields">
                  <label>Email</label>
                  <input
                    required
                    name="email"
                    onChange={handleFieldChange}
                    type="text"
                    placeholder="Please Enter Valid Email "
                    value={email}
                    disabled={Boolean(props?.email)}
                  />
                </div>
                <div className="form-fields">
                  <label>Contact</label>
                  <input
                    required
                    name="mobile"
                    onChange={handleFieldChange}
                    type="text"
                    value={mobile}
                  />
                </div>
                {address.length <= 1 && (
                  <form onSubmitCapture={(e) => updateAddress(null, e)}>
                    <div className="form-fields-address">
                      <label>Add / Delete Address Dynamically</label>
                      <div className="address-fields">
                        <div>
                          <input
                            required
                            name="newType"
                            value={newType}
                            type="text"
                            onChange={handleFieldAddressChange}
                            placeholder="Type of Address"
                          />
                          <textarea
                            required
                            name="newAddress"
                            onChange={handleFieldAddressChange}
                            type="text"
                            value={newAddress}
                            placeholder="Enter your Address"
                          />
                          <div>
                            <button type="submit">
                              <FaIcon className="fa fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}

                {address.length > 0 && (
                  <div className="fetch-address">
                    <form>
                      {address.map((m) => (
                        <div className="address-card">
                          <div className="input-fields">
                            <input
                              name="type"
                              value={m.type}
                              type="text"
                              onChange={(e) => updateAddress(m.id, e)}
                              placeholder="Type of Address"
                            />
                          </div>
                          <div className="input-fields">
                            <textarea
                              name="address"
                              value={m.address}
                              onChange={(e) => updateAddress(m.id, e)}
                              type="text"
                              rows="3"
                              placeholder="Your Address"
                            />
                          </div>
                          <div className="delete-button">
                            <button onClick={(e) => remove(m.id, e)}>
                              <FaIcon className="fa fa-trash" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </form>
                  </div>
                )}

                {/* {address.length > 0 && (
                  <div className="form-fields-address">
                    <div className="address-fields">
                      <form>
                        <table>
                          {address.map((m, index) => (
                            <tr>
                              <td>
                                <input
                                  name="type"
                                  value={m.type}
                                  type="text"
                                  onChange={(e) => updateAddress(m.id, e)}
                                  placeholder="Type of Address"
                                />
                              </td>
                              <td>
                                <textarea
                                  name="address"
                                  value={m.address}
                                  onChange={(e) => updateAddress(m.id, e)}
                                  type="text"
                                  placeholder="Your Address"
                                />
                              </td>
                              <td>
                                <button onClick={(e) => remove(m.id, e)}>
                                  <FaIcon className="fa fa-trash" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </table>
                      </form>
                      
                    </div>
                  </div>
                )} */}
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
