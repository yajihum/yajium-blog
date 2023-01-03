class LikePeople {
  public name: string;
  public link: string;

  constructor(name: string, link: string) {
    this.name = name;
    this.link = link;
  }
}

export let likePeoples: LikePeople[] = [
  new LikePeople(
    "みなはむ",
    "https://twitter.com/manuhamu?s=20&t=YauJyLLFzyX6BPLFm6Q_XA"
  ),
  new LikePeople(
    "ナカシマ",
    "https://twitter.com/nksm_sea?s=20&t=YauJyLLFzyX6BPLFm6Q_XA"
  ),
  new LikePeople(
    "n-buna",
    "https://twitter.com/nbuna_staff?s=20&t=jmrxILWAiDFDi9NEd2cXRA"
  ),
  new LikePeople("ロリス", "https://www.craftholic.com/character/"),
  new LikePeople(
    "ピーナッツくん",
    "https://twitter.com/osyarenuts?s=20&t=jU0xVll-LsFxvZRcxy08Ew"
  ),
  new LikePeople(
    "おぱんちゅうさぎ",
    "https://twitter.com/opanchu_usagi_?s=20&t=jU0xVll-LsFxvZRcxy08Ew"
  ),
  new LikePeople("後藤ひとり", "https://bocchi.rocks/character/hitori.html"),
];
