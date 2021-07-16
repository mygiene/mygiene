import Head from "next/head";

export function MetaHead({ title }) {
  const head = title ? `${title} | ` : "";
  return (
    <>
      <Head>
        <title>{head} mygiene Men&apos;s Grooming Store</title>
      </Head>
    </>
  );
}
