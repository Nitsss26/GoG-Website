import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, Trophy, Play, Medal, Coins, Zap, Code, Rocket, GraduationCap, Shield, Brain, Stethoscope, Cpu, School } from 'lucide-react';

// @ts-ignore
import HeroCreative from '../assets/hero_center_creative.png';

// Green Embers Canvas
const GreenEmbers: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 2;

        const particles: Array<{ x: number, y: number, size: number, speedY: number, speedX: number, opacity: number }> = [];

        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedY: Math.random() * 0.5 + 0.2,
                speedX: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.4 + 0.2
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
            canvas.height = window.innerHeight * 2;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

const HomeHero: React.FC = () => {

    const allStats = [
        { value: "#1", label: "Top Placement in All Streams", icon: <Trophy size={18} className="text-[#34D562]" /> },
        { value: "No.1", label: "Best EdTech Game-Changer", icon: <Medal size={18} className="text-[#FFD700]" /> },
        { value: "$58,400", label: "Bounty Distributed", icon: <Coins size={18} className="text-[#FFD700]" /> },
        { value: "150+", label: "Hackathons & Bootcamps", icon: <Zap size={18} className="text-[#34D562]" /> },
    ];

    // Rearrange for desired 2x2 Grid Order:
    // Row 1: #1, Bounty
    // Row 2: No.1, Hackathons
    const gridStats = [
        allStats[0],
        allStats[2],
        allStats[1],
        allStats[3]
    ];

    const bottomStats = [
        { value: "50+", label: "Associated Universities" },
        { value: "25+", label: "MoUs India & Canada" },
        { value: "15+", label: "States Visionaries" },
        { value: "1154863+", label: "Learners Onboarded" },
        { value: "7+", label: "Web 3.0 Chains Onboarded" },
        { value: "250+", label: "Team of Innovative IITians" },
    ];

    const featureIcons = [
        { icon: Brain, label: "AI/ML" },
        { icon: Code, label: "Web3" },
        { icon: Stethoscope, label: "MBBS" },
        { icon: GraduationCap, label: "PG Courses" },
        { icon: Cpu, label: "Tech Programs" },
    ];

    return (
        <div className="relative w-full bg-black overflow-x-hidden">
            <GreenEmbers />

            {/* ============== HERO SECTION ============== */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

                {/* Background Decorations - Moved to edges to avoid overlap */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* Circuit SVG - Far Left Edge */}
                    <svg className="absolute top-32 -left-4 w-32 h-32 text-[#34D562]/10" viewBox="0 0 200 200">
                        <path d="M20,100 L60,100 L60,60 L100,60 L100,20" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path d="M100,20 L100,60 L140,60 L140,100 L180,100" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="20" cy="100" r="4" fill="currentColor" />
                        <circle cx="100" cy="20" r="4" fill="currentColor" />
                    </svg>

                    {/* === RIGHT SIDE DECORATIONS === */}


                    {/* Circuit Pattern - Far Right */}
                    <svg className="absolute top-1/3 right-4 w-40 h-40 text-[#34D562]/15" viewBox="0 0 200 200">
                        <path d="M180,20 L180,80 L140,80 L140,140 L100,140" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path d="M180,60 L160,60 L160,120 L120,120" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <circle cx="180" cy="20" r="4" fill="currentColor" />
                        <circle cx="100" cy="140" r="4" fill="currentColor" />
                        <circle cx="120" cy="120" r="3" fill="currentColor" />
                    </svg>

                    {/* Data Flow Lines - Right Side */}
                    <svg className="absolute top-1/2 right-16 w-20 h-40 text-[#34D562]/20" viewBox="0 0 80 160">
                        <line x1="40" y1="0" x2="40" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="6,6">
                            <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="60" y1="20" x2="60" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4">
                            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1.5s" repeatCount="indefinite" />
                        </line>
                        <line x1="20" y1="40" x2="20" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4">
                            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2.5s" repeatCount="indefinite" />
                        </line>
                    </svg>

                    {/* Glowing Dots - Far Right */}
                    <div className="absolute top-40 right-24 w-3 h-3 bg-[#34D562] rounded-full opacity-40 animate-pulse shadow-[0_0_15px_#34D562]" />
                    <div className="absolute top-64 right-12 w-2 h-2 bg-[#34D562] rounded-full opacity-30 animate-pulse shadow-[0_0_10px_#34D562]" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-[55%] right-32 w-2 h-2 bg-[#34D562] rounded-full opacity-40 animate-pulse shadow-[0_0_10px_#34D562]" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-[70%] right-16 w-3 h-3 bg-[#34D562] rounded-full opacity-30 animate-pulse shadow-[0_0_15px_#34D562]" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute top-[45%] right-8 w-2 h-2 bg-[#34D562] rounded-full opacity-25 animate-pulse shadow-[0_0_10px_#34D562]" style={{ animationDelay: '2s' }} />

                    {/* Small Hexagons - Right Side Scattered */}
                    <svg className="absolute bottom-48 right-20 w-16 h-16 text-[#34D562]/10" viewBox="0 0 100 100">
                        <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                    <svg className="absolute top-[60%] right-4 w-12 h-12 text-[#34D562]/15" viewBox="0 0 100 100">
                        <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>


                    {/* === CENTER DECORATIONS === */}

                    {/* Central Tech Mandala / System Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.15]">
                        <svg className="w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Outer Rings */}
                            <circle cx="400" cy="400" r="350" stroke="#34D562" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="20 20" />
                            <circle cx="400" cy="400" r="300" stroke="#34D562" strokeWidth="1" strokeOpacity="0.2" />

                            {/* Rotating Inner Ring */}
                            <g className="animate-spin-slow" style={{ transformOrigin: '400px 400px', animationDuration: '60s' }}>
                                <circle cx="400" cy="400" r="250" stroke="#34D562" strokeWidth="2" strokeOpacity="0.1" strokeDasharray="4 4" />
                                <path d="M400 150 L400 180 M400 620 L400 650 M150 400 L180 400 M620 400 L650 400" stroke="#34D562" strokeWidth="2" />
                            </g>

                            {/* Circuit Lines Radiating */}
                            <path d="M400 400 L550 250 L600 250" stroke="#34D562" strokeWidth="1" strokeOpacity="0.4" />
                            <circle cx="600" cy="250" r="3" fill="#34D562" fillOpacity="0.5" />

                            <path d="M400 400 L250 550 L200 550" stroke="#34D562" strokeWidth="1" strokeOpacity="0.4" />
                            <circle cx="200" cy="550" r="3" fill="#34D562" fillOpacity="0.5" />

                            <path d="M400 400 L500 500 L500 600" stroke="#34D562" strokeWidth="1" strokeOpacity="0.4" />
                            <circle cx="500" cy="600" r="3" fill="#34D562" fillOpacity="0.5" />

                            <path d="M400 400 L300 300 L300 200" stroke="#34D562" strokeWidth="1" strokeOpacity="0.4" />
                            <circle cx="300" cy="200" r="3" fill="#34D562" fillOpacity="0.5" />

                            {/* Hexagon Grid Pattern Overlay - Center */}
                            <path d="M350 313 L400 285 L450 313 L450 370 L400 398 L350 370 Z" stroke="#34D562" strokeWidth="1" strokeOpacity="0.1" />
                            <path d="M350 427 L400 399 L450 427 L450 484 L400 512 L350 484 Z" stroke="#34D562" strokeWidth="1" strokeOpacity="0.1" />
                        </svg>
                    </div>

                    {/* Glowing Pulse Dots - Center Area */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none">
                        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-[#34D562] rounded-full animate-pulse shadow-[0_0_10px_#34D562]" style={{ opacity: 0.4 }} />
                        <div className="absolute bottom-[30%] right-[30%] w-2 h-2 bg-[#34D562] rounded-full animate-pulse shadow-[0_0_10px_#34D562]" style={{ opacity: 0.4, animationDelay: '1s' }} />
                        <div className="absolute top-[40%] right-[40%] w-1.5 h-1.5 bg-[#34D562] rounded-full animate-pulse shadow-[0_0_8px_#34D562]" style={{ opacity: 0.3, animationDelay: '0.5s' }} />
                        <div className="absolute bottom-[40%] left-[40%] w-1.5 h-1.5 bg-[#34D562] rounded-full animate-pulse shadow-[0_0_8px_#34D562]" style={{ opacity: 0.3, animationDelay: '1.5s' }} />
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-dashed border border-[#34D562]/5" />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-32 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT COLUMN */}
                        <div className="space-y-5 lg:mt-5">
                            {/* Badge - Changed from System Online */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#34D562]/10 border border-[#34D562]/40 backdrop-blur-md"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D562] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D562]"></span>
                                </span>
                                <span className="text-[#34D562] font-semibold text-xs tracking-wider uppercase">Now Enrolling</span>
                                <div className="h-3 w-px bg-[#34D562]/40" />
                                <span className="text-white/50 text-xs">Batch 2026</span>
                            </motion.div>

                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-white/40 text-base tracking-[0.4em] uppercase mb-1">Welcome to</p>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                                    <span className="text-white">MODERN AGE</span>
                                    <br />
                                    <span className="text-[#34D562]">GURUKUL</span>
                                </h1>
                            </motion.div>

                            {/* Feature Pills */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-2"
                            >
                                {featureIcons.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:border-[#34D562]/50 transition-all cursor-default">
                                        <item.icon size={14} className="text-[#34D562]" />
                                        <span className="text-white/70 text-xs">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Updated Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-400 text-sm leading-relaxed max-w-md"
                            >
                                India's Premier Education Platform delivering <span className="text-[#34D562] font-semibold">offline & online programs</span> in
                                AI, ML, Web3, PG Courses & more. Our <span className="text-[#34D562] font-semibold">250+ IIT mentors</span> teach at 30+ partnered institutes across India.
                            </motion.p>

                            {/* CTA Buttons - Removed overlapping stars */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-3 pt-2"
                            >
                                <button className="group px-7 py-3.5 bg-[#34D562] hover:bg-[#2bc255] text-black font-bold text-sm rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(52,213,98,0.4)]">
                                    <span className="flex items-center gap-2">
                                        Explore Our Programs
                                        <ChevronRight className="w-4 h-4" />
                                    </span>
                                </button>

                                <button className="px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-full border border-white/10 hover:border-[#34D562]/50 transition-all flex items-center gap-2">
                                    <Play size={14} className="text-[#34D562]" />
                                    Watch Demo
                                </button>
                            </motion.div>

                            {/* Compact Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-5 pt-3"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-[#34D562]/20 border border-[#34D562]/30 flex items-center justify-center">
                                        <GraduationCap size={16} className="text-[#34D562]" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-base">1M+</div>
                                        <div className="text-gray-500 text-[10px]">Learners</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-[#34D562]/20 border border-[#34D562]/30 flex items-center justify-center">
                                        <School size={16} className="text-[#34D562]" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-base">80+</div>
                                        <div className="text-gray-500 text-[10px]">Institutes</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-[#34D562]/20 border border-[#34D562]/30 flex items-center justify-center">
                                        <Globe size={16} className="text-[#34D562]" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-base">170+</div>
                                        <div className="text-gray-500 text-[10px]">Cities</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN - Stats + More Content */}
                        <div className="space-y-4 lg:pt-5">

                            {/* 2x2 Grid + Icons Container */}
                            <div className="w-full space-y-4">

                                {/* 2x2 Grid of Sleek Rectangular Cards - COMPACT MODE */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                                    {gridStats.map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                                            whileHover={{
                                                scale: 1.02,
                                                backgroundColor: "rgba(52, 213, 98, 0.08)",
                                                borderColor: "rgba(52, 213, 98, 0.5)",
                                                boxShadow: "0 0 20px rgba(52, 213, 98, 0.15)"
                                            }}
                                            className="group relative flex items-center p-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#34D562]/50 transition-all cursor-pointer overflow-hidden min-h-[70px]"
                                        >
                                            {/* SATOSHI HEX PATTERN OVERLAY */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0 bg-repeat"
                                                style={{
                                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L20 5V15L10 20L0 15V5L10 0Z' fill='none' stroke='%2334D562' stroke-width='1' opacity='0.5'/%3E%3C/svg%3E")`,
                                                    backgroundSize: '30px 30px'
                                                }}
                                            />

                                            <div className="relative z-10 flex items-center gap-3 w-full">
                                                {/* Icon Box - Smaller */}
                                                <div className="w-9 h-9 rounded-lg bg-[#34D562]/10 border border-[#34D562]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#34D562]/20 transition-colors">
                                                    {stat.icon}
                                                </div>
                                                {/* Text - Compact */}
                                                <div className="flex flex-col min-w-0 flex-1">
                                                    <div className="text-white font-bold text-sm md:text-base leading-tight group-hover:text-[#34D562] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-gray-400 text-[10px] md:text-xs font-medium group-hover:text-white/90 transition-colors mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                                {/* Chevron */}
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#34D562]">
                                                    <ChevronRight size={16} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Tech Icons Row - Center Aligned & BOUNCING */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex justify-center gap-4 pt-2"
                                >
                                    {[Brain, Code, Cpu, Rocket, Shield].map((Icon, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ y: [0, -6, 0] }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.2
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                borderColor: "rgba(52, 213, 98, 0.8)",
                                                boxShadow: "0 0 20px rgba(52, 213, 98, 0.4)"
                                            }}
                                            className="w-10 h-10 md:w-11 md:h-11 mt-4 rounded-xl bg-black/40 border border-[#34D562]/30 flex items-center justify-center cursor-pointer backdrop-blur-md transition-all duration-100 group"
                                        >
                                            <Icon size={18} className="text-[#34D562] group-hover:text-white transition-colors" />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Holographic Image - Sized to end with Left Column */}
                            <div className="relative flex justify-center items-center w-full lg:ml-auto">
                                {/* Glowing Platform */}
                                <motion.div
                                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-[#34D562] blur-[40px] opacity-15 rounded-full"
                                    animate={{ opacity: [0.15, 0.25, 0.15], scale: [0.9, 1, 0.9] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />

                                {/* Floating Filtered Image - Height Reduced to ~300px */}
                                <motion.img
                                    src={HeroCreative}
                                    alt="Futuristic Education Hub"
                                    className="-mt-10 w-full h-auto max-h-[300px] object-contain drop-shadow-[0_0_30px_rgba(52,213,98,0.15)] opacity-90 mix-blend-screen filter brightness-[0.85] contrast-[1.02] saturate-[1.3]"
                                    animate={{
                                        y: [-8, 8, -8],
                                        rotateX: [0, 5, 0],
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 mix-blend-overlay pointer-events-none" />
                            </div>

                        </div>

                    </div>
                </div>

                {/* GREEN BOTTOM STATS BAR */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="relative z-20 mt-auto w-full"
                >
                    <div className="relative overflow-hidden group/bar">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a1f12] to-black group-hover/bar:via-[#0f2a18] transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#34D562]/5 group-hover/bar:to-[#34D562]/10 transition-colors duration-500" />

                        {/* Animated Top Border */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#34D562] to-transparent"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />

                        {/* Stats Content */}
                        <div className="relative py-4">
                            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {bottomStats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="relative group cursor-pointer py-2 px-3 rounded-xl transition-all duration-500 hover:bg-[#34D562]/10 hover:backdrop-blur-sm hover:border hover:border-[#34D562]/20"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -8,
                                            transition: { type: "spring", stiffness: 300, damping: 15 }
                                        }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                    >
                                        <motion.div
                                            className="text-2xl md:text-3xl font-bold text-[#34D562] group-hover:text-white transition-colors duration-300"
                                            animate={{ textShadow: "0 0 10px rgba(0, 255, 72, 0.3)" }}
                                            whileHover={{
                                                scale: 1.1,
                                                textShadow: "0 0 30px rgba(52, 213, 98, 0.8), 0 0 50px rgba(52, 213, 98, 0.4)"
                                            }}
                                        >
                                            {stat.value}
                                        </motion.div>
                                        <div className="text-[10px] md:text-xs text-gray-500 group-hover:text-[#34D562] font-semibold transition-colors duration-300 uppercase tracking-wide leading-tight mt-1 group-hover:drop-shadow-[0_0_8px_rgba(52,213,98,0.5)]">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default HomeHero;
