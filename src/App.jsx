import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder Pages - Will replace with real components shortly
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
                {/* Background Layer */}
                <div className="fixed inset-0 z-[-1]">
                    <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300" />
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-400/20 dark:bg-cyan-600/10 blur-[120px]" />
                </div>

                <Navbar />

                <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 space-y-24">
                    <section id="hero">
                        <Hero />
                    </section>

                    <section id="about">
                        <About />
                    </section>

                    <section id="experience">
                        <Experience />
                    </section>

                    <section id="skills">
                        <Skills />
                    </section>

                    <section id="projects">
                        <Projects />
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
