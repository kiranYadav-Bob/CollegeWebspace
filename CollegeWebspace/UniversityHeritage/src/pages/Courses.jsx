import React from 'react';
import { motion } from 'framer-motion';

const courses = [
    { id: 1, title: 'Computer Science', category: 'Technology', duration: '4 Years', level: 'Undergraduate' },
    { id: 2, title: 'English Literature', category: 'Humanities', duration: '3 Years', level: 'Undergraduate' },
    { id: 3, title: 'Business Administration', category: 'Business', duration: '2 Years', level: 'Postgraduate' },
    { id: 4, title: 'Biotechnology', category: 'Science', duration: '4 Years', level: 'Undergraduate' },
    { id: 5, title: 'Fine Arts', category: 'Arts', duration: '3 Years', level: 'Undergraduate' },
    { id: 6, title: 'Data Science', category: 'Technology', duration: '2 Years', level: 'Postgraduate' },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

const Courses = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-white">Our Courses</h1>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Explore a wide range of academic programs designed to shape your future.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                    <motion.div
                        key={course.id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 border-l-4 border-yellow-500"
                    >
                        <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider">{course.category}</span>
                        <h3 className="text-2xl font-bold text-white mt-2 mb-3">{course.title}</h3>
                        <div className="flex justify-between items-center text-sm text-gray-400 mt-4 border-t border-white/10 pt-4">
                            <span>{course.duration}</span>
                            <span>{course.level}</span>
                        </div>
                        <button className="w-full mt-6 py-2 rounded bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors">
                            View Details
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
