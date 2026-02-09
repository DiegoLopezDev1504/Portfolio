import { Github, ExternalLink, Codepen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        Proyectos Destacados
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Codepen className="w-12 h-12 text-slate-500 group-hover:text-blue-400 transition-colors duration-300 transform group-hover:scale-110" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded border border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Ver Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors ml-auto"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
