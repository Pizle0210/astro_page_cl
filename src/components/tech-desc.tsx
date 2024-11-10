import { Scan } from "lucide-react";
import TechCard from "./tech-desc-card";

export default function TechDesc() {
  const scanIcon = <Scan size={25} strokeWidth={1} />;

  const cardData = [
    {
      icon: scanIcon,
      title: "Built with Astro.js",
      content:
        "Astro is an all-in-one web framework for building fast, content-focused websites.",
    },
    {
      icon: scanIcon,
      title: "Styled with Tailwind CSS.",
      content:
        "Tailwind CSS generates styles by searching for class names in HTML, JavaScript, and templates, and then outputs them in a single CSS file.",
    },
    {
      icon: scanIcon,
      title: "Relived with Alpine.js",
      content:
        "Alpine is a rugged, minimal tool for adding behavior to your markup, similar to jQuery but for the modern web.",
    },
    {
      icon: scanIcon,
      title: "Keyboard accessible.",
      content:
        "Everything I build is keyboard accessible, and I meticulously write the markup to deliver the best screenreader experience I can provide.",
    },
    {
      icon: scanIcon,
      title: "Production-ready",
      content:
        "I tested the template in the latest versions of all browsers to handle lots of edge-cases you might encounter.",
    },
    {
      icon: scanIcon,
      title: "Simple deploys",
      content:
        "The template is ready for production and can be deployed anywhere static websites can, such as Vercel, Netlify, or GitHub Pages, and more.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl py-24 px-4 md:px-8 lg:px-12 scroll-smooth scroll-mt-7" id="features">
      <div className="mx-auto w-full scroll-mt-12 items-center px-8 md:px-12 lg:px-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="antialiased text-4xl font-medium tracking-tight text-black md:text-5xl">
            I am a slightly longer heading than the others
          </p>
          <p className="mx-auto mt-4 text-lg tracking-tight text-gray-500">
            If you could kick the person in the pants responsible for most of
            your trouble, you wouldn't sit for a month.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl pt-12">
        <h2 className="sr-only">Features</h2>
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-3 lg:space-y-0 lg:text-center">
          {cardData.map((card, index) => (
            <TechCard
              key={`tech-card-${index}`}
              icon={card.icon}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
