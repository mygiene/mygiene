import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaIcon } from "../components/BaseComponent/FaIcon";
import { ForgotPassWrapper } from "../components/LoginPage/styles.login";
import { MetaHead } from "../components/Meta-Head";
import { auth } from "../firebase/utils";

const Recovery = () => {
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
    <>
      <MetaHead title="Recover Password" />
      <ForgotPassWrapper>
        {/* <form onSubmit={handleSubmit}>
          <div
            className=""
            style={open ? { display: "block" } : { display: "none" }}
          >
            <h2>Recover Password</h2>
            <input
              ref={inputRef}
              type="email"
              name="recoveryEmail"
              autoComplete="off"
              value={recoveryEmail}
              onChange={(e) => setRecoveryEmail(e.target.value)}
              placeholder="Registered Email Id"
            />
            <button type="submit">Submit</button>
          </div>
        </form> */}
        <div className="recovery">
          <div className="top-lock">
            <div className="lock-icon-outer">
              <FaIcon className="fa-lock" />
              <hr />
              <div className="label-text">
                <h3>Can't Login ?</h3>
                <h4>Restore Access to your account</h4>
              </div>
            </div>
            <hr />
            <form className="email-outer" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">
                  We will send a link to recover your password on
                </label>
                <br />
                <input
                  required
                  ref={inputRef}
                  type="email"
                  name="recoveryEmail"
                  autoComplete="off"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  placeholder="Your Email Address"
                />
              </div>
              <div className="send_button">
                <button type="submit">Request Reset Link</button>
              </div>
            </form>
          </div>
        </div>
      </ForgotPassWrapper>
    </>
  );
};

export default Recovery;
