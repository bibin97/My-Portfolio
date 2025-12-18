import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react';

import { useState } from 'react';
import { Copy, ExternalLink, Check } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, href, delay, isCopyable }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.a
            href={href}
            target={isCopyable ? undefined : "_blank"}
            rel={isCopyable ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors group relative overflow-hidden"
        >
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 truncate pr-8">{value}</p>
            </div>

            {isCopyable ? (
                <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="Click to copy"
                >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
            ) : (
                <div className="p-2 rounded-lg text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                </div>
            )}
        </motion.a>
    );
};

const Contact = () => {
    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'bibinthankachan29@gmail.com', href: 'mailto:bibinthankachan29@gmail.com', isCopyable: true },
        { icon: Phone, label: 'Phone', value: '9061727180', href: 'tel:9061727180', isCopyable: true },
        { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/abibinthankachan', href: 'https://linkedin.com/in/abibinthankachan', isCopyable: false },
        { icon: Github, label: 'GitHub', value: 'github.com/bibin97', href: 'https://github.com/bibin97', isCopyable: false },
        { icon: MapPin, label: 'Location', value: 'Malappuram, Kerala, India', href: '#', isCopyable: false },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">Get in Touch</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto" />
                    <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactInfo.map((item, index) => (
                        <ContactItem key={index} {...item} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
