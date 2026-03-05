import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone, Mail, MapPin, ChevronDown, ChevronUp,
    Play, CheckCircle, ArrowRight, Download,
    ExternalLink, Star, Calendar, Clock,
    HelpCircle, X, Check, Users, Shield, Zap, Rocket,
    BookOpen, Code, Home, Wifi, Coffee, Activity, Bus,
    Building, MonitorPlay, Award, Globe, Music, Camera, Heart, UserCheck, FileText, GraduationCap, Briefcase, MessageCircle, TrendingUp, Coins, Sparkles, Trophy, Scale
} from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';
import SEO from '../components/SEO';
import {
    courseInfo, rankings, mediaLinks, amenities,
    nearbyPlaces, curriculum, faculty, comparisonData,
    heroStats, admissionSteps, feeStructure, placementStats,
    clubs, faqs, testimonials, universityAbout,
    studentVlogs, alumniSuccess, recruiterTestimonials, careerPathData, blogUpdates
} from '../data/admissionsData';

// Import assets
import CUTMLogo from "../assets/PartneredColleges/CUTM.svg";
import GoGLogo from "../assets/gog-logo.png";
import {
    StudentVlogs, VirtualTour, CareerVisualizer, ScholarshipStats, AlumniNetwork, RecruiterTestimonials, BlogUpdates, ChatBot
} from '../components/UniqueFeatures';
import { HeroSlider } from '../components/HeroSlider';
import { ApplyForm } from '../components/ApplyForm';
import { StickyNav } from '../components/StickyNav';

