import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const sections = [
    { id: 'about', label: 'Overview' },
    { id: 'program-highlights', label: 'Benefits' },
    { id: 'fee', label: 'Fees' },
    { id: 'placements', label: 'Placements' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'campus-life', label: 'Campus Life' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
];

interface StickyNavProps {
    onApplyClick?: () => void;
}

export const StickyNav = ({ onApplyClick }: StickyNavProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            // Show nav after scrolling past 600px (approx Hero height)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // ScrollSpy Logic
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Increased threshold to match the new deeper scroll offset
                    if (rect.top <= 350 && rect.bottom >= 350) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -300; // Substantially more clearance (300px)
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

    const navContainerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isVisible && navContainerRef.current) {
            const activeEl = document.getElementById(`nav-item-${activeSection}`);
            if (activeEl) {
                activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    }, [activeSection, isVisible]);

    const scrollNav = (direction: 'left' | 'right') => {
        if (navContainerRef.current) {
            const scrollAmount = 150;
            navContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Desktop/Tablet Floating Pill Nav */}
                    <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="hidden md:flex fixed top-6 left-0 right-0 z-[1000] justify-center pointer-events-none"
                    >
                        <div className="pointer-events-auto transition-all duration-500 ease-in-out px-6 py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#34D562]/20 rounded-full shadow-[0_10px_40px_-10px_rgba(52,213,98,0.2)]">
                            <div className="flex items-center justify-center gap-6">

                                {/* Logo */}
                                <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
                                    <div className="flex items-center gap-1.5 md:gap-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full shadow-xl border border-white/20">
                                        <img src="/assets/CenturionUniversity/logo.png" alt="Centurion University" className="h-9 md:h-12 object-contain" />
                                        <span className="text-gray-400 font-bold text-[8px] md:text-sm">X</span>
                                        <img src="https://i.postimg.cc/4NdhCzDD/logo-(2).png" alt="Geeks of Gurukul" className="h-6 md:h-6 object-contain" />
                                    </div>
                                </Link>

                                {/* Nav Links */}
                                <div className="flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollTo(section.id)}
                                            className={`relative px-4 py-2 text-sm font-medium transition-all rounded-full ${activeSection === section.id
                                                ? 'bg-[#34D562] text-black font-bold shadow-[0_0_15px_rgba(52,213,98,0.4)]'
                                                : 'text-gray-400 hover:text-white hover:bg-[#34D562]/10'
                                                }`}
                                        >
                                            {section.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Apply Now Button */}
                                <div className="flex items-center">
                                    <button
                                        onClick={onApplyClick}
                                        className="px-6 py-2.5 text-sm font-bold bg-[#34D562] text-black rounded-full hover:bg-[#28a74b] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(52,213,98,0.4)]"
                                    >
                                        Apply Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    </motion.nav>

                    {/* Mobile Only Sticky Strip Nav */}
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-0 left-0 right-0 z-[1000] bg-[#0A0A0A] border-b border-[#34D562]/20 shadow-xl"
                    >
                        <div className="flex items-center h-14 w-full px-1">
                            {/* Left Arrow */}
                            <button
                                onClick={() => scrollNav('left')}
                                className="h-full px-3 flex items-center justify-center text-[#34D562] bg-[#0A0A0A] shrink-0 border-r border-[#34D562]/10"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {/* Scrollable List */}
                            <div
                                ref={navContainerRef}
                                className="flex-1 overflow-x-auto flex items-center gap-2 px-2 scroll-smooth"
                                style={{
                                    scrollbarWidth: 'none',  /* Firefox */
                                    msOverflowStyle: 'none',  /* IE and Edge */
                                }}
                            >
                                <style>
                                    {`
                                        .no-scrollbar::-webkit-scrollbar {
                                            display: none;
                                        }
                                    `}
                                </style>
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        id={`nav-item-${section.id}`}
                                        onClick={() => scrollTo(section.id)}
                                        className={`whitespace-nowrap px-4 py-1.5 rounded-md text-sm transition-all border shrink-0 ${activeSection === section.id
                                            ? 'bg-[#34D562]/10 border-[#34D562] text-[#34D562] font-bold'
                                            : 'border-transparent text-gray-400 font-medium'
                                            }`}
                                    >
                                        {section.label}
                                    </button>
                                ))}
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={() => scrollNav('right')}
                                className="h-full px-3 flex items-center justify-center text-[#34D562] bg-[#0A0A0A] shrink-0 border-l border-[#34D562]/10"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
