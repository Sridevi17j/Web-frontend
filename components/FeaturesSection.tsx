import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-gray-dark border border-black rounded-lg shadow-lg p-8 flex flex-col items-center text-center space-y-4 h-full">
      <Image
        src={icon}
        alt={title}
        width={57}
        height={57}
        className="object-contain"
      />
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="text-base font-medium text-white tracking-wide">
        {description}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      title: "Set direction",
      description:
        "Turn intent into a clear path, so priorities stay sharp and plans stay grounded.",
      icon: "/assets/icon-45.png",
    },
    {
      title: "Keep alignment",
      description:
        "Hold one shared understanding, so the team moves together even when things change.",
      icon: "/assets/icon-34.png",
    },
    {
      title: "Sustain momentum",
      description:
        "Keep work moving with steady guidance, so follow through happens without constant chasing.",
      icon: "/assets/icon-35.png",
    },
    {
      title: "Stay in control",
      description:
        "See early signs of drift, so you course correct before it turns into a bigger issue.",
      icon: "/assets/icon-36.png",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto border border-primary rounded-2xl p-12 relative">
        <button className="absolute -top-5 right-8 bg-blue-accent text-white text-xl font-bold px-6 py-2 rounded-2xl hover:opacity-90 transition-opacity">
          How will it help me?
        </button>

        <div className="text-center space-y-8 mb-16">
          <h2 className="text-6xl font-medium leading-tight text-white">
            ProMarshal Assists You
            <br />
            From Planning Through Delivery
          </h2>
          <p className="text-3xl text-white max-w-4xl mx-auto">
            ProMarshal stays with you through the whole journey, helping you
            shape the plan, keep the team aligned, and carry the work to
            delivery with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
