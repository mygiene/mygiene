import About from "../components/About/index.js";
import { MetaHead } from "../components/Meta-Head.jsx";

const Page = () => {
  return (
    <>
      <MetaHead title="About Us" />
      <About />
    </>
  );
};

export default Page;
