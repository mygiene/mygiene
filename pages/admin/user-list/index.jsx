import React, { useContext } from "react";

import { AuthContext } from "../../../components/auth/auth";

import UsersList from "../../../components/UsersList";
const URL = process.env.NEXT_PUBLIC_URL;

const Pages = () => {
  const {
    authState: { isAdmin },
  } = useContext(AuthContext);

  if (isAdmin)
    return (
      <>
        <UsersList />
      </>
    );
  else window.location = `${URL}`;
};

export default Pages;
