export default function HeroSection() {
  console.log("HeroSection rendering");

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-6xl font-medium leading-tight">
          <span className="text-primary">AI Executive Assistant</span>
          <br />
          <span className="text-white">For Project Owners</span>
        </h1>

        <p className="text-3xl text-white font-normal max-w-3xl">
          Helps you plan, guide, and take decisions through every phase of the
          project
        </p>

        <button className="bg-primary hover:bg-primary-dark transition-colors text-white text-xl font-normal px-8 py-3 rounded-full mt-8">
          Launching Soon
        </button>
      </div>
    </section>
  );
}
