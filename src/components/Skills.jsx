import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "/assets/html.png" },
  { name: "CSS3", icon: "/assets/text.png" },
  { name: "JavaScript", icon: "/assets/java-script.png" },
  { name: "Python", icon: "/assets/python.png" },
  { name: "Bootstrap", icon: "/assets/bootstrap.png" },
  { name: "Tailwind", icon: "/assets/Tailwind CSS.png" },
  { name: "React", icon: "/assets/science.png" },
  { name: "Git", icon: "/assets/git.png" },
  { name: "Photoshop", icon: "/assets/photoshop.png" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration Removed */}

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SKILLS & <span className="text-primary">TOOLS</span>
          </h2>
          <p className="text-slate-400 text-lg  mx-auto">
            The technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex flex-col items-center gap-4 p-6 glass rounded-2xl hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300 border border-slate-700/30"
            >
              <div className="h-16 w-16 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                />
              </div>
              <span className="text-sm font-semibold text-slate-300 group-hover:text-primary transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
