import React, { useState } from "react";
import SignUpWrapper from "./styles.signup";
//import LoginBanner from "/loginAssets/login_banner.jpeg";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const [form, setform] = useState(initialState);
  function handleFieldChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  const { email, password, displayName, confirmPassword } = form;

  return (
    <SignUpWrapper>
      <signup className="signup">
        <div className="signup__left">
          <div className="signup__content">
            <div className="signup__name">
              <label for="email">Name*</label>
              <br />
              <input
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleFieldChange}
                placeholder="Jane Doe"
              />{" "}
            </div>
            <div className="signup__email">
              <label for="email">E-mail*</label>
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleFieldChange}
                placeholder="abc@xyz.com"
              />{" "}
            </div>
            <div className="signup__password">
              <label for="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleFieldChange}
                placeholder="******"
              />
            </div>
            <div className="signup__password">
              <label for="password">Confirm Password*</label>
              <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleFieldChange}
                placeholder="******"
              />
            </div>
            <div className="signup__button">
              <button>Sign Up</button>
            </div>
            <div className="signup__social">
              <hr />
              <span> or Sign Up with Google / Facebook</span>
              <hr />
            </div>
            <div className="signup__google">
              <button>
                <img src="/loginAssets/google.png" />
                Sign Up with Google
              </button>
            </div>
            <div className="signup__fb">
              <button>
                <img src="/loginAssets/fb.png" />
                Sign Up with FaceBook
              </button>
            </div>
          </div>
        </div>
        <div className="signup__right">
          <img src="/loginAssets/login_banner.jpeg" />
        </div>
      </signup>
    </SignUpWrapper>
  );
};

export default SignUpPage;