// --- SUB-COMPONENTS ---
const SectionHeader = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
    <div className="text-center mb-12 relative z-10">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-display font-bold mb-4 ${light ? 'text-black' : 'text-white'}`}
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`max-w-2xl mx-auto text-lg ${light ? 'text-gray-600' : 'text-gray-400'}`}
            >
                {subtitle}
            </motion.p>
        )}
        <div className={`h-1.5 w-24 mx-auto mt-6 rounded-full ${light ? 'bg-black' : 'bg-[#34D562]'}`} />
    </div>
);

const VideoPlaceholder = ({ label }: { label: string }) => (
    <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#34D562]/50 transition-all shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-14 h-14 bg-[#34D562]/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-[#34D562]/50">
                <Play size={24} className="text-[#34D562] fill-[#34D562]" />
            </div>
        </div>
        <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
            alt={label}
            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white font-bold">{label}</div>
    </div>
);

const StackedCarousel = () => {
    const [centerIndex, setCenterIndex] = useState(4);

    const features = [
        { title: "Future-Proof Career", desc: "Launch into high-growth AI roles.", icon: Rocket },
        { title: "Prestigious Certification", desc: "Degree from NAAC 'A+' University.", icon: Award },
        { title: "Advanced Curriculum", desc: "Real-time project implementation.", icon: BookOpen },
        { title: "Faculty of IITians", desc: "Learn from IIT experts.", icon: Users },
        { title: "Vibrant Networking", desc: "Connect with industry leaders.", icon: Globe },
        { title: "Internship Assurance", desc: "100% internship support.", icon: Building },
        { title: "Placement Assurance", desc: "100% placement support.", icon: Shield },
        { title: "Flexible Payment", desc: "EMI & Scholarships available.", icon: Zap }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCenterIndex((prev) => (prev + 1) % features.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [features.length]);

    const getPosition = (i: number) => {
        let diff = i - centerIndex;
        if (diff > features.length / 2) diff -= features.length;
        if (diff < -features.length / 2) diff += features.length;
        return diff;
    };

    return (
        <div
            className="relative h-[400px] w-full flex items-center justify-center overflow-hidden -my-16"
            style={{ perspective: "1200px" }}
        >
            {features.map((item, i) => {
                const pos = getPosition(i);
                const absPos = Math.abs(pos);

                // Show 5 items: -2, -1, 0, 1, 2
                if (absPos > 2) return null;

                return (
                    <motion.div
                        key={i}
                        animate={{
                            x: pos * (window.innerWidth < 768 ? 180 : 280), // Adjusted spacing
                            scale: absPos === 0 ? 1.1 : 0.8 - absPos * 0.1, // Slightly smaller scale
                            zIndex: 10 - absPos,
                            opacity: 1 - absPos * 0.4,
                            rotateY: pos * -20,
                            y: absPos * 20,
                            // Removed blur for sharpness
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400, // Even stiffer for faster snap
                            damping: 30,   // Damped to prevent oscillation at high speed
                            mass: 0.6      // Lighter for quicker starts
                        }}
                        className={`absolute w-[260px] md:w-[320px] p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer ${absPos === 0 ? 'bg-[#151515] border-[#34D562] shadow-[0_20px_50px_rgba(52,213,98,0.2)]' : 'bg-[#111] border-white/5 opacity-50'}`} // Reduced width/padding/radius
                        onClick={() => setCenterIndex(i)}
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-700 ${absPos === 0 ? 'bg-[#34D562] text-black scale-110 rotate-3 shadow-[0_0_30px_rgba(52,213,98,0.4)]' : 'bg-white/5 text-gray-600'}`}>
                            <item.icon size={32} />
                        </div>
                        <h3 className={`text-xl md:text-2xl font-bold mb-3 text-center transition-colors duration-500 ${absPos === 0 ? 'text-white' : 'text-gray-600'}`}>{item.title}</h3>
                        <p className={`text-sm text-center leading-relaxed transition-opacity duration-500 ${absPos === 0 ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>

                        {absPos === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute -bottom-1 -left-1 -right-1 h-2 bg-gradient-to-r from-transparent via-[#34D562] to-transparent blur-sm rounded-full"
                            />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};
const GlowCard = ({ children, className = "" }: { children: React.ReactNode, className?: string; key?: React.Key }) => (
    <div className={`relative group ${className}`}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#34D562] to-emerald-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur-md group-hover:blur-lg"></div>
        <div className="relative h-full bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 overflow-hidden">
            {children}
        </div>
    </div>
);

const ImageCard = ({ img, title, subtitle }: { img?: string; title: string; subtitle?: string; key?: React.Key }) => (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111] h-full shadow-lg hover:shadow-[#34D562]/10 transition-shadow">
        <div className="aspect-[4/3] bg-gray-800 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
            {img ? (
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            ) : (
                <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-gray-600">
                    <MapPin size={48} opacity={0.2} />
                </div>
            )}
            <div className="absolute bottom-4 left-4 z-20 pr-4">
                <h4 className="text-white font-bold text-lg leading-tight">{title}</h4>
                {subtitle && <p className="text-[#34D562] text-xs font-semibold mt-1">{subtitle}</p>}
            </div>
        </div>
    </div>
);

const CertificatePreview = () => (
    <div className="relative bg-white text-black py-6 px-6 md:py-10 md:px-16 rounded-lg shadow-2xl border-4 border-[#34D562]/20 max-w-6xl mx-auto overflow-hidden transform scale-[0.85] md:scale-110 origin-center transition-transform duration-500">
        {/* Borders */}
        <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-8 border-l-8 border-[#003366] rounded-tl-2xl md:rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-8 border-r-8 border-[#003366] rounded-tr-2xl md:rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b-8 border-l-8 border-[#003366] rounded-bl-2xl md:rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-8 border-r-8 border-[#003366] rounded-br-2xl md:rounded-br-3xl" />

        {/* Content */}
        <div className="text-center relative z-10">
            <div className="flex justify-center mb-4 md:mb-6 gap-4 md:gap-8 items-center">
                {/* University Logo Mockup */}
                <div className="text-[#003366] font-serif font-bold text-xl md:text-2xl border-2 border-[#003366] p-1 md:p-2 flex flex-col items-center scale-90">
                    <span>CUTM</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-black">Estd 2010</span>
                </div>
            </div>

            <h3 className="text-[#003366] font-serif font-bold text-xl md:text-4xl mb-1">CERTIFICATE OF COMPLETION</h3>
            <p className="text-gray-600 italic text-xs md:text-base mb-2 md:mb-4">This is to certify that Mr./Ms.</p>

            <div className="text-3xl md:text-5xl font-script text-[#34D562] font-bold mb-2 md:mb-4">Aditya Verma</div>

            <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto mb-4 md:mb-6 leading-tight">
                has successfully completed the 4-Year B.Tech Program in <br />
                <span className="font-bold text-black">Computer Science & Engineering (AI & ML)</span>
            </p>

            <div className="flex justify-between items-end mt-4 md:mt-8 px-2 md:px-10">
                <div className="text-center">
                    <div className="h-8 w-16 md:h-12 md:w-24 border-b-2 border-black mb-1 md:mb-2 mx-auto"></div>
                    <p className="font-bold text-[#003366] text-[10px] md:text-base">Registrar</p>
                    <p className="text-[8px] md:text-xs text-gray-500">Centurion University</p>
                </div>
                {/* Geeks of Gurukul Badge */}
                <div className="text-center">
                    <span className="text-sm md:text-xl font-bold text-black flex items-center gap-1">
                        <span className="text-[#34D562]">Geeks</span>ofGurukul
                    </span>
                </div>
                <div className="text-center">
                    <div className="h-8 w-16 md:h-12 md:w-24 border-b-2 border-black mb-1 md:mb-2 mx-auto"></div>
                    <p className="font-bold text-[#003366] text-[10px] md:text-base">Program Director</p>
                    <p className="text-[8px] md:text-xs text-gray-500">Geeks of Gurukul</p>
                </div>
            </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shine pointer-events-none" />
    </div>
);






const AboutSlideshow = ({ images, delay = 0 }: { images: string[], delay?: number }) => {
    const [index, setIndex] = useState(0);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % images.length);
            }, 4000);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group flex-1">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="Campus"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        </div>
    );
};

const StickyBottomActions = ({ isVisible, onApplyClick }: { isVisible: boolean, onApplyClick: () => void }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (1 full viewport height)
            setShow(window.scrollY > window.innerHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!show || !isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-[#34D562]/20 md:hidden animate-slide-up pb-safe">
            <div className="flex gap-3">
                <button
                    onClick={onApplyClick}
                    className="flex-1 py-3 bg-[#34D562] text-black font-bold rounded-lg shadow-[0_0_15px_rgba(52,213,98,0.3)]"
                >
                    Apply Now
                </button>
                <a
                    href="/assets/CenturionUniversity/2-brochure-1.pdf"
                    download="Centurion_University_Brochure.pdf"
                    className="flex-1 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/10 text-center flex items-center justify-center"
                >
                    Brochure
                </a>
            </div>
        </div>
    );
};
const PlacementSlideshow = () => {
    // Explicit imports to ensure Vite bundles them correctly
    const images = [
        "/assets/GoG/placement-1.png",
        "/assets/GoG/placement-2.png",
        "/assets/GoG/internship-1.png"
    ];
    const [index, setIndex] = useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] md:aspect-[21/9] group bg-[#111]">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="GoG Success Records"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-contain"
                />
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${index === i ? 'bg-[#34D562] w-6' : 'bg-white/30 hover:bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const Admissions = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeSem, setActiveSem] = useState(0);
    const [isApplyOpen, setIsApplyOpen] = useState(false);
    const [selectedAmenity, setSelectedAmenity] = useState<typeof amenities[0] | null>(null);

    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#34D562] selection:text-black overflow-x-hidden">
            <SEO
                title="B.Tech AI Admissions 2026 | Centurion University"
                description="Apply for Centurion University's industry-integrated B.Tech in CSE (AI & ML). 100% placement support and curriculum designed by IIT mentors."
                canonical="/admissions"
            />

            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <GreenEmbers />
            </div>

            <StickyNav onApplyClick={() => setIsApplyOpen(true)} />
            <ApplyForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />

            {/* ===== 1. HERO SECTION (PROFESSIONAL & FULL WIDTH) ===== */}
            <section className="relative min-h-[68vh] md:min-h-[110vh] lg:min-h-[115vh] flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <HeroSlider />

                <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto pt-28 md:pt-48 pb-12 md:pb-32">
                        {/* 1. Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="hidden md:inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 md:mb-12 backdrop-blur-md"
                        >
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#34D562] animate-pulse" />
                            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">Admissions Open 2026</span>
                        </motion.div>


                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight md:leading-[0.9] mb-6 md:mb-6 tracking-tighter"
                        >
                            B.Tech in Computer Science<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-emerald-200 to-[#34D562]">(AI & ML)</span>
                        </motion.h1>



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-row justify-center gap-3 w-full max-w-lg mx-auto -mb-8 md:-mb-16 mt-6 md:mt-4 px-4 md:px-0"
                        >
                            <button onClick={() => setIsApplyOpen(true)} className="flex-1 py-3 md:py-4 bg-[#34D562] text-black font-extrabold text-sm md:text-lg rounded-xl md:rounded-xl hover:bg-[#2dbd56] transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(52,213,98,0.3)] whitespace-nowrap">
                                Apply Now
                            </button>
                            <a href="/assets/CenturionUniversity/2-brochure-1.pdf" download="Centurion_University_Brochure.pdf" className="flex-1 py-3 md:py-4 bg-white/5 border border-white/10 text-white font-bold text-sm md:text-lg rounded-xl md:rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm text-center flex items-center justify-center whitespace-nowrap">
                                Download Brochure
                            </a>
                        </motion.div>
                    </div>

                    {/* Stats Ribbon */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 md:mt-20 border-y border-white/5 bg-white/5 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
                            {heroStats.map((stat, i) => (
                                <div key={i} className="py-3 px-2 md:p-6 text-center hover:bg-white/5 transition-colors">
                                    <div className="text-xl md:text-4xl font-bold text-white md:mb-1">{stat.value}</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sticky Bottom Actions (Mobile) */}
            <StickyBottomActions isVisible={!isApplyOpen} onApplyClick={() => setIsApplyOpen(true)} />

            {/* ===== 2. ABOUT UNIVERSITY (New Section) ===== */}
            <section id="about" className="py-20 bg-[#050505] border-b border-white/5 scroll-mt-[300px]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <img src="/assets/Centurion/university-logo.png" alt="Centurion University" className="h-16 w-auto rounded-2xl bg-white p-2" />
                                <div className="h-10 w-px bg-white/20" />
                                <span className="text-xl font-bold text-amber-400">NAAC 'A+' Grade University</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                A <span className="text-[#34D562]">Globally Accredited</span> <br />Skilled University.
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                                {universityAbout.vision}
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="p-4 bg-white/5 rounded-xl border-l-4 border-[#34D562]">
                                    <h4 className="font-bold text-white text-sm uppercase mb-1">Vision 2025</h4>
                                    <p className="text-gray-400 text-sm">{universityAbout.vision2025}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {rankings.map((r, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <r.icon className="text-[#34D562] flex-shrink-0" size={24} />
                                        <div>
                                            <div className="font-bold text-white leading-none">{r.rank}</div>
                                            <div className="text-[10px] text-amber-500/80 font-medium uppercase tracking-wider mt-1">{r.context}</div>
                                            <div className="text-[10px] text-gray-500 leading-tight">{r.source}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative py-8">
                                {/* 2x2 Grid Layout */}
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    {[
                                        { src: "/assets/Centurion/campus-entrance.jpg", label: "Main Entrance" },
                                        { src: "/assets/Centurion/campus-wide.jpg", label: "Campus Aerial" },
                                        { src: "/assets/CenturionUniversity/3.jpg", label: "Tech Park" },
                                        { src: "/assets/CenturionUniversity/2.jpg", label: "Student Hub" }
                                    ].map((img, idx) => (
                                        <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-square relative group">
                                            <img
                                                src={img.src}
                                                alt={img.label}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                            <div className="absolute bottom-3 left-3">
                                                <p className="text-white font-bold text-sm tracking-wide">{img.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== VIRTUAL CAMPUS TOUR ===== */}
            <section className="py-16 bg-[#050505]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <VirtualTour bgImage="/assets/Centurion/campus-wide.jpg" />
                </div>
            </section>

            {/* ===== 3. WHY CHOOSE / BENEFITS (Psychological) ===== */}
            <section id="program-highlights" className="py-24 bg-[#080808] scroll-mt-[300px]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeader title="Why Choose This Program?" subtitle="A future-proof degree designed for the AI era." />

                    {/* Stacked 3D Feature Carousel */}
                    <StackedCarousel />

                    {/* Comparison Table */}
                    <div className="mt-24 relative max-w-6xl mx-auto">
                        <div className="absolute inset-0 bg-[#34D562] blur-[100px] opacity-5 pointer-events-none" />
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111]/90 backdrop-blur-xl">
                            {/* Header */}
                            <div className="hidden md:grid grid-cols-12 border-b border-white/10 items-center bg-[#111]">
                                <div className="col-span-4 text-gray-400 font-bold uppercase tracking-wider text-sm p-6">Feature</div>
                                <div className="col-span-4 text-[#34D562] font-bold text-lg p-6 bg-[#34D562]/10 border-x border-[#34D562]/20 relative flex items-center gap-6 justify-center">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[#34D562]" />
                                    <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-white/20 flex items-center justify-center h-14 w-32 shrink-0">
                                        <img src="/assets/Centurion/university-logo.png" className="h-full w-auto object-contain" alt="Centurion" />
                                    </div>
                                    <X size={16} className="text-gray-400 shrink-0" />
                                    <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-white/20 flex items-center justify-center h-14 w-32 shrink-0">
                                        <img src={GoGLogo} className="h-9 w-auto object-contain text-black" alt="Geeks of Gurukul" />
                                    </div>
                                </div>
                                <div className="col-span-4 text-gray-500 font-bold text-sm p-6">Traditional Colleges</div>
                            </div>
                            {/* Rows */}
                            {
                                comparisonData.map((row, i) => (
                                    <div key={i} className="flex flex-col md:grid md:grid-cols-12 border-b border-white/5 last:border-0 items-stretch bg-[#111] md:bg-transparent">
                                        {/* Feature (Mobile Header for the card) */}
                                        <div className="col-span-4 font-bold text-white p-4 md:p-6 flex items-center border-b md:border-b-0 border-white/5 bg-white/5 md:bg-transparent">
                                            {row.feature}
                                        </div>

                                        {/* GOG Column (Highlighted) */}
                                        <div className="col-span-4 p-4 md:p-6 bg-[#34D562]/10 md:bg-[#34D562]/5 border-x border-[#34D562]/10 flex flex-col md:flex-row items-center justify-between gap-4 relative">
                                            {/* Mobile Logo Label */}
                                            <div className="md:hidden flex items-center gap-4 mb-6 border-b border-[#34D562]/10 pb-6 w-full justify-center">
                                                <div className="bg-white px-1 py-1.5 rounded-xl shadow-lg border border-white/10 flex items-center justify-center h-12 w-24 shrink-0">
                                                    <img src="/assets/Centurion/university-logo.png" className="h-full w-auto object-contain" alt="Centurion" />
                                                </div>
                                                <X size={16} className="text-gray-400 shrink-0" />
                                                <div className="bg-white px-1 py-1.5 rounded-xl shadow-lg border border-white/10 flex items-center justify-center h-12 w-24 shrink-0">
                                                    <img src={GoGLogo} className="h-full w-auto object-contain" alt="GoG" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between w-full md:w-full gap-4">
                                                <span className="font-bold text-white text-sm md:text-base leading-tight">{row.gog}</span>
                                                <div className="shrink-0 w-6 h-6 rounded-full border border-[#34D562] flex items-center justify-center text-[#34D562]">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Traditional Column */}
                                        <div className="col-span-4 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 opacity-70 md:opacity-100">
                                            <div className="md:hidden text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Traditional Colleges</div>
                                            <div className="flex items-center justify-between w-full md:w-full gap-4">
                                                <span className="text-gray-500 text-sm md:text-base leading-tight">{row.others}</span>
                                                <X size={20} className="text-red-500 shrink-0" strokeWidth={3} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div >
                    </div >
                </div >
            </section >


            {/* ===== 4. FEE & ADMISSIONS (Detailed) ===== */}
            < section id="fee" className="py-24 bg-[#000000] border-t border-white/5 relative overflow-hidden scroll-mt-[300px]" >
                {/* Background decorative blob */}
                < div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#34D562]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Fee Structure */}
                        <div>
                            <SectionHeader title="Fee Structure" subtitle="Transparent & Value-Driven." />
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                                <div className="flex flex-row justify-between items-end mb-4 relative z-10 gap-2">
                                    <div>
                                        <h4 className="text-gray-400 text-[10px] md:text-sm uppercase tracking-widest font-bold mb-1">Annual Tuition Fee</h4>
                                        <div className="text-3xl md:text-5xl font-display font-bold text-white leading-none pb-1">{feeStructure.tuitionPerYear}</div>
                                    </div>
                                    <div className="text-right pb-1">
                                        <div className="inline-block px-2 py-1 md:px-3 bg-[#34D562]/20 text-[#34D562] text-[10px] md:text-xs font-bold rounded-full border border-[#34D562]/30 mb-1 md:mb-2 whitespace-nowrap">
                                            <span className="text-amber-400">NAAC 'A+'</span> Accredited
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-10 text-right italic"><span className="text-red-500">*</span> Excluding Hostel & Mess Charges</p>

                                <div className="space-y-6 relative z-10">
                                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                                        <span className="text-gray-300 font-medium">Seat Booking Fee <span className="text-xs text-gray-500 block">(Adjustable in Semester 1)</span></span>
                                        <span className="text-white text-xl font-bold">{feeStructure.seatBooking}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-[#34D562]/10 rounded-xl border border-[#34D562]/20">
                                        <span className="text-[#34D562] font-medium">Qualifier Test Fee</span>
                                        <span className="text-[#34D562] text-xl font-bold">{feeStructure.qualifierFee}</span>
                                    </div>
                                </div>

                                {/* Financial Aid / Bottom Filler */}
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <Briefcase size={18} className="text-[#34D562]" /> Financial Aid Available
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-sm text-gray-400 flex items-center gap-2">
                                            <CheckCircle size={14} className="text-[#34D562]" /> Merit Scholarships
                                        </div>
                                        <div className="text-sm text-gray-400 flex items-center gap-2">
                                            <CheckCircle size={14} className="text-[#34D562]" /> Easy EMI Options
                                        </div>
                                        <div className="text-sm text-gray-400 flex items-center gap-2">
                                            <CheckCircle size={14} className="text-[#34D562]" /> Education Loans
                                        </div>
                                        <div className="text-sm text-gray-400 flex items-center gap-2">
                                            <CheckCircle size={14} className="text-[#34D562]" /> Early Bird Offers
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <ScholarshipStats />
                                    </div>
                                </div>
                            </div>

                            {/* Fast Contact Card (Added to fill space) */}
                            {/* <div className="mt-6 p-6 bg-[#111] border border-white/5 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#34D562]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#34D562]/20 transition-all pointer-events-none" />

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#34D562] flex items-center justify-center text-black shadow-lg shadow-[#34D562]/20">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white leading-tight">Admissions Helpline</h4>
                                        <p className="text-xs text-[#34D562] font-semibold uppercase tracking-wider">Available 24/7</p>
                                    </div>
                                </div>

                                <div className="space-y-3 pl-14">
                                    <p className="text-gray-300 font-medium text-lg">+91 91524 72392</p>
                                    <p className="text-gray-400 text-sm flex items-center gap-2">
                                        <Mail size={14} className="text-[#34D562]" /> admin@geeksofgurukul.com
                                    </p>
                                    <button className="mt-2 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/5 w-full text-left flex justify-between items-center group-hover:border-[#34D562]/30">
                                        Request Call Back <ArrowRight size={14} className="text-[#34D562]" />
                                    </button>
                                </div>
                            </div> */}
                        </div>

                        {/* Admission Timeline */}
                        <div>
                            <SectionHeader title="Admission Process" subtitle="Simple 4-Step Journey." />
                            <div className="relative pl-8 pt-4">
                                {/* Vertical Line */}
                                <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#34D562] to-transparent opacity-50" />

                                {admissionSteps.map((step, i) => (
                                    <div key={i} className="mb-12 last:mb-0 relative group">
                                        {/* Dot */}
                                        <div className="absolute -left-[29px] top-1 w-6 h-6 rounded-full bg-black border-4 border-[#34D562] z-10 shadow-[0_0_15px_rgba(52,213,98,0.4)] group-hover:scale-125 transition-transform" />

                                        <div className="p-6 bg-[#111] border border-white/10 rounded-2xl hover:border-[#34D562]/30 transition-colors relative">
                                            <div className="text-[#34D562] text-xs font-bold uppercase tracking-wider mb-2">Step 0{i + 1}</div>
                                            <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* ===== 5. CERTIFICATE PREVIEW (Moved & Resized) ===== */}
            < section className="py-24 bg-[#050505] overflow-hidden" >
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <SectionHeader title="Earn a Degree that Matters" subtitle="UGC Recognized. NAAC 'A+' Accredited. Industry Trusted." />

                    <div className="relative mt-12 mx-auto max-w-5xl">
                        {/* Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#34D562]/20 blur-[120px] rounded-full pointer-events-none" />
                        <div className="transform scale-100 md:scale-110">
                            <CertificatePreview />
                        </div>
                    </div>
                </div>
            </section >

            {/* ===== 5. PLACEMENTS & PARTNERS (New High-Impact Section) ===== */}
            < section id="placements" className="py-20 bg-[#020202] border-y border-white/5 relative overflow-hidden scroll-mt-[300px]" >
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#34D562]/5 skew-x-12 blur-3xl" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Build Your <span className="text-[#34D562]">Dream Career.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Our 100% Placement Protection plan ensures you launch your career in top-tier product companies.
                            </p>

                            {/* Placement Poster */}


                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Our students consistently secure positions at <span className="text-[#34D562] font-semibold">leading MNCs and Fortune 500 companies</span> with highly competitive salary packages. The industry-integrated curriculum, combined with intensive hands-on training and personalized mentorship, ensures that every graduate is <span className="text-white font-semibold">job-ready from Day 1</span>. With a proven track record of successful placements and strong recruiter relationships, your dream career is within reach.
                                </p>
                            </div>

                            <a href="/assets/CenturionUniversity/Placement Brochure.pdf" download="Placement_Brochure_2025.pdf" className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white font-semibold w-fit">
                                <Download size={18} /> Download Placement Report 2025
                            </a>


                        </div>

                        {/* Recruiter Grid - LOGOS */}
                        <div className="bg-white p-8 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                            <h4 className="text-black font-bold mb-6 flex items-center gap-2">
                                <Briefcase className="text-[#34D562]" size={18} /> Top Recruiters
                            </h4>
                            <div className="flex justify-center items-center">
                                <img
                                    src="/assets/Gyanveer/recruiters_new.png"
                                    alt="Top Recruiters"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="mt-6 text-center">
                                <span className="inline-block px-4 py-2 text-[#34D562] font-bold text-sm bg-[#34D562]/10 rounded-full border border-[#34D562]/20">
                                    + 190 More Companies
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Full Width Industry Validation Section */}
                    <div className="mt-8 space-y-12 pt-0">
                        {/* Career Trajectory */}
                        <div>
                            {/* Placement & Internship Records Row */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <img
                                        src="/assets/GoG/placement-record-2025.png"
                                        alt="Placement Records 2025"
                                        className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <img
                                        src="/assets/GoG/internship-record-2025.png"
                                        alt="Internship Selections 2025"
                                        className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition duration-500"
                                    />
                                </div>
                            </div> */}
                        </div>


                        {/* Alumni */}
                        {/* <div>
                            <SectionHeader title="Alumni Hall of Fame" subtitle="Our graduates work at the world's best companies." />
                            <AlumniNetwork />
                        </div> */}

                        {/* Recruiters */}
                        <div>
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-white mb-2">Industry Validation</h3>
                                <p className="text-gray-400">What HR Directors say about hiring from GoG.</p>
                            </div>
                            <RecruiterTestimonials />
                        </div>
                    </div>
                </div>
            </section >

            {/* ===== 8. BLOG & UPDATES (Moved Here) ===== */}
            < section className="py-24 bg-[#050505] border-t border-white/5" >
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeader title="GOG Insider" subtitle="Latest News, Achievements & Events." />
                    <BlogUpdates />
                </div>
            </section >

            {/* ===== 4. DENSE CURRICULUM (Funkie Roadmap) ===== */}
            < section id="curriculum" className="py-24 bg-[#050505] scroll-mt-[300px]" >
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeader title="8 Semester Roadmap" subtitle="Detailed breakdown of your 4-year journey." />

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Sidebar Tabs */}
                        <div className="lg:w-1/4 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 h-full">
                            {curriculum.map((sem, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveSem(i)}
                                    className={`px-5 py-4 rounded-lg text-left font-medium transition-all whitespace-nowrap lg:whitespace-normal flex items-center justify-between group ${activeSem === i
                                        ? 'bg-[#34D562] text-black shadow-lg font-bold'
                                        : 'bg-[#111] text-gray-400 hover:bg-[#1a1a1a] border border-white/5'
                                        }`}
                                >
                                    <span className="text-sm">{sem.semester}</span>
                                    {activeSem === i && <ArrowRight size={14} />}
                                </button>
                            ))}
                        </div>

                        {/* Content Area - Densed */}
                        <div className="lg:w-3/4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSem}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className={`bg-[#111] border border-white/10 rounded-2xl p-8 min-h-[400px] relative overflow-hidden ${activeSem === 3 ? 'border-[#34D562]/50 shadow-[0_0_30px_rgba(52,213,98,0.1)]' : ''} ${activeSem === 7 ? 'border-yellow-400/50 shadow-[0_0_30px_rgba(250,204,21,0.1)]' : ''}`}
                                >
                                    {/* Fun Background Icon per sem */}
                                    <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                                        {(activeSem === 3 || activeSem === 7) && <Star size={120} className={activeSem === 7 ? "text-yellow-400" : "text-[#34D562]"} />}
                                    </div>

                                    <div className="flex justify-between items-baseline mb-6 border-b border-white/10 pb-4 relative z-10">
                                        <h3 className="text-2xl font-bold text-white">{curriculum[activeSem].theme}</h3>
                                        <span className="text-[#34D562] font-mono text-sm px-3 py-1 bg-[#34D562]/10 rounded-full">24 Credits</span>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 relative z-10 mb-8">
                                        <div className="space-y-4">
                                            <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
                                                <BookOpen size={16} className="text-[#34D562]" /> Core Subjects
                                            </h4>
                                            <div className="grid gap-2">
                                                {curriculum[activeSem].subjects.map((sub, i) => (
                                                    <div key={i} className="flex justify-between items-center p-3 bg-black/40 rounded border border-white/5 hover:border-[#34D562]/20 transition-colors">

                                                        <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#34D562] shrink-0" />
                                                            {sub.title}
                                                        </span>
                                                        <span className="text-[10px] font-mono text-gray-500">{sub.code}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
                                                    <Code size={16} className="text-[#34D562]" /> Practical Labs
                                                </h4>
                                                <div className="grid gap-2">
                                                    {curriculum[activeSem].labs.map((lab, i) => (
                                                        <div key={i} className="flex items-center gap-3 p-3 bg-black/40 rounded border border-white/5 hover:bg-[#34D562]/5 transition-colors">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#34D562]" />
                                                            <span className="text-gray-300 text-sm">{lab}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Activities Section (Moved to Bottom) */}
                                    <div className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-[#34D562]" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#34D562]/5 to-transparent opacity-50 pointer-events-none" />
                                        <div className="relative z-10">
                                            <h4 className="flex items-center gap-2 text-[#34D562] font-bold text-xs uppercase mb-3">
                                                <Activity size={16} /> Activities & Highlights
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {/* @ts-ignore - activities added in data */}
                                                {curriculum[activeSem].activities && curriculum[activeSem].activities.map((act: string, i: number) => (
                                                    <span key={i} className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 flex items-center gap-2 group-hover:border-[#34D562]/30 transition-colors">
                                                        <CheckCircle size={14} className="text-[#34D562]" /> {act}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    {/* NEW: Journey Grid (No Overflow) */}
                    <div className="mt-12 pt-8 border-t border-white/5">
                        <h4 className="text-white font-bold mb-6 text-xl flex items-center gap-2">
                            <span className="text-[#34D562]">Your Journey</span> to Success
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {curriculum.map((sem, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveSem(i)}
                                    className={`p-5 rounded-2xl border transition-all duration-300 relative group text-left flex flex-col h-full ${activeSem === i
                                        ? 'bg-[#111] border-[#34D562] shadow-[0_0_20px_rgba(52,213,98,0.2)] scale-105 z-10'
                                        : 'bg-[#111] border-white/10 hover:border-[#34D562]/30 text-gray-400 hover:bg-[#1a1a1a]'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${activeSem === i ? 'bg-[#34D562] text-black' : 'bg-black/40 text-[#34D562]'}`}>
                                            {sem.semester}
                                        </div>
                                        {/* @ts-ignore */}
                                        {sem.phase && (
                                            <span className={`text-[10px] font-bold ${activeSem === i ? 'text-[#34D562]' : 'text-gray-500'}`}>
                                                {/* @ts-ignore */}
                                                {sem.phase}
                                            </span>
                                        )}
                                    </div>

                                    {/* @ts-ignore - Guidance is now the main headline */}
                                    {sem.guidance && (
                                        <h4 className={`font-bold text-base mb-2 leading-tight flex items-center gap-2 ${activeSem === i ? 'text-white' : 'text-amber-400'}`}>
                                            <Sparkles size={14} className={activeSem === i ? 'text-[#34D562]' : 'text-[#34D562]'} />
                                            {/* @ts-ignore */}
                                            {sem.guidance}
                                        </h4>
                                    )}

                                    {/* Theme is now secondary/smaller */}
                                    <p className={`mt-auto pt-2 text-[11px] font-medium border-t ${activeSem === i ? 'border-white/10 text-gray-300' : 'border-white/5 text-gray-400'}`}>
                                        {sem.theme}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* ===== 5. CAMPUS LIFE & CLUBS (Updated) ===== */}
            < section id="campus-life" className="py-24 bg-[#0A0A0A] scroll-mt-[300px]" >
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeader title="Campus Life" subtitle="Explore Vizianagaram & Beyond." />

                    {/* Amenities Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
                        {amenities.map((item, i) => (
                            <div
                                key={i}
                                className="relative group cursor-pointer h-full"
                                onClick={() => setSelectedAmenity(item)}
                            >
                                <div className="h-full bg-[#0F0F0F] rounded-2xl overflow-hidden border border-white/5 group-hover:border-[#34D562]/50 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_rgba(52,213,98,0.15)] relative">

                                    {/* Image Section */}
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-90" />

                                        {/* Floating Icon */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-500 delay-100 group-hover:bg-[#34D562] group-hover:text-black group-hover:border-[#34D562]">
                                            <item.icon size={20} />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5 flex flex-col items-center text-center relative z-10 -mt-6">
                                        {/* Static Icon (Visible initially) */}
                                        <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl border border-white/5 flex items-center justify-center text-[#34D562] mb-3 group-hover:w-0 group-hover:opacity-0 overflow-hidden transition-all duration-300 shadow-lg">
                                            <item.icon size={22} />
                                        </div>

                                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#34D562] transition-colors duration-300">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-500 text-xs font-medium leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Detail */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#34D562] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Amenity Image Modal - Centered with Blur Background */}
                    <AnimatePresence>
                        {selectedAmenity && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                                onClick={() => setSelectedAmenity(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.7, opacity: 0 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="relative w-[90%] md:w-[70%] lg:w-[60%] max-h-[85vh] bg-[#111] rounded-3xl overflow-hidden border border-[#34D562]/30 shadow-[0_0_80px_rgba(52,213,98,0.3)]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setSelectedAmenity(null)}
                                        className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/60 hover:bg-[#34D562] text-white hover:text-black rounded-full flex items-center justify-center transition-all border border-white/20"
                                    >
                                        <X size={24} />
                                    </button>

                                    {/* Large Image */}
                                    <div className="relative h-[50vh] md:h-[60vh] bg-black overflow-hidden">
                                        {/* Blurred Background */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-40 blur-2xl scale-110"
                                            style={{ backgroundImage: `url(${selectedAmenity.image})` }}
                                        />

                                        {/* Main Image - Full View */}
                                        <img
                                            src={selectedAmenity.image}
                                            alt={selectedAmenity.name}
                                            className="relative w-full h-full object-contain z-10 p-4"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-20" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-14 h-14 bg-[#34D562]/20 rounded-xl flex items-center justify-center text-[#34D562]">
                                                <selectedAmenity.icon size={28} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedAmenity.name}</h3>
                                        </div>
                                        <p className="text-gray-400 text-lg">{selectedAmenity.desc}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Success Ticker (Interns & Placements) */}


                    {/* Video / Testimonials Section */}
                    <div className="mb-24">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white">Student Testimonials</h3>
                            <button className="text-[#34D562] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                View All Stories <ArrowRight size={16} />
                            </button>
                        </div>
                        <StudentVlogs />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Clubs */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Student Clubs</h3>
                            <div className="space-y-3">
                                {clubs.map((club, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-[#111] rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                                        <div className="mt-1 text-[#34D562]"><club.icon size={20} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">{club.name} <span className="text-xs font-normal text-gray-500 ml-2">({club.type})</span></h4>
                                            <p className="text-sm text-gray-400">{club.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Media Links */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">In the Media</h3>
                            <div className="space-y-4">
                                {mediaLinks.map((news, i) => (
                                    <a href={news.link} key={i} className="block group">
                                        <div className="flex justify-between items-start border-b border-white/10 pb-4 group-hover:border-[#34D562]/50 transition-colors">
                                            <div>
                                                <div className="text-xs text-[#34D562] font-bold mb-1 uppercase">{news.source} • {news.date}</div>
                                                <h4 className="font-bold text-white group-hover:text-[#34D562] transition-colors">{news.title}</h4>
                                                <p className="text-sm text-gray-500 mt-1">{news.desc}</p>
                                            </div>
                                            <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Nearby Places */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold text-white mb-8">Weekend Getaways</h3>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {nearbyPlaces.map((place, i) => (
                                <ImageCard key={i} img={place.img} title={place.name} subtitle={`${place.dist} • ${place.type} `} />
                            ))}
                        </div>
                    </div>
                </div>
            </section >


            {/* ===== 7. FAQ ===== */}
            < section id="faq" className="py-24 bg-[#050505] scroll-mt-[300px]" >
                <div className="container mx-auto px-4 max-w-3xl">
                    <SectionHeader title="FAQ" />
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-[#111] rounded-lg overflow-hidden border border-white/5">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-medium text-white">{faq.q}</span>
                                    {activeFaq === i ? <ChevronUp size={20} className="text-[#34D562]" /> : <ChevronDown size={20} className="text-gray-500" />}
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 pt-0 text-sm text-gray-400 border-t border-white/5 leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section >



            {/* ===== 9. CONTACT ===== */}
            < section id="contact" className="py-24 bg-[#0a0a0a] scroll-mt-[300px]" >
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <SectionHeader title="Still have questions?" subtitle="Our admissions team is here to help you." />

                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-[#34D562]/50 transition-colors group">
                            <div className="w-12 h-12 bg-[#34D562]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#34D562] group-hover:text-black transition-colors">
                                <Phone size={24} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Call Us</h4>
                            <p className="text-gray-400 text-sm">+91 91524 72392</p>
                            <p className="text-gray-400 text-sm">+91 93371 89115</p>
                        </div>

                        <div className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-[#34D562]/50 transition-colors group">
                            <div className="w-12 h-12 bg-[#34D562]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#34D562] group-hover:text-black transition-colors">
                                <Mail size={24} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Email Us</h4>
                            <p className="text-gray-400 text-sm">admin@geeksofgurukul.com</p>
                        </div>

                        <div className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-[#34D562]/50 transition-colors group">
                            <div className="w-12 h-12 bg-[#34D562]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#34D562] group-hover:text-black transition-colors">
                                <MapPin size={24} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Visit Campus</h4>
                            <p className="text-gray-400 text-sm">Centurion University,</p>
                            <p className="text-gray-400 text-sm">Vizianagaram, AP</p>
                        </div>
                    </div>
                </div>
            </section >


            <ChatBot />
        </div >
    );
};



export default Admissions;
