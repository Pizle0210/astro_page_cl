import { cardData } from "@/constants";
import PricingCards from "./pricing-card";
import Brands from "./brands";


export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 scroll-smooth"
      aria-label="pricing-section"
    >
      <div className="mx-auto max-w-7xl scroll-mt-5 space-y-24 px-4 py-10 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-medium tracking-tight text-black md:text-5xl">
            Always know what you’ll pay, transparent pricing for everyone.
          </h2>
        </div>
        {/* cards */}
        <div className="max-sm:py-10 grid grid-cols-1 gap-6 rounded-md shadow-md shadow-gray-400 max-sm:px-10 sm:grid-cols-2 lg:grid-cols-3 lg:p-10 xl:grid-cols-4">
          <PricingCards
            price={cardData[0]?.price}
            name={cardData[0]?.name}
            desc={cardData[0]?.desc}
            benefits={cardData[0]?.benefits}
            buttonText="Continue Free"
            className=""
            btnStyle={
              "text-black text-lg ring-2 transition-all duration-300 ring-gray-300/80 hover:ring-gray-600 font-bold tracking-wide"
            }
          />
          <PricingCards
            price={cardData[1]?.price}
            name={cardData[1]?.name}
            desc={cardData[1]?.desc}
            benefits={cardData[1]?.benefits}
            buttonText="Get Started"
            className=""
            btnStyle={`bg-[#B0BEC5] hover:bg-gray-400 text-black font-bold text-lg`}
          />
          <PricingCards
            price={cardData[2]?.price}
            name={cardData[2]?.name}
            desc={cardData[2]?.desc}
            benefits={cardData[2]?.benefits}
            buttonText="Continue with pro"
            className="bg-[#F5F5F5]"
            btnStyle={`bg-[#007BFF] hover:bg-blue-700 text-white font-bold text-lg`}
          />
          <PricingCards
            price={cardData[3]?.price}
            name={cardData[3]?.name}
            desc={cardData[3]?.desc}
            benefits={cardData[3]?.benefits}
            buttonText="Start a free trial"
            className="bg-[#4682B4] p-3 text-white"
            btnStyle={`bg-[#C62828] hover:bg-red-600 text-white font-bold text-lg`}
          />
        </div>
      </div>
      <div className="">
        <Brands/>
      </div>
    </section>
  );
}
// 3A4A6F slate blue
// 4682B4 steel blue
// 006D77 teal blue
// 5C6F7B muted gray

// 