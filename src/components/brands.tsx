import { brandImages } from "@/constants";

export default function Brands() {
  return (
    <div className="mb-18 mt-8 flex w-full flex-wrap justify-between px-10 gap-4">
      {brandImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Brand ${index + 1}`}
          style={{ width: `${image.width}px`, height: `${image.height}px` }}
          width={image.width}
        />
      ))}
    </div>
  );
}
