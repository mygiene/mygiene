import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { auth, signInWithGoogle } from "../../firebase/utils";
import LoginWrapper, { ForgotPassWrapper } from "./styles.login";
import Link from "next/link";
import Image from "next/image";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
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
    console.log("working");
    try {
      const { email, password } = form;
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log({ res });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }

  const { email, password } = form;

  return (
    <>
      <LoginWrapper>
        <login className="login">
          <div className="login__left">
            <div className="login__content">
              <form onSubmit={handleSubmit}>
                <div className="login__email">
                  <label for="email">Email*</label>
                  <br />
                  <input
                    required
                    ref={inputRef}
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="off"
                    onChange={handleFieldChange}
                    placeholder="E-mail"
                  />
                </div>
                <div className="login__password">
                  <label for="password">Password*</label>
                  <br />
                  <input
                    required
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="off"
                    onChange={handleFieldChange}
                    placeholder="Enter your Password"
                  />
                  <Link href="/recovery" className="forgot-password">
                    Forgot Password ?
                  </Link>
                </div>
                <div className="login__button">
                  <button type="submit">Sign In</button>
                </div>
              </form>

              <div className="login__social">
                <hr />
                <span> or Sign In with Google / Facebook</span>
                <hr />
              </div>
              <div className="login__google">
                <span>
                  <button onClick={signInWithGoogle}>
                    <Image src="/loginAssets/google.png" alt="google-icon" />
                    Sign In with Google
                  </button>
                </span>
              </div>
              <div className="login__fb">
                <span>
                  <button>
                    <Image src="/loginAssets/fb.png" alt="facebook-icon" />
                    Sign In with FaceBook
                  </button>
                </span>
              </div>
              <div className="signup-btn">
                <span>Not on mygiene yet ?</span>
                <Link href="/signup">Signup</Link>
              </div>
            </div>
          </div>
          <div className="login__right">
            <Image src="/loginAssets/login_banner.jpeg" alt="banner-image" />
          </div>
        </login>
      </LoginWrapper>
    </>
  );
};

export default LoginPage;
