import React, { useContext } from "react";
import { AuthContext } from "../../components/auth/auth";

const URL = process.env.NEXT_PUBLIC_URL;

const Pages = () => {
  const {
    authState: { isAdmin },
  } = useContext(AuthContext);
  if (isAdmin)
    return (
      <>
        <div>
          <h1>My Admin</h1>
        </div>
      </>
    );
  else window.location = `${URL}`;
};

export default Pages;
