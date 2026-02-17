import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/oxford-hero.jpg';
import archImg from '../assets/oxford-arch.jpg';

const Section = ({ title, children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="mb-16 glass-panel p-8 rounded-2xl border-l-4 border-yellow-500"
    >
        <h2 className="text-3xl font-serif font-bold text-yellow-500 mb-6 pl-2">
            {title}
        </h2>
        <div className="text-gray-300 leading-relaxed text-lg">
            {children}
        </div>
    </motion.div>
);

const Oxford = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <div className="min-h-screen pb-20 override-overflow">
            {/* Hero */}
            <div className="h-[70vh] relative flex items-end pb-12 px-8 overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img src={heroImg} alt="Oxford University" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1016] via-black/40 to-black/20" />
                </motion.div>

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-9xl font-serif font-bold text-white mb-4 drop-shadow-xl"
                    >
                        Oxford
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl text-yellow-500 font-light max-w-2xl border-l-4 border-white pl-4"
                    >
                        Dominus Illuminatio Mea
                    </motion.p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-20 relative z-20">
                <Section title="A Legacy of Excellence">
                    <p>
                        There is no clear date of foundation, but teaching existed at Oxford in some form in 1096 and developed rapidly from 1167, when Henry II banned English students from attending the University of Paris.
                    </p>
                    <p className="mt-4">
                        Oxford has a unique collegiate system, with 38 colleges and 6 Permanent Private Halls. Each college is a self-governing institution, providing a close-knit academic community.
                    </p>
                </Section>

                <Section title="Architecture & Culture" delay={0.2}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative group overflow-hidden rounded-lg shadow-2xl border border-white/10 cursor-pointer">
                            <img
                                src={archImg}
                                alt="Oxford Architecture"
                                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-serif text-2xl text-center px-4 -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    "The City of Dreaming Spires"
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-4">
                                The city of Oxford is known as the "City of Dreaming Spires", a term coined by poet Matthew Arnold in reference to the harmonious architecture of Oxford's university buildings.
                            </p>
                            <p>
                                From the Bodleian Library to the Radcliffe Camera, the campus is a living museum of architectural history.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Notable Tradition" delay={0.4}>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <li className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-yellow-500/50 transition-colors">
                            <strong className="text-yellow-500 block text-xl mb-2">Matriculation</strong>
                            The formal ceremony of admission to the University.
                        </li>
                        <li className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-yellow-500/50 transition-colors">
                            <strong className="text-yellow-500 block text-xl mb-2">Formal Hall</strong>
                            A formal meal held in college dining halls, often requiring gowns.
                        </li>
                        <li className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-yellow-500/50 transition-colors">
                            <strong className="text-yellow-500 block text-xl mb-2">May Morning</strong>
                            Celebrated on May 1st with the Magdalen College Choir.
                        </li>
                    </ul>
                </Section>
            </div>
        </div>
    );
};

export default Oxford;
