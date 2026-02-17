import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Oxford University', path: '/oxford' },
    { name: 'Krishna University', path: '/krishna' },
    { name: 'Courses', path: '/courses' },
    { name: 'Sports', path: '/sports' },
    { name: 'Highlights', path: '/highlights' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/30 backdrop-blur-md shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="p-2 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg group-hover:scale-110 transition-transform">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="self-center text-2xl font-serif font-bold whitespace-nowrap text-white tracking-wide">
            Heritage<span className="text-yellow-500">Space</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform border-2 flex items-center justify-center ${isActive(link.path)
                      ? 'bg-yellow-500 text-black border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)] scale-105'
                      : 'bg-gray-900 border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-500 hover:shadow-lg'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full md:hidden overflow-hidden"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-xl bg-black/90 backdrop-blur-xl border border-white/20 p-4 space-y-3 shadow-2xl">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)} // Close menu on click
                      className={`block py-3 px-4 rounded-xl text-center font-bold transition-all border-2 ${isActive(link.path)
                          ? 'bg-yellow-500 text-black border-yellow-500 shadow-lg'
                          : 'bg-gray-900 border-gray-800 text-gray-400 hover:bg-gray-800 hover:border-gray-600 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
