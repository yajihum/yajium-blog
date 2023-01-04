import Head from "next/head";
import { useEffect, useState } from "react";
import { name } from "../lib/constants";

type Props = {
  type?: string;
  title?: string;
  root?: string;
};

const Meta = ({ type, title, root }: Props) => {
  const imageUrl = `https://chi-sanaumi.vercel.app/api/og?title=${title}`;
  const twitter = "@yajium_";
  const siteName = "chi-sanaumi";
  const url = `https://chi-sanaumi.vercel.app/${root}`;

  return (
    <Head>
      <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb# prefix属性: http://ogp.me/ns/ prefix属性#"></head>
      <title>{title}</title>
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
