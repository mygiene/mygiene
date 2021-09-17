import FaqsPage from "../components/FaqsPage/index.js";
import { MetaHead } from "../components/Meta-Head.js";

const Page = () => {
  return (
    <>
      <MetaHead title="FAQs" url="/faqs" />
      <FaqsPage />
    </>
  );
};

export default Page;
