import { Code2, Database, Globe, Server, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
    const { bio, skills } = portfolioData;

    // Map icons to skills (this could be enhanced with a proper mapping object)
    const getIcon = (skill) => {
        const lowerSkill = skill.toLowerCase();
        if (lowerSkill.includes('python') || lowerSkill.includes('code')) return <Code2 className="w-5 h-5" />;
        if (lowerSkill.includes('react') || lowerSkill.includes('js')) return <Globe className="w-5 h-5" />;
        if (lowerSkill.includes('sql') || lowerSkill.includes('data')) return <Database className="w-5 h-5" />;
        if (lowerSkill.includes('linux') || lowerSkill.includes('bash')) return <Terminal className="w-5 h-5" />;
        if (lowerSkill.includes('node')) return <Server className="w-5 h-5" />;
        return <Cpu className="w-5 h-5" />;
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        Sobre Mí
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Bio */}
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative px-7 py-6 bg-slate-900 ring-1 ring-slate-800 rounded-lg leading-none flex items-top justify-start space-x-6">
                                <div className="space-y-2">
                                    <p className="text-slate-300 text-lg leading-relaxed">
                                        {bio}
                                    </p>
                                    <p className="text-slate-400 mt-4 leading-relaxed">
                                        Mi enfoque se centra en escribir código limpio, eficiente y mantenible.
                                        Creo firmemente en la filosofía de "aprender haciendo" y constantemente estoy explorando nuevas tecnologías para mejorar mi caja de herramientas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Skills */}
                    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                            <Cpu className="text-blue-500" />
                            Stack Tecnológico
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group"
                                >
                                    <div className="text-blue-500 mb-2 group-hover:text-blue-400 transition-colors">
                                        {getIcon(skill)}
                                    </div>
                                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
