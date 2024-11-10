import { footerDescription, footerLinks } from "@/constants";
import FooterColumn from "../footer-column";
import logo from "../../assets/extension-manager-cc.svg";

export default function Footer() {
  return (
    <footer className="flex justify-start rounded-sm px-4 py-24 md:px-8 lg:px-12 2xl:max-w-7xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 max-[510px]:flex-col">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-start">
            <img src={logo} alt="logo" height={30} width={30} />
            <h1 className="text-x px-3 font-bold">AstroSass</h1>
          </div>
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <FooterColumn
            title={footerLinks[2].title}
            links={footerLinks[2].links}
          />
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
        </div>
        <div className="text-gray space-y-1 border-t border-t-gray-500 text-sm font-extralight">
          <p> &copy; {footerDescription.description}</p>
        </div>
      </div>
    </footer>
  );
}
