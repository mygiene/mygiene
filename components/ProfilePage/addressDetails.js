import { useState, useContext } from "react";
import { toast } from "react-toastify";

import { firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";

const initState = {
  type: "af",
  line1: "ad",
  line2: "sd",
  city: "asdf",
  state: "sdfa",
  postal_code: "asdf",
};

export const Details = ({ isNew, onComplete }) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [form, setform] = useState(initState);
  const [submitting, setsubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setform((add) => ({ ...add, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isNew) {
      firestore
        .doc(`users/${user.id}`)
        .update({
          address: [
            ...user?.address,
            { id: user.address?.length || 0, ...form },
          ],
        })
        .then(() => {
          toast.success("Voila! Address added.");
          onComplete();
        })
        .catch((err) => toast.info(err.message));
    }
  }
  console.log({ user, isNew });

  const { line1, line2, type, city, state, postal_code } = form;
  return (
    <div>
      <form></form>
      <form name="inner-form" onSubmitCapture={handleSubmit}>
        <input
          required
          name="type"
          value={type}
          type="text"
          onChange={handleChange}
          placeholder="Type of Address"
        />
        <input
          required
          disabled={submitting}
          type="text"
          name="line1"
          value={line1}
          onChange={handleChange}
          placeholder="Address Line 1"
        />
        <input
          required
          disabled={submitting}
          type="text"
          name="line2"
          value={line2}
          onChange={handleChange}
          placeholder="Address Line 2"
        />
        <input
          required
          disabled={submitting}
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          required
          disabled={submitting}
          type="text"
          name="state"
          value={state}
          onChange={handleChange}
          placeholder="State"
        />
        <input
          required
          disabled={submitting}
          type="text"
          name="postal_code"
          value={postal_code}
          onChange={handleChange}
          placeholder="Postal Code"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
