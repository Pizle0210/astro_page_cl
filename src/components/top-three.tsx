import { topThreeDescription } from "@/constants";

export default function TopThree() {
  return (
    <div className="mx-auto mt-8 max-w-4xl items-start space-y-6 text-center text-sm sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
      {topThreeDescription.map((description, index) => {
        // Splitting and bolding words before hyphen
        const [beforeHyphen, afterHyphen] = description.content.split(/-(.+)/);

        return (
          <div className="items-center w-[16rem]" key={index}>
            <p className="text-center tracking-wide leading-5">
              <span className="font-bold text-black/75">{beforeHyphen}</span>
                {/* sweet */}
              {afterHyphen && <span className="text-gray-500"> - {afterHyphen}</span>}
            </p>
          </div>
        );
      })}
    </div>
  );
}