import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import KoiiLabs from './pages/KoiiLabs';
import CoreDao from './pages/CoreDao';
import Educhain from './pages/Educhain';
import Stellar from './pages/Stellar';
import Aptos from './pages/Aptos';
import Agoric from './pages/Agoric';


const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-[#34D562] selection:text-black overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#34D562] origin-left z-[2000] shadow-[0_0_15px_#34D562]"
          style={{ scaleX }}
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<KoiiLabs />} />
          <Route path="/blockchain/koii-labs" element={<KoiiLabs />} />
          <Route path="/blockchain/core-dao" element={<CoreDao />} />
          <Route path="/blockchain/educhain" element={<Educhain />} />
          <Route path="/blockchain/stellar" element={<Stellar />} />
          <Route path="/blockchain/aptos" element={<Aptos />} />
          <Route path="/blockchain/agoric" element={<Agoric />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;