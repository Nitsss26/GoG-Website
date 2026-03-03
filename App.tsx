import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

// Lazy Load Pages
const Courses = lazy(() => import('./pages/Courses'));
const Home = lazy(() => import('./pages/Home'));
const KoiiLabs = lazy(() => import('./pages/KoiiLabs'));
const CoreDao = lazy(() => import('./pages/CoreDao'));
const Educhain = lazy(() => import('./pages/Educhain'));
const Stellar = lazy(() => import('./pages/Stellar'));
const Aptos = lazy(() => import('./pages/Aptos'));
const Agoric = lazy(() => import('./pages/Agoric'));
const Programs = lazy(() => import('./pages/Programs'));
const OurSocialImpact = lazy(() => import('./pages/OurSocialImpact'));
const OurTeam = lazy(() => import('./pages/OurTeam'));
const AboutGoG = lazy(() => import('./pages/AboutGoG'));
const PartneredInstitutes = lazy(() => import('./pages/PartneredInstitutes'));
const Admissions = lazy(() => import('./pages/Admissions'));
const SageBhopal = lazy(() => import('./pages/SageBhopal'));
const Gyanveer = lazy(() => import('./pages/Gyanveer'));
const SageIndore = lazy(() => import('./pages/SageIndore'));
const Scope = lazy(() => import('./pages/Scope'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Events = lazy(() => import('./pages/Events'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Culture = lazy(() => import('./pages/Culture'));
const Careers = lazy(() => import('./pages/Careers'));
const Tech = lazy(() => import('./pages/Tech'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#030303] text-white">
    <div className="animate-pulse text-[#34D562] font-mono text-xl">Loading...</div>
  </div>
);

const MainLayout = () => (
  <>
    <Navbar />
    <Suspense fallback={<LoadingFallback />}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-[#34D562] selection:text-black overflow-x-hidden">
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#34D562] origin-left z-[2000] shadow-[0_0_15px_#34D562]"
            style={{ scaleX }}
          />

          <Routes>
            {/* Standalone Routes without Navbar/Footer */}
            <Route path="/tech" element={
              <Suspense fallback={<LoadingFallback />}>
                <Tech />
              </Suspense>
            } />

            {/* Main Website Routes with Navbar & Footer */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/blockchain/koii-labs" element={<KoiiLabs />} />
              <Route path="/blockchain/core-dao" element={<CoreDao />} />
              <Route path="/blockchain/educhain" element={<Educhain />} />
              <Route path="/blockchain/stellar" element={<Stellar />} />
              <Route path="/blockchain/aptos" element={<Aptos />} />
              <Route path="/blockchain/agoric" element={<Agoric />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/our-social-impact" element={<OurSocialImpact />} />
              <Route path="/teams" element={<OurTeam />} />
              <Route path="/about-gog" element={<AboutGoG />} />
              <Route path="/partnered-colleges" element={<PartneredInstitutes />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/centurion" element={<Admissions />} />
              <Route path="/sagebhopal" element={<SageBhopal />} />
              <Route path="/sageindore" element={<SageIndore />} />
              <Route path="/gyanveer" element={<Gyanveer />} />
              <Route path="/scope" element={<Scope />} />
              <Route path="/events" element={<Events />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsAndConditions />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/careers" element={<Careers />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;