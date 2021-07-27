import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { firestore } from "../../firebase/utils";

//const u =await  firestore.doc(`users/${Router.pathname}`).get(); u.data();
const User = () => {
  const Router = useRouter();
  const [details, setDetails] = useState({});
  const fetchInfo = async () => {
    const data = await firestore.doc(`users/${Router.query.user}`).get();
    setDetails(data.data());
  };
  useEffect(() => {
    if (Router.query.user) fetchInfo();
  }, []);
  console.log(details);
  return <div>users page</div>;
};

export default User;
