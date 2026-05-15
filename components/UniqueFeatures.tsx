import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, MonitorPlay, Globe, ArrowRight, TrendingUp, Calculator, MessageCircle, X, Calendar, Send, Loader2, Sparkles,
    ShieldCheck, Laptop, GraduationCap, Zap, Award, Users, Trophy, FileText, Briefcase
} from 'lucide-react';
import {
    studentVlogs, careerPathData, alumniSuccess, recruiterTestimonials, blogUpdates
} from '../data/admissionsData';

export const CurrentYearUpgrades = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [cycleCount, setCycleCount] = useState(0);
    const [isManual, setIsManual] = useState(false);

    const upgrades = [
        {
            id: "01",
            title: "Live IIT Internship via Anudaksh",
            subtitle: "3-Month Exclusive Program",
            desc: "Gain a massive competitive edge with a 3-month live internship directly under active IIT Guwahati professors. Engage with elite faculty through immersive guided sessions.",
            status: "GAME CHANGER",
            icon: Laptop,
            color: "emerald",
            hex: "#34D562"
        },
        {
            id: "02",
            title: "Active IIT Guwahati Professor Interaction",
            subtitle: "Personalized Expert Guidance",
            desc: "Step beyond standard learning. Receive dedicated, personalized mentorship directly from IIT Guwahati professors to dramatically accelerate your technical mastery and career readiness.",
            status: "UPGRADED",
            icon: Users,
            color: "blue",
            hex: "#3B82F6"
        },
        {
            id: "03",
            title: "Research & Industry Projects",
            subtitle: "Solve Real-World Problems",
            desc: "Don't just learn theory. Contribute to cutting-edge research, get technical papers published and solve complex real-world industry problems through rigorous hands-on projects.",
            status: "EXCLUSIVE",
            icon: Briefcase,
            color: "orange",
            hex: "#F97316"
        },
        {
            id: "04",
            title: "Direct IIT Certification",
            subtitle: "Unmatched Credibility",
            desc: "Elevate your resume instantly. Upon completion of your internship, you earn a highly prestigious internship certificate officially signed by IIT Guwahati professors.",
            status: "NEW",
            icon: Award,
            color: "yellow",
            hex: "#EAB308"
        },
        {
            id: "05",
            title: "Geeks of Gurukul Credentials",
            subtitle: "Premium Academic Identity",
            desc: "Represent the future of tech. Your Student ID Card, Semester Mark Sheets, and Completion Certificates are now exclusively issued and recognized as premier Geeks of Gurukul (GOG) credentials.",
            status: "REBRANDED",
            icon: ShieldCheck,
            color: "pink",
            hex: "#EC4899"
        },
        {
            id: "06",
            title: "Dual-Credential Superiority",
            subtitle: "The Ultimate Portfolio",
            desc: "Dominate the job market with the ultimate credential combo: GOG's presence on all your core academic records, alongside the signed IIT Guwahati internship certificate.",
            status: "MAJOR USP",
            icon: Trophy,
            color: "cyan",
            hex: "#06B6D4"
        }
    ];

    // Auto-play logic
    useEffect(() => {
        if (isManual) return; // Stop if user interacts manually

        // Fast first pass (2s), slower subsequent passes (4s)
        const speed = cycleCount === 0 ? 2000 : 4000;

        const timer = setInterval(() => {
            setActiveIndex((prev) => {
                const next = prev + 1;
                if (next >= upgrades.length) {
                    setCycleCount(c => c + 1);
                    return 0;
                }
                return next;
            });
        }, speed);

        return () => clearInterval(timer);
    }, [cycleCount, isManual, upgrades.length]);

    const activeItem = upgrades[activeIndex];

    return (
        <div className="mt-16 max-w-7xl mx-auto px-4">
            {/* 
                We use items-stretch so the right side box grows exactly to the height of the left side column. 
                We also ensure the right side content is vertically centered and doesn't force a larger height.
            */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

                {/* Left: Command Menu */}
                <div className="lg:w-1/3 flex flex-col gap-3 z-10 shrink-0">
                    {upgrades.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsManual(true);
                                }}
                                className={`relative flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-500 overflow-hidden group ${isActive
                                    ? 'bg-[#111]/80 shadow-2xl scale-[1.02] backdrop-blur-md'
                                    : 'bg-transparent hover:bg-white/5'
                                    }`}
                                style={{
                                    borderWidth: '1px',
                                    borderColor: isActive ? `${item.hex}30` : 'transparent'
                                }}
                            >
                                {/* Active Background Glow */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 opacity-20"
                                        style={{ background: `linear-gradient(90deg, ${item.hex}40, transparent)` }}
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Status Indicator Line */}
                                <div
                                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-30 group-hover:bg-white'}`}
                                    style={{
                                        backgroundColor: isActive ? item.hex : '',
                                        boxShadow: isActive ? `0 0 15px ${item.hex}` : 'none'
                                    }}
                                />

                                <div
                                    className={`font-mono text-sm font-black transition-colors duration-300 ${isActive ? 'opacity-100' : 'opacity-30 group-hover:opacity-60 text-gray-400'}`}
                                    style={{ color: isActive ? item.hex : '' }}
                                >
                                    {item.id}
                                </div>

                                <div className="relative z-10 w-full pr-2">
                                    <h4
                                        className={`font-bold transition-all duration-300 truncate ${isActive ? 'text-lg' : 'text-base text-gray-400 group-hover:text-gray-200'}`}
                                        style={isActive ? {
                                            background: `linear-gradient(90deg, #ffffff 30%, ${item.hex})`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: `0 0 30px ${item.hex}40`
                                        } : {}}
                                    >
                                        {item.title}
                                    </h4>
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0, y: -5 }}
                                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-[10px] mt-1 uppercase tracking-[0.2em] font-black"
                                                style={{ color: item.hex }}
                                            >
                                                {item.status}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Right: Holographic Display Area */}
                <div className="lg:w-2/3 relative rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 overflow-hidden flex items-center [perspective:2000px] shadow-2xl">

                    {/* Ambient Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95, rotateX: 5, rotateY: -5 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 1.02, filter: "blur(5px)" }}
                            transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
                            className="relative w-full h-full p-8 lg:p-12 flex flex-col justify-center [transform-style:preserve-3d]"
                        >
                            {/* Dynamic Glowing Background Sphere */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-15 blur-[100px] rounded-full pointer-events-none transition-colors duration-1000"
                                style={{ backgroundColor: activeItem.hex }}
                            />

                            {/* Floating Tech Elements */}
                            <div className="absolute top-8 right-8 flex gap-1.5 opacity-50">
                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse delay-75" />
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeItem.hex, boxShadow: `0 0 8px ${activeItem.hex}` }} />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
                                {/* 3D Icon Container */}
                                <motion.div
                                    initial={{ y: 10 }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="shrink-0 relative"
                                >
                                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-3xl border border-white/20 bg-black/60 backdrop-blur-xl flex items-center justify-center relative overflow-hidden shadow-2xl" style={{ borderColor: `${activeItem.hex}40` }}>
                                        {/* Scanner Line */}
                                        <motion.div
                                            animate={{ top: ['-20%', '120%'] }}
                                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                                            className="absolute left-0 right-0 h-0.5 blur-[1px] z-0"
                                            style={{ backgroundColor: activeItem.hex, boxShadow: `0 0 20px 2px ${activeItem.hex}` }}
                                        />
                                        <activeItem.icon size={64} strokeWidth={1.5} style={{ color: activeItem.hex }} className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                                    </div>
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full blur-xl opacity-60" style={{ backgroundColor: activeItem.hex }} />
                                </motion.div>

                                {/* Content Details */}
                                <div className="flex-1 text-center md:text-left">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border bg-black/50 backdrop-blur-md mb-4 shadow-lg"
                                        style={{ borderColor: `${activeItem.hex}40` }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeItem.hex }} />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: activeItem.hex }}>{activeItem.status}</span>
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2 leading-tight"
                                    >
                                        {activeItem.title}
                                    </motion.h3>

                                    <motion.h4
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-lg md:text-xl font-light text-gray-400 mb-5"
                                    >
                                        {activeItem.subtitle}
                                    </motion.h4>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl"
                                    >
                                        {activeItem.desc}
                                    </motion.p>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>

                    {/* High-tech Borders */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/20 rounded-tl-[2.5rem] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/20 rounded-br-[2.5rem] pointer-events-none" />
                </div>

            </div>
        </div>
    );
};

