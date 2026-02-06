import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";

const projectData = {
  4: {
    title: "Project Loading...",
    category: "UI/UX Design",
    story:
      "This project focused on creating a seamless and engaging loading experience for mobile applications. The goal was to reduce perceived wait times and maintain brand consistency throughout the user journey.",
    images: ["/assets/card_img.png"],
    designSystem: {
      colors: ["#6366f1", "#0f172a", "#1e293b"],
      typography: ["Inter", "Roboto"],
      components: ["Progress Bars", "Spinners", "Skeleton Screens"],
    },
  },
  5: {
    title: "NOLA ATELIER",
    category: "Brand Design",
    story:
      "Developing a brand identity that conveys speed, efficiency, and reliability. This project involved creating a visual language that works across various digital touchpoints.",
    images: ["/assets/catalog.png"],
    designSystem: {
      colors: ["#f59e0b", "#451a03", "#78350f"],
      typography: ["Outfit", "Montserrat"],
      components: ["Logos", "Icons", "Color Palette"],
    },
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className=" flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-[#0f172a]">
      <div className="w-full mx-auto ">
        <header className=" text-center ">
          <div className="mt-28 opacity-0">.</div>
          <div className="mt-28 opacity-0">.</div>
          <div className="mt-28 opacity-0">.</div>

          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 pt-36">
            {project.title}
          </h1>
        </header>

        <section className="mb-20">
          <h2 className="container text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-2 text-center">
            The Story
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            {project.story}
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-2 text-center">
            Project Visuals
          </h2>
          <div className="grid grid-cols-1 bg-red-700 md:grid-cols-1 gap-8">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-screen content-evenly mx-auto"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-2 text-center">
            Design System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-slate-300 font-medium mb-4 uppercase text-xs tracking-widest">
                Colors
              </h3>
              <div className="flex gap-4">
                {project.designSystem.colors.map((color) => (
                  <div key={color} className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[10px] text-slate-500 font-mono">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-slate-300 font-medium mb-4 uppercase text-xs tracking-widest">
                Typography
              </h3>
              <ul className="text-slate-400 space-y-2">
                {project.designSystem.typography.map((font) => (
                  <li key={font} className="text-lg">
                    {font}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-slate-300 font-medium mb-4 uppercase text-xs tracking-widest">
                Key Components
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.designSystem.components.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
