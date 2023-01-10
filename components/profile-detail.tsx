import Link from "next/link";
import styles from "../styles/profile.module.css";
import { likePeoples } from "../lib/profileData";

const ProfileDetail = () => {
  return (
    <div className={styles["profile-detail"]}>
      <div>
        <h2>リンク集🔗</h2>
        <ul>
          <li>
            <Link href="https://twitter.com/yajium_" target="_blank">
              twitter
            </Link>
          </li>
          <li>
            <Link href="https://github.com/yajium" target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link href="https://zenn.dev/rorisutarou" target="_blank">
              Zenn
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>使ったことがある技術📌</h2>
        <ul>
          <li>C#</li>
          <li>JavaScript(React, Next.js)</li>
          <li>CSS(Tailwind)</li>
        </ul>
      </div>
      <div>
        <h2>資格📝</h2>
        <ul>
          <li>基本情報技術者</li>
          <li>普通免許(乗らな過ぎてペーパーを超えた)</li>
        </ul>
      </div>
      <div>
        <h2>いろいろ🫠</h2>
        <ul>
          <li>
            社会人になってから本格的にプログラミングを勉強し始めました。日々奮闘中。
          </li>
          <li>普段はC#を使ってWEBサイトを作っています。</li>
          <li>
            英語を日本語のように読めるようになりたい。競プロやってみたい。もっと個人開発したい。
          </li>
        </ul>
      </div>
      <div>
        <h2>好きなこと💗</h2>
        <ul>
          <li>寝ること(?)</li>
          <li>バドミントン</li>
          <li>ゲーム実況を見る(アモアス、ポケモンとか)</li>
          <li>ぬいぐるみと戯れる</li>
          <li>インドアだけど、たまの旅行も好き</li>
        </ul>
      </div>
      <div>
        <h2>好きなもの🌻</h2>
        <ul>
          <li>ぬいぐるみ</li>
          <li>パグ(最近ハマってる)</li>
          <li>こたつ</li>
          <li>ポケモン</li>
          <li>甘いもの</li>
          <li>季節は冬が一番好き</li>
        </ul>
      </div>
      <div>
        <h2>好きな場所🚙</h2>
        <ul>
          <li>自分の家のベッド</li>
          <li>松屋</li>
          <li>コメダ珈琲</li>
          <li>吉祥寺</li>
          <li>ポケモンセンター</li>
          <li>奥日光</li>
        </ul>
      </div>
      <div>
        <h2>ファン🕊️</h2>
        <ul>
          {likePeoples.map((member) => (
            <li key={member.name}>
              <Link href={member.link} target="_blank">
                {member.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>好きな音楽🎵</h2>
        <ul>
          <li>ヨルシカ</li>
          <li>最近は結束バンドとJUDY AND MARYにハマっています</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetail;
