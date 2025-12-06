import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

// Lazy Load Pages
const KoiiLabs = lazy(() => import('./pages/KoiiLabs'));
const CoreDao = lazy(() => import('./pages/CoreDao'));
const Educhain = lazy(() => import('./pages/Educhain'));
const Stellar = lazy(() => import('./pages/Stellar'));
const Aptos = lazy(() => import('./pages/Aptos'));
const Agoric = lazy(() => import('./pages/Agoric'));
const Programs = lazy(() => import('./pages/Programs'));
const OurSocialImpact = lazy(() => import('./pages/OurSocialImpact'));
const OurTeam = lazy(() => import('./pages/OurTeam'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#030303] text-white">
    <div className="animate-pulse text-[#34D562] font-mono text-xl">Loading...</div>
  </div>
);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-[#34D562] selection:text-black overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#34D562] origin-left z-[2000] shadow-[0_0_15px_#34D562]"
          style={{ scaleX }}
        />

        <Navbar />

        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<KoiiLabs />} />
            <Route path="/blockchain/koii-labs" element={<KoiiLabs />} />
            <Route path="/blockchain/core-dao" element={<CoreDao />} />
            <Route path="/blockchain/educhain" element={<Educhain />} />
            <Route path="/blockchain/stellar" element={<Stellar />} />
            <Route path="/blockchain/aptos" element={<Aptos />} />
            <Route path="/blockchain/agoric" element={<Agoric />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/our-social-impact" element={<OurSocialImpact />} />
            <Route path="/teams" element={<OurTeam />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
};

export default App;