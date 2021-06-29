import React from "react";
import LoginWrapper from "./styles.login";
//import LoginBanner from "/loginAssets/login_banner.jpeg";
const LoginPage = () => {
  return (
    <LoginWrapper>
      <login className="login">
        <div className="login__left">
          <div className="login__content">
            <div className="login__email">
              <label for="email">Email*</label>
              <br />
              <input type="email" name="email" placeholder="Name" />
            </div>
            <div className="login__password">
              <label for="password">Password*</label>
              <br />
              <input
                type="password"
                name="name"
                placeholder="Enter your Password"
              />
            </div>
            <div className="login__button">
              <button>Sign In</button>
            </div>
            <div className="login__social">
              <hr />
              <span> or Sign In with Google / Facebook</span>
              <hr />
            </div>
            <div className="login__google">
              <button>
                <img src="/loginAssets/google.png" />
                Sign In with Google
              </button>
            </div>
            <div className="login__fb">
              <button>
                <img src="/loginAssets/fb.png" />
                Sign In with FaceBook
              </button>
            </div>
          </div>
        </div>
        <div className="login__right">
          <img src="/loginAssets/login_banner.jpeg" />
        </div>
      </login>
    </LoginWrapper>
  );
};

export default LoginPage;
