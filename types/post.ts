export type PostType = {
  index: number;
  slug: string;
  title: string;
  date: string;
  icon: string;
  //excerpt: string;
  //   ogImage: {
  //     url: string;
  //   };
  content: string;
};

export type Post = {
  postArray: PostType[];
  postsLength: number;
};
