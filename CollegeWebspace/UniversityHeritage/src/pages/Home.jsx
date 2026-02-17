import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import InteractiveButton from '../components/InteractiveButton';

// Import local assets
import heroBg from '../assets/campus.jpg';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const FeatureCard = ({ icon: Icon, title, description, color, linkText }) => (
    <TiltCard className="h-full">
        <div className="glass-panel p-8 rounded-xl h-full border border-white/10 bg-black/40 hover:bg-black/60 transition-colors group relative overflow-hidden">
            <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform relative z-10">
                <Icon className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors relative z-10" style={{ transform: "translateZ(50px)" }}>{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10" style={{ transform: "translateZ(30px)" }}>{description}</p>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">{linkText} &rarr;</span>
            </div>
        </div>
    </TiltCard>
);

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="overflow-hidden">
            {/* Parallax Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0f1016] z-10" />
                    <img src={heroBg} alt="University Campus" className="w-full h-full object-cover scale-110" />
                </motion.div>

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-[-50px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-white leading-tight drop-shadow-2xl">
                            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600">Tradition</span> Meets <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Innovation</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-md"
                    >
                        Explore the rich heritage of world-class institutions like <span className="text-yellow-400 font-semibold">Oxford</span> and <span className="text-blue-400 font-semibold">Krishna University</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link to="/courses">
                            <InteractiveButton variant="primary">
                                Explore Courses <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </InteractiveButton>
                        </Link>
                        <Link to="/highlights">
                            <InteractiveButton variant="secondary">
                                View Highlights
                            </InteractiveButton>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative py-32 px-4 max-w-7xl mx-auto">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0f1016] to-[#0f1016] -z-10" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.2 }}
                    className="grid md:grid-cols-3 gap-10"
                >
                    <FeatureCard
                        icon={BookOpen}
                        title="Academic Excellence"
                        description="A legacy of rigorous scholarship and intellectual pursuit defining our featured universities."
                        color="bg-blue-600/10"
                        linkText="Learn More"
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Enduring Values"
                        description="Integrity, discipline, and community service remain at the heart of the student experience."
                        color="bg-red-600/10"
                        linkText="Our Pledge"
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Global Impact"
                        description="Graduates who lead and innovate across borders, carrying their heritage with pride."
                        color="bg-green-600/10"
                        linkText="View Map"
                    />
                </motion.div>
            </section>

            {/* Quote Section with Parallax Background */}
            <section className="relative py-24 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-fixed bg-center bg-cover opacity-20" style={{ backgroundImage: `url(${heroBg})` }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f1016] via-transparent to-[#0f1016]" />

                <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
                    <motion.blockquote
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif italic text-gray-100 leading-tight"
                    >
                        "Education is not the learning of facts, but the training of the mind to think."
                    </motion.blockquote>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-yellow-500 font-bold text-xl tracking-widest uppercase"
                    >
                        — Albert Einstein
                    </motion.p>
                </div>
            </section>
        </div>
    );
};

export default Home;
