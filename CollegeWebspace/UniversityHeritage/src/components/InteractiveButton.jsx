import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveButton = ({ children, onClick, className = "", variant = "primary" }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.3; // Magnetic strength
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles = "relative px-8 py-4 rounded-full font-bold transition-all duration-300 overflow-hidden group flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-yellow-600 text-white shadow-lg shadow-yellow-500/30",
        secondary: "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
        outline: "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default InteractiveButton;
