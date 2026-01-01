import { motion } from 'framer-motion';
import {
    Mail,
    MapPin,
    Send,
    Linkedin,
    Github,
    Twitter,
    Instagram,
} from 'lucide-react';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Demo mode)');
    };

    return (
        <section
            id="contact"
            className="relative py-28 md:py-36 overflow-hidden"
        >
            <div className="container mx-auto max-w-7xl px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Let’s Build Something
                        <span className="block text-primary mt-2">Meaningful Together</span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed">
                        Whether you have an idea, a project, or just want to talk tech —
                        I’m open to collaborations, freelance work, and interesting
                        conversations.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        {/* Info Cards */}
                        <div className="space-y-6">
                            <div className="glass p-7 rounded-2xl border border-slate-700/50 hover:border-primary/40 transition">
                                <div className="flex gap-4 items-start">
                                    <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">
                                            Email
                                        </h4>
                                        <a
                                            href="mailto:akinpeluifeoluwaa@gmail.com"
                                            className="text-slate-400 hover:text-primary transition"
                                        >
                                            akinpeluifeoluwaa@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="glass p-7 rounded-2xl border border-slate-700/50 hover:border-primary/40 transition">
                                <div className="flex gap-4 items-start">
                                    <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">
                                            Availability
                                        </h4>
                                        <p className="text-slate-400">
                                            Remote · Global · Flexible
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="text-slate-400 mb-4">
                                Or find me on
                            </p>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Linkedin />, href: 'https://www.linkedin.com/in/ifeoluwa-akinpelu/' },
                                    { icon: <Github />, href: 'https://github.com' },
                                    { icon: <Twitter />, href: '#' },
                                    { icon: <Instagram />, href: 'https://www.instagram.com/' },
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-slate-700/50 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side – Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass p-10 rounded-2xl border border-slate-700/50">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm text-slate-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your name"
                                        className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-5 py-4 text-white focus:ring-2 focus:ring-primary outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-slate-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-5 py-4 text-white focus:ring-2 focus:ring-primary outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-slate-300">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        required
                                        placeholder="Tell me what you want to build…"
                                        className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-5 py-4 text-white focus:ring-2 focus:ring-primary outline-none resize-none transition"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary py-4 flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <Send
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>

                                <p className="text-sm text-slate-500 text-center">
                                    I usually reply within 24–48 hours.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
