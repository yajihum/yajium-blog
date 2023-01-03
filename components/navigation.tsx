type Props = {
  isHome: boolean;
};

const Navigation = ({ isHome }: Props) => {
  return (
    <nav className="">
      {isHome ? (
        <div className="justify-center justify-between bg-white">
          <ul className="grid grid-cols-6 py-4 text-xl font-bold text-gray-500 shadow-lg">
            <li className="col-start-2 col-end-4">
              <a href="/posts/profile" className="">
                Profile
              </a>
            </li>
            <li className="col-start-4 col-end-6">
              <a href="/posts/blog" className="">
                Blog
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="justify-center justify-between bg-white">
          <ul className="grid grid-cols-3 py-4 text-xl font-bold text-gray-500 shadow-lg">
            <li className="">
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/posts/profile" className="">
                Profile
              </a>
            </li>
            <li>
              <a href="/posts/blog" className="">
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
