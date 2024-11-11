import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function BottomBanner() {
  return (
    <section>
      <div className="mx-auto rounded-sm px-4 py-10 md:px-8 lg:px-12 2xl:max-w-7xl">
        <div className="flex max-lg:flex-col max-lg:space-y-10">
          <div className="relative w-[50%] max-lg:w-full lg:order-2">
            <div className="lg:absolute lg:inset-0">
              <img
                src="https://www.colorsandfonts.com/images/bundle.png"
                alt=""
                className="h-64 w-full object-cover object-left sm:h-80 lg:absolute lg:h-full"
              />
            </div>
          </div>

          {/* ... */}
          <div className="max-lg: w-[50%] max-lg:max-w-xl max-lg:py-20 max-lg:px-10 max-lg:bg-gray-100 flex-wrap bg-gray-100 max-lg:mx-auto max-lg:w-full lg:px-24 lg:py-24 lg:text-start">
            <div className="flex space-x-3">
              <p className="flex items-center gap-2">
                <FaReact size={20} /> React
              </p>
              <p className="flex items-center gap-2">
                <SiTailwindcss color="teal" size={20} />
                Tailwind
              </p>
            </div>

            <div className="flex flex-col space-y-7">
              <h1 className="font-display mt-16 text-3xl font-extrabold uppercase leading-6 tracking-tight text-black">
                Lexington Themes
              </h1>
              <p className="mt-4 max-w-2xl text-base font-medium tracking-tight text-black">
                Free and premium multipage themes & UI Kits For freelancers,
                developers, businesses, and personal use. Beautifully crafted
                with Astro.js, and Tailwind CSS{" "}
                <span className="lg:block">— Simple & easy to customise.</span>
              </p>
              <p className="font-display mt-8 border-x-[#006D77] text-2xl font-medium tracking-tight text-black lg:border-l-4 lg:pl-4">
                Use this code{" "}
                <span className="font-bold text-[#006d77]">KAMPALA0210</span> and{" "}
                <span className="text-black opacity-70 md:block">
                  get a 40% discount on the bundle
                </span>
              </p>
              <p className="mt-8 max-w-2xl text-base font-medium tracking-tight text-black">
                Get lifetime access to every theme available on Lexington Themes
                for <span className="font-bold text-[#006D77]">£300</span> and
                own them forever. Plus, new themes, lifetime updates, use on
                unlimited projects and enjoy lifetime support. No subscription
                required!
              </p>
              <div className="">
                <a
                  href="https://github.com"
                  className="inline-flex group w-full items-center justify-center gap-4 rounded-xl bg-[#006D77] px-6 py-3 text-sm font-medium text-white outline-offset-2 transition hover:bg-white hover:text-black active:text-gray-900/60 active:transition-none lg:w-auto"
                >
                  See all templates{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
