import type React from "react";

export default function MultiLayered({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex h-full flex-col space-y-2 text-start md:space-y-3">
      <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:items-center">
        <div className="rounded-xl bg-gray-100 p-3 text-start max-lg:w-[3rem]">
          {icon}
        </div>
        <h3 className=" lg:ml-3 font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
}
