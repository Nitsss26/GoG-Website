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
                            {/* Stats Cards - Fast & Smooth Animations */}
                            {rightSideStats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                                    whileHover={{
                                        scale: 1.02,
                                        x: -5,
                                        backgroundColor: "rgba(52, 213, 98, 0.05)",
                                        borderColor: "rgba(52, 213, 98, 0.4)",
                                        boxShadow: "0 0 20px rgba(52, 213, 98, 0.1)",
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                    className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#34D562]/40 cursor-pointer flex items-center gap-4"
                                >
                                    <motion.div
                                        className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#34D562]/20 to-transparent flex items-center justify-center border border-[#34D562]/20 flex-shrink-0 group-hover:bg-[#34D562]/30"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {stat.icon}
                                    </motion.div>
                                    <div className="flex-1">
                                        <div className="text-xl font-bold text-white group-hover:text-[#34D562] transition-colors duration-200">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-gray-400 group-hover:text-white/90 transition-colors duration-200">{stat.label}</div>
                                    </div>

                                    {/* Hover Indicator Arrow */}
                                    <motion.div
                                        className="opacity-0 group-hover:opacity-100 absolute right-4 text-[#34D562]"
                                        initial={{ x: -10 }}
                                        whileHover={{ x: 0 }}
                                    >
                                        <ChevronRight size={16} />
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Tech Icons Row - Pop Effect */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="flex justify-center gap-4 pt-2"
                            >
                                {[Brain, Code, Cpu, Rocket, Shield].map((Icon, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{
                                            scale: 1.2,
                                            y: -5,
                                            backgroundColor: "rgba(52, 213, 98, 0.2)",
                                            boxShadow: "0 0 15px rgba(52, 213, 98, 0.4)",
                                            transition: { duration: 0.2 }
                                        }}
                                        animate={{ y: [-3, 3, -3] }}
                                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-10 h-10 rounded-lg bg-[#34D562]/10 border border-[#34D562]/20 flex items-center justify-center cursor-pointer"
                                    >
                                        <Icon size={18} className="text-[#34D562]" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* GREEN BOTTOM STATS BAR - Restored Gradient Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="relative z-20 mt-auto"
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


// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronRight, Globe, Trophy, BookOpen, Play, Medal, Coins, Zap, Code, Rocket, GraduationCap, Shield, Brain, Stethoscope, Users, School, Cpu, Award, MapPin, Building } from 'lucide-react';

// // Green Embers Canvas
// const GreenEmbers: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;
//         const ctx = canvas.getContext('2d');
//         if (!ctx) return;

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight * 2;

//         const particles: Array<{ x: number, y: number, size: number, speedY: number, speedX: number, opacity: number }> = [];

//         for (let i = 0; i < 80; i++) {
//             particles.push({
//                 x: Math.random() * canvas.width,
//                 y: Math.random() * canvas.height,
//                 size: Math.random() * 3 + 1,
//                 speedY: Math.random() * 0.5 + 0.2,
//                 speedX: (Math.random() - 0.5) * 0.2,
//                 opacity: Math.random() * 0.5 + 0.2
//             });
//         }

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particles.forEach(p => {
//                 ctx.beginPath();
//                 ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//                 ctx.fillStyle = `rgba(52, 213, 98, ${p.opacity})`;
//                 ctx.shadowColor = '#34D562';
//                 ctx.shadowBlur = 15;
//                 ctx.fill();
//                 p.y -= p.speedY;
//                 p.x += p.speedX;
//                 if (p.y < 0) {
//                     p.y = canvas.height;
//                     p.x = Math.random() * canvas.width;
//                 }
//             });
//             requestAnimationFrame(animate);
//         };
//         animate();

//         const handleResize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight * 2;
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
// };

// const HomeHero: React.FC = () => {

//     const achievements = [
//         { value: "#1", label: "Top Placement", sublabel: "in All Streams", icon: Trophy, color: "#FFD700" },
//         { value: "No.1", label: "EdTech Innovation", sublabel: "Game-Changer Award", icon: Medal, color: "#FFD700" },
//         { value: "$58,400", label: "Bounty", sublabel: "Distributed to Students", icon: Coins, color: "#34D562" },
//         { value: "150+", label: "Hackathons", sublabel: "& Bootcamps", icon: Zap, color: "#34D562" },
//     ];

//     const bottomStats = [
//         { value: "50+", label: "Universities", icon: School },
//         { value: "21+", label: "MoUs Signed", icon: Award },
//         { value: "15+", label: "States", icon: Globe },
//         { value: "1154863+", label: "Students", icon: Users },
//         { value: "7+", label: "Web3 Chains", icon: Code },
//         { value: "250+", label: "IIT Mentors", icon: GraduationCap },
//     ];

//     const programs = [
//         { icon: Brain, label: "AI/ML" },
//         { icon: Code, label: "Web3" },
//         { icon: Stethoscope, label: "MBBS" },
//         { icon: GraduationCap, label: "PG Courses" },
//         { icon: Cpu, label: "Tech" },
//     ];

//     const techStack = [
//         { icon: Brain, label: "AI" },
//         { icon: Code, label: "Web3" },
//         { icon: Cpu, label: "ML" },
//         { icon: Rocket, label: "Blockchain" },
//     ];

//     const quickStats = [
//         { value: "1M+", label: "Learners", icon: Users },
//         { value: "180+", label: "Institutes", icon: Building },
//         { value: "170+", label: "Cities", icon: MapPin },
//     ];

//     return (
//         <div className="relative w-full bg-black">
//             <GreenEmbers />

//             <section className="relative min-h-screen flex flex-col overflow-hidden">
//                 {/* Background Grid */}
//                 <div className="absolute inset-0 z-0 pointer-events-none">
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(52,213,98,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(52,213,98,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
//                 </div>

//                 {/* Main Content - Wider Container for alignment */}
//                 <div className="flex-1 relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-8">

//                     {/* Two Column Layout */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

//                         {/* LEFT COLUMN - Aligned to Logo */}
//                         <motion.div
//                             className="flex flex-col justify-center space-y-6"
//                             initial={{ opacity: 0, x: -30 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             {/* Badge */}
//                             <motion.div
//                                 className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34D562]/10 border border-[#34D562]/40"
//                                 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 213, 98, 0.3)" }}
//                             >
//                                 <span className="relative flex h-2 w-2">
//                                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D562] opacity-75"></span>
//                                     <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D562]"></span>
//                                 </span>
//                                 <span className="text-[#34D562] font-semibold text-xs uppercase">Now Enrolling</span>
//                                 <div className="h-3 w-px bg-[#34D562]/40" />
//                                 <span className="text-white/50 text-xs">Batch 2026</span>
//                             </motion.div>

//                             {/* Title */}
//                             <div>
//                                 <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-2">Welcome to</p>
//                                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
//                                     <span className="text-white">MODERN AGE</span>
//                                     <br />
//                                     <span className="text-[#34D562]">GURUKUL</span>
//                                 </h1>
//                             </div>

//                             {/* Programs */}
//                             <div className="flex flex-wrap gap-2">
//                                 {programs.map((item, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full cursor-pointer"
//                                         whileHover={{ scale: 1.08, borderColor: "rgba(52, 213, 98, 0.5)" }}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         <item.icon size={14} className="text-[#34D562]" />
//                                         <span className="text-white/70 text-xs font-medium">{item.label}</span>
//                                     </motion.div>
//                                 ))}
//                             </div>

//                             {/* Description */}
//                             <p className="text-gray-400 text-base leading-relaxed max-w-lg">
//                                 India's Premier Education Platform delivering <span className="text-[#34D562] font-semibold">offline & online programs</span> in AI, ML, Web3, PG Courses & more. Our <span className="text-[#34D562] font-semibold">250+ IIT mentors</span> teach at 80+ partnered institutes.
//                             </p>

//                             {/* CTA Buttons */}
//                             <div className="flex flex-wrap gap-4 pt-2">
//                                 <motion.button
//                                     className="px-8 py-4 bg-[#34D562] text-black font-bold text-sm rounded-full shadow-[0_0_25px_rgba(52,213,98,0.4)]"
//                                     whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(52, 213, 98, 0.6)" }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="flex items-center gap-2">
//                                         Explore Our Programs
//                                         <ChevronRight className="w-4 h-4" />
//                                     </span>
//                                 </motion.button>
//                                 <motion.button
//                                     className="px-8 py-4 bg-white/5 text-white font-semibold text-sm rounded-full border border-white/10 flex items-center gap-2"
//                                     whileHover={{ scale: 1.05, borderColor: "rgba(52, 213, 98, 0.5)" }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <Play size={14} className="text-[#34D562]" />
//                                     Watch Demo
//                                 </motion.button>
//                             </div>
//                         </motion.div>

//                         {/* RIGHT COLUMN - Aligned to Button (End) */}
//                         <motion.div
//                             className="flex flex-col gap-4"
//                             initial={{ opacity: 0, x: 30 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                         >
//                             {/* Achievement Cards - 2x2 Grid - Stretched to fill width */}
//                             <div className="grid grid-cols-2 gap-4 flex-1">
//                                 {achievements.map((item, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className="group relative bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-4 cursor-pointer overflow-hidden flex flex-col justify-center min-h-[140px]"
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
//                                         whileHover={{
//                                             scale: 1.02,
//                                             borderColor: "rgba(52, 213, 98, 0.4)",
//                                             boxShadow: "0 10px 40px rgba(52, 213, 98, 0.15)"
//                                         }}
//                                     >
//                                         {/* Corner Decoration */}
//                                         <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
//                                             <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#34D562] rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
//                                             <div className="absolute top-3 right-6 w-4 h-[1px] bg-[#34D562]/30 group-hover:bg-[#34D562] transition-colors" />
//                                             <div className="absolute top-6 right-3 w-[1px] h-4 bg-[#34D562]/30 group-hover:bg-[#34D562] transition-colors" />
//                                         </div>

//                                         {/* Glow on hover */}
//                                         <div className="absolute inset-0 bg-gradient-to-br from-[#34D562]/0 to-transparent group-hover:from-[#34D562]/10 transition-all duration-500" />

//                                         {/* Horizontal Layout - Centered */}
//                                         <div className="relative flex items-center gap-4">
//                                             <motion.div
//                                                 className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/5 flex-shrink-0"
//                                                 whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
//                                             >
//                                                 <item.icon size={22} style={{ color: item.color }} />
//                                             </motion.div>

//                                             <div className="flex-1 min-w-0">
//                                                 <div className="text-2xl font-bold text-white group-hover:text-[#34D562] transition-colors">
//                                                     {item.value}
//                                                 </div>
//                                                 <div className="text-xs text-white/70 font-medium">{item.label}</div>
//                                                 <div className="text-[10px] text-gray-500">{item.sublabel}</div>
//                                             </div>
//                                         </div>

//                                         {/* Progress Bar - Bottom */}
//                                         <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden w-full">
//                                             <motion.div
//                                                 className="h-full rounded-full"
//                                                 style={{ backgroundColor: item.color }}
//                                                 initial={{ width: 0 }}
//                                                 animate={{ width: `${60 + i * 10}%` }}
//                                                 transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
//                                             />
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>

//                             {/* Tech Stack - Full Width */}
//                             <motion.div
//                                 className="relative bg-gradient-to-r from-[#34D562]/15 via-[#34D562]/5 to-transparent border border-[#34D562]/20 rounded-2xl p-5 overflow-hidden group min-h-[100px] flex items-center"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.9 }}
//                                 whileHover={{ borderColor: "rgba(52, 213, 98, 0.5)", boxShadow: "0 0 30px rgba(52, 213, 98, 0.1)" }}
//                             >
//                                 <div className="flex items-center justify-between w-full">
//                                     <div className="flex items-center gap-4">
//                                         <motion.div
//                                             className="w-12 h-12 rounded-xl bg-[#34D562]/20 flex items-center justify-center"
//                                             whileHover={{ rotate: 360 }}
//                                             transition={{ duration: 0.6 }}
//                                         >
//                                             <Rocket size={22} className="text-[#34D562]" />
//                                         </motion.div>
//                                         <div>
//                                             <div className="text-white font-bold text-lg">Future-Ready Technologies</div>
//                                             <div className="text-gray-400 text-xs">AI • ML • Web3 • Blockchain • Cloud</div>
//                                         </div>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         {techStack.map((item, i) => (
//                                             <motion.div
//                                                 key={i}
//                                                 whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0 0 15px rgba(52, 213, 98, 0.5)" }}
//                                                 className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer group-hover:border-[#34D562]/30 transition-colors"
//                                             >
//                                                 <item.icon size={18} className="text-[#34D562]" />
//                                             </motion.div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             {/* Quick Stats - Moved to Right & Enhanced to fill space */}
//                             <motion.div
//                                 className="grid grid-cols-3 gap-4"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 1 }}
//                             >
//                                 {quickStats.map((stat, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center cursor-pointer flex flex-col justify-center min-h-[100px]"
//                                         whileHover={{ borderColor: "rgba(52, 213, 98, 0.4)", scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
//                                     >
//                                         <stat.icon size={20} className="text-[#34D562] mx-auto mb-2" />
//                                         <div className="text-white font-bold text-xl">{stat.value}</div>
//                                         <div className="text-gray-500 text-[10px] uppercase tracking-wider">{stat.label}</div>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         </motion.div>
//                     </div>
//                 </div>

//                 {/* Bottom Stats Bar */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1.2 }}
//                     className="relative z-20 mt-auto"
//                 >
//                     <div className="relative overflow-hidden group/bar">
//                         {/* Gradient Background */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a1f12] to-black group-hover/bar:via-[#0f2a18] transition-colors duration-500" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#34D562]/5 group-hover/bar:to-[#34D562]/10 transition-colors duration-500" />

//                         {/* Animated Top Border */}
//                         <motion.div
//                             className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#34D562] to-transparent"
//                             animate={{ opacity: [0.5, 1, 0.5] }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                         />

//                         {/* Stats Content */}
//                         <div className="relative py-6">
//                             <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-3 md:grid-cols-6 gap-4">
//                                 {bottomStats.map((stat, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className="group text-center py-2 px-1 rounded-lg hover:bg-[#34D562]/15 transition-all cursor-pointer"
//                                         whileHover={{ scale: 1.15, y: -5 }}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         <motion.div
//                                             whileHover={{ rotate: 360 }}
//                                             transition={{ duration: 0.5 }}
//                                         >
//                                             <stat.icon size={20} className="text-[#34D562] mx-auto mb-1 group-hover:drop-shadow-[0_0_10px_rgba(52,213,98,0.8)] transition-all" />
//                                         </motion.div>
//                                         <div className="text-lg md:text-xl font-bold text-[#34D562] group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">
//                                             {stat.value}
//                                         </div>
//                                         <div className="text-[9px] text-gray-500 uppercase tracking-wide group-hover:text-[#34D562] transition-colors">
//                                             {stat.label}
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </section>
//         </div>
//     );
// };

// export default HomeHero;
