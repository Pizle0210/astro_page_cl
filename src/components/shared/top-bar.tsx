import { useState } from 'react';
import { topbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';

export default function Topbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full h-20 bg-white items-center flex border-b border-black/5">
            <div className="w-full flex items-center justify-between mx-auto md:px-12 px-8 max-w-7xl lg:px-16">
                <Link to={'/'}>
                    <h1 className="text-[18px] font-semibold">AstroSass</h1>
                </Link>
                <button
                    className="md:hidden block text-black p-2"
                    onClick={toggleMenu}
                >
                    <Menu size={25} color='grey' />
                </button>
                <div className={`links flex-col md:flex-row md:space-x-2 items-center ${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
                    {topbarLinks.map((link, index) => (
                        <div className="flex" key={link.hash}>
                            <ul className="list-none group">
                                <Link to={`${link.href}`} className="block py-2 px-4 text-center group-visited:text-red-400 group-hover:text-blue-500">
                                    <li className={cn(
                                        `group-visited:text-red-400 group-hover:text-blue-600 transition-colors duration-150`,
                                        index === topbarLinks.length - 1 && "last:px-3 p-1 bg-gray-200/50 hover:bg-gray-100/50 rounded-md group-hover:text-black"
                                    )}>
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