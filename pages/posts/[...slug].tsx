import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
// zennのマークダウン記法に対応
import markdownToHtml from "zenn-markdown-html";
import { PostType } from "../../types/post";
import PostHeader from "components/post-header";
import Head from "next/head";
import PostBody from "components/post-body";
import Meta from "components/meta";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <Layout isHome={false}>
      <Meta title={post.title} type="post"></Meta>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostHeader post={post}></PostHeader>
      <PostBody content={post.content}></PostBody>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "icon",
  ]);
  const content = markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.postArray.map((post) => {
      return {
        params: {
          slug: post.slug.replace(/\.md$/, "").split("/"),
        },
      };
    }),
    fallback: false,
  };
}
