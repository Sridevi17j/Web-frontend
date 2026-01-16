interface CapabilityCardProps {
  title: string;
  description: string;
}

function CapabilityCard({ title, description }: CapabilityCardProps) {
  return (
    <div className="bg-gray-dark border border-black rounded-lg shadow-lg p-6 flex flex-col space-y-3 h-full">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm font-medium text-white tracking-wide">
        {description}
      </p>
    </div>
  );
}

export default function CapabilitiesSection() {
  const capabilities = [
    {
      title: "ProMarshal offers you structured project reasoning, not templated shortcuts",
      description:
        "It doesn't throw generic templates at every situation. It reasons through your specific context and helps you build a plan that actually fits.",
    },
    {
      title: "Project context and tailored support",
      description:
        "It learns your project's shape, priorities, and constraints, then adapts its guidance so the advice stays relevant as things evolve.",
    },
    {
      title: "Handles real-life intelligence, not just formatted inputs",
      description:
        "You can share updates however they come - notes, screenshots, conversations. It makes sense of unstructured context without forcing you into forms.",
    },
    {
      title: "Active tracking and reminders",
      description:
        "It keeps track of what's in flight, what's overdue, and what needs your attention, so you don't have to hold it all in your head.",
    },
    {
      title: "Streamlined and natural calls with team and stakeholders",
      description:
        "It helps you prepare for meetings, frames the right questions, and keeps discussions focused on what actually moves the project forward.",
    },
    {
      title: "Audit artifacts in context",
      description:
        "It connects decisions, discussions, and deliverables so you can trace the story behind any choice without digging through scattered threads.",
    },
    {
      title: "Real-time project queries",
      description:
        "Ask it anything about your project state, progress, or next steps. It answers based on the full context, not just what's in a status report.",
    },
    {
      title: "Measure progress",
      description:
        "It tracks meaningful progress indicators, not just task completion. You get visibility into whether the work is actually advancing the goal.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto border border-primary rounded-2xl p-12 relative">
        <button className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-accent text-white text-xl font-bold px-6 py-2 rounded-2xl hover:opacity-90 transition-opacity whitespace-nowrap">
          Ok, what can it actually do for me and my project team?
        </button>

        <div className="text-center space-y-8 mb-12">
          <h2 className="text-5xl font-medium leading-tight text-white max-w-4xl mx-auto">
            ProMarshal Offers You Structured Project Reasoning, Active Tracking and Contextual Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} {...capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
