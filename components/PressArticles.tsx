import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const PRESS_ARTICLES = [
    { id: 1, src: '/assets/Press/itdc.png', alt: 'ITDC News Coverage' },
    { id: 2, src: '/assets/Press/opencampus.png', alt: 'Open Campus Coverage' },
    // { id: 3, src: '/assets/Press/oriental-hackathon.png', alt: 'Oriental Hackathon News' },
    { id: 4, src: '/assets/Press/theprint.png', alt: 'The Print Article' },
    { id: 5, src: '/assets/Press/Screenshot 2026-05-19 074333.png', alt: 'Press Coverage 1' },
    { id: 6, src: '/assets/Press/Screenshot 2026-05-19 074636.png', alt: 'Press Coverage 2' },
    { id: 7, src: '/assets/Press/Screenshot 2026-05-19 074723.png', alt: 'Press Coverage 3' },
    { id: 8, src: '/assets/Press/Screenshot 2026-05-19 074810.png', alt: 'Press Coverage 4' },
    { id: 9, src: '/assets/Press/Screenshot 2026-05-19 074849.png', alt: 'Press Coverage 5' },
    { id: 10, src: '/assets/Press/Screenshot 2026-05-19 074916.png', alt: 'Press Coverage 6' },
    { id: 11, src: '/assets/Press/Screenshot 2026-05-19 075003.png', alt: 'Press Coverage 7' },
    { id: 12, src: '/assets/Press/Screenshot 2026-05-19 075115.png', alt: 'Press Coverage 8' },
    { id: 13, src: '/assets/Press/Screenshot 2026-05-19 075143.png', alt: 'Press Coverage 9' },
    { id: 14, src: '/assets/Press/Screenshot 2026-05-19 075254.png', alt: 'Press Coverage 10' },
    { id: 15, src: '/assets/Press/bansal-news.png', alt: 'Bansal News Coverage' }
];

// Duplicate for infinite marquee effect
const MARQUEE_ITEMS = [...PRESS_ARTICLES, ...PRESS_ARTICLES];

const PressArticles: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="relative py-16 bg-[#030303] overflow-hidden border-t border-white/5">
            {/* Background Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#34D562]/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4"
                >
                    In The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-[#28a74b]">Media</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
                >
                    Discover what leading publications are saying about our impact on education & technology.
                </motion.p>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden flex items-center py-4 group">
                {/* Gradient Fades for edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#030303] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#030303] to-transparent z-10" />

                {/* Marquee Track */}
                <div className="flex gap-6 md:gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
                    {MARQUEE_ITEMS.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            onClick={() => setSelectedImage(item.src)}
                            className="relative w-[280px] md:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group/card bg-white border-2 border-transparent hover:border-[#34D562]/50 transition-all duration-300 shadow-xl flex-shrink-0"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="flex items-center gap-2 text-white font-semibold transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                                    <ExternalLink size={20} className="text-[#34D562]" />
                                    <span>Read Article</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                            className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-[#34D562] border border-white/20 hover:border-transparent rounded-full flex items-center justify-center text-white transition-all duration-300 group z-50"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-white cursor-default flex items-center justify-center p-2"
                        >
                            <img
                                src={selectedImage}
                                alt="Press Article Full"
                                className="w-full h-full object-contain max-h-[85vh] rounded-xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Styles for Marquee Animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}} />
        </section>
    );
};

export default PressArticles;
