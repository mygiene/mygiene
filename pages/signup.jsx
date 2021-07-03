import { useState } from "react";
import SignUpPage from "../components/SignUpPage";

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
  return <SignUpPage />;
};

export default Page;
