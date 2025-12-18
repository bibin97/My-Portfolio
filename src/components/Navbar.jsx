import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    // Resume file path - using public folder directly
    const resumeUrl = "/Bibin_Resume.pdf";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 py-4`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 relative">
                    {/* Logo - Left */}
                    <div className="flex-shrink-0 cursor-pointer z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <h1 className="text-2xl font-bold">
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                Bibin.
                            </span>
                        </h1>
                    </div>

                    {/* Desktop Navigation - Centered Pill */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
                        <div className="flex items-center space-x-1 px-2 py-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/50 dark:border-white/10 shadow-xl transition-all duration-300">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer px-5 py-2.5 rounded-full text-sm font-medium transition-all text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-white/50 dark:hover:bg-zinc-800/50"
                                    activeClass="!text-blue-600 dark:!text-cyan-400 bg-white dark:bg-zinc-800 font-semibold shadow-sm"
                                    spy={true}
                                    offset={-100}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4 z-50">
                        <a
                            href={resumeUrl}
                            download="Bibin_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Resume"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Resume
                            <Download className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
                        </a>
                        <div className="bg-zinc-200 dark:bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-pointer text-zinc-700 dark:text-zinc-200 shadow-sm">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4 z-50">
                        <div className="bg-orange-50 dark:bg-zinc-800 p-2.5 rounded-full text-orange-500 dark:text-yellow-400">
                            <ThemeToggle />
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Mobile Menu"
                            className="bg-white dark:bg-zinc-800 p-2.5 rounded-full text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-cyan-400 focus:outline-none shadow-sm border border-zinc-100 dark:border-zinc-700"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-24 left-4 right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-50"
                    >
                        <div className="px-5 pt-6 pb-8 space-y-3">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-2xl text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={resumeUrl}
                                download="Bibin_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-colors shadow-lg shadow-blue-600/20"
                            >
                                Download Resume
                                <Download className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
