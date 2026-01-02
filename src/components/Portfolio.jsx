import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "web", label: "Web" },
  { id: "ui", label: "UI" },
  { id: "product", label: "Product" },
];

const projects = [
  {
    id: 1,
    title: "Invoice App",
    category: "web",
    image: "/assets/mu.PNG",
    description: "Streamlined invoicing solution for freelancers and small businesses",
    tags: ["Fastify", "PostgreSQL", "React", "TurboRepo"],
    link: "https://connectwithife.netlify.app",
    github: "#"
  },
  {
    id: 2,
    title: "Password Generator",
    category: "web",
    image: "/assets/project2.png",
    description: "Secure password generation tool",
    tags: ["JavaScript", "Tailwind", "Vite"],
    link: "https://game-tik-tak-toe.vercel.app",
    github: "#"
  },
  {
    id: 3,
    title: "Product Feedback",
    category: "web",
    image: "/assets/project4.png",
    description: "Platform for collecting and managing product feedback",
    tags: ["NextJS", "Go", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Link Page",
    category: "web",
    image: "/assets/mu.PNG",
    description: "Sleek and minimal personal Links Page for social media bios",
    tags: ["HTML", "Tailwind", "Lucide"],
    link: "https://connectwithife.netlify.app",
    github: "#"
  },
  {
    id: 5,
    title: "Mobile App UI",
    category: "ui",
    image: "/assets/card_img.png",
    description: "Modern fintech mobile application interface design",
    tags: ["Figma", "UI/UX", "Mobile"],
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Lead Scraper",
    category: "product",
    image: "/assets/card_img.png",
    description: "Automated lead generation tool using AI and web automation",
    tags: ["Python", "Selenium", "OpenAI"],
    link: "#",
    github: "#"
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("web");

  const filteredProjects = projects.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Header - Larger */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-primary mb-12"
          >
            Projects
          </motion.h2>

          {/* Filter List - Larger */}
          <div className="flex justify-center gap-10 md:gap-14 mb-24">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative py-2 text-base md:text-lg font-medium transition-colors ${activeCategory === cat.id ? "text-white" : "text-slate-400 hover:text-slate-300"
                  }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="active-filter"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Larger spacing */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group w-full"
              >
                {/* Card Container - Larger */}
                <div className="bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
                  {/* Image Part - Larger */}
                  <div className="bg-slate-900 relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Part - Larger */}
                  <div className="pt-6 px-7 pb-7 flex flex-col flex-grow">
                    {/* Title and Description */}
                    <div className="mb-5">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    {/* Spacer to push content down */}
                    <div className="flex-grow"></div>

                    {/* Technologies - Larger */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-white/[0.03] rounded-lg text-xs font-medium text-slate-300 uppercase tracking-wider border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer - Larger */}
                    <div className="pt-5 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <a
                          href={project.link}
                          className="text-white text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group/link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </a>

                        <a
                          href={project.github || "#"}
                          className="text-white/50 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                        >
                          <svg className="w-10 h-10" fill="#ff500070" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.837 1.237 1.837 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}