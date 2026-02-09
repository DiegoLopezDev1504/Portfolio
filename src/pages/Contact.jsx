import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const { socials } = portfolioData;
    const email = "contacto@diegolopez.dev"; // Placeholder email

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form logic would go here
        alert("Mensaje enviado (Simulación)");
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Contáctame
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        ¿Tienes un proyecto en mente o simplemente quieres saludar?
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                placeholder="Cuéntame sobre tu proyecto..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg shadow-blue-500/25"
                        >
                            Enviar Mensaje
                            <Send className="ml-2 h-5 w-5" />
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2 text-slate-400">
                            <Mail className="w-5 h-5 text-blue-500" />
                            <span>{email}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                href={socials.github}
                                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={socials.linkedin}
                                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
