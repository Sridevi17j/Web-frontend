import Image from "next/image";

interface BrainFeatureProps {
  title: string;
  description: string;
  icon: string;
}

function BrainFeature({ title, description, icon }: BrainFeatureProps) {
  return (
    <div className="bg-gray-dark border border-black rounded-lg shadow-lg p-8 flex flex-col items-center text-center space-y-4 h-full">
      <Image
        src={icon}
        alt={title}
        width={57}
        height={57}
        className="object-contain"
      />
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-base font-medium text-white tracking-wide">
        {description}
      </p>
    </div>
  );
}

export default function ProjectBrainSection() {
  const features = [
    {
      title: "Tailored intelligence, not one size fits all",
      description:
        "It adapts to your project style and keeps the output aligned to how you run delivery.",
      icon: "/assets/icon-41.png",
    },
    {
      title: "A brain that grows with the project",
      description:
        "It accumulates context over time, so understanding gets deeper as the work evolves.",
      icon: "/assets/icon-42.png",
    },
    {
      title: "Clarity you can rely on",
      description:
        "It keeps the project story consistent, so you can lead with confidence and explain decisions without digging.",
      icon: "/assets/icon-43.png",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto border border-primary rounded-2xl p-12 relative">
        <button className="absolute -top-5 right-8 bg-blue-accent text-white text-xl font-bold px-6 py-2 rounded-2xl hover:opacity-90 transition-opacity">
          How it knows what i want?
        </button>

        <div className="text-center space-y-8 mb-8">
          <h2 className="text-6xl font-medium leading-tight text-white">
            Project Brain,
            <br />
            Built Around Your Project Data
          </h2>
          <p className="text-3xl text-white max-w-5xl mx-auto">
            ProMarshal does not give generic advice. It builds tailored project
            intelligence from your work context and keeps it coherent over time,
            so the guidance stays specific, consistent, and useful.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Image
            src="/assets/brain.png"
            alt="Project Brain Visualization"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <BrainFeature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
