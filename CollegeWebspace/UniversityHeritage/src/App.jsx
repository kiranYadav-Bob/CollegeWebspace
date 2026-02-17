import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';

// Placeholder Pages - We will implement these next
import Home from './pages/Home';
import Oxford from './pages/Oxford';
import Krishna from './pages/Krishna';
import Courses from './pages/Courses';
import Sports from './pages/Sports';
import Highlights from './pages/Highlights';

// Wrapper for AnimatePresence to access useLocation
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/oxford" element={<Oxford />} />
        <Route path="/krishna" element={<Krishna />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/highlights" element={<Highlights />} />
      </Routes>
    </AnimatePresence>
  );
};

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f1016] text-white selection:bg-yellow-500/30 font-sans">
        <Navbar />
        <main className="pt-20 min-h-[calc(100vh-80px)]">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
