import type { FooterLinkType } from "@/constants";

export default function FooterColumn({ title, links }:FooterLinkType) {
  return (
    <div className="pb-20">
      <h4 className="ps-3 font-semibold underline underline-offset-4">
        {title}
      </h4>
      <ul className="flex flex-col space-y-2 ps-3 font-thin text-gray-400">
        {links?.map((link) => (
          <a href={"/"} key={link}>
            {link}
          </a>
        ))}
      </ul>
    </div>
  );
}
// 0579823