import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import { name } from "../lib/constants";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { SiZenn } from "react-icons/si";
import { getNewPosts } from "../lib/posts";
import { Post } from "../types/post";
import PostsList from "components/posts-list";
import Meta from "components/meta";

type Props = {
  newPosts: Post;
};

const Home = ({ newPosts }: Props) => {
  return (
    <Layout isHome>
      <Meta title="ちいさなうみ" type="blog"></Meta>
      <div className="mt-3 flex justify-center">
        <Image
          priority
          src="/images/yajium.png"
          className="w-32"
          height={100}
          width={100}
          alt="yajiuma_icon"
        />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="mt-3 font-semibold">やじまのブログ</p>
        <div className="mt-10 flex flex-wrap justify-center gap-16">
          <IconContext.Provider value={{ color: "#1e90ff", size: "40px" }}>
            <Link
              rel="twitter"
              href="https://twitter.com/yajium_"
              target="_blank"
            >
              <BsTwitter />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#000000", size: "40px" }}>
            <Link rel="github" href="https://github.com/yajium" target="_blank">
              <AiFillGithub />
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#00bfff", size: "33px" }}>
            <Link
              rel="zenn"
              href="https://zenn.dev/rorisutarou"
              className="mt-1.5"
              target="_blank"
            >
              <SiZenn />
            </Link>
          </IconContext.Provider>
        </div>
      </div>
      <PostsList isHome post={newPosts}></PostsList>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const newPosts = getNewPosts(["title", "date", "slug", "icon"]);
  return {
    props: { newPosts },
  };
};
