import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ role, company, points, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5">
            <Briefcase className="w-24 h-24 text-blue-600" />
        </div>

        <div className="relative z-10">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{role}</h3>
            <p className="text-lg text-blue-600 dark:text-cyan-400 font-medium mb-6">{company}</p>

            <ul className="space-y-4">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Experience</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                <ExperienceCard
                    role="Web Developer Intern"
                    company="MashMagic Edu Tech | October 2025 - Present | Thamarassery, Calicut"
                    points={[
                        <span key="1" className="block p-1 -m-1 rounded-lg bg-green-50 dark:bg-green-900/20">
                            Performance: Optimized landing pages and modules, achieving <strong className="text-zinc-900 dark:text-zinc-100">20-25% faster load times</strong>.
                        </span>,
                        <span key="2">
                            Development: Built <strong className="text-zinc-900 dark:text-zinc-100">8+ responsive UI components</strong> and integrated 8+ REST APIs using <strong className="text-zinc-900 dark:text-zinc-100">React, Tailwind CSS, and Node.js</strong>.
                        </span>,
                        <span key="3">
                            Collaboration: Contributed to agile workflows with over <strong className="text-zinc-900 dark:text-zinc-100">80+ commits</strong> on GitHub.
                        </span>,
                        <span key="4">
                            Quality: Debugged and fixed <strong className="text-zinc-900 dark:text-zinc-100">15+ functional bugs</strong> to ensure high-quality delivery.
                        </span>
                    ]}
                />
            </div>
        </div>
    );
};

export default Experience;
