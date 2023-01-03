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

  return (
    <Head>
      <link rel="icon" href="/images/yajium.png" />
      <meta
        property="og:image"
        content={`${urlOrigin}/api/og?title=${title}`}
      />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url}></meta>
      <meta property="og:site_name" content={`${name}のブログ`}></meta>
      <meta property="og:description" content={title} />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Meta;
