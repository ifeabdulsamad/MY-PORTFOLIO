import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}

      <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            ></motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              <span className="text-white">Frontend Developer.</span>
              <br />
              <span className="gradient-text">Visual Designer.</span>
              <br />
              <span className="text-white">Creator.</span>
            </h1>

            <p className="text-xl text-white/60 mb-10 max-w-xl w-full md:w-3/4 lg:w-auto leading-tight md:text-center lg:text-left">
              Hi, I'm <span className="text-white font-semibold">Ifeoluwa</span>{" "}
              — designing and building digital products at the intersection of
              code, design, and AI <br />
              DESIGN meets CODE
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#portfolio"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="min-w-[220px]  border-2 border-white/20 rounded-full px-8 py-4 hover:border-primary hover:text-primary transition-all font-semibold inline-flex items-center justify-center gap-2 group"
              >
                Contact Me
                <Download
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden glass p-3 max-w-sm">
                <img
                  src="/assets/MY_PIC.jpg"
                  alt="Ifeoluwa"
                  className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-primary/30 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-purple-500/30 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
