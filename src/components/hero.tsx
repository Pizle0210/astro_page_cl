import dashboardImage from "../assets/dashboard.svg";
import Brands from "./brands";
import TopThree from "./top-three";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="mx-auto mt-0 w-full max-w-7xl items-center px-8 py-24 md:px-12 lg:px-24">
      <div className="">
        <div className="mb-10 flex flex-col justify-center text-center sm:items-center">
          <a
            href="https://facebook.com"
            className="rounded-full border px-3 py-1 text-sm font-semibold text-[#2834ec]"
          >
            <span className="block lg:inline">
              More free & Premium templates
              <span className="ml-1" aria-hidden="true">
                →
              </span>
            </span>
          </a>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col justify-center space-y-5">
          <h1 className="text-center text-4xl font-semibold leading-none tracking-wide md:text-5xl">
            A starter template built with Astro and Tailwind CSS for your next
            project
          </h1>
          <p className="mx-auto max-w-2xl text-center text-base text-gray-500 lg:text-xl">
            Putting together a directory website was a challenge. Superstash
            lets you focus on the content and makes the entire process
            effortless.
          </p>
        </div>
        {/* buttons */}
        <div className="mt-10 flex place-content-center items-center gap-3 max-sm:flex-col">
          <Button className="h-10 rounded-lg border border-gray-200 bg-transparent px-6 font-medium text-black duration-200 hover:bg-transparent focus:outline-none max-sm:w-full lg:w-auto">
            <a href="https://www.github.com" target="_blank">
              GitHub
            </a>
          </Button>
          <Button className="h-10 rounded-lg border border-gray-200 bg-black px-6 font-semibold tracking-wider text-white ring-1 ring-inset ring-black duration-300 hover:bg-transparent hover:text-black focus:outline-none max-sm:w-full lg:w-auto">
            <a href="https://www.github.com" target="_blank">
              Lexington Themes <span className="ml-3 font-extrabold">→</span>
            </a>
          </Button>
        </div>
        {/* top three description */}
        <div className="mt-10">
          <TopThree />
        </div>
        {/* image */}
      </div>
      <div className="relative mx-auto w-full max-w-7xl py-12 pb-12">
        <div className="rounded-3xl bg-gray-100 p-8">
          <img
            src={dashboardImage}
            alt="Dashboard illustration"
            loading="lazy"
          />
        </div>
      </div>
      <Brands />
    </section>
  );
}
