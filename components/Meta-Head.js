import Head from "next/head";

const defaultKeywords = [
  "mygiene",
  "Best Essentials kit for men",
  "Mygiene delivers a complete, one-stop toiletries package at the click of a button.",
  "Mygiene is out to revolutionise the way you pack with our all-inclusive toiletries bag for men. No more scrambling last-minute to pack the essentials. No more wasting money on travel minis that don’t get the job done. With Mygiene, you’ll look and feel your best.",
  "ALL IN ONE ESSENTIALS KIT",
  "Mygiene delivers a complete, one-stop toiletries package at the click of a button. You get more time to kick back, relax, and enjoy your holiday.",
];

const GoogleIds = ["G-XM6P6FHMHF"];

export function MetaHead({
  desc,
  title = "MYGIENE",
  imgUrl,
  children,
  keywords,
  url,
}) {
  const formattedTitle = title ? `${title} | ` : "";
  const domainedURL = `${process.env.NEXT_PUBLIC_URL}${url}`;
  const domainedImgURL = `${process.env.NEXT_PUBLIC_URL}${imgUrl}`;
  return (
    <>
      <Head>
        <title>{formattedTitle} mygiene Men&apos;s Essentials Store</title>
        <meta property="title" content={formattedTitle} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="twitter:title" content={formattedTitle} />

        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="application-name" content={title} />
        <meta name="theme-color" content="#d6249f" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="msapplication-TileColor" content="#d6249f" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1"
        />

        <meta property="type" content="website" />
        <meta property="og:type" content="website" />
        <meta property="twitter:type" content="website" />

        <meta name="keywords" content={defaultKeywords.join(", ")} />

        {keywords && (
          <>
            <meta name="keywords" content={keywords} />
          </>
        )}

        {domainedURL && (
          <>
            <meta property="url" content={domainedURL} />
            <meta property="og:url" content={domainedURL} />
            <meta property="twitter:url" content={domainedURL} />
          </>
        )}

        {desc && (
          <>
            <meta name="description" content={desc} />
            <meta property="description" content={desc} />
            <meta property="og:description" content={desc} />
            <meta property="twitter:description" content={desc} />
          </>
        )}

        {imgUrl && (
          <>
            <meta property="image" content={domainedImgURL} />
            <meta property="og:image" content={domainedImgURL} />
            <meta property="twitter:image" content={domainedImgURL} />
            <meta property="twitter:card" content="summary_large_image" />
          </>
        )}

        {GoogleIds.map((analyticId) => (
          <Fragment key={analyticId}>
            <script
              defer
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticId}`}
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analyticId}');
              `,
              }}
            />
          </Fragment>
        ))}
        {children}
      </Head>
    </>
  );
}
