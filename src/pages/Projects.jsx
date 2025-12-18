import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import weCareImg from '../assets/projects/wecare_doctor_appointment_v2_1766047184849.png';
import mashMagicImg from '../assets/projects/mashmagic_corporate_site_v2_1766047206454.png';
import ecommerceImg from '../assets/projects/ecommerce_platform_dashboard_v2_1766047233034.png';
import netflixImg from '../assets/projects/netflix_clone_ui_v2_1766047252312.png';

const ProjectCard = ({ title, description, tags, demoUrl, githubUrl, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-500/50 hover:shadow-lg transition-all flex flex-col h-full"
    >
        <div className="relative aspect-video overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 space-y-4 flex-grow flex flex-col">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">{title}</h3>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        <div className="p-6 pt-0 mt-auto flex gap-4">
            <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm hover:shadow-md"
            >
                <ExternalLink className="w-4 h-4" />
                View Project
            </motion.a>
            <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-700"
            >
                <Github className="w-4 h-4" />
                GitHub
            </motion.a>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "WeCare Doctor Appointment",
            description: (
                <>
                    A full-stack MERN application featuring <strong>JWT-based Secure Authentication</strong> and <strong>RESTful API Integration</strong>.
                    Designed secure dashboards for patients and doctors.
                </>
            ),
            tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            image: weCareImg,
            demoUrl: "#",
            githubUrl: "https://github.com/bibin97"
        },
        {
            title: "MashMagic Corporate Site",
            description: (
                <>
                    Enhanced UI structure achieving <strong>20-25% faster load times</strong> with an <strong>Optimized UI structure</strong>.
                    Integrated Framer Motion for smooth animations.
                </>
            ),
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            image: mashMagicImg,
            demoUrl: "#",
            githubUrl: "https://github.com/bibin97"
        },
        {
            title: "E-commerce Platform",
            description: (
                <>
                    A comprehensive solution featuring <strong>State Management with Redux.js</strong> and <strong>Scalable Database Design</strong>.
                    Includes cart management and payment integration.
                </>
            ),
            tags: ["React", "Redux.js", "Node.js", "MySQL"],
            image: ecommerceImg,
            demoUrl: "#",
            githubUrl: "https://github.com/bibin97"
        },
        {
            title: "Netflix Clone",
            description: (
                <>
                    A high-fidelity clone demonstrating advanced UI/UX. Key contributions include <strong>10+ feature enhancements</strong> and maintaining a <strong>Debugging mindset</strong>.
                </>
            ),
            tags: ["React", "TMDB API", "Tailwind CSS"],
            image: netflixImg,
            demoUrl: "#",
            githubUrl: "https://github.com/bibin97"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Featured Projects</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
