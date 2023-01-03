import Link from "next/link";
import { useEffect, useState } from "react";
import { Post } from "../types/post";
import { firstShowPostsNums, loadNum } from "lib/constants";

type Props = {
  isHome: boolean;
  post: Post;
};

const PostsList = ({ isHome, post }: Props) => {
  const [loadLength, setLoadLength] = useState(firstShowPostsNums);
  const [isEnd, setIsEnd] = useState(false);
  const [showPosts, setShowPosts] = useState(post.postArray);

  const displayMore = () => {
    // 全ての投稿数がもっと見るボタンを押したときに表示されている件数+5件以下のとき
    if (loadLength + loadNum >= post.postArray.length) {
      setIsEnd(true);
      setShowPosts(post.postArray);
    } else {
      setLoadLength(loadLength + loadNum);
      setShowPosts(post.postArray.slice(0, loadLength - 1));
    }
  };

  // 初めてAllPosts画面を開いたときだけ実行
  useEffect(() => {
    // Blog画面でありかつ、全ての投稿数が最初に表示する投稿数以下のとき
    if (!isHome && post.postArray.length <= firstShowPostsNums) {
      setIsEnd(true);
    }
    // Blog画面でありかつ、全ての投稿数が最初に表示する投稿数を上回っているとき
    // 1~10件までをセットする
    else if (!isHome && post.postArray.length > firstShowPostsNums) {
      setShowPosts(post.postArray.slice(0, loadLength - 1));
    }
  }, []);

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-semibold text-gray-500 underline decoration-1 underline-offset-8">
        {isHome ? "New Posts" : "All Posts"}
      </h2>
      <div className="my-8 bg-sky-50 bg-cover pt-10 pb-14">
        {showPosts.map(({ date, title, slug, icon }) => (
          <div
            className="scale-75 rounded-lg bg-white p-8 text-2xl font-semibold shadow hover:shadow-xl"
            key={slug}
          >
            <Link as={`/posts/${slug}`} href="/posts/[...slug]">
              <p className="pb-2">{icon}</p>
              <p>{title}</p>
              <p className="mt-2 text-gray-400">{date}</p>
            </Link>
          </div>
        ))}
        {isHome ? (
          <>
            {post.postsLength > 5 && (
              <div className="mt-10">
                <Link
                  href="/posts/blog"
                  className="cursor-pointer rounded-lg bg-gray-500 px-10 py-2 text-2xl font-semibold text-white shadow-lg shadow-gray-600 hover:bg-white hover:text-gray-700 hover:shadow-none hover:ring-2 hover:ring-gray-500"
                >
                  More
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            {!isEnd && (
              <button
                onClick={displayMore}
                className="cursor-pointer rounded-lg bg-gray-500 px-10 py-2 text-2xl font-semibold text-white shadow-lg shadow-gray-600 hover:bg-white hover:text-gray-700 hover:shadow-none hover:ring-2 hover:ring-gray-500"
              >
                もっとみるよ
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PostsList;
