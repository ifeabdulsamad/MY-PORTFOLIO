import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 border-t border-slate-800 backdrop-blur-sm">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Akinpelu Ifeoluwa Abdulsamad. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                    <a href="mailto:akinpeluifeoluwaa@gmail.com" className="text-slate-400 hover:text-primary transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
