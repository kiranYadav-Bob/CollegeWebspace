import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/krishna-hero.jpg';

const Krishna = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <div className="min-h-screen pb-20 override-overflow">
            {/* Hero */}
            <div className="h-[70vh] relative flex items-end pb-12 px-8 overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img src={heroImg} alt="Krishna University" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1016] via-black/40 to-black/20" />
                </motion.div>

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-white mb-2"
                    >
                        Krishna University
                    </motion.h1>
                    <p className="text-xl text-blue-300 font-light max-w-2xl tracking-wide">Empowering the region through quality education and cultural values.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 glass-panel p-10 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-black/40 backdrop-blur-xl"
                >
                    <h2 className="text-4xl font-serif font-bold text-blue-400 mb-6">About the University</h2>
                    <p className="text-gray-200 text-lg leading-relaxed font-light">
                        Established in Machilipatnam, Andhra Pradesh, <span className="text-white font-semibold">Krishna University</span> is a beacon of higher education in the Krishna District.
                        It aims to provide high-quality education while preserving the rich cultural ethos of the region. The university is named after the mighty River Krishna, symbolizing the eternal flow of knowledge.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white mb-8 border-b border-blue-500/30 pb-4 inline-block">Core Values</h3>

                        {[
                            { id: '01', title: 'Inclusivity', desc: 'Accessible education for all sections of society.' },
                            { id: '02', title: 'Cultural Pride', desc: 'Integrating local traditions and arts.' },
                            { id: '03', title: 'Research Focus', desc: 'Advancing knowledge in science & technology.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6 items-start group"
                            >
                                <div className="text-4xl font-bold text-blue-500/20 group-hover:text-blue-500 transition-colors">
                                    {item.id}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-blue-100 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass-panel p-8 rounded-2xl relative overflow-hidden group border border-blue-500/20"
                    >
                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-500" />
                        <h3 className="text-3xl font-bold text-white mb-6 relative z-10 font-serif">Campus Life</h3>
                        <p className="text-gray-300 relative z-10 mb-6 text-lg">
                            The campus defines a blend of serenity and vibrancy. With state-of-the-art laboratories, a vast library, and sprawling sports grounds, it provides a holistic environment for student growth.
                        </p>
                        <div className="h-40 w-full rounded-lg bg-blue-900/30 relative overflow-hidden">
                            {/* Placeholder for a mini-gallery or pattern */}
                            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Krishna;
