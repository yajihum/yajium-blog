import Head from "next/head";
import { useEffect, useState } from "react";
import { name } from "../lib/constants";

type Props = {
  type?: string;
  title?: string;
};

const Meta = ({ type, title }: Props) => {
  const [url, setUrl] = useState("");
  const [urlOrigin, setUrlOrigin] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
    const uri = new URL(window.location.href);
    setUrlOrigin(uri.origin);
  }, []);

  const imageUrl = `${urlOrigin}/api/og?title=yajium`;
  const twitter = "@yajium_";
  const siteName = "chi-sanaumi";

  return (
    <Head>
      <meta name="description" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url}></meta>
      <meta property="og:site_name" content="ちいさなうみ"></meta>
      <meta property="og:description" content={`${name}のブログ`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <link rel="icon" href="/images/yajium.png" />
    </Head>
  );
};

export default Meta;
