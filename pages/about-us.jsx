import About from "../components/About/index.js";
import { MetaHead } from "../components/Meta-Head.js";

const Page = () => {
  return (
    <>
      <MetaHead title="About Us" url="/about-us" />
      <About />
    </>
  );
};

export default Page;
