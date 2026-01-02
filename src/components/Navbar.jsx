import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'projects', href: '#portfolio' },
    { name: 'contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for active section highlighting
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    // Find the nav link that matches this id
                    const match = navLinks.find(link => link.href === `#${id}`);
                    if (match) {
                        setActiveSection(match.name);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections mentioned in navLinks
        navLinks.forEach(link => {
            const sectionId = link.href.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: 'https://x.com/Ife_abdulsamad', label: 'Twitter/X' },
        { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ifeabdulsamad', label: 'GitHub', target: "_blank" },
        { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/ifeoluwa-akinpelu', label: 'LinkedIn', target: "_blank" },
        { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/ifeabdulsamad?igsh=MThqdmJjbDBobmg=', label: 'Instagram', target: "_blank" },
        { icon: <FileText className="w-5 h-5" />, href: '#', label: 'Resume', target: "_blank" },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${isOpen ? 'bg-transparent' : (scrolled ? 'glass-nav shadow-lg shadow-black/10' : 'bg-transparent')
            }`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-full">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl md:text-2xl font-normal text-white hover:text-primary transition-colors"
                >
                    Ife Abdulsamad
                </a>

                {/* Desktop Nav - Center Pill Container */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center gap-3 backdrop-blur-sm border border-white/10 rounded-full p-2" style={{ background: 'transparent' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px' }}
                                className={`relative rounded-full text-md font-light transition-colors duration-300 ${activeSection === link.name
                                    ? 'text-white'
                                    : 'text-slate-300 hover:text-white'
                                    }`}
                                onClick={() => setActiveSection(link.name)}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {activeSection === link.name && (
                                    <motion.span
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-[#ff540060] rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Social Icons - Right Side */}
                <div className="hidden md:flex items-center gap-5">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-white transition-colors"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {/* Mobile Menu Overlay & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-in Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#120040] border-l border-white/10 z-50 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full p-6">
                                {/* Header with Close Button */}
                                <div className="absolute top-12 right-8 z-50">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-slate-400 hover:text-white p-2"
                                    >
                                        <X size={28} strokeWidth={3} />
                                    </button>
                                </div>

                                {/* Center Content Wrapper */}
                                <div className="flex-1 flex flex-col justify-center items-center gap-10">
                                    {/* Navigation Links */}
                                    <div className="flex flex-col gap-6 items-center">
                                        {navLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="text-2xl font-light text-slate-300 hover:text-white transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex gap-6 justify-center">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-200"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
