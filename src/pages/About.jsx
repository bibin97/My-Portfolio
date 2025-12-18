import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 relative mx-auto w-full max-w-[220px]">
            <div className="relative rounded-full overflow-hidden aspect-square border-4 border-white dark:border-zinc-800 shadow-xl">
              <img
                src={profileImg}
                alt="Bibin Thankachan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-2 -right-2 w-full h-full rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-500/20 dark:from-blue-600/10 dark:to-cyan-500/10 blur-xl" />
          </div>

          <div className="md:col-span-8 bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <p className="text-lg leading-loose text-zinc-600 dark:text-zinc-300 pb-4">
              "I am a MERN Stack Developer who transitioned from a background in <span className="font-semibold text-zinc-900 dark:text-zinc-50">Commerce (BCom)</span> to high-performance web engineering. My approach combines <span className="font-semibold text-zinc-900 dark:text-zinc-50">logical problem-solving</span> with a deep understanding of modern JavaScript frameworks. I specialize in building responsive UIs and robust REST APIs, ensuring that every line of code adds value to the end user".
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
