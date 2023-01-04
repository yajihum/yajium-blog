import Layout from "components/layout";
import Head from "next/head";
import { name } from "../../lib/constants";
import { getAllPosts } from "../../lib/posts";
import { Post } from "../../types/post";
import PostsList from "components/posts-list";
import Meta from "components/meta";

type Props = {
  allPosts: Post;
};

const Blog = ({ allPosts }: Props) => {
  return (
    <Layout isHome={false}>
      <Meta title="ブログ一覧" type="posts"></Meta>
      <PostsList isHome={false} post={allPosts}></PostsList>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "icon", "content", "slug"]);
  return {
    props: { allPosts },
  };
};
