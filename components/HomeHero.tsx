import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, Trophy, BookOpen, Cpu, Play, Medal, Coins, Zap, Code, Rocket, GraduationCap, Building, Shield, Brain, Stethoscope, Users, Laptop, School } from 'lucide-react';

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

    const rightSideStats = [
        { value: "#1", label: "Top Placement in All Streams", icon: <Trophy size={22} className="text-[#FFD700]" /> },
        { value: "No.1", label: "Best EdTech Game-Changer", icon: <Medal size={22} className="text-[#FFD700]" /> },
        { value: "$58,400", label: "Bounty Distributed", icon: <Coins size={22} className="text-[#34D562]" /> },
        { value: "150+", label: "Hackathons & Bootcamps", icon: <Zap size={22} className="text-[#34D562]" /> },
    ];

    const bottomStats = [
        { value: "50+", label: "Associated Universities" },
        { value: "21+", label: "MoUs Signed in India & Canada" },
        { value: "15+", label: "States Powering Innovation" },
        { value: "1154863+", label: "Learners Onboarded" },
        { value: "7+", label: "L1 Web 3.0 Chains Onboarded" },
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
        <div className="relative w-full bg-black">
            <GreenEmbers />

            {/* ============== HERO SECTION ============== */}
            <section className="relative min-h-screen flex flex-col overflow-hidden">

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

                    {/* Large Hexagon - Far Right Top */}
                    <svg className="absolute top-24 right-8 w-48 h-48 text-[#34D562]/10" viewBox="0 0 100 100">
                        <path d="M50,5 L90,27.5 L90,72.5 L50,95 L10,72.5 L10,27.5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
                        <path d="M50,15 L80,32.5 L80,67.5 L50,85 L20,67.5 L20,32.5 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    </svg>

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

                    {/* Rotating Ring - Centered between columns */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="w-[500px] h-[500px] rounded-full border border-[#34D562]/10"
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-dashed border border-[#34D562]/5" />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-32 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT COLUMN */}
                        <div className="space-y-5">
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
                        <div className="space-y-4 lg:pt-12">
                            {/* Stats Cards */}
                            {rightSideStats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#34D562]/40 transition-all duration-300 flex items-center gap-4"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#34D562]/20 to-transparent flex items-center justify-center border border-[#34D562]/20 flex-shrink-0">
                                        {stat.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xl font-bold text-white group-hover:text-[#34D562] transition-colors">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-gray-400">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}



                            {/* Tech Icons Row */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="flex justify-center gap-4 pt-2"
                            >
                                {[Brain, Code, Cpu, Rocket, Shield].map((Icon, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [-3, 3, -3] }}
                                        transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-10 h-10 rounded-lg bg-[#34D562]/10 border border-[#34D562]/20 flex items-center justify-center"
                                    >
                                        <Icon size={18} className="text-[#34D562]" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* GREEN BOTTOM STATS BAR */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="relative z-20 mt-auto"
                >
                    <div className="bg-[#34D562] py-4">
                        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {bottomStats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-black">{stat.value}</div>
                                    <div className="text-[10px] md:text-xs text-black/70 uppercase tracking-wide leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default HomeHero;
