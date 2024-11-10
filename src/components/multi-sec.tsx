import img from "../assets/dashboard_mini.svg";
import MultiLayered from "./multi-layered-card";
import { Scan } from "lucide-react";

export default function MultiSec() {
  const scanIcon = <Scan size={25} strokeWidth={1} />;

  const cardData = [
    {
      icon: scanIcon,
      title: "Developer experience",
      content:
        "Everything I build is keyboard accessible, and I meticulously write the markup to deliver the best screenreader experience.",
    },
    {
      icon: scanIcon,
      title: "Designers go-to app",
      content:
        "I tested the template in the latest versions of all browsers to handle lots of edge-cases you might encounter.",
    },
    {
      icon: scanIcon,
      title: "Easy onboarding",
      content:
        "The template is ready for production and can be deployed anywhere static websites can, such as Vercel, Netlify, or GitHub Pages,...",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8 lg:px-12">
      <div className="flex flex-col items-center space-y-14">
        <div className="flex items-center gap-4 lg:gap-24">
          <div className="flex-1 items-center">
            <h1 className="text-center text-4xl font-medium tracking-tight md:text-5xl lg:text-left antialiased">
              Multilayered security
            </h1>
            <p className="mt-4 antialiased text-center text-base text-gray-500 lg:text-start">
              The template is ready for production and can be deployed anywhere
              static websites can, such as Vercel, Netlify, or GitHub Pages. I
              tested the template in the latest versions of all browsers to
              handle lots of edge-cases you might encounter.
            </p>
          </div>
          <div className="hidden overflow-hidden rounded-2xl bg-gray-100 p-8 lg:flex lg:flex-1">
            <img
              src={img}
              alt="banner"
              className="w-full rounded border border-gray-200 object-cover shadow-2xl lg:rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:space-y-0 lg:text-center">
            {cardData.map((card, index) => (
              <MultiLayered
                key={`tech-card-${index}`}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
