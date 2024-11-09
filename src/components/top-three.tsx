import { topThreeDescription } from "@/constants";

export default function TopThree() {
  return (
    <div className="mx-auto mt-8 max-w-4xl items-start space-y-6 text-center text-sm sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
      {topThreeDescription.map((description, index) => {
        // Splitting and bolding words before hyphen
        const [beforeHyphen, afterHyphen] = description.content.split(/-(.+)/);

        return (
          <div className="items-center" key={index}>
            <p>
              <span className="font-bold">{beforeHyphen}</span>
                {/* sweet */}
              {afterHyphen && <span className="text-gray-500"> - {afterHyphen}</span>}
            </p>
          </div>
        );
      })}
    </div>
  );
}