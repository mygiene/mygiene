import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import {
  auth,
  handleUserProfile,
  signInWithFacebook,
  signInWithGoogle,
} from "../../firebase/utils";
import SignUpWrapper from "./styles.signup";
import Link from "next/link";
import { FaIcon } from "../BaseComponent/FaIcon";

//import LoginBanner from "/loginAssets/login_banner.jpeg";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const inputRef = useRef();
  const [form, setform] = useState(initialState);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = form;

    // validation condition of form
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }

  function signWithFacebook(e) {
    e.preventDefault();
    try {
      signInWithFacebook();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }

  function signWithGoogle(e) {
    e.preventDefault();
    try {
      signInWithGoogle();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }

  const { email, password, displayName, confirmPassword } = form;

  return (
    <SignUpWrapper>
      <signup className="signup">
        <div className="signup__left">
          <div className="signup__content">
            <form onSubmit={handleSubmit}>
              <div className="signup__name">
                <label htmlFor="email">Name*</label>
                <br />
                <input
                  required
                  ref={inputRef}
                  type="text"
                  name="displayName"
                  autoComplete="off"
                  value={displayName}
                  onChange={handleFieldChange}
                  placeholder="Jane Doe"
                />{" "}
              </div>
              <div className="signup__email">
                <label htmlFor="email">E-mail*</label>
                <br />
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={handleFieldChange}
                  placeholder="abc@xyz.com"
                />{" "}
              </div>
              <div className="signup__password">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  required
                  type="password"
                  name="password"
                  value={password}
                  autoComplete="off"
                  onChange={handleFieldChange}
                  placeholder="******"
                />
              </div>
              <div className="signup__password">
                <label htmlFor="password">Confirm Password*</label>
                <br />
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  autoComplete="off"
                  onChange={handleFieldChange}
                  placeholder="******"
                />
              </div>
              <div className="signup-terms">
                <span>
                  <FaIcon className="fa-check-square-o" />
                </span>
                <Link href="/login">I agree the terms and conditions</Link>
              </div>
              <div className="signup__button">
                <button>Sign Up</button>
              </div>
            </form>
            <div className="signup__social">
              <hr />
              <span> or Sign Up with Google / Facebook</span>
              <hr />
            </div>
            <div className="signup__google">
              <button onClick={signWithGoogle}>
                <img src="/loginAssets/google.png" alt="google-icon" />
                <span>Sign Up with Google</span>
              </button>
            </div>
            <div className="signup__fb">
              <button onClick={signWithFacebook}>
                <img src="/loginAssets/fb.png" alt="facebook-icon" />
                <span>Sign Up with FaceBook</span>
              </button>
            </div>
            <div className="login-btn">
              <span>Already have an account ?</span>
              <Link href="/login">Login</Link>
            </div>
          </div>
        </div>
        <div className="signup__right">
          <img src="/loginAssets/login_banner.jpeg" alt="banner-image" />
        </div>
      </signup>
    </SignUpWrapper>
  );
};

export default SignUpPage;
