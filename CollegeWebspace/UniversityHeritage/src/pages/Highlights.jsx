import React from 'react';
import { motion } from 'framer-motion';

const events = [
    { year: '1096', title: 'Oxford Teaching Begins', desc: 'Evidence of teaching at Oxford, making it the oldest university in the English-speaking world.' },
    { year: '2008', title: 'Krishna University Established', desc: 'Established in Machilipatnam to serve the educational needs of the region.' },
    { year: '1829', title: 'First Boat Race', desc: 'The first Boat Race between Oxford and Cambridge takes place at Henley-on-Thames.' },
    { year: '2020', title: 'COVID-19 Research', desc: 'Oxford leads the world in vaccine development, showcasing global impact.' },
    { year: '2023', title: 'KU Research Summit', desc: 'Krishna University hosts major national summit on sustainable technologies.' }
];

const Highlights = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-5xl font-serif font-bold text-center text-white mb-16">Timeline of Glory</h1>

            <div className="relative border-l-2 border-yellow-500 ml-4 md:ml-0 space-y-12">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot */}
                        <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-yellow-500 border-4 border-black animate-pulse" />

                        <div className="glass-panel p-6 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 block mb-2">
                                {event.year}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                            <p className="text-gray-400">{event.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Highlights;
