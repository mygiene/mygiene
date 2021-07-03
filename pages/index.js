import Head from "next/head";
import Image from "next/image";
import StyledWrapper from "../styles/styles.common";
import { MetaHead } from "../components/Meta-Head";

export default function Home() {
  return (
    <>
      <MetaHead title="Home" />
      <StyledWrapper>Home Page</StyledWrapper>
    </>
  );
}
