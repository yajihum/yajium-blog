/**
 * 名前
 */
export const name = "yajium";

/**
 * コピーライト用の今年の値を取得
 * @returns 今年の値
 */
export const thisYear = (): string => {
  let now: Date = new Date();
  let thisYear: number = now.getFullYear();
  return thisYear.toString();
};

/**
 * All Posts画面で最初に表示する投稿数
 */
export const firstShowPostsNums = 10;

/**
 * もっと見るボタンで読み込む件数
 */
export const loadNum = 5;
