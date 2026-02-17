import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-8 relative z-50">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg">
                            <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-serif font-bold text-white tracking-wide">
                            Heritage<span className="text-yellow-500">Space</span>
                        </span>
                    </div>

                    {/* Links */}
                    <div className="text-gray-400 text-sm flex gap-6">
                        <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-yellow-500 transition-colors">Contact</a>
                    </div>

                    {/* Creator Credit */}
                    <div className="text-gray-400 text-sm flex items-center gap-1">
                        <span>Created with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>by <strong className="text-white">Kiran Rachakuntla</strong></span>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-gray-600">
                    &copy; {new Date().getFullYear()} University Heritage Space. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
