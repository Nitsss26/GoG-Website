import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

// Import Logos
import ScopeLogo from '../assets/PartneredColleges/SCOPE_Logo.svg';
import SageIndoreLogo from '../assets/PartneredColleges/Sage_Indore.png';
import GoGLogo from '../assets/gog-logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hidePrimaryNav, setHidePrimaryNav] = useState(false);
  const location = useLocation();

  // Check if on Admissions page where StickyNav exists
  const isAdmissionsPage = ['/centurion', '/sagebhopal', '/gyanveer', '/sageindore', '/scope'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Hide primary navbar when StickyNav would be visible (on Admissions page, after 600px scroll)
      if (isAdmissionsPage && window.scrollY > 600) {
        setHidePrimaryNav(true);
      } else {
        setHidePrimaryNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAdmissionsPage]);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Right Employee Login - Small & Subtle */}
      <div className="fixed top-4 right-4 z-[1100] hidden lg:block">
        <a
          href="https://oms.geeksofgurukul.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-black/20 backdrop-blur-md border border-[#34D562]/30 rounded-full text-[9px] font-black text-[#34D562] transition-all duration-300 uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2 group"
        >
          <div className="w-1 h-1 rounded-full bg-[#34D562] transition-colors" />
          Employee Login
        </a>
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidePrimaryNav ? -100 : 0, opacity: hidePrimaryNav ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-[1000] flex justify-center pointer-events-none"
      >
        <div className={`pointer-events-auto transition-all duration-500 ease-in-out ${isScrolled
          ? 'w-[90%] md:w-auto px-6 py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#34D562]/20 rounded-full shadow-[0_10px_40px_-10px_rgba(52,213,98,0.2)]'
          : 'w-[95%] px-8 py-5 bg-transparent border-none'
          }`}>
          <div className="flex items-center justify-between md:justify-center gap-4 xl:gap-8 2xl:gap-12">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer pointer-events-auto">
              {location.pathname === '/centurion' ? (
                <div className="flex items-center gap-1.5 md:gap-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full shadow-xl border border-white/20">
                  <img src="/assets/CenturionUniversity/logo.png" alt="Centurion University" className="h-9 md:h-12 object-contain" />
                  <span className="text-gray-400 font-bold text-[8px] md:text-sm">X</span>
                  <img src="https://i.ibb.co/QFQL6V9q/logo-2.png" alt="Geeks of Gurukul" className="h-6 md:h-6 object-contain" />
                </div>
              ) : location.pathname === '/sagebhopal' ? (
                <div className="flex items-center gap-1.5 md:gap-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full shadow-xl border border-white/20">
                  <img src="/assets/SAGE/sage-bhopal-logo.png" alt="SAGE University" className="h-9 md:h-12 object-contain" />
                  <span className="text-gray-400 font-bold text-[8px] md:text-sm">X</span>
                  <img src="https://i.ibb.co/QFQL6V9q/logo-2.png" alt="Geeks of Gurukul" className="h-6 md:h-6 object-contain" />
                </div>
              ) : location.pathname === '/gyanveer' ? (
                <div className="flex items-center gap-1.5 md:gap-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full shadow-xl border border-white/20">
                  <img src="https://www.gyanveeruniversity.edu.in/assets/img/logo/logo-gv.png" alt="Gyanveer University" className="h-9 md:h-12 object-contain" />
                  <span className="text-gray-400 font-bold text-[8px] md:text-sm">X</span>
                  <img src="https://i.ibb.co/QFQL6V9q/logo-2.png" alt="Geeks of Gurukul" className="h-6 md:h-6 object-contain" />
                </div>
              ) : location.pathname === '/sageindore' ? (
                <div className="flex items-center gap-1.5 md:gap-4 bg-white backdrop-blur-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full shadow-xl border border-white/20">
                  <img src={SageIndoreLogo} alt="SAGE University Indore" className="h-9 md:h-12 object-contain" />
                  <span className="text-gray-400 font-bold text-[8px] md:text-sm">X</span>
                  <img src={GoGLogo} alt="Geeks of Gurukul" className="h-6 md:h-8 object-contain" />
                </div>
              ) : location.pathname === '/scope' ? (
                <div className="flex items-center gap-1.5 md:gap-4 bg-white backdrop-blur-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full shadow-xl border border-white/20">
                  <img src={ScopeLogo} alt="SCOPE Global Skills University" className="h-9 md:h-12 object-contain" />
                  <span className="text-gray-400 font-bold text-[8px] md:text-sm">X</span>
                  <img src={GoGLogo} alt="Geeks of Gurukul" className="h-6 md:h-8 object-contain" />
                </div>
              ) : (
                <img src="https://i.ibb.co/QFQL6V9q/logo-2.png" alt="GoG Logo" className="h-8 md:h-10" />
              )}
            </Link>

            {/* Desktop Links - Capsule Style */}
            <div className="hidden xl:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.children ? (
                    <button
                      className="relative px-4 xl:px-5 2xl:px-6 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      {/* Hover Pill */}
                      <span className="absolute inset-0 bg-[#34D562]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="relative px-4 xl:px-5 2xl:px-6 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors block"
                    >
                      <span className="relative z-10">{item.label}</span>
                      {/* Hover Pill */}
                      <span className="absolute inset-0 bg-[#34D562]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-[#0A0A0A] border border-[#34D562]/20 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl p-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#34D562]/10 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/courses" className="relative group px-4 py-2 text-sm font-bold bg-[#34D562] text-black rounded-full hover:bg-[#28a74b] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(52,213,98,0.4)] flex items-center gap-2 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={14} className="animate-pulse text-yellow-700 fill-yellow-400" />
                  Admissions Open
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

            </div>

            {/* Mobile Toggle */}
            <div className="xl:hidden text-white cursor-pointer hover:text-[#34D562] transition-colors pointer-events-auto" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[900] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-start overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 p-6 pt-36 w-full max-w-md pb-12">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.label} className="w-full flex flex-col items-center">
                  {item.children ? (
                    <div className="flex flex-col items-center gap-4 w-full">
                      <span className="text-2xl font-display font-bold text-white/50">{item.label}</span>
                      <div className="flex flex-col items-center gap-3 w-full bg-white/5 rounded-2xl p-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="text-lg font-medium text-white hover:text-[#34D562]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-2xl font-display font-bold text-white hover:text-[#34D562]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full flex flex-col items-center gap-4"
              >
                <a
                  href="https://oms.geeksofgurukul.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-3 bg-white/10 text-white border border-white/20 font-bold rounded-full text-lg hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  Employee Login
                </a>
                <Link
                  to="/courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 bg-[#34D562] text-black font-bold rounded-full text-xl flex items-center gap-2"
                >
                  <Sparkles size={24} className="animate-pulse text-yellow-700 fill-yellow-400" /> Admissions Open
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;