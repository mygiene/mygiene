import LoginPage from "../components/LoginPage";
import { MetaHead } from "../components/Meta-Head";

const Page = () => {
  return (
    <>
      <MetaHead title="Login" url="/login" />
      <LoginPage />
    </>
  );
};

export default Page;
