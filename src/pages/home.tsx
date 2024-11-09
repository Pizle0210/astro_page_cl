import Hero from "@/components/hero";
import TechDesc from "@/components/tech-desc";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-screen max-w-7xl flex-col">
      <Hero />
      <TechDesc />
    </div>
  );
}
