import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { ForgotPassWrapper } from "../components/LoginPage/styles.login";
import { auth } from "../firebase/utils";

const recovery = () => {
  const inputRef = useRef();
  const [recoveryEmail, setRecoveryEmail] = useState("");

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const config = { url: "http://localhost:3010/login" };
      const res = await auth
        .sendPasswordResetEmail(recoveryEmail, config)
        .then(() => {
          toast.success(`Password recovery link sent on ${recoveryEmail}`);
          setRecoveryEmail("");
        });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
  return (
    <ForgotPassWrapper>
      <form onSubmit={handleSubmit}>
        <div
          className=""
          style={open ? { display: "block" } : { display: "none" }}
        >
          <h2>Recover Password</h2>
          <input
            ref={inputRef}
            type="email"
            name="recoveryEmail"
            value={recoveryEmail}
            onChange={(e) => setRecoveryEmail(e.target.value)}
            placeholder="Registered Email Id"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </ForgotPassWrapper>
  );
};

export default recovery;
