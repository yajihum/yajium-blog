import { name, thisYear } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="mx-10 my-6">
      <div className="">
        <p className="text-center font-zenkaku text-lg font-semibold text-gray-400">
          ©{thisYear()} {name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
