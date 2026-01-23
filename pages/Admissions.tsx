import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone, Mail, MapPin, ChevronDown, ChevronUp,
    Play, CheckCircle, ArrowRight, Download,
    ExternalLink, Star, Calendar, Clock,
    HelpCircle, X, Check, Users, Shield, Zap, BookOpen, Code
} from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';
import PageSEO from '../components/PageSEO';
import {
    courseInfo, rankings, mediaLinks, amenities,
    nearbyPlaces, curriculum, faculty, comparisonData,
    heroStats, admissionSteps, feeStructure, placementStats
} from '../data/admissionsData';

// Import assets
import CUTMLogo from "../assets/PartneredColleges/CUTM.svg";

// --- SUB-COMPONENTS ---
const SectionHeader = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
    <div className="text-center mb-16 relative z-10">
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
    <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#34D562]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="text-[#34D562] ml-1" fill="currentColor" />
            </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="font-bold text-white">{label}</p>
        </div>
    </div>
);

const Admissions = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeSem, setActiveSem] = useState(0);

    return (
        <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-[#34D562] selection:text-black mt-10">
            <PageSEO title="B.Tech AI Admissions 2026 | Centurion University" description="Apply for B.Tech in CSE (AI & ML). India's most advanced industry-integrated curriculum." />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
                <GreenEmbers />
            </div>

            {/* ===== 1. HERO SECTION (VIDEO BG STYLE) ===== */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Simulated Video Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f1f15] via-[#050a06] to-[#000000] z-0" />
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 mix-blend-overlay" />

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#34D562]/10 border border-[#34D562]/30 mb-8 backdrop-blur-md"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-[#34D562] animate-pulse shadow-[0_0_10px_#34D562]" />
                            <span className="text-[#34D562] font-bold tracking-widest text-xs uppercase">Admissions 2026 Open</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight"
                        >
                            Engineering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-white to-[#34D562] animate-gradient-x">Future of AI</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light"
                        >
                            B.Tech in CSE <span className="text-[#34D562] font-semibold">(AI & ML)</span> at Centurion University.
                            <br className="hidden md:block" /> Powered by industry experts from Microsoft & Google.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row justify-center gap-5"
                        >
                            <button className="px-10 py-5 bg-[#34D562] text-black font-bold text-lg rounded-full hover:bg-[#2dbd56] transition-all hover:scale-105 shadow-[0_0_50px_rgba(52,213,98,0.4)] flex items-center justify-center gap-2 group">
                                Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-10 py-5 bg-white/5 border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                                <Download size={20} /> Download Brochure
                            </button>
                        </motion.div>
                    </div>

                    {/* Hero Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
                    >
                        {heroStats.map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl text-center hover:border-[#34D562]/40 transition-colors">
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== 2. UNIVERSITY & RANKINGS ===== */}
            <section className="py-24 bg-[#080808] relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#34D562]/50 to-transparent" />
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader title="A Legacy of Excellence" subtitle="Centurion University (CUTM) is a pioneer in skill-integrated higher education." />
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Recognized by <strong className="text-white">UNESCO</strong> and awarded <strong className="text-white">NAAC 'A' Grade</strong>, Centurion University combines academic rigour with hands-on industry training. Our Vizianagaram campus is a state-of-the-art facility designed to foster innovation in AI, Robotics, and IoT.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                {rankings.map((rank, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <rank.icon className="text-[#34D562] flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="text-2xl font-bold text-white">{rank.rank}</div>
                                            <div className="text-sm font-bold text-gray-300">{rank.title}</div>
                                            <div className="text-xs text-gray-500 mt-1">{rank.source}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Image Grid Placeholder */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-64 bg-gray-800 rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
                            <div className="h-64 bg-gray-800 rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mt-8" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 3. WHY US (COMPARISON TABLE) ===== */}
            <section className="py-24 bg-[#020202]">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Why We Are Different" subtitle="Don't settle for a traditional degree. Get the GoG Advantage." />

                    <div className="overflow-x-auto">
                        <table className="w-full max-w-5xl mx-auto border-separate border-spacing-0">
                            <thead>
                                <tr>
                                    <th className="p-6 text-left text-xl font-bold text-gray-400 border-b border-white/10">Feature</th>
                                    <th className="p-6 text-left text-xl font-bold text-white bg-[#34D562]/10 border-t border-x border-[#34D562]/30 rounded-t-2xl w-1/3">
                                        <span className="text-[#34D562]">Centurion x GoG</span>
                                    </th>
                                    <th className="p-6 text-left text-xl font-bold text-gray-500 border-b border-white/10 w-1/3">Traditional Colleges</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={i}>
                                        <td className="p-6 border-b border-white/10 font-medium text-gray-300">{row.feature}</td>
                                        <td className="p-6 bg-[#34D562]/5 border-x border-b border-[#34D562]/20 font-bold text-white relative">
                                            <CheckCircle className="absolute top-6 right-6 text-[#34D562] opacity-50" size={20} />
                                            {row.gog}
                                        </td>
                                        <td className="p-6 border-b border-white/10 text-gray-500 relative">
                                            <X className="absolute top-6 right-6 text-red-500/50" size={20} />
                                            {row.others}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ===== 4. DETAILED CURRICULUM ===== */}
            <section className="py-24 bg-[#0A0A0A] relative">
                <div className="container mx-auto px-6">
                    <SectionHeader title="8 Semester Roadmap" subtitle="From strong foundations to becoming an AI specialist." />

                    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
                        {/* Sidebar */}
                        <div className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                            {curriculum.map((sem, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveSem(i)}
                                    className={`px-6 py-4 rounded-xl text-left font-semibold transition-all whitespace-nowrap lg:whitespace-normal flex items-center justify-between group ${activeSem === i
                                        ? 'bg-[#34D562] text-black shadow-[0_0_20px_rgba(52,213,98,0.2)]'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    <div>
                                        <div className="text-xs opacity-70 uppercase tracking-wider">{sem.semester}</div>
                                        <div className="text-sm font-bold truncate max-w-[150px]">{sem.theme}</div>
                                    </div>
                                    {activeSem === i && <ArrowRight size={16} />}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="lg:w-3/4">
                            <motion.div
                                key={activeSem}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-[#151515] border border-white/10 rounded-3xl p-8"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{curriculum[activeSem].theme}</h3>
                                        <p className="text-[#34D562] font-mono">{curriculum[activeSem].semester}</p>
                                    </div>
                                    <div className="hidden md:block bg-white/5 px-4 py-2 rounded-lg text-xs text-gray-400 border border-white/5">
                                        Total Credits: 24
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Subjects */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                                            <BookOpen className="text-[#34D562]" size={18} /> Theory Courses
                                        </h4>
                                        <div className="space-y-3">
                                            {curriculum[activeSem].subjects.map((sub, i) => (
                                                <div key={i} className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-white/5">
                                                    <span className="text-gray-300 text-sm">{sub.title}</span>
                                                    <span className="text-xs font-mono text-gray-600">{sub.code}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Labs */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                                            <Code className="text-[#34D562]" size={18} /> Practical Labs
                                        </h4>
                                        <div className="space-y-3">
                                            {curriculum[activeSem].labs.map((lab, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-white/5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#34D562]" />
                                                    <span className="text-gray-300 text-sm">{lab}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 5. FACULTY & PLACEMENTS GRID ===== */}
            <section className="py-24 bg-[#020202]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Faculty */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8">Learn from the Masters</h3>
                            <div className="space-y-6">
                                {faculty.map((teacher, i) => (
                                    <div key={i} className="flex gap-6 p-6 bg-[#111] rounded-2xl border border-white/10 hover:border-[#34D562]/30 transition-colors">
                                        <div className="w-20 h-20 rounded-full bg-gray-700 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${teacher.img})` }} />
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{teacher.name}</h4>
                                            <p className="text-[#34D562] text-sm mb-2">{teacher.role}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed">{teacher.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Placements */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8">Placement Impact</h3>
                            <div className="bg-[#111] rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#34D562]/10 blur-[50px] rounded-full" />

                                <div className="grid grid-cols-2 gap-8 mb-10 relative z-10">
                                    <div>
                                        <div className="text-4xl font-bold text-white">{placementStats.highest}</div>
                                        <div className="text-sm text-gray-400 mt-1">Highest Package</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-[#34D562]">{placementStats.average}</div>
                                        <div className="text-sm text-gray-400 mt-1">Average Package</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-white">{placementStats.hiringPartners}+</div>
                                        <div className="text-sm text-gray-400 mt-1">Hiring Partners</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-blue-400">100%</div>
                                        <div className="text-sm text-gray-400 mt-1">Assurance</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Top Recruiters</p>
                                    <div className="flex flex-wrap gap-3">
                                        {placementStats.companies.map((co, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10">
                                                {co}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 6. CAMPUS LIFE (VIDEO/MEDIA) ===== */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Campus Life & Reviews" subtitle="See what our students are achieving." />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <VideoPlaceholder label="Campus Tour 2025" />
                        <VideoPlaceholder label="Student Testimonials" />
                        <VideoPlaceholder label="Life at Hostels" />
                    </div>

                    {/* Amenities Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {amenities.map((item, i) => (
                            <div key={i} className="p-4 bg-[#151515] rounded-xl text-center border border-white/5 hover:bg-[#1a1a1a] transition-colors">
                                <item.icon className="mx-auto text-[#34D562] mb-3" />
                                <div className="font-bold text-sm text-white">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 7. FEE STRUCTURE & PROCESS ===== */}
            <section className="py-24 bg-[#020202]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Fee Structure */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8">Fee Structure</h3>
                            <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
                                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                                    <span className="text-gray-300">Qualifier Test Fee</span>
                                    <span className="text-[#34D562] font-bold text-xl">{feeStructure.qualifierFee}</span>
                                </div>
                                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                                    <span className="text-gray-300">Seat Booking</span>
                                    <span className="text-white font-bold text-xl">{feeStructure.seatBooking}</span>
                                </div>
                                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#34D562]/5">
                                    <span className="text-white font-bold">Tuition Fee (Per Year)</span>
                                    <span className="text-white font-bold text-xl">{feeStructure.tuitionPerYear}</span>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-400 mb-4">*Hostel & Mess charges extra ({feeStructure.hostelPerYear})</p>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-bold rounded">10% Early Bird Off</span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-xs font-bold rounded">Scholarships Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Admission Process */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8">How to Apply</h3>
                            <div className="space-y-6">
                                {admissionSteps.map((step, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-[#111] border border-[#34D562] text-[#34D562] flex items-center justify-center font-bold text-lg z-10">
                                                {step.step}
                                            </div>
                                            {i !== admissionSteps.length - 1 && <div className="w-0.5 h-full bg-gray-800 -my-2" />}
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                            <p className="text-gray-400">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 8. FAQ & CONTACT ===== */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <SectionHeader title="Have Questions?" />

                    <div className="grid gap-4 mb-16">
                        {/* Simple FAQ Accordion reusing earlier logic if needed, or just static for now */}
                        <div className="bg-[#151515] p-6 rounded-xl border border-white/5">
                            <h4 className="font-bold text-white mb-2">Can I get a loan?</h4>
                            <p className="text-gray-400">Yes, we have tie-ups with 5+ NBFCs and banks for easy education loans.</p>
                        </div>
                        <div className="bg-[#151515] p-6 rounded-xl border border-white/5">
                            <h4 className="font-bold text-white mb-2">Is the degree recognized?</h4>
                            <p className="text-gray-400">Absolutely. It is a UGC-recognized B.Tech degree from Centurion University (NAAC 'A').</p>
                        </div>
                    </div>

                    {/* Contact Box */}
                    <div className="bg-gradient-to-br from-[#34D562] to-[#2ecc71] rounded-3xl p-12 text-center text-black shadow-2xl">
                        <h2 className="text-3xl font-bold mb-6">Still have doubts? Talk to us.</h2>
                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            <a href={`tel:${courseInfo.contact.phone1}`} className="flex items-center gap-2 bg-black/10 px-6 py-3 rounded-xl font-bold hover:bg-black/20 transition-colors">
                                <Phone size={20} /> {courseInfo.contact.phone1}
                            </a>
                            <a href={`mailto:${courseInfo.contact.email}`} className="flex items-center gap-2 bg-black/10 px-6 py-3 rounded-xl font-bold hover:bg-black/20 transition-colors">
                                <Mail size={20} /> {courseInfo.contact.email}
                            </a>
                        </div>
                        <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                            Request Call Back
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;
