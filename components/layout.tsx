import Link from "next/link";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

export const siteTitle = "Next.js Sample Website";

type Props = {
  children?: ReactNode;
  isHome: boolean;
};

const Layout = ({ children, isHome }: Props) => {
  return (
    <>
      <Header isHome={isHome} />
      <div className="my-0 mx-auto max-w-xl text-center font-zenkaku md:grid-cols-1">
        <main className="">{children}</main>
        {!isHome && (
          <div className="my-6 mx-auto text-2xl font-extrabold text-sky-500 hover:underline hover:decoration-sky-500 hover:underline-offset-4">
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
