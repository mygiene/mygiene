import React from "react";
import SignUpWrapper from "./styles.signup";
//import LoginBanner from "/loginAssets/login_banner.jpeg";
const SignUpPage = () => {
  return (
    <SignUpWrapper>
      <signup className="signup">
        <div className="signup__left">
          <div className="signup__content">
            <div className="signup__name">
              <label for="email">Name*</label>
              <br />
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="signup__email">
              <label for="email">Name*</label>
              <br />
              <input type="email" name="email" placeholder="Name" />
            </div>
            <div className="signup__password">
              <label for="password">Password*</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
            </div>
            <div className="signup__password">
              <label for="password">Password*</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="confirm your Password"
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
