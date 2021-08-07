import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../components/auth/auth";
import { ManageProduct } from "../../components/manage-product/manage-product";

const URL = process.env.NEXT_PUBLIC_URL;

const Pages = () => {
  const {
    authState: { isAdmin },
  } = useContext(AuthContext);
  if (isAdmin) return <ManageProduct />;
  else window.location = `${URL}`;
};

export default Pages;
