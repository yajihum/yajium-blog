import "zenn-content-css";
import styles from "../styles/post-detail.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="znc my-8 px-6 text-left">
      <div
        className={styles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
