import { FaStar } from "react-icons/fa6";

export default function ExperienceCard({
  rating,
  name,
  comment,
}: {
  rating: number;
  name: string;
  comment: string;
}) {
  return (
    <div className="rounded-lg h-full border p-4 shadow-lg">
      <div className="mb-2 flex items-center">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar
            key={index}
            size={20}
            scale={1}
            strokeWidth={1}
            className="text-yellow-500/80"
          />
        ))}
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-2 text-gray-700">{comment}</p>
    </div>
  );
}
