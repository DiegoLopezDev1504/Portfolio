import { Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
    const { socials } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="text-sm text-center md:text-left">
                    &copy; {currentYear} Diego Alejandro López. Built with React & Tailwind.
                </p>

                <div className="flex items-center space-x-6">
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
