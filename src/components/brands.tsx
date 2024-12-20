import { brandImages } from "@/constants";

export default function Brands() {
  return (
    <div className="mb-18 mt-8 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 px-10 sm:gap-y-5 lg:gap-x-16">
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
