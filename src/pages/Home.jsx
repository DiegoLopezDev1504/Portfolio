import { ArrowRight, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Home = () => {
    const { name, title, bio } = portfolioData;

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-950 flex items-center relative overflow-hidden">
            {/* Abstract Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
                <div className="max-w-3xl animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for hire
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{name.split(' ')[0]}</span>
                        <br />
                        <span className="text-slate-400 text-2xl md:text-4xl font-normal block mt-4">
                            {title}
                        </span>
                    </h1>

                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 border-l-2 border-blue-500/50 pl-6">
                        {bio}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/25 group"
                        >
                            Ver Proyectos
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="/resume.pdf" // Placeholder path to resume
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200 focus:ring-2 focus:ring-slate-700"
                        >
                            Descargar CV
                            <FileDown className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
        </div>
    );
};

export default Home;
