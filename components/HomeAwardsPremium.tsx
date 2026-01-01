import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

// @ts-ignore
import AwardsImage from '../assets/images/AwardsImage.png';
// @ts-ignore
// @ts-ignore
import AwardsImage2 from '../assets/images/AwardsImage2.png';
// @ts-ignore
import Home2 from '../assets/Home2.jpg';
// @ts-ignore
import GovAssoc2 from '../assets/gov_association2.jpg';

// Green Embers Canvas
const GreenEmbers: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{ x: number, y: number, size: number, speedY: number, speedX: number, opacity: number }> = [];

        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedY: Math.random() * 0.5 + 0.2,
                speedX: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(52, 213, 98, ${p.opacity})`;
                ctx.shadowColor = '#34D562';
                ctx.shadowBlur = 15;
                ctx.fill();
                p.y -= p.speedY;
                p.x += p.speedX;
                if (p.y < 0) {
                    p.y = canvas.height;
                    p.x = Math.random() * canvas.width;
                }
            });
            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

const HomeAwardsPremium: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentGovImage, setCurrentGovImage] = useState(0);
    const images = [AwardsImage, AwardsImage2];
    const govImages = [Home2, GovAssoc2];

    // Auto-rotate award images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Auto-rotate government images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGovImage((prev) => (prev + 1) % govImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full py-32 bg-black overflow-hidden">
            {/* Green Embers */}
            <GreenEmbers />

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#34D562] rounded-full blur-[200px] opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Awards & <span className="text-[#34D562]">Recognition</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Celebrated for excellence in education technology and innovation
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Award Image Carousel with Golden Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute -top-8 -left-8 w-16 h-28">
                            <svg viewBox="0 0 80 130" fill="none" className="w-full h-full">
                                <path d="M40 0 C40 60, 0 80, 0 130" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.6" />
                                <path d="M50 10 C50 50, 20 70, 10 120" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.4" />
                            </svg>
                        </div>

                        {/* Main Image Container with Carousel */}
                        <div className="relative bg-gradient-to-br from-[#FFD700]/20 to-transparent p-2 rounded-lg">
                            <div className="border-4 border-[#FFD700] rounded-lg overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.3)]">
                                {/* Image Carousel */}
                                <div className="relative h-[350px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImage}
                                            src={images[currentImage]}
                                            alt="Award Ceremony"
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                        />
                                    </AnimatePresence>

                                    {/* Overlay Badge */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <Trophy className="w-6 h-6 text-[#FFD700]" />
                                            <span className="text-[#FFD700] font-bold text-lg">BIG IMPACT AWARD 2025</span>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <Star key={i} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Indicators */}
                                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImage(idx)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === idx ? 'w-6 bg-[#FFD700]' : 'bg-white/40 hover:bg-white/60'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Right */}
                        <div className="absolute -bottom-8 -right-8 w-16 h-28 rotate-180">
                            <svg viewBox="0 0 80 130" fill="none" className="w-full h-full">
                                <path d="M40 0 C40 60, 0 80, 0 130" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.6" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Award Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <div className="inline-block px-4 py-2 bg-[#34D562]/10 border border-[#34D562]/30 rounded-full mb-6">
                            <span className="text-[#34D562] text-sm font-semibold tracking-wide">🏆 OFFICIAL RECOGNITION</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            The Best <span className="text-[#34D562]">Ed-Tech Game Changer </span> <span> Of the Year 2025</span>
                        </h3>

                        <div className="relative">
                            <div className="absolute -left-8 -top-4 text-6xl text-[#FFD700]/30">"</div>
                            <p className="text-white/80 text-lg leading-relaxed pl-4">
                                <span className="text-[#FFD700] font-semibold">Hon'ble Deputy Chief Minister of MP Shri Rajendra Shukla Ji</span> & Renowned Bollywood Actress
                                Minissha Lamba awarded Geeks of Gurukul <span className="text-white font-bold">The BIG Impact Award 2025</span> for
                                revolutionizing technology education in India.
                            </p>
                            <div className="absolute -right-4 -bottom-6 text-6xl text-[#FFD700]/30">"</div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                                <span className="text-white/60 text-sm">🎖️ Best Innovation</span>
                            </div>
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                                <span className="text-white/60 text-sm">🌟 Top Rated Platform</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- NEW SECTION: Technical Advisor --- */}
                <div className="mt-32 -mb-16 grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left order-2 md:order-1"
                    >
                        <div className="inline-block px-4 py-2 bg-[#34D562]/10 border border-[#34D562]/30 rounded-full mb-6">
                            <span className="text-[#34D562] text-sm font-semibold tracking-wide">🤝 GOVERNMENT ASSOCIATION</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Technical Advisor to <br />
                            <span className="text-[#34D562]">Government of Madhya Pradesh</span>
                        </h3>

                        <div className="relative mb-8">
                            <div className="absolute -left-8 -top-4 text-6xl text-[#FFD700]/30">"</div>
                            <p className="text-white/80 text-lg leading-relaxed pl-4">
                                We are deeply honored to be appointed as the Technical Advisor to the Government of Madhya Pradesh.
                                It was a privilege to be felicitated by <span className="text-[#FFD700] font-semibold">Hon'ble Governor, Shri Mangubhai C. Patel Ji</span>,
                                to deeply implement tech based implementations around all the universities across Madhya Pradesh.
                            </p>
                            <div className="absolute -right-4 -bottom-6 text-6xl text-[#FFD700]/30">"</div>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                                <span className="text-white/90 text-sm font-medium">💪 Empowering Bharat</span>
                            </div>
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                                <span className="text-white/90 text-sm font-medium">✨ Future of Tech</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Image with Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-1 md:order-2"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute -top-8 -right-8 w-16 h-28 transform scale-x-[-1]">
                            <svg viewBox="0 0 80 130" fill="none" className="w-full h-full">
                                <path d="M40 0 C40 60, 0 80, 0 130" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.6" />
                                <path d="M50 10 C50 50, 20 70, 10 120" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.4" />
                            </svg>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative bg-gradient-to-br from-[#FFD700]/20 to-transparent p-2 rounded-lg">
                            <div className="border-4 border-[#FFD700] rounded-lg overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.3)]">
                                {/* Image Slideshow */}
                                <div className="relative h-[350px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentGovImage}
                                            src={govImages[currentGovImage]}
                                            alt="Government Association"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                        />
                                    </AnimatePresence>

                                    {/* Overlay Badge */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <div className="flex items-center justify-center gap-3">
                                            {/* <Trophy className="w-6 h-6 text-[#FFD700]" />
                                            <span className="text-[#FFD700] font-bold text-lg">OFFICIAL RECOGNITION</span>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <Star key={i} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                                                ))}
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Bottom Left */}
                        <div className="absolute -bottom-8 -left-8 w-16 h-28 rotate-180 transform scale-x-[-1]">
                            <svg viewBox="0 0 80 130" fill="none" className="w-full h-full">
                                <path d="M40 0 C40 60, 0 80, 0 130" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.6" />
                            </svg>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HomeAwardsPremium;
