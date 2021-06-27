import { useState } from "react";
import firebase from "../firebase.config";
import { auth, handleUserProfile, signInWithGoogle } from "../firebase/utils";

const initialState = {
  displayName: "",
  email: "",
  password: "",
};

const Page = () => {
  const [form, setform] = useState(initialState);
  function handleFieldChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // validation condition of form
      const { displayName, email, password } = form;

      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
    } catch (error) {}
  }

  const { displayName, email, password } = form;
  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleFieldChange}
        />
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
        <button type="submit">SIGN UP</button>
      </form>
      <button onClick={signInWithGoogle}>Sign Up with Google</button>
    </div>
  );
};

export default Page;
