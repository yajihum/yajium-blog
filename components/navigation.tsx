import Link from "next/link";

type Props = {
  isHome: boolean;
};

const Navigation = ({ isHome }: Props) => {
  return (
    <nav className="">
      {isHome ? (
        <div className="bg-white">
          <ul className="grid grid-cols-6 py-4 text-xl font-bold text-gray-500 shadow-lg">
            <li className="col-start-2 col-end-4">
              <Link href="/posts/profile" className="">
                Profile
              </Link>
            </li>
            <li className="col-start-4 col-end-6">
              <Link href="/posts/blog" className="">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="bg-white">
          <ul className="grid grid-cols-3 py-4 text-xl font-bold text-gray-500 shadow-lg">
            <li className="">
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts/profile" className="">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/posts/blog" className="">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
