import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "/assets/java-script.png" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "/assets/science.png" },
  //   { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  //   { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "Tailwind", icon: "/assets/Tailwind CSS.png" },
  { name: "npm", icon: "https://cdn.simpleicons.org/npm/CB3837" },
  // { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Git", icon: "/assets/git.png" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Python", icon: "/assets/python.png" },
  { name: "HTML5", icon: "/assets/html.png" },
  { name: "CSS3", icon: "/assets/text.png" },
  { name: "photoshop", icon: "/assets/photoshop.png" },
  { name: "figma", icon: "/assets/Figma-logo.svg" },
];

export default function About() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
            Who I Am &{" "}
            <span className="text-primary font-light">What I Use</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="space-y-4 text-justify font- leading-normal text-white/60 ">
              <p className="text-xl text-white/80 leading-tight border-l-2 border-primary/30 pl-4">
                I’m <span className="">Ifeoluwa</span>, a frontend developer and
                visual designer.
              </p>

              <p className="text-xl text-white/80 leading-tight border-l-2 border-primary/30 pl-4">
                I create interfaces that are clear, intuitive, and easy to use,
                blending clean design with functional code. Every layout, every
                button, every interaction is built with clarity, intention, and
                usability in mind.
              </p>

              <p className="text-xl text-white/75 leading-tight">
                Beyond building, I document the journey sharing what I learn,
                the challenges I face, and the wins along the way. Through
                content, I explore how design, development, and AI intersect,
                giving others a look into the process behind creating digital
                experiences.
              </p>

              <p className="text-xl text-white/75 leading-tight">
                I’m passionate about crafting experiences that feel human, a
                website that’s enjoyable to navigate, a design that communicates
                effortlessly, or content that inspires others to grow alongside
                me. My goal is to build tools and experiences that do not only
                function well but also looks great and tell a story.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4 lg:max-w-md lg:ml-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -4 }}
                className="aspect-square flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm shadow-xl"
              >
                <div className="relative w-8 h-8 mb-2">
                  <div className="absolute inset-0 bg-primary/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain relative z-10 transition-all duration-300"
                  />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider  text-slate-400 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
