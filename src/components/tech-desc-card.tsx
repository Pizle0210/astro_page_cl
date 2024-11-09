import type React from "react";

export default function TechCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col h-full space-y-2 md:space-y-3 max-md:text-start">
      <div className="items-center text-start rounded-xl bg-gray-100 p-3 max-lg:w-[3rem] lg:mx-auto">
        {icon}
      </div>
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
}
