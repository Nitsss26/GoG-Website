import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PRESS_ARTICLES = [
    { id: 1, src: '/assets/Press/itdc.png', alt: 'ITDC News Coverage' },
    { id: 2, src: '/assets/Press/opencampus.png', alt: 'Open Campus Coverage' },
    { id: 4, src: '/assets/Press/theprint.png', alt: 'The Print Article' },
    { id: 15, src: '/assets/Press/bansal-news.png', alt: 'Bansal News Coverage' },
    { id: 5, src: '/assets/Press/Screenshot 2026-05-19 074333.png', alt: 'Press Coverage 1' },
    { id: 6, src: '/assets/Press/Screenshot 2026-05-19 074636.png', alt: 'Press Coverage 2' },
    { id: 7, src: '/assets/Press/Screenshot 2026-05-19 074723.png', alt: 'Press Coverage 3' },
    { id: 8, src: '/assets/Press/Screenshot 2026-05-19 074810.png', alt: 'Press Coverage 4' },
    { id: 9, src: '/assets/Press/Screenshot 2026-05-19 074849.png', alt: 'Press Coverage 5' },
    { id: 10, src: '/assets/Press/Screenshot 2026-05-19 074916.png', alt: 'Press Coverage 6' },
    { id: 11, src: '/assets/Press/Screenshot 2026-05-19 075003.png', alt: 'Press Coverage 7' },
    { id: 12, src: '/assets/Press/Screenshot 2026-05-19 075115.png', alt: 'Press Coverage 8' },
    { id: 13, src: '/assets/Press/Screenshot 2026-05-19 075143.png', alt: 'Press Coverage 9' },
    { id: 14, src: '/assets/Press/Screenshot 2026-05-19 075254.png', alt: 'Press Coverage 10' }
];

const Media: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#030303] pt-24 pb-16">
            <Helmet>
                <title>In The Media | Geeks of Gurukul</title>
                <meta name="description" content="Discover what leading publications are saying about Geeks of Gurukul." />
            </Helmet>

            {/* Background Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#34D562]/10 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 mt-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-[#28a74b]">Media Presence</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        Explore our latest press coverage, news features, and industry recognition.
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {PRESS_ARTICLES.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedImage(article.src)}
                            className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10 hover:border-[#34D562]/50 transition-all duration-500 hover:-translate-y-2 aspect-[4/3]"
                        >
                            <img 
                                src={article.src} 
                                alt={article.alt} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="flex items-center gap-2 text-[#34D562] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-black/50 px-6 py-3 rounded-full border border-[#34D562]/30">
                                    <ZoomIn size={20} />
                                    <span>View Article</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
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
                            className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-[#34D562] border border-white/20 hover:border-transparent rounded-full flex items-center justify-center text-white transition-all duration-300 group z-50 shadow-2xl"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(52,213,98,0.1)] bg-white flex items-center justify-center p-2"
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
        </div>
    );
};

export default Media;
