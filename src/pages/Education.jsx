import { motion } from 'framer-motion';
import { GraduationCap, Code } from 'lucide-react';

const EducationItem = ({ title, place, year, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 pb-8 last:pb-0"
    >
        <div className="absolute left-[-9px] top-0 bg-white dark:bg-zinc-950 p-1 rounded-full border border-zinc-200 dark:border-zinc-800">
            <Icon className="w-4 h-4 text-blue-600" />
        </div>
        <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{year}</span>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{place}</p>
        </div>
    </motion.div>
);

const Education = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Education</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="space-y-2">
                        <EducationItem
                            title="MERN Stack Development"
                            place="Ernakulam"
                            year="2025"
                            icon={Code}
                            delay={0.1}
                        />
                        <EducationItem
                            title="BCom Taxation"
                            place="Malappuram"
                            year="2021"
                            icon={GraduationCap}
                            delay={0.2}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Education;
