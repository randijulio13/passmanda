import { ReactElement } from "react";
import { FaInstagram } from "react-icons/fa";

type FooterItem = {
  logo: ReactElement;
  href: string;
};

const Footer = () => {
  const items: FooterItem[] = [
    {
      logo: <FaInstagram />,
      href: "https://instagram.com",
    },
  ];

  return (
    <footer className="w-full px-4 py-4 md:px-16 bg-black text-white min-h-24 flex flex-col items-center justify-center">
      <div className="flex gap-2 text-2xl">
        {items.map((i, index) => {
          return (
            <a href={i.href} key={index} className="outline-none focus:bg-white focus:text-black duration-200 hover:bg-white rounded-full p-2 hover:text-black">
              {i.logo}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
