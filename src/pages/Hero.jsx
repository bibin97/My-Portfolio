import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-4xl"
            >
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
                    Welcome to my portfolio
                </span>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Bibin Thankachan
                    <span className="block text-4xl md:text-6xl mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        MERN Stack Developer
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-loose">
                    I build scalable web applications with a focus on performance optimization and seamless user experiences. <span className="font-bold text-zinc-900 dark:text-zinc-100">Currently an Intern at MashMagic Edu Tech</span>.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl inline-flex items-center gap-4 shadow-sm mx-auto"
                >
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full relative">
                        <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div className="absolute -top-1 -right-1 bg-white dark:bg-zinc-900 rounded-full p-0.5 shadow-sm">
                            <ArrowUp className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Key Achievement</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Improved application performance by over <span className="font-bold text-green-600 dark:text-green-400">20%</span></p>
                    </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link
                        to="projects"
                        smooth={true}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
                    >
                        View My Work
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        className="cursor-pointer inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-zinc-900 dark:text-zinc-100 bg-transparent border-2 border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all hover:border-zinc-300 dark:hover:border-zinc-600"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
