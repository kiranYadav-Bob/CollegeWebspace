import React from 'react';
import { motion } from 'framer-motion';
import rowingImg from '../assets/rowing.jpg';
import cricketImg from '../assets/cricket.jpg';

const Sports = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-6xl md:text-8xl font-serif font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 drop-shadow-sm"
                >
                    Athletic Heritage
                </motion.h1>

                {/* Oxford Rowing Section */}
                <section className="flex flex-col md:flex-row gap-12 items-center mb-32 group">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 h-[500px] relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img
                            src={rowingImg}
                            alt="Rowing"
                            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-4xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Rowing</h3>
                            <p className="text-blue-200">The Ultimate Test of Endurance</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 p-4"
                    >
                        <span className="text-blue-500 font-bold tracking-widest uppercase mb-2 block">Oxford University</span>
                        <h2 className="text-5xl font-serif font-bold text-white mb-6">The Boat Race</h2>
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            Rowing is intrinsically linked with the history of Oxford. The annual Boat Race against Cambridge is one of the world's oldest sporting events, dating back to 1829.
                            The dedication, teamwork, and rhythm of the crew exemplify the university's spirit.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
                                <div className="text-3xl font-bold text-white">80+</div>
                                <div className="text-sm text-gray-400 uppercase">Race Wins</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
                                <div className="text-3xl font-bold text-white">1815</div>
                                <div className="text-sm text-gray-400 uppercase">First Club</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Krishna Cricket Section */}
                <section className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20 group">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 h-[500px] relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img
                            src={cricketImg}
                            alt="Cricket"
                            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-4xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Cricket</h3>
                            <p className="text-green-200">The Gentleman's Game</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 p-4"
                    >
                        <span className="text-green-500 font-bold tracking-widest uppercase mb-2 block">Krishna University</span>
                        <h2 className="text-5xl font-serif font-bold text-white mb-6">Cricket Culture</h2>
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            Cricket is more than just a game; it's an emotion. Krishna University has cultivated a strong culture of cricket, producing athletes who compete at state and national levels.
                            The inter-collegiate tournaments bring the entire campus alive with energy and passion.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
                                <div className="text-3xl font-bold text-white">Top 5</div>
                                <div className="text-sm text-gray-400 uppercase">State Ranking</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
                                <div className="text-3xl font-bold text-white">Inter</div>
                                <div className="text-sm text-gray-400 uppercase">University Champs</div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Sports;
