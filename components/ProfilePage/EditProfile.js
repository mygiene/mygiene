import React, { useContext, useState } from "react";
import { FaIcon } from "../BaseComponent/FaIcon";

import { Modal } from "react-responsive-modal";
import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";
import EditWrapper from "./style.modal";
import { Details } from "./addressDetails";
import { toast } from "react-toastify";
import { FormWrapper } from "./style.profile";

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
  const [modal, setmodal] = useState(false);
  const [modaldata, setmodaldata] = useState();
  const [editmodal, setEditModal] = useState(false);

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
    const proceed = confirm(
      "Are you sure you want to delete this address permanently?"
    );
    if (proceed) {
      const updatedAddress = user.address.filter((m) => m.id !== id);

      firestore
        .doc(`users/${user.id}`)
        .update({
          address: updatedAddress,
        })
        .then(() => {
          toast.info("Address removed successfully!");
        })
        .catch((err) => toast.info(err.message));
    }
  }

  function editDetail(data, e) {
    e.preventDefault();
    setmodaldata(data);
    setEditModal((m) => !m);
  }

  function handleSubmit(e) {
    e.preventDefault();
    firestore
      .doc(`users/${user.id}`)
      .update({
        ...form,
      })
      .then(() => {
        onCloseModal();
      })
      .catch((err) => console.log(err));
  }

  function formattedAddress(add) {
    const line1 = [add.line1, add.line2].join(", ");
    const line2 = [add.city, add.state].join(", ");
    return [line1, line2, add.postal_code].join("\r\n");
  }

  const { displayName, email, address, mobile } = form;
  const { newType, newAddress } = addressForm;

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <span>Edit</span>
        <FaIcon className="fa-edit fa-lg" />
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
              <form name="outer-form" onSubmit={handleSubmit}>
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
                <FormWrapper>
                  <label>Add / Delete Address Dynamically</label>{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setmodal(true);
                    }}
                  >
                    <FaIcon className="fa fa-plus" />
                  </button>
                </FormWrapper>
                <Modal
                  open={modal}
                  center
                  onClose={() => setmodal(false)}
                  styles={{ modal: { background: "#f8e1e1", width: "80%" } }}
                >
                  <Details isNew onComplete={() => setmodal(false)} />
                </Modal>

                {user.address && user.address.length > 0 && (
                  <div className="fetch-address">
                    <form>
                      {user.address.map((m) => (
                        <div className="address-card">
                          <div className="input-fields">
                            <div>{m.type}</div>
                          </div>
                          <div className="input-fields">
                            <div>{formattedAddress(m)}</div>
                          </div>
                          <div className="delete-button">
                            <button onClick={(e) => remove(m.id, e)}>
                              <FaIcon className="fa fa-trash" />
                            </button>
                          </div>
                          <div className="edit-button">
                            <button onClick={(e) => editDetail(m, e)}>
                              <FaIcon className="fa fa-pencil" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </form>
                  </div>
                )}
                <Modal
                  open={editmodal}
                  center
                  onClose={() => setEditModal(false)}
                  styles={{
                    modal: { background: "#f8e1e1", width: "80%" },
                  }}
                >
                  <Details
                    data={modaldata}
                    onComplete={() => setEditModal(false)}
                  />
                </Modal>
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
