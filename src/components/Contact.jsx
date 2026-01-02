import { motion } from 'framer-motion';
import {
    Mail,
    MapPin,
    Linkedin,
    Github,
    Instagram,
    FileText,
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
            <div className="container mx-auto md:px-12 ">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                // className="text-center max-w-3xl mx-auto mb-24"
                >

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
                            Let’s Build <span className="text-primary">Innovative Projects </span>

                            together</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
                    </div>
                    <p className=" text-center text-slate-400 text-lg leading-tight">
                        Whether you have an idea, a project, or just want to talk tech —
                        I’m open to collaborations, freelance work...
                    </p>
                </motion.div>

                <div className="w-full mx-auto">
                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8 w-full"
                    >
                        <div className="glass p-10 rounded-3xl border border-slate-700/50 hover:border-primary/40 transition flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Mail size={32} />
                            </div>
                            <h4 className="text-xl font-normal mb-2 text-white">Email</h4>
                            <a
                                href="mailto:akinpeluifeoluwaa@gmail.com"
                                className="text-slate-400 hover:text-primary transition text-lg font-light"
                            >
                                akinpeluifeoluwaa@gmail.com
                            </a>
                        </div>

                        <div className="glass p-10 rounded-3xl border border-slate-700/50 hover:border-primary/40 transition flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <MapPin size={32} />
                            </div>
                            <h4 className="text-xl font-normal mb-2 text-white">Availability</h4>
                            <p className="text-slate-400 text-lg font-light">
                                Remote · Global · Flexible
                            </p>
                        </div>
                    </motion.div>

                    {/* Socials */}
                    <div className="flex flex-wrap justify-center gap-6 ">
                        {[
                            { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/Ife_abdulsamad', label: 'Twitter/X' },
                            { icon: <Github size={24} />, href: 'https://github.com/ifeabdulsamad', label: 'GitHub' },
                            { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/ifeoluwa-akinpelu', label: 'LinkedIn' },
                            { icon: <Instagram size={24} />, href: 'https://www.instagram.com/ifeabdulsamad?igsh=MThqdmJjbDBobmg=', label: 'Instagram' },
                            { icon: <FileText size={24} />, href: '#', label: 'Resume' },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-slate-700/50 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-2"
                                aria-label={item.label}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
