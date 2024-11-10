import ExperienceCard from "./experience-card";

export default function Experiences() {
  const experienceData = [
    {
      name: "Mr. Henshaw",
      comment: `"I've always been concerned about privacy online, but since using this platform, I feel more empowered and in control of my personal data."`,
      rating: 5,
    },
    {
      name: "Aisha Abdullahi",
      comment: `"As a professional working with sensitive information, I needed a communication solution that prioritizes security."`,
      rating: 5,
    },
    {
      name: "Aisha Al-hassan",
      comment: `"As a digital nomad, maintaining my privacy while communicating is crucial. This platform has become my go-to choice for secure messaging."`,
      rating: 4,
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-8 lg:px-12">
        <div>
          <p className="min-w-min text-start text-4xl font-medium tracking-tight antialiased md:text-5xl">
            Discover the experiences and{" "}
            <span className="sm:block">feedback from satisfied customers</span>
          </p>
          <div className="mt-12 grid w-full items-center gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {experienceData.map((card, index) => (
              <ExperienceCard
                key={`tech-card-${index}`}
                rating={card.rating}
                name={card.name}
                comment={card.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
