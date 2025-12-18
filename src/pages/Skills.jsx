import { motion } from 'framer-motion';
import { Code, Database, Terminal, Wrench, MonitorSmartphone, Palette } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, items, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
    >
        <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-3">
            {items.map((item) => (
                <motion.span
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md cursor-default"
                >
                    {item.icon ? (
                        <item.icon className="w-4 h-4 text-blue-500" />
                    ) : (
                        <img
                            src={`https://cdn.simpleicons.org/${item.slug}/${item.color || 'default'}`}
                            alt=""
                            className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                    )}
                    {item.name}
                </motion.span >
            ))}
        </div >
    </motion.div >
);

const Skills = () => {
    const skillSets = [
        {
            title: "Frontend Development",
            icon: Code,
            items: [
                { name: "React.js", slug: "react", color: "61DAFB" },
                { name: "Redux.js", slug: "redux", color: "764ABC" },
                { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
                { name: "GSAP", slug: "greensock", color: "88CE02" },
                { name: "Framer Motion", slug: "framer", color: "0055FF" },
                { name: "Responsive Design", icon: MonitorSmartphone } // Using Lucide icon
            ]
        },
        {
            title: "Backend & Database",
            icon: Database,
            items: [
                { name: "Node.js", slug: "nodedotjs", color: "339933" },
                { name: "Express.js", slug: "express", color: "000000" },
                { name: "MongoDB", slug: "mongodb", color: "47A248" },
                { name: "RESTful APIs", slug: "postman", color: "FF6C37" }, // Using Postman icon as proxy
                { name: "JWT Auth", slug: "jsonwebtokens", color: "000000" },
                { name: "MySQL (Basics)", slug: "mysql", color: "4479A1" }
            ]
        },
        {
            title: "Languages",
            icon: Terminal,
            items: [
                { name: "JavaScript (ES6+)", slug: "javascript", color: "F7DF1E" },
                { name: "C", slug: "c", color: "A8B9CC" },
                { name: "C++", slug: "cplusplus", color: "00599C" },
                { name: "HTML5", slug: "html5", color: "E34F26" },
                { name: "CSS3", icon: Palette }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: Wrench,
            items: [
                { name: "Git", slug: "git", color: "F05032" },
                { name: "GitHub", slug: "github", color: "181717" },
                { name: "Postman", slug: "postman", color: "FF6C37" },
                { name: "Figma", slug: "figma", color: "F24E1E" },
                { name: "MVC Arch", icon: Code }, // Using generic icon
                { name: "LocalStorage", icon: Database } // Using generic icon
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Technical Skills</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {/* Frontend and Backend in top row if space permits, or stacked */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SkillCard title={skillSets[0].title} icon={skillSets[0].icon} items={skillSets[0].items} delay={0} />
                        <SkillCard title={skillSets[1].title} icon={skillSets[1].icon} items={skillSets[1].items} delay={0.1} />
                    </div>
                    {/* Secondary skills below */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SkillCard title={skillSets[2].title} icon={skillSets[2].icon} items={skillSets[2].items} delay={0.2} />
                        <SkillCard title={skillSets[3].title} icon={skillSets[3].icon} items={skillSets[3].items} delay={0.3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
