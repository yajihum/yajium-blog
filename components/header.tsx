import Navigation from "./navigation";

const name = "yajium";
export const siteTitle = "Next.js Sample Website";

type Props = {
  isHome: boolean;
};

const Header = ({ isHome }: Props) => {
  return (
    <header className="justify-self-center text-center font-zenkaku">
      <Navigation isHome={isHome}></Navigation>
    </header>
  );
};

export default Header;
