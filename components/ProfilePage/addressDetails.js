import { useState, useContext } from "react";
import { toast } from "react-toastify";

import { firestore } from "../../firebase/utils";
import { RandomID } from "../../util/helper";
import { AuthContext } from "../auth/auth";
import DetailsModal from "./style.details";
const initState = {
  type: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
};

export const Details = ({ isNew, onComplete, data }) => {
  const initState = {
    type: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
  };
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [form, setform] = useState(data || initState);
  const [submitting, setsubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setform((add) => ({ ...add, [name]: value }));
  }

  function getNewRandomID() {
    const rand = RandomID();
    const idArr = user?.address?.length && user.address.filter((f) => f.id);
    if (idArr && idArr.includes(rand)) getNewRandomID();
    return rand;
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isNew) {
      firestore
        .doc(`users/${user.id}`)
        .update({
          address: user?.address
            ? [...user?.address, { id: getNewRandomID(), ...form }]
            : [{ id: getNewRandomID(), ...form }],
        })
        .then(() => {
          toast.success(
            `Voila! Address added as your ${form.type.toUpperCase()} address.`
          );
          onComplete();
        })
        .catch((err) => toast.info(err.message));
    } else {
      const updatedAddr = user.address.map((addr) => {
        if (addr.id === data.id) return form;
        return addr;
      });
      firestore
        .doc(`users/${user.id}`)
        .update({
          address: updatedAddr,
        })
        .then(() => {
          toast.success(
            `Voila! Address updated as your ${form.type.toUpperCase()} address.`
          );
          onComplete();
        })
        .catch((err) => toast.info(err.message));
    }
  }

  const { line1, line2, type, city, state, postal_code } = form;
  return (
    <DetailsModal>
      <div className="edit-form">
        <form name="outer-form" onSubmitCapture={handleSubmit}>
          <div className="form-fields">
            <label>Type of Address</label>
            <input
              required
              name="type"
              value={type}
              type="text"
              onChange={handleChange}
              placeholder="Type of Address"
            />
          </div>
          <div className="form-fields">
            <label>Address Line 1</label>
            <input
              required
              disabled={submitting}
              type="text"
              name="line1"
              value={line1}
              onChange={handleChange}
              placeholder="Address Line 1"
            />
          </div>
          <div className="form-fields">
            <label>Address Line 2</label>
            <input
              required
              disabled={submitting}
              type="text"
              name="line2"
              value={line2}
              onChange={handleChange}
              placeholder="Address Line 2"
            />
          </div>
          <div className="form-fields">
            <label>City</label>
            <input
              required
              disabled={submitting}
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
              placeholder="City"
            />
          </div>
          <div className="form-fields">
            <label>State</label>
            <input
              required
              disabled={submitting}
              type="text"
              name="state"
              value={state}
              onChange={handleChange}
              placeholder="State"
            />
          </div>
          <div className="form-fields">
            <label>Postal Code</label>
            <input
              required
              disabled={submitting}
              type="text"
              name="postal_code"
              value={postal_code}
              onChange={handleChange}
              placeholder="Postal Code"
            />
          </div>
          <div className="form-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </DetailsModal>
  );
};
