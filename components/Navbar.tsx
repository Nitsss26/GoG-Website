import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-6 left-0 right-0 z-[1000] flex justify-center pointer-events-none"
      >
        <div className={`pointer-events-auto transition-all duration-500 ease-in-out ${isScrolled
            ? 'w-[90%] md:w-auto px-6 py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#34D562]/20 rounded-full shadow-[0_10px_40px_-10px_rgba(52,213,98,0.2)]'
            : 'w-[95%] px-8 py-5 bg-transparent border-none'
          }`}>
          <div className="flex items-center justify-between md:justify-center gap-12">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <img src="https://www.geeksofgurukul.com/assets/logo-De_KmFRw.svg" alt="GoG Logo" className="h-8 md:h-10" />
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
                      className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      {/* Hover Pill */}
                      <span className="absolute inset-0 bg-[#34D562]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="relative px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors block"
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
              <button className="px-6 py-2.5 text-sm font-bold bg-[#34D562] text-black rounded-full hover:bg-[#28a74b] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(52,213,98,0.4)]">
                Join Community
              </button>
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
            className="fixed inset-0 z-[900] bg-black/95 backdrop-blur-lg flex items-center justify-center overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 p-6 w-full max-w-md">
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
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-8 py-4 bg-[#34D562] text-black font-bold rounded-full text-xl"
              >
                Join Community
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;