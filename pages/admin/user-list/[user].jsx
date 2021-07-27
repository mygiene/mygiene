import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { firestore } from "../../../firebase/utils";
import User from "../../../components/UsersList/User";

//const u =await  firestore.doc(`users/${Router.pathname}`).get(); u.data();
const user = () => {
  return <User />;
};

export default user;