// @ts-ignore
export const StudentVlogs = ({ data = studentVlogs }: { data?: typeof studentVlogs }) => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {data.map((vlog) => (
                    <div
                        key={vlog.id}
                        onClick={() => setActiveVideo(vlog.video || null)}
                        className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#34D562] hover:shadow-[0_0_40px_rgba(52,213,98,0.3)] transition-all duration-500 shadow-xl"
                    >
                        {/* Video Preview (First Frame / Hover Play) */}
                        <video
                            src={`${vlog.video}#t=1`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 1;
                            }}
                        />

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-12 h-12 rounded-full bg-[#34D562] flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                <Play size={20} fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                            <p className="text-white font-bold text-sm leading-tight mb-1 line-clamp-2">{vlog.title}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-300 flex items-center gap-1">
                                    <MonitorPlay size={10} className="text-[#34D562]" /> {vlog.duration}
                                </span>
                                <div className="h-0.5 w-0 group-hover:w-12 bg-[#34D562] transition-all duration-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-[#34D562] text-white hover:text-black rounded-full flex items-center justify-center transition-all"
                            >
                                <X size={20} />
                            </button>
                            <video
                                src={activeVideo}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export const VirtualTour = ({ bgImage, tourUrl, embedHtml }: { bgImage?: string; tourUrl?: string; embedHtml?: string }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const defaultBg = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600";

    const handleClick = () => {
        if (tourUrl) {
            window.open(tourUrl, '_blank', 'noopener,noreferrer');
        } else {
            setIsVideoOpen(true);
        }
    };

    return (
        <>
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl bg-[#0A0A0A]">
                <img src={bgImage || defaultBg} alt="Campus 360" className="w-full h-full object-cover object-center scale-110 transition-transform duration-700 group-hover:scale-125 filter brightness-75 group-hover:brightness-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(52,213,98,0.3)]">
                        <Globe size={40} className="text-[#34D562]" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">Virtual Campus Tour</h3>
                    <p className="text-gray-300 max-w-md mx-auto mb-6">Experience our labs, hostels, and smart classrooms in 360° before you arrive.</p>
                    <button
                        onClick={handleClick}
                        className="bg-[#34D562] text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors flex items-center gap-2"
                    >
                        Start Exploring <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            {/* Video / Embed Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-[#34D562] text-white hover:text-black rounded-full flex items-center justify-center transition-all"
                            >
                                <X size={20} />
                            </button>
                            {/* Content */}
                            <div className="aspect-video">
                                {embedHtml ? (
                                    <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: embedHtml }} />
                                ) : (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/fEqgl_ZU2_0?si=9Yc06bPTdhf_81M1&autoplay=1"
                                        title="Campus Tour Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export const CareerVisualizer = () => (
    <div className="relative py-8 overflow-x-auto">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-[1000px] md:w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />

        <div className="flex md:grid md:grid-cols-5 gap-6 relative z-10 w-[1000px] md:w-auto px-4 md:px-0">
            {careerPathData.map((step, i) => (
                <div key={i} className="group relative w-48 md:w-auto shrink-0 flex flex-col">
                    <div className="bg-[#111] border border-white/10 p-5 rounded-2xl hover:border-[#34D562] transition-all duration-300 h-full flex flex-col min-h-[180px] shadow-lg group-hover:-translate-y-1">
                        <div className="text-xs font-mono text-[#34D562] mb-3 px-2 py-1 bg-[#34D562]/10 rounded border border-[#34D562]/20 w-fit">Year {step.year}</div>
                        <h4 className="text-white font-bold text-lg leading-tight mb-2">{step.role}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed mb-auto">{step.desc}</p>
                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-white font-bold text-sm">
                            <ArrowRight size={14} className="text-[#34D562]" /> {step.salary}
                        </div>
                    </div>
                    {/* Connector Dot */}
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-[#111] border-2 border-[#34D562] rounded-full -translate-y-1/2 z-20 group-hover:scale-125 transition-transform" />
                </div>
            ))}
        </div>
    </div>
);

export const ScholarshipStats = ({ tuitionFee = 130000 }: { tuitionFee?: number }) => {
    const [marks, setMarks] = useState(85);
    const scholarshipPercent = marks > 95 ? 15 : marks > 90 ? 10 : marks > 85 ? 7 : marks > 80 ? 5 : 0;
    const scholarship = scholarshipPercent + "%";
    const savingsAmount = (tuitionFee * scholarshipPercent) / 100;
    const savings = "₹" + savingsAmount.toLocaleString('en-IN');

    return (
        <div className="bg-[#111] border border-white/10 rounded-2xl p-5 md:p-6 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="text-[#34D562]" size={20} /> Scholarship Calculator
            </h3>
            <div className="mb-6">
                <div className="flex justify-between text-gray-400 mb-1">
                    <span className="text-xs md:text-sm">12th Grade / JEE Score</span>
                    <span className="text-[#34D562] font-semibold text-sm">{marks}%</span>
                </div>
                <input
                    type="range"
                    min="60"
                    max="100"
                    value={marks}
                    onChange={(e) => setMarks(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#34D562]"
                />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#34D562]/10 p-3.5 rounded-xl border border-[#34D562]/20 text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Scholarship</p>
                    <p className="text-[#34D562] text-2xl md:text-3xl font-bold">{scholarship}</p>
                </div>
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Total Savings</p>
                    <p className="text-white text-2xl md:text-3xl font-bold">{savings}</p>
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#34D562] text-xs font-bold bg-[#34D562]/10 p-2 rounded-lg border border-[#34D562]/20">
                    <Sparkles size={14} className="shrink-0" />
                    <span>Early Bird Discount: First 100 Students get ₹99 Test Fee Waiver!</span>
                </div>
                <p className="text-[11px] text-gray-400 text-center italic tracking-wide"><span className="text-red-500 font-bold">*</span> Based on current tuition fee structure. T&C apply.</p>
            </div>
        </div>
    );
};

export const AlumniNetwork = ({ data = alumniSuccess }: { data?: typeof alumniSuccess }) => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {data.map((alum, i) => (
            <div key={i} className="bg-[#111] border border-white/10 p-3 md:p-5 rounded-xl md:rounded-2xl hover:border-[#34D562]/50 transition-all hover:bg-white/5 group flex flex-col h-full">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 mb-3 md:mb-4 text-center md:text-left">
                    <div className="relative shrink-0">
                        <img
                            src={alum.image}
                            alt={alum.name}
                            className={`w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-xl border-2 border-[#34D562] object-cover ${alum.imgPos || 'object-center'}`}
                        />
                    </div>
                    <div className="min-w-0 w-full">
                        <h4 className="text-white font-bold text-xs md:text-lg truncate mb-1">{alum.name}</h4>
                        {/* @ts-ignore */}
                        {alum.logo && (
                            <div className="h-6 md:h-8 flex items-center bg-white px-1.5 md:px-2 rounded md:rounded-md mx-auto md:mx-0 w-fit">
                                <img src={alum.logo} alt={alum.company} className="h-4 md:h-6 object-contain" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="space-y-1.5 md:space-y-2 mt-auto">
                    <div className="bg-white/5 px-2 py-1.5 md:px-3 md:py-2 rounded flex justify-between items-center text-[10px] md:text-xs">
                        <span className="text-gray-400 hidden md:block">Role</span>
                        <span className="text-white font-medium truncate block w-full text-center md:text-right">{alum.role}</span>
                    </div>
                    <div className="bg-[#34D562]/10 px-2 py-1.5 md:px-3 md:py-2 rounded flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs border border-[#34D562]/20">
                        <span className="text-gray-400 hidden md:block">Package</span>
                        <span className="text-[#34D562] font-bold">{alum.package}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export const RecruiterTestimonials = ({ data = recruiterTestimonials }: { data?: typeof recruiterTestimonials }) => (
    <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
            <div key={i} className="bg-[#111] border border-white/10 p-8 rounded-2xl shadow-xl relative mt-8 hover:border-[#34D562]/50 transition-all duration-300 hover:bg-white/5 group">
                <div className="absolute -top-6 -left-4 w-12 h-12 bg-[#34D562] rounded-full flex items-center justify-center text-black font-serif text-3xl font-bold shadow-lg shadow-[#34D562]/20">"</div>

                {/* Profile Image or Company Logo */}
                {/* @ts-ignore */}
                {item.image ? (
                    <div className="flex items-center gap-6 mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#34D562] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full object-cover border-2 border-[#34D562] relative z-10" />
                        </div>
                        <div>
                            <p className="font-bold text-white text-xl mb-1">{item.name}</p>
                            <p className="text-sm text-gray-400 font-medium mb-2">{item.role}</p>
                            {/* @ts-ignore */}
                            {item.logo && (
                                <img src={item.logo} alt={item.company} className="h-12 w-auto object-contain mt-3 rounded-md" />
                            )}
                        </div>
                    </div>
                ) : (
                    <img src={item.logo} alt={item.company} className="h-12 w-auto object-contain mt-3 rounded-md" />
                )}

                <p className="text-gray-300 mb-2 italic leading-relaxed text-lg font-light">"{item.quote}"</p>
            </div>
        ))}
    </div>
);

export const BlogUpdates = ({ data = blogUpdates }: { data?: typeof blogUpdates }) => (
    <div className="grid md:grid-cols-3 gap-8">
        {data.map((post, i) => (
            <a
                key={i}
                href={(post as any).link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
            >
                <div className="rounded-xl overflow-hidden mb-4 relative aspect-video border border-white/5 group-hover:border-[#34D562]/30 transition-all">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-[#34D562] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        {post.category}
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <Calendar size={12} className="text-[#34D562]" /> {post.date}
                </div>
                <h4 className="text-white font-bold text-lg group-hover:text-[#34D562] transition-colors leading-tight line-clamp-2">
                    {post.title}
                </h4>
            </a>
        ))}
    </div>
);

export const ChatBot = ({ universityName, tuitionFee }: { universityName?: string, tuitionFee?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ type: 'ai' | 'user', text: string }[]>([
        { type: 'ai', text: "Hi! I'm the GoG Admissions Assistant. I can help you with Fee Structure, Syllabus, or Placements. What would you like to know?" }
    ]);
    const [input, setInput] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisText, setAnalysisText] = useState("Analyzing information...");

    const getAIResponse = (query: string) => {
        const q = query.toLowerCase().trim();
        const cleanWords = q.replace(/[!?.]/g, "").split(/\s+/);

        // Response Variations (5 each)
        const responses = {
            greetings: [
                "Hello! I'm here to help you with your B.Tech AI admissions. What can I tell you about today?",
                "Hi there! Welcome to Geeks of Gurukul. How can I assist you with your career journey?",
                "Greetings! I'm your admissions guide. Are you looking for fee details, placement stats, or something else?",
                "Hey! It's great to have you here. What would you like to explore about our industry-integrated AI program?",
                "Hi! I can help you navigate through our course details and admission process. What do you need help with?"
            ],
            thanks: [
                "You're very welcome! Is there anything else you'd like to know about the program?",
                "Glad I could help! Feel free to ask more questions about fees, syllabus, or placements.",
                "Anytime! I'm here to make your admission process as smooth as possible. What's next?",
                "Happy to assist! Don't forget to check out the 'Apply Now' section when you're ready.",
                "No problem at all! Feel free to keep chatting if you have more queries."
            ],
            identity: [
                `I'm the GoG Admissions AI, specialized in helping you with our B.Tech AI & ML program${universityName ? ` at ${universityName}` : ''}.`,
                `You can call me the GoG Assistant! I've been trained on ${universityName || 'our university'} data to provide you with instant answers.`,
                `I'm an AI guide for Geeks of Gurukul. My job is to help you understand ${universityName ? `the ${universityName}` : 'our'} curriculum, fees, and career paths!`,
                `I am your virtual admissions counselor here to explain why ${universityName ? `${universityName} x GoG` : 'Centurion x GoG'} is the best choice for AI & ML.`,
                `Think of me as your first point of contact for ${universityName || 'GoG'} admissions. I can help with scholarships, jobs, and syllabus details!`
            ],
            human: [
                "I'm doing great, thank you for asking! Ready to help you with your admissions. How about you?",
                "I'm powered up and ready to go! How can I make your day easier in terms of course information?",
                "Doing fantastic! It's always a pleasure to help future engineers. What's on your mind?",
                "I'm here and ready to assist! Hope you're having a productive day exploring our programs.",
                "All systems go! I'm excited to tell you more about our 36 LPA placement records. What would you like to know?"
            ],
            farewell: [
                "Goodbye! Hope to see you applying soon. Have a great day ahead!",
                "Bye for now! Feel free to come back if you have more questions later.",
                "See you! Good luck with your career planning. We're here if you need us!",
                "Have a wonderful day! Don't forget to refer to the brochures in the hero section.",
                "Take care! Remember, admissions for 2026 are currently open. Catch you later!"
            ],
            fees: [
                `Based on the available information, the annual tuition fee ${universityName ? `at ${universityName}` : ''} is ${tuitionFee || '₹1,25,000'}. For more details, you can refer to the 'Fee Structure' section.`,
                `The current academic fee ${universityName ? `for ${universityName}` : ''} is ${tuitionFee || '₹1.25 Lakhs'} per year. Detailed breakdowns are available in our 'Fee & Admissions' section.`,
                `Our B.Tech AI program fee ${universityName ? `at ${universityName}` : ''} is ${tuitionFee || '₹1,25,000'} annually. Check the 'Fee Structure' table on this page for details.`,
                `For the 2026 session, the annual tuition ${universityName ? `at ${universityName}` : ''} is set at ${tuitionFee || '₹1,25,000'}. You might want to look at the 'Fee' section!`,
                `The investment for this program ${universityName ? `at ${universityName}` : ''} is ${tuitionFee || '₹1,25,000'} per year. You can find more in the 'Fee Structure' area below.`
            ],
            placements: [
                "Our placement records show a highest package of 36 LPA and a 6.5 LPA average. You can refer to the 'Placements' section for the full recruiter list.",
                "We pride ourselves on a 94% placement rate with a 36 LPA peak. Check the 'Build Your Dream Career' section for testimonial videos!",
                "Recent graduates have secured roles with an average CTC of 6.5 LPA. The 'Placements' section below highlights our 200+ hiring partners.",
                "Placements are a core strength, with 100% protection support. For specific company logos, scroll to our 'Industry Validation' section.",
                "Success stories include packages up to 36 LPA. You'll find a detailed report in the 'Placements & Partners' section of our site."
            ],
            syllabus: [
                "The 8-semester roadmap is designed for AI & ML mastery. You can refer to the '8 Semester Roadmap' section for a deep dive into subjects.",
                "Our curriculum covers everything from C++ to Generative AI. Detailed semester-wise subjects are listed in the 'Curriculum' section below.",
                "This industry-integrated syllabus includes 40% practical lab time. Check out the 'Foundations to Career' roadmap on this page.",
                "From Deep Learning to Cloud Computing, our roadmap is future-proof. You can find every subject listed in the 'Curriculum' area.",
                "We offer India's most advanced AI curriculum. Refer to the '8 Semester Roadmap' section to see your 4-year journey."
            ],
            scholarship: [
                "Merit scholarships up to 50% are available based on our Qualifier Test. Try the 'Scholarship Calculator' on this page to check your eligibility!",
                "You can save up to 50% on tuition through merit-based aid. Our 'Scholarship Calculator' section provides a quick estimate.",
                "We offer various financial aids, including early bird discounts. Refer to the 'Fee Structure' section for scholarship criteria.",
                "Financial support is a priority; check our 'Scholarship' section to see how you can qualify for up to 50% off.",
                "Scholarships are awarded based on 12th grade marks and our test. The 'Scholarship Calculator' below is a great tool to use!"
            ],
            apply: [
                "The application process is simple! Click on the 'Apply Now' button at the top to start your journey.",
                "Ready to join? Just hit the 'Apply Now' button and our admissions team will guide you through the next steps.",
                "To apply, please use the 'Apply Now' form. Don't forget to mention any specific queries in the 'Remarks' section!",
                "Admission is open for 2026. Click any 'Apply Now' button on this page to fill out your details.",
                "You can start your application right now by clicking 'Apply Now'. Our team is ready to help you with the process."
            ],
            fallback: [
                "I might not have that specific detail yet. Could you please click on the 'Apply Now' button and add your query in the 'Remarks' section? Our team will get back to you!",
                "That's a great question! For a personalized answer, I suggest contacting us at +91 91524 72392 or via the 'Apply Now' form remarks.",
                "I'm still learning! For this query, please use the 'Apply Now' form and include your question in the remarks, or email admin@geeksofgurukul.com.",
                "I don't have enough data on that. However, our admissions experts do! Click 'Apply Now' or call us directly to get this answered.",
                "To better assist you with this specific requirement, please submit your query through the 'Apply Now' button's remarks field."
            ]
        };

        const random = () => Math.floor(Math.random() * 5);

        // Logic with high priority for greetings
        if (cleanWords.includes("hi") || cleanWords.includes("hello") || cleanWords.includes("hey") || q.includes("morning") || q.includes("afternoon")) return responses.greetings[random()];
        if (q.includes("thank") || q.includes("awesome") || q.includes("cool") || q.includes("great") || q.includes("nice") || q.includes("thx") || q.includes("ty")) return responses.thanks[random()];
        if (q.includes("who are you") || q.includes("your name") || q.includes("what are you") || cleanWords.includes("bot") || q.includes("who is this") || q.includes("purpose")) return responses.identity[random()];
        if (q.includes("how are you") || q.includes("how is it going") || q.includes("how's it going") || q.includes("how are things") || q.includes("hru") || q.includes("how r u")) return responses.human[random()];
        if (q.includes("bye") || q.includes("see you") || q.includes("good night") || q.includes("goodnight") || q.includes("quit") || q.includes("care")) return responses.farewell[random()];

        if (q.includes("fee") || q.includes("cost") || q.includes("price") || q.includes("money") || q.includes("charge") || q.includes("tuition") || q.includes("payment")) return responses.fees[random()];
        if (q.includes("placement") || q.includes("job") || q.includes("salary") || q.includes("lpa") || q.includes("package") || q.includes("hire") || q.includes("hiring") || q.includes("company") || q.includes("recruit")) return responses.placements[random()];
        if (q.includes("syllabus") || q.includes("subject") || q.includes("learn") || q.includes("curriculum") || q.includes("roadmap") || q.includes("study") || q.includes("course details")) return responses.syllabus[random()];
        if (q.includes("scholarship") || q.includes("discount") || q.includes("aid") || q.includes("calculator") || q.includes("eligibility") || q.includes("free") || q.includes("merit")) return responses.scholarship[random()];
        if (q.includes("apply") || q.includes("register") || q.includes("join") || q.includes("admission") || q.includes("process") || q.includes("how to") || q.includes("start")) return responses.apply[random()];

        return responses.fallback[random()];
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
        setInput("");
        setIsAnalyzing(true);

        // Simulate "AI Thinking" with randomized analysis text
        const steps = [
            "Analyzing your query...",
            "Scanning university records...",
            "Checking latest admission data...",
            "Formulating response...",
            "Verifying information...",
            "Contextualizing with curriculum...",
            "Consulting placement reports..."
        ];
        setAnalysisText(steps[Math.floor(Math.random() * steps.length)]);

        setTimeout(() => {
            const botMsg = getAIResponse(userMsg);
            setMessages(prev => [...prev, { type: 'ai', text: botMsg }]);
            setIsAnalyzing(false);
        }, 1200);
    };

    return (
        <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col"
                    >
                        <div className="bg-[#003366] p-4 flex justify-between items-center shrink-0">
                            <h4 className="text-white font-bold flex items-center gap-2">
                                <MessageCircle size={18} />GoG Admissions AI
                            </h4>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white"><X size={18} /></button>
                        </div>

                        <div className="p-4 h-[350px] overflow-y-auto bg-gray-50 flex flex-col gap-4">
                            {messages.map((msg, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.type === 'ai' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i}
                                    className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    {msg.type === 'ai' && (
                                        <div className="w-8 h-8 rounded-full bg-[#34D562] flex items-center justify-center text-black font-bold text-xs shrink-0">AI</div>
                                    )}
                                    <div className={`p-3 rounded-2xl shadow-sm text-sm border ${msg.type === 'ai' ? 'bg-white text-gray-700 rounded-tl-none border-gray-100' : 'bg-[#003366] text-white rounded-tr-none border-[#003366]'}`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isAnalyzing && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#34D562] flex items-center justify-center text-black font-bold text-xs shrink-0">AI</div>
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-400 border border-gray-100 flex items-center gap-2">
                                        <Loader2 size={14} className="animate-spin" /> {analysisText}
                                    </div>
                                </div>
                            )}

                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Fee Structure", "Placement Stats", "Scholarship", "Syllabus"].map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => setInput(tag)}
                                            className="px-3 py-1.5 bg-white border border-[#34D562] text-[#006633] rounded-full hover:bg-[#34D562] hover:text-white transition-colors text-xs font-semibold"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="p-3 border-t border-gray-100 bg-white flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about fees, jobs, syllabus..."
                                className="flex-1 text-sm p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#34D562] text-black"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isAnalyzing}
                                className="w-10 h-10 bg-[#34D562] text-black rounded-lg flex items-center justify-center hover:bg-[#2dbd56] transition-colors disabled:opacity-50"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[#34D562] rounded-full shadow-[0_4px_20px_rgba(52,213,98,0.4)] flex items-center justify-center text-black hover:scale-110 transition-transform"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} fill="currentColor" />}
            </button>
        </div>
    );
};
