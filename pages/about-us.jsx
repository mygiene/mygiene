import About from "../components/About/index.js";
import { MetaHead } from "../components/Meta-Head.jsx";
//import StyledWrapper from "../styles/styles.common.js";

const Page = () => {
  return (
    <>
      <MetaHead title="About Us" />
      <About />
    </>
  );
};

export default Page;
