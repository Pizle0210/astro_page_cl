import { useState } from "react";
import { topbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/extension-manager-cc.svg";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex h-20 w-full items-center border-b border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 md:px-12 lg:px-16">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} width={30} height={30} className="" alt="logo" />
          <h1 className="text-[18px] font-semibold">AstroSass</h1>
        </Link>
        <button className="block p-2 text-black md:hidden" onClick={toggleMenu}>
          <Menu size={25} color="grey" />
        </button>
        <div
          className={`links flex-col items-center md:flex-row md:space-x-2 ${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-20 w-full bg-white shadow-md md:static md:flex md:w-auto md:bg-transparent md:shadow-none`}
        >
          {topbarLinks.map((link, index) => (
            <div className="flex" key={link.hash}>
              <ul className="group list-none">
                <Link
                  to={`${link.href}`}
                  className="block px-4 py-2 text-center group-visited:text-red-400 group-hover:text-blue-500"
                >
                  <li
                    className={cn(
                      `transition-colors duration-150 group-visited:text-red-400 group-hover:text-blue-600`,
                      index === topbarLinks.length - 1 &&
                        "rounded-md bg-gray-200/50 p-1 last:px-3 hover:bg-gray-100/50 group-hover:text-black",
                    )}
                  >
                    {link.title}
                  </li>
                </Link>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
