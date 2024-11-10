import { useState, useCallback } from "react";
import { topbarLinks } from "@/constants";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/extension-manager-cc.svg";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="flex h-20 w-full items-center border-b border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 md:px-12 lg:px-16">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} width={30} height={30} alt="logo" />
          <h1 className="text-[18px] font-semibold">AstroSass</h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block p-2 text-black md:hidden"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu size={25} color="grey" />
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex place-content-center max-md:h-20 items-center md:flex-row md:space-x-2 ${
            isMenuOpen ? "flex" : "hidden"
          } absolute left-0 top-20 w-full bg-white shadow-md md:static md:flex md:w-auto md:bg-transparent md:shadow-none`}
        >
          {topbarLinks.map(({ title, href, hash }) => (
            <li
              key={title} // Assuming 'title' is unique
              className="cursor-pointer list-none px-4 py-2 text-center transition-colors duration-150 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
              style={{
                zIndex: isMenuOpen ? 999 : "auto", // Bring the menu to the front on open
                backgroundColor: isMenuOpen ? "white" : "transparent", // Add background color only when menu is open
              }}
            >
              {hash?.startsWith("#") ? (
                <a href={hash} className="block">
                  {title}
                </a>
              ) : (
                <Link to={`${href}`} className="block">
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
