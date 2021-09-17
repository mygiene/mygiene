import { Kit } from "../components/kit/index.js";
import { MetaHead } from "../components/Meta-Head.js";

const Page = () => {
  return (
    <>
      <MetaHead title="Our Kit | Shop" url="/kit" />
      <Kit />
    </>
  );
};

export default Page;
