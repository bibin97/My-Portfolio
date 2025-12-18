import { motion } from 'framer-motion';
import { FileDown, FileText } from 'lucide-react';

const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                    <FileText className="w-64 h-64 text-white" />
                </div>

                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to make an impact?</h2>
                    <p className="text-blue-50 text-lg max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Download my resume to learn more about my experience and skills.
                    </p>

                    <button className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-zinc-50 px-8 py-4 rounded-full font-bold transition-colors shadow-lg">
                        <FileDown className="w-5 h-5" />
                        Download Resume
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
