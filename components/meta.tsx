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
  const searchParams = new URLSearchParams(title);
  const imageUrl = `${urlOrigin}/api/og?title=${searchParams.toString()}`;
  const twitter = "@yajium_";

  return (
    <Head>
      <meta name="description" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url}></meta>
      <meta property="og:site_name" content={`${name}のブログ`}></meta>
      <meta property="og:description" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <link rel="icon" href="/images/yajium.png" />
    </Head>
  );
};

export default Meta;