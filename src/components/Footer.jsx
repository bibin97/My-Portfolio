import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-900 py-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Bibin Thankachan
                        </span>
                        <div className="mt-2 space-y-1">
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Building scalable web applications.
                            </p>
                            <p className="text-sm font-medium text-blue-600 dark:text-cyan-400">
                                MERN Stack Specialist
                            </p>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/bibin97" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/abibinthankachan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:bibinthankachan29@gmail.com" aria-label="Email Me" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 dark:text-zinc-500">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <MapPin className="w-4 h-4" />
                        <span>Malappuram, Kerala, India</span>
                    </div>
                    <p>© {new Date().getFullYear()} Bibin Thankachan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
