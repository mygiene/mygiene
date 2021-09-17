import { useContext } from "react";
import { AuthContext } from "../components/auth/auth.js";
import { MetaHead } from "../components/Meta-Head.js";
import ProfilePage from "../components/ProfilePage/index.js";

const URL = process.env.NEXT_PUBLIC_URL;

const Page = () => {
  const { authState } = useContext(AuthContext);
  const user = authState.user || null;
  if (user)
    return (
      <>
        <MetaHead title="Profile" url="/profile" />
        <ProfilePage />
      </>
    );
  else {
    window.location = `${URL}/login`;
  }
};

export default Page;
