import { useState } from "react";
import firebase from "../firebase.config";
import { signInWithGoogle } from "../firebase/utils";

const initialState = {
  email: "",
  password: "",
};

const Page = () => {
  const [form, setform] = useState(initialState);
  function handleFieldChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSignInWithGoogle(e) {
    e.preventDefault();
    console.log(e);
  }
  const { email, password } = form;
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleFieldChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleFieldChange}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Page;
