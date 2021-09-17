import { MetaHead } from "../components/Meta-Head";
import HomePage from "../components/HomePage";

export default function Page() {
  return (
    <>
      <MetaHead title="Home" url="/" />
      <HomePage />
    </>
  );
}
