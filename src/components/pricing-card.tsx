import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";

type PricingCardsProps = {
  price: string;
  name: string;
  desc: string;
  benefits: string[];
  buttonText: string;
  className: string;
  btnStyle?: string;
};

function PricingCards({
  price,
  name,
  desc,
  benefits,
  buttonText,
  className,
  btnStyle,
}: PricingCardsProps) {
  return (
    <div
      className={twMerge(
        `flex h-[450px] flex-col space-y-5 rounded-md p-4 shadow-md shadow-gray-300`,
        className,
      )}
    >
      <div className="space-y-2">
        <h3 className="text-center text-2xl font-bold">{name}</h3>
        <p className="h-16 text-center text-sm">{desc}</p>
      </div>
      <p className="text-center text-3xl">
        {price} <sup className="text-black/40">per month</sup>{" "}
      </p>
      <Button className={twMerge(`p-6 ${btnStyle}`)}>{buttonText}</Button>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index} className="mr-2 mb-1.5 font-[500] flex items-center">
            <span className="font-bold mr-3">
              <IoIosArrowForward />
            </span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingCards;
