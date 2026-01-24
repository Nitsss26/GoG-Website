import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone, Mail, MapPin, ChevronDown, ChevronUp,
    Play, CheckCircle, ArrowRight, Download,
    ExternalLink, Star, Calendar, Clock,
    HelpCircle, X, Check, Users, Shield, Zap,
    BookOpen, Code, Home, Wifi, Coffee, Activity, Bus,
    Building, MonitorPlay, Award, Globe, Music, Camera, Heart, UserCheck, FileText, GraduationCap, Briefcase, MessageCircle, TrendingUp, Coins
} from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';
import PageSEO from '../components/PageSEO';
import {
    courseInfo, rankings, mediaLinks, amenities,
    nearbyPlaces, curriculum, faculty, comparisonData,
    heroStats, admissionSteps, feeStructure, placementStats,
    clubs, faqs, testimonials, universityAbout,
    studentVlogs, alumniSuccess, recruiterTestimonials, careerPathData, blogUpdates
} from '../data/admissionsData';

// Import assets
import CUTMLogo from "../assets/PartneredColleges/CUTM.svg";
import { div } from 'framer-motion/client';
import {
    StudentVlogs, VirtualTour, CareerVisualizer, ScholarshipStats, AlumniNetwork, RecruiterTestimonials, BlogUpdates, ChatBot
} from '../components/UniqueFeatures';

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
                <Play className="text-[#34D562] ml-1" fill="currentColor" size={20} />
            </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 p-4 z-10">
            <p className="font-bold text-white text-md leading-tight">{label}</p>
        </div>
    </div>
);

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
    <div className="relative bg-white text-black py-8 px-8 md:py-10 md:px-16 rounded-lg shadow-2xl border-4 border-[#34D562]/20 max-w-6xl mx-auto overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
        {/* Borders */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-[#003366] rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-8 border-r-8 border-[#003366] rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 border-[#003366] rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-[#003366] rounded-br-3xl" />

        {/* Content */}
        <div className="text-center relative z-10">
            <div className="flex justify-center mb-6 gap-8 items-center">
                {/* University Logo Mockup */}
                <div className="text-[#003366] font-serif font-bold text-2xl border-2 border-[#003366] p-2 flex flex-col items-center scale-90">
                    <span>CUTM</span>
                    <span className="text-[10px] uppercase tracking-widest text-black">Estd 2010</span>
                </div>
            </div>

            <h3 className="text-[#003366] font-serif font-bold text-2xl md:text-4xl mb-1">CERTIFICATE OF COMPLETION</h3>
            <p className="text-gray-600 italic mb-4">This is to certify that Mr./Ms.</p>

            <div className="text-4xl md:text-5xl font-script text-[#34D562] font-bold mb-4">Aditya Verma</div>

            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6 leading-tight">
                has successfully completed the 4-Year B.Tech Program in <br />
                <span className="font-bold text-black">Computer Science & Engineering (AI & ML)</span>
            </p>

            <div className="flex justify-between items-end mt-8 px-4 md:px-10">
                <div className="text-center">
                    <div className="h-12 w-24 border-b-2 border-black mb-2 mx-auto"></div>
                    <p className="font-bold text-[#003366]">Registrar</p>
                    <p className="text-xs text-gray-500">Centurion University</p>
                </div>
                {/* Geeks of Gurukul Badge */}
                <div className="text-center">
                    <span className="text-xl font-bold text-black flex items-center gap-1">
                        <span className="text-[#34D562]">Geeks</span>ofGurukul
                    </span>
                </div>
                <div className="text-center">
                    <div className="h-12 w-24 border-b-2 border-black mb-2 mx-auto"></div>
                    <p className="font-bold text-[#003366]">Program Director</p>
                    <p className="text-xs text-gray-500">Geeks of Gurukul</p>
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

    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#34D562] selection:text-black overflow-x-hidden">
            <PageSEO title="B.Tech AI Admissions 2026 | Centurion University" description="Apply for B.Tech in CSE (AI & ML). India's most advanced industry-integrated curriculum." />

            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <GreenEmbers />
            </div>

            {/* ===== 1. HERO SECTION (PROFESSIONAL & FULL WIDTH) ===== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('/assets/Centurion/campus-wide.jpg')] bg-cover bg-top z-0" />
                <div className="absolute inset-0 bg-black/60 z-0" />

                <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                    <div className="text-center max-w-5xl mx-auto pt-28">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#34D562] animate-pulse" />
                            <span className="text-gray-300 font-medium text-xs uppercase tracking-wider">Admissions Open 2026</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-6 tracking-tighter"
                        >
                            B.Tech in Computer Science<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-emerald-200 to-[#34D562]">(AI & ML)</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            Engineer the Intelligence with India's most advanced curriculum. <br />
                            Jointly by <span className="text-white font-semibold">Centurion University</span> x <span className="text-[#34D562] font-semibold">Geeks of Gurukul</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-lg mx-auto"
                        >
                            <button className="flex-1 px-8 py-4 bg-[#34D562] text-black font-bold text-lg rounded-xl hover:bg-[#2dbd56] transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(52,213,98,0.3)]">
                                Apply Now
                            </button>
                            <button className="flex-1 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                                Download Brochure
                            </button>
                        </motion.div>
                    </div>

                    {/* Stats Ribbon */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 border-y border-white/5 bg-white/5 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                            {heroStats.map((stat, i) => (
                                <div key={i} className="p-6 text-center hover:bg-white/5 transition-colors">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== 2. ABOUT UNIVERSITY (New Section) ===== */}
            <section className="py-20 bg-[#050505] border-b border-white/5">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <img src="/assets/Centurion/university-logo.png" alt="Centurion University" className="h-16 w-auto" />
                                <div className="h-8 w-px bg-white/20" />
                                <span className="text-xl font-bold text-gray-400">NAAC 'A' Grade University</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                A <span className="text-[#34D562]">Globally Accredited</span> <br />Center of Excellence.
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
                                            <div className="text-xs text-gray-500 mt-1">{r.context}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative py-8">
                                {/* Main Image (Entrance) */}
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video relative group">
                                        <img
                                            src="/assets/Centurion/campus-entrance.jpg"
                                            alt="Main Campus Entrance"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                        <div className="absolute bottom-4 left-4">
                                            <p className="text-white font-bold text-lg">Main Entrance</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video relative group">
                                        <img
                                            src="/assets/Centurion/campus-wide.jpg"
                                            alt="Campus Wide View"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                        <div className="absolute bottom-4 left-4">
                                            <p className="text-white font-bold text-lg">Campus Aerial</p>
                                        </div>
                                    </div>
                                </div>


                                {/* Stats Badge - Repositioned */}
                                <div className="absolute -bottom-10 -left-4 bg-[#34D562] text-black p-4 rounded-xl shadow-[0_10px_30px_rgba(52,213,98,0.3)] z-30 animate-bounce-slow hidden lg:block">
                                    <div className="text-3xl font-bold">100%</div>
                                    <div className="font-bold text-xs leading-tight">Skill Integrated<br />Education</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 3. WHY CHOOSE / BENEFITS (Psychological) ===== */}
            <section className="py-24 bg-[#080808]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeader title="Why Choose This Program?" subtitle="A future-proof degree designed for the AI era." />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Future-Proof Career", desc: "Launch into high-growth AI roles.", icon: Rocket },
                            { title: "Prestigious Certification", desc: "Degree from NAAC 'A' University.", icon: Award },
                            { title: "Advanced Curriculum", desc: "Real-time project implementation.", icon: BookOpen },
                            { title: "World-Class Faculty", desc: "Learn from IIT/IIM experts.", icon: Users },
                            { title: "Vibrant Networking", desc: "Connect with industry leaders.", icon: Globe },
                            { title: "Campus Immersion", desc: "Optional 2-day offline labs.", icon: Building },
                            { title: "Placement Assurance", desc: "100% placement support.", icon: Shield },
                            { title: "Flexible Payment", desc: "EMI & Scholarships available.", icon: Zap }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#111] p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-colors group">
                                <div className="w-12 h-12 bg-[#34D562]/10 rounded-lg flex items-center justify-center text-[#34D562] mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div className="mt-24 relative max-w-6xl mx-auto">
                        <div className="absolute inset-0 bg-[#34D562] blur-[100px] opacity-5 pointer-events-none" />
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111]/90 backdrop-blur-xl">
                            {/* Header */}
                            <div className="grid grid-cols-12 border-b border-white/10 items-center bg-[#111]">
                                <div className="col-span-4 text-gray-400 font-bold uppercase tracking-wider text-sm p-6">Feature</div>
                                <div className="col-span-4 text-[#34D562] font-bold text-lg p-6 bg-[#34D562]/10 border-x border-[#34D562]/20 relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[#34D562]" />
                                    Centurion x GoG
                                </div>
                                <div className="col-span-4 text-gray-500 font-bold text-sm p-6">Traditional Colleges</div>
                            </div>
                            {/* Rows */}
                            {comparisonData.map((row, i) => (
                                <div key={i} className="grid grid-cols-12 border-b border-white/5 last:border-0 items-stretch">
                                    {/* Feature */}
                                    <div className="col-span-4 font-bold text-white p-6 flex items-center">
                                        {row.feature}
                                    </div>

                                    {/* GOG Column (Highlighted) */}
                                    <div className="col-span-4 p-6 bg-[#34D562]/5 border-x border-[#34D562]/10 flex items-center justify-between gap-4 relative">
                                        <span className="font-bold text-white text-sm md:text-base leading-tight">{row.gog}</span>
                                        <div className="shrink-0 w-6 h-6 rounded-full border border-[#34D562] flex items-center justify-center text-[#34D562]">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                    </div>

                                    {/* Traditional Column */}
                                    <div className="col-span-4 p-6 flex items-center justify-between gap-4">
                                        <span className="text-gray-500 text-sm md:text-base leading-tight">{row.others}</span>
                                        <X size={20} className="text-red-500 shrink-0" strokeWidth={3} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ===== 4. FEE & ADMISSIONS (Detailed) ===== */}
            <section className="py-24 bg-[#000000] border-t border-white/5 relative overflow-hidden">
                {/* Background decorative blob */}
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#34D562]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Fee Structure */}
                        <div>
                            <SectionHeader title="Fee Structure" subtitle="Transparent & Value-Driven." />
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                                <div className="flex justify-between items-end mb-4 relative z-10">
                                    <div>
                                        <h4 className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-1">Annual Tuition Fee</h4>
                                        <div className="text-5xl font-display font-bold text-white">{feeStructure.tuitionPerYear}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-block px-3 py-1 bg-[#34D562]/20 text-[#34D562] text-xs font-bold rounded-full border border-[#34D562]/30 mb-2">
                                            NAAC 'A' Accredited
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-10 text-right italic">*Excluding Hostel & Mess Charges</p>

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
            </section>

            {/* ===== 5. CERTIFICATE PREVIEW (Moved & Resized) ===== */}
            <section className="py-24 bg-[#050505] overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <SectionHeader title="Earn a Degree that Matters" subtitle="UGC Recognized. NAAC 'A' Accredited. Industry Trusted." />

                    <div className="relative mt-12 mx-auto max-w-5xl">
                        {/* Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#34D562]/20 blur-[120px] rounded-full pointer-events-none" />
                        <div className="transform scale-100 md:scale-110">
                            <CertificatePreview />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 5. PLACEMENTS & PARTNERS (New High-Impact Section) ===== */}
            <section className="py-20 bg-[#020202] border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#34D562]/5 skew-x-12 blur-3xl" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Careers that <span className="text-[#34D562]">Command Respect.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Our 100% Placement Protection plan ensures you launch your career in top-tier product companies.
                            </p>

                            {/* Placement Poster */}


                            <div className="flex gap-8 mb-8">
                                <div>
                                    <div className="text-5xl font-bold text-white mb-1">{placementStats.highest}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Highest CTC</div>
                                </div>
                                <div className="w-px bg-white/10" />
                                <div>
                                    <div className="text-5xl font-bold text-[#34D562] mb-1">{placementStats.average}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Average CTC</div>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white font-semibold">
                                <Download size={18} /> Download Placement Report 2025
                            </button>


                        </div>

                        {/* Recruiter Grid - LOGOS */}
                        <div className="bg-[#111] p-8 rounded-2xl border border-white/10 shadow-2xl">
                            <h4 className="text-gray-400 font-bold mb-6 flex items-center gap-2">
                                <Briefcase className="text-[#34D562]" size={18} /> Top Recruiters
                            </h4>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                {[
                                    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
                                    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
                                    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
                                    { name: "IBM", logo: "https://logo.clearbit.com/tcs.com" },
                                    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
                                    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
                                    { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
                                    { name: "TCS", logo: "https://logo.clearbit.com/ibm.com" },
                                    { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
                                    { name: "Mindtree", logo: "https://logo.clearbit.com/mindtree.com" },
                                    { name: "Optum", logo: "https://logo.clearbit.com/techmahindra.com" },
                                    { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
                                ].map((co, i) => (
                                    <div key={i} className="h-16 bg-white border border-white/10 rounded-lg flex items-center justify-center p-3 hover:border-[#34D562] hover:shadow-[0_0_15px_rgba(52,213,98,0.3)] transition-all group cursor-pointer overflow-hidden relative">
                                        <img
                                            src={co.logo}
                                            alt={co.name}
                                            className="max-h-8 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                                const parent = (e.target as HTMLImageElement).parentElement!;
                                                parent.innerText = co.name;
                                                parent.className = 'h-16 bg-[#111] border border-white/10 rounded-lg flex items-center justify-center p-3 text-white text-xs font-bold uppercase tracking-wider text-center';
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <span className="inline-block px-4 py-2 text-[#34D562] font-bold text-sm bg-[#34D562]/10 rounded-full border border-[#34D562]/20">
                                    + 190 More Companies
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Full Width Industry Validation Section */}
                    <div className="mt-20 space-y-20 border-t border-white/5 pt-16">
                        {/* Career Trajectory */}
                        <div>
                            {/* Placement & Internship Records Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
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
                            </div>
                        </div>

                        <div>
                            <SectionHeader title="Your Journey to Success" subtitle="From Admission to Placement." />
                            <CareerVisualizer />
                        </div>

                        {/* Alumni */}
                        <div>
                            <SectionHeader title="Alumni Hall of Fame" subtitle="Our graduates work at the world's best companies." />
                            <AlumniNetwork />
                        </div>

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
            </section>

            {/* ===== 4. DENSE CURRICULUM ===== */}
            <section className="py-24 bg-[#050505]">
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
                                    className="bg-[#111] border border-white/10 rounded-2xl p-8 min-h-[400px]"
                                >
                                    <div className="flex justify-between items-baseline mb-6 border-b border-white/10 pb-4">
                                        <h3 className="text-2xl font-bold text-white">{curriculum[activeSem].theme}</h3>
                                        <span className="text-[#34D562] font-mono text-sm px-3 py-1 bg-[#34D562]/10 rounded-full">24 Credits</span>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
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
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 5. CAMPUS LIFE & CLUBS (Updated) ===== */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeader title="Campus Life" subtitle="Explore Vizianagaram & Beyond." />

                    {/* Amenities Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
                        {amenities.map((item, i) => (
                            <GlowCard key={i} className="h-full">
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#34D562] group-hover:text-black transition-colors duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="font-bold text-white text-md mb-2">{item.name}</div>
                                    <div className="text-xs text-gray-500 leading-tight group-hover:text-gray-300 transition-colors">{item.desc}</div>
                                </div>
                            </GlowCard>
                        ))}
                    </div>

                    {/* Video / Testimonials Section */}
                    <div className="mb-24">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white">Campus Vibes</h3>
                            <button className="text-[#34D562] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                View All Stories <ArrowRight size={16} />
                            </button>
                        </div>
                        <div className="mb-16">
                            <VirtualTour />
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
                                <ImageCard key={i} img={place.img} title={place.name} subtitle={`${place.dist} • ${place.type}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* ===== 7. FAQ ===== */}
            <section className="py-24 bg-[#050505]">
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
            </section>

            {/* ===== 8. BLOG & UPDATES ===== */}
            <section className="py-24 bg-[#050505] border-t border-white/5">
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeader title="GOG Insider" subtitle="Latest News, Achievements & Events." />
                    <BlogUpdates />
                </div>
            </section>

            {/* ===== 9. CONTACT ===== */}
            <section className="py-24 bg-[#0a0a0a]">
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
            </section>

            {/* Sticky Bottom CTA on Mobile */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#000]/80 backdrop-blur-lg border-t border-white/10 md:hidden z-50 flex gap-3">
                <button className="flex-1 bg-[#34D562] text-black font-bold py-3 rounded-lg">Apply Now</button>
                <button className="flex-1 bg-white/10 text-white font-bold py-3 rounded-lg">Brochure</button>
            </div>

            <ChatBot />
        </div>
    );
};

// Quick helper for missing icon
const Rocket = ({ size, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
);

export default Admissions;
