import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo mode)");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/Ife_abdulsamad",
      label: "X",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/ifeabdulsamad",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/ifeoluwa-akinpelu",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/ifeabdulsamad?igsh=MThqdmJjbDBobmg=",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-primary mb-6"
          >
            Get In Touch
          </motion.h2>
          <p className="text-slate-400 text-lg font-light">
            Have a question or want to work together? Drop me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-light mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-white font-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-white font-light mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows="4"
                  className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-6 rounded-xl hover:opacity-90 transition text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-primary/40 transition flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </div>
              <h3 className="text-base font-normal text-white mb-2">Email</h3>
              <a
                href="mailto:akinpeluifeoluwaa@gmail.com"
                className="text-slate-400 hover:text-primary transition text-sm font-light"
              >
                akinpeluifeoluwaa@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-primary/40 transition flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <h3 className="text-base font-normal text-white mb-2">
                Availability
              </h3>
              <p className="text-slate-400 text-sm font-light">
                Remote · Global · Flexible
              </p>
            </div>

            {/* Social Links */}

            <div className="flex gap-4 mt-6 justify-center w-full">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-slate-700/50 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-2"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
