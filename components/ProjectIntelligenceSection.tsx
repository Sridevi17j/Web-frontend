interface IntelligenceCardProps {
  title: string;
  description: string;
}

function IntelligenceCard({ title, description }: IntelligenceCardProps) {
  return (
    <div className="bg-gray-dark border border-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center space-y-3 h-full">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm font-medium text-white tracking-wide">
        {description}
      </p>
    </div>
  );
}

export default function ProjectIntelligenceSection() {
  const features = [
    {
      title: "Integrate once",
      description:
        "Keep your tools and use existing workflows. Just chat with ProMarshal.",
    },
    {
      title: "Build context",
      description:
        "ProMarshal learns your team, processes and roadmap to keep advice sharp.",
    },
    {
      title: "Connect the dots",
      description:
        "Links status updates, decisions, and progress so you see what matters now.",
    },
    {
      title: "Guide the next move",
      description:
        "Recommends actions and next steps so you stay ahead, not just caught up.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto border border-primary rounded-2xl p-12 relative">
        <button className="absolute -top-5 right-8 bg-blue-accent text-white text-xl font-bold px-6 py-2 rounded-2xl hover:opacity-90 transition-opacity whitespace-nowrap">
          It this another integration workflow?
        </button>

        <div className="text-center space-y-6 mb-12">
          <h2 className="text-5xl font-medium leading-tight text-white">
            It Is Project Intelligence,
            <br />
            Not Just Integration
          </h2>
          <p className="text-2xl text-white max-w-4xl mx-auto">
            Integration tells you what happened. ProMarshal tells you what it
            means, what happens next, what it affects, and what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <IntelligenceCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
