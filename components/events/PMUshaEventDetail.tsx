import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star, Shield, Award, Users, BookOpen, Clock, MapPin, Calendar,
    ArrowRight, ChevronRight, ChevronLeft, Zap, Target, CheckCircle2,
    Info, Laptop, Globe, Brain, Leaf, Microscope, Presentation,
    Terminal, GraduationCap, FlaskConical, ExternalLink
} from 'lucide-react';
import { EventData, Trainer } from '../../data/eventsData';
import GreenEmbers from '../ui/GreenEmbers';
import BU_1st from '../../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/BU-1st.png';
import BU_3rd from '../../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/BU-3rd.jpg';
import BU_4th from '../../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/BU-4th.png';
import BU_5th from '../../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/BU-5th.png';
import BU_6th from '../../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/BU-6th.png';
import Life_Science from '../../assets/PM-USHA/Application_of_AI_(Artifical_Intelligence)/lifesciences.jpg';

interface PMUshaEventDetailProps {
    event: EventData;
    selectedSubEventId?: string | null;
    onBack?: () => void;
}

const PMUshaEventDetail: React.FC<PMUshaEventDetailProps> = ({ event, selectedSubEventId, onBack }) => {
    // Determine which premium details to use: 
    // If a sub-event is selected and has its own premiumDetails, use those.
    // Otherwise, fall back to the main event's premiumDetails.
    const subEvent = selectedSubEventId ? event.subEvents.find(s => s.id === selectedSubEventId) : null;
    const pd = subEvent?.premiumDetails || event.premiumDetails;

    if (!pd) return null;

    // ---------------------------------------------------------
    // CENTRALIZED IMAGE ARRAYS (Easy Maintenance)
    // ---------------------------------------------------------
    const VALEDICTORY_IMAGES = pd.galleryGroups.find(g => g.title.toLowerCase().includes('valedictory'))?.images || [];

    const SLIDER_SOURCE_IMAGES = [
        pd.galleryGroups.find(g => g.title.toLowerCase().includes('training'))?.images[0] || Life_Science,
        ...VALEDICTORY_IMAGES,
        ...pd.galleryGroups.flatMap(g => g.images),
    ];
    // ---------------------------------------------------------

    return (
        <div className="min-h-screen bg-[#030303] font-sans text-gray-400 selection:bg-[#34D562] selection:text-black relative overflow-hidden">
            {/* High Density Upward Embers */}
            <GreenEmbers density={4} direction="up" />

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-[#34D562]/5 rounded-full blur-[150px] pointer-events-none -z-0"></div>

            {/* 1. TOP HERO SECTION (Static Image) */}
            <section className="relative h-[80vh] md:h-[110vh] overflow-hidden bg-black border-b border-[#34D562]/20">
                <div className="absolute inset-0">
                    <img
                        src={pd.heroImage || Life_Science}
                        alt="PM-UShA Hero"
                        className="w-full h-full object-cover object-bottom opacity-80 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/60" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-6xl"
                    >
                        <h3 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6 md:mb-24 leading-[0.9] tracking-tighter italic drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                            BARKATULLAH UNIVERSITY BHOPAL <br /> PM-UShA PROGRAM
                        </h3>
                        {/* <span className="inline-block px-8 py-2 md:py-3 rounded-full bg-[#34D562] text-black text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-6 md:mb-10 shadow-[0_0_30px_#34D562]">
                            PM-UShA SCHEME EVENT
                        </span> */}

                        <p className="text-lg md:text-2xl lg:text-3xl text-[#34D562] font-mono tracking-[0.2em] uppercase mb-12 max-w-5xl mx-auto drop-shadow-[0_0_20px_#34D562] font-black italic px-4">
                            {pd.theme}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. INAUGURATION SECTION */}
            <section className="py-24 bg-[#030303] relative border-t border-[#34D562]/10 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-[#34D562] mb-6">
                                <FlaskConical size={24} />
                                <span className="text-sm font-bold tracking-[0.4em] uppercase font-mono">Mission Start</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
                                Inauguration of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-white">Training Programme</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                                <p>
                                    The training programme on <span className="text-white font-medium italic underline decoration-[#34D562]/30">“{pd.theme}”</span> was formally inaugurated at Barkatullah University under the PM-UShA scheme.
                                </p>
                                <div className="p-8 rounded-2xl bg-white/5 border-l-4 border-[#34D562] backdrop-blur-sm">
                                    <p>
                                        The ceremony was graced by distinguished guests and chief guests as noted across the event's proceedings, highlighting the institution's commitment to academic excellence and technological integration.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4 relative">
                            <div className="absolute inset-0 bg-[#34D562]/5 blur-3xl rounded-full" />
                            {(pd.galleryGroups.find(g => g.title.toLowerCase().includes('inaug'))?.images || []).slice(0, 4).map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8, rotate: idx % 2 === 0 ? -5 : 5 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`rounded-2xl overflow-hidden border border-[#34D562]/30 shadow-[0_0_30px_rgba(52,213,98,0.1)] relative z-10 ${idx % 2 !== 0 ? 'mt-12' : ''}`}
                                >
                                    <img src={img} alt={`Inauguration ${idx + 1}`} className="w-full h-full object-cover object-top" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. RELEVANCE TO PM-UShA */}
            <section className="py-24 bg-black relative border-y border-[#34D562]/10 overflow-hidden">
                <div className="absolute inset-0 bg-neon-grid opacity-20" />
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">Relevance to the <span className="text-[#34D562]">PM-UShA Scheme</span></h2>
                        <div className="w-32 h-1 bg-[#34D562] mx-auto rounded-full mb-8 shadow-[0_0_10px_#34D562]" />
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            {pd.relevance}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {pd.pmUShAAlignment.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-[#34D562]/20 hover:border-[#34D562] transition-all group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-w-[300px]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#34D562]/10 flex items-center justify-center mb-6 group-hover:bg-[#34D562] transition-all">
                                    <CheckCircle2 size={24} className="text-[#34D562] group-hover:text-black transition-colors" />
                                </div>
                                <p className="text-lg leading-relaxed text-gray-300 font-display">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. OBJECTIVES */}
            {/* <section className="py-24 bg-[#030303]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="md:w-1/3"
                        >
                            <h3 className="text-[#34D562] font-mono mb-4 text-xs tracking-widest uppercase">Target Goals</h3>
                            <h2 className="text-5xl font-black mb-8 text-white leading-[1.1]">Workshop <br />Objectives</h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed border-l-2 border-[#34D562] pl-6">
                                Bridging the gap between traditional wisdom and high-end futuristic technologies.
                            </p>
                        </motion.div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                            {pd.objectives.map((obj, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-6 p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#34D562]/30 transition-all"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#34D562]/10 text-[#34D562] flex items-center justify-center font-bold font-mono">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-300 font-medium leading-relaxed">{obj}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            {/* 6A. GUEST FELICITATION */}
            <section className="py-24 bg-black/40 relative">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-[#34D562] font-mono mb-4 tracking-[0.3em] text-sm uppercase">Honorary Ceremony</h3>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tighter">
                            Guest <span className="text-[#34D562]">Felicitation</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {(pd.galleryGroups.find(g => g.title.toLowerCase().includes('guest'))?.images || []).map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-video rounded-3xl overflow-hidden border border-[#34D562]/30 shadow-[0_0_30px_rgba(52,213,98,0.1)] group"
                            >
                                <img src={img} alt={`Guest ${idx}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-12 rounded-[3rem] bg-[#0A0A0A] border border-[#34D562]/20 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#34D562]/10 blur-3xl group-hover:bg-[#34D562]/20 transition-all" />
                        <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed text-center tracking-wide font-display">
                            "A felicitation ceremony to honor the distinguished guests. In line with environmental ethics, no single-use plastic was used. Guests were felicitated with Jute Bags, Mementos, Saplings, and Booklets, representing our commitment to sustainability."
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* 4. OBJECTIVES */}
            <section className="py-24 bg-[#030303]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="md:w-1/3"
                        >
                            <h3 className="text-[#34D562] font-mono mb-4 text-xs tracking-widest uppercase">Target Goals</h3>
                            <h2 className="text-5xl font-black mb-8 text-white leading-[1.1]">Workshop <br />Objectives</h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed border-l-2 border-[#34D562] pl-6">
                                Bridging the gap between traditional wisdom and high-end futuristic technologies.
                            </p>
                        </motion.div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                            {pd.objectives.map((obj, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-6 p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#34D562]/30 transition-all"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#34D562]/10 text-[#34D562] flex items-center justify-center font-bold font-mono">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-300 font-medium leading-relaxed">{obj}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* 6B. RESOURCE PERSONS FELICITATION */}
            <section className="py-24 bg-[#030303] relative border-t border-[#34D562]/10">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-[#34D562] font-mono mb-4 tracking-[0.3em] text-sm uppercase">Academic Excellence</h3>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tighter">
                            Resource <span className="text-[#34D562]">Persons Felicitation</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {(pd.galleryGroups.find(g => g.title.toLowerCase().includes('resource'))?.images || []).map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-video rounded-3xl overflow-hidden border border-[#34D562]/30 shadow-[0_0_30px_rgba(52,213,98,0.1)] group"
                            >
                                <img src={img} alt={`Resource ${idx}`} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-12 rounded-[3rem] bg-[#0A0A0A] border border-[#34D562]/20 relative overflow-hidden group"
                    >
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#34D562]/10 blur-3xl group-hover:bg-[#34D562]/20 transition-all" />
                        <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed text-center tracking-wide font-display">
                            "Trainers were felicitated with thoughtfully curated mementos including Booklets, Jute Bags, and Commemorative Awards as a token of appreciation for their valuable contributions to Indian Knowledge Systems and Training."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 7. HANDS-ON TRAINING */}
            <section className="py-24 bg-[#030303] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#34D562]/5 blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-20"
                    >
                        <h3 className="text-[#34D562] font-mono mb-4 text-xs tracking-[0.5em] uppercase">Practical Modules</h3>
                        <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter pr-4">
                            Hands-on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-white pr-2">Exposure</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pd.handson.map((section, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/5 hover:border-[#34D562]/40 transition-all flex flex-col items-center text-center shadow-2xl relative group overflow-hidden"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#34D562] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-20 h-20 rounded-2xl bg-[#34D562]/10 text-[#34D562] flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                    {idx === 0 ? <Presentation size={40} /> : idx === 1 ? <Target size={40} /> : <Terminal size={40} />}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-8 tracking-tight font-display">{section.title}</h3>
                                <ul className="space-y-4 text-left w-full">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex gap-4 text-gray-400 group/item">
                                            <Zap size={16} className="text-[#34D562] mt-1 flex-shrink-0" />
                                            <span className="text-sm font-light leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7.5 MEDIA COVERAGE & PRESS RELEASE */}
            {pd.pressRelease && (
                <section className="py-24 bg-[#030303] relative border-t border-[#34D562]/10 overflow-hidden">
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-[#34D562] font-mono mb-4 text-xs tracking-[0.5em] uppercase">Impact & Recognition</h3>
                                <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-8">
                                    Media <span className="text-[#34D562]">Coverage</span>
                                </h2>
                                <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 border-l-4 border-[#34D562] pl-8">
                                    {pd.pressRelease.text}
                                </p>
                                <div className="inline-flex items-center gap-4 px-6 py-2 bg-[#34D562]/10 border border-[#34D562]/20 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-[#34D562]" />
                                    <span className="text-[#34D562] font-black text-[10px] tracking-[0.3em] uppercase italic">Local Press Reporting</span>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className={`${(pd.pressRelease.images?.length || 0) > 1 ? 'grid grid-cols-1 sm:grid-cols-2 gap-6' : 'space-y-8'}`}
                            >
                                {(pd.pressRelease.images || (pd.pressRelease.image ? [pd.pressRelease.image] : [])).map((img, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="absolute inset-0 bg-[#34D562]/20 blur-[60px] rounded-full group-hover:bg-[#34D562]/30 transition-all duration-700" />
                                        <div className="relative rounded-3xl overflow-hidden border border-[#34D562]/20 shadow-2xl">
                                            <img
                                                src={img}
                                                alt={`Press Release ${idx}`}
                                                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* 8. OUTCOMES & LEARNING IMPACT - RESTORED SYMMETRICAL DESIGN */}
            <section className="py-24 bg-[#030303] relative overflow-hidden border-y border-[#34D562]/10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#34D562]/50 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,213,98,0.08),transparent_70%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#34D562]/5 blur-[180px] rounded-full" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-20 font-black">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#34D562]/10 border border-[#34D562]/30 rounded-full mb-6 backdrop-blur-md"
                        >
                            <span className="text-[#34D562] font-mono tracking-[0.4em] uppercase text-[10px] font-black">Performance Evidence</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase italic overflow-visible">
                            Outcomes & <br />
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-white to-[#34D562] pr-16 pb-2">Learning Impact</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-3 space-y-6">
                            {pd.outcomes.slice(0, 3).map((outcome, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="p-6 rounded-2xl bg-black/60 border border-white/5 hover:border-[#34D562]/40 transition-all backdrop-blur-xl group relative overflow-hidden text-left flex items-start gap-4"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#34D562]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-8 h-8 rounded-lg bg-[#34D562]/10 flex items-center justify-center text-[#34D562] group-hover:bg-[#34D562] group-hover:text-black transition-all shrink-0 relative z-10">
                                        <ChevronRight size={16} />
                                    </div>
                                    <p className="text-gray-400 font-bold uppercase tracking-normal text-[13px] leading-tight group-hover:text-white transition-colors relative z-10">{outcome}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="lg:col-span-6 relative flex justify-center py-12">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <motion.div
                                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                    transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
                                    className="absolute w-[650px] h-[650px] border border-[#34D562]/10 rounded-full border-dashed opacity-30"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[500px] h-[500px] border-2 border-[#34D562]/5 rounded-full border-dotted opacity-20"
                                />
                                <div className="absolute w-80 h-80 bg-[#34D562]/20 blur-[100px] rounded-full" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative w-full aspect-square max-w-[480px] rounded-full border-2 border-[#34D562]/40 flex flex-col items-center justify-center p-12 text-center group bg-black/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(52,213,98,0.1)]"
                            >
                                <div className="absolute inset-0 rounded-full border-[10px] border-[#34D562]/5" />
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        filter: ["drop-shadow(0 0 10px rgba(52,213,98,0.3))", "drop-shadow(0 0 30px rgba(52,213,98,0.8))", "drop-shadow(0 0 10px rgba(52,213,98,0.3))"]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="mb-8"
                                >
                                    <GraduationCap size={120} className="text-[#34D562] relative z-10" />
                                </motion.div>
                                <h3 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-6 leading-[0.85] overflow-visible">
                                    NEP-2020 <br />
                                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-white pr-8 pb-2">Aligned</span>
                                </h3>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#34D562] to-transparent rounded-full mb-8 shadow-[0_0_15px_#34D562]" />
                                <p className="text-sm text-gray-400 font-light leading-relaxed max-w-[340px] uppercase tracking-[0.2em] italic">
                                    Promoting multidisciplinary <span className="text-white font-black">excellence</span> and <span className="text-[#34D562] font-black">experiential</span> learning.
                                </p>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-10 py-4 bg-black border border-[#34D562]/40 rounded-3xl shadow-3xl backdrop-blur-2xl transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#34D562]" />
                                        <span className="text-[#34D562] font-black text-[12px] tracking-[0.5em] uppercase italic">Academic Standards</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-3 space-y-6">
                            {pd.outcomes.slice(3, 6).map((outcome, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (idx + 3) * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="p-6 rounded-2xl bg-black/60 border border-white/5 hover:border-[#34D562]/40 transition-all backdrop-blur-xl group relative overflow-hidden text-left flex items-start gap-4"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-bl from-[#34D562]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-8 h-8 rounded-lg bg-[#34D562]/10 flex items-center justify-center text-[#34D562] group-hover:bg-[#34D562] group-hover:text-black transition-all shrink-0 relative z-10">
                                        <ChevronRight size={16} />
                                    </div>
                                    <p className="text-gray-400 font-bold uppercase tracking-normal text-[13px] leading-tight group-hover:text-white transition-colors relative z-10">{outcome}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#34D562]/30 to-transparent" />
            </section>

            {/* 9. RESOURCE PERSONS (Trainers) */}
            <section className="py-24 bg-[#030303] relative border-t border-[#34D562]/10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex justify-center gap-2 mb-6"
                        >
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={24} className="text-[#FBCC14] fill-[#FBCC14] drop-shadow-[0_0_8px_rgba(251,204,20,0.6)]" />
                            ))}
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">
                            Industry <span className="text-[#34D562]">Experts</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                            Led by an elite team of industry experts and Alumni from the world's most prestigious Indian Institutes of Technology.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12">
                        {(subEvent?.trainers || event.trainers)?.map((trainer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -20 }}
                                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2.5rem)] max-w-[420px] bg-[#0A0A0A] rounded-[3rem] overflow-hidden border border-[#34D562]/10 hover:border-[#34D562]/40 shadow-2xl transition-all duration-500 group"
                            >
                                <div className="h-[28rem] overflow-hidden relative">
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />

                                    {trainer.isIITAlumni && (
                                        <div className="absolute top-8 right-8 scale-0 group-hover:scale-100 transition-transform duration-500 origin-right">
                                            <div className="bg-[#34D562] px-6 py-2 rounded-2xl text-[12px] font-black text-black shadow-2xl uppercase tracking-[0.2em] flex items-center gap-2">
                                                IIT ALUMNI
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-10 text-center relative">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-1.5 bg-[#0A0A0A] px-6 py-3 rounded-full border border-[#34D562]/20 shadow-2xl">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} size={16} className="text-[#FBCC14] fill-[#FBCC14] drop-shadow-[0_0_5px_rgba(251,204,20,0.4)]" />
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">{trainer.name}</h3>
                                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#34D562]/10 rounded-full border border-[#34D562]/20">
                                        <Zap size={14} className="text-[#34D562] fill-[#34D562]" />
                                        <p className="text-[#34D562] font-black text-xs tracking-widest uppercase">{trainer.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13. PHOTO GALLERY - TRAINING SESSIONS */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-4">
                            Photo Gallery <br />
                            <span className="text-[#34D562]">Training Sessions</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#34D562] mx-auto rounded-full" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(pd.galleryGroups.find(g => g.title.toLowerCase().includes('training'))?.images || []).map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                                className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[#34D562]/20 relative group"
                            >
                                <img src={img} alt={`Training Session ${idx}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-[#34D562]/5 group-hover:bg-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11 & 12. STRATEGIC ACADEMIC ALIGNMENT (Merged) */}
            <section className="py-24 bg-black relative border-y border-[#34D562]/10 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#34D562]/30 to-transparent" />
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="bg-[#030303] rounded-[4rem] border border-[#34D562]/20 p-8 md:p-16 relative overflow-hidden group shadow-3xl">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#34D562]/5 rounded-full blur-[100px]" />

                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left Side: Theme & Relevance */}
                            <div>
                                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#34D562]/10 border border-[#34D562]/30 rounded-full mb-8">
                                    <span className="text-[#34D562] font-mono tracking-[0.4em] uppercase text-[10px] font-black">Mission Relevance</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 italic tracking-tighter uppercase leading-tight">
                                    Theme & <br /><span className="text-[#34D562]">Mission Alignment</span>
                                </h2>
                                <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                                    <p className="border-l-4 border-[#34D562] font-display pl-6">
                                        {pd.relevance}
                                    </p>
                                </div>
                                {/* <div className="mt-12 flex gap-4">
                                     <div className="px-6 py-3 rounded-2xl bg-[#34D562]/10 border border-[#34D562]/30 text-[#34D562] text-[10px] font-black uppercase tracking-widest">NEP-2020 Aligned</div>
                                     <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest">A</div>
                                </div> */}
                            </div>

                            {/* Right Side: Curriculum Highlights */}
                            <div className="bg-black/40 rounded-[2.5rem] p-8 border border-white/5 backdrop-blur-md relative overflow-hidden mt-10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#34D562]/5 blur-2xl" />
                                <h3 className="text-white font-bold mb-8 flex items-center gap-3 relative z-10">
                                    <div className="w-2 h-2 rounded-full bg-[#34D562]" />
                                    <span className="uppercase tracking-[0.3em] text-xs italic font-black">Curriculum Highlights</span>
                                </h3>
                                <div className="grid gap-4 relative z-10">
                                    {pd.alignment.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 10, backgroundColor: "rgba(52, 213, 98, 0.05)" }}
                                            className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#34D562]/30 transition-all group"
                                        >
                                            <div className="w-6 h-6 rounded bg-[#34D562]/10 flex items-center justify-center text-[#34D562] group-hover:bg-[#34D562] group-hover:text-black transition-all shrink-0">
                                                <ChevronRight size={14} />
                                            </div>
                                            <span className="font-medium text-gray-300 text-sm leading-tight tracking-tight">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. PHOTO GALLERY - VALEDICTORY */}
            <section className="py-24 bg-black border-t border-[#34D562]/10 pb-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-4">
                            Photo Gallery <br />
                            <span className="text-[#34D562]">Valedictory Ceremony</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#34D562] mx-auto rounded-full shadow-[0_0_10px_#34D562]" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {VALEDICTORY_IMAGES.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group border border-[#34D562]/20 shadow-[0_0_30px_rgba(52,213,98,0.05)]"
                            >
                                <img src={img} alt={`Valedictory ${idx}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-[#34D562]/10 group-hover:bg-transparent transition-all" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 14. TRAINING MODULE TABLE */}
            <section className="py-24 bg-black relative">
                <div className="absolute inset-0 bg-neon-grid opacity-10" />
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-4">
                            Event <span className="text-[#34D562]">Architecture</span>
                        </h2>
                        <p className="text-[#34D562] font-mono tracking-[0.5em] uppercase text-sm font-bold">Comprehensive Timeline</p>
                    </div>

                    <div className="overflow-x-auto rounded-[3.5rem] border border-[#34D562]/20 shadow-[0_0_50px_rgba(52,213,98,0.05)] bg-[#0A0A0A]/50 backdrop-blur-xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black/80 text-[#34D562] border-b border-[#34D562]/20">
                                    <th className="p-10 font-black uppercase tracking-widest text-sm italic">Module</th>
                                    <th className="p-10 font-black uppercase tracking-widest text-sm italic border-x border-[#34D562]/10">Day/Date</th>
                                    <th className="p-10 font-black uppercase tracking-widest text-sm italic">Topics & Core Content</th>
                                    <th className="p-10 font-black uppercase tracking-widest text-sm italic border-l border-[#34D562]/10">Learning Objectives</th>
                                    {pd.trainingModules?.some(m => m.speaker) && (
                                        <th className="p-10 font-black uppercase tracking-widest text-sm italic border-l border-[#34D562]/10">Speaker</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody className="text-gray-400">
                                {(pd.trainingModules || []).map((row, i) => (
                                    <tr key={i} className={`border-b border-[#34D562]/5 transition-all hover:bg-[#34D562]/5 group`}>
                                        <td className="p-10 font-black text-[#34D562] uppercase text-xs tracking-[0.2em] whitespace-nowrap italic group-hover:scale-105 transition-transform origin-left">
                                            {typeof row.m === 'number' ? `Module ${row.m}` : row.m}
                                        </td>
                                        <td className="p-10 text-sm font-mono whitespace-nowrap border-x border-[#34D562]/5 text-white">{row.d}</td>
                                        <td className="p-10 font-medium text-lg leading-snug group-hover:text-white transition-colors">
                                            {row.t}
                                        </td>
                                        <td className="p-10 text-sm italic font-light leading-relaxed border-l border-[#34D562]/5 group-hover:text-gray-300 transition-colors">
                                            {row.o}
                                        </td>
                                        {pd.trainingModules?.some(m => m.speaker) && (
                                            <td className="p-10 text-sm font-bold border-l border-[#34D562]/5 text-[#34D562]">
                                                {row.speaker || '-'}
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 15. PHOTO GALLERY - Refreshments &Meals */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-4">
                            Photo Gallery <br />
                            <span className="text-[#34D562]">Refreshments & Meals</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#34D562] mx-auto rounded-full shadow-[0_0_10px_#34D562]" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(pd.galleryGroups.find(g => g.title.toLowerCase().includes('refreshment'))?.images || (pd.galleryGroups.find(g => g.title.toLowerCase().includes('meals'))?.images) || []).map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                                className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[#34D562]/20 relative group"
                            >
                                <img src={img} alt={`Gallery Inauguration ${idx}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-[#34D562]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Back Button Overlay */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: 5 }}
                onClick={(e) => {
                    e.stopPropagation();
                    if (onBack) onBack();
                }}
                className="fixed top-6 left-6 z-[9999] px-3 py-1 bg-black/20 backdrop-blur-md border border-[#34D562]/30 rounded-full text-[9px] font-black text-[#34D562] transition-all duration-300 uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2 group cursor-pointer"
            >
                <div className="w-1 h-1 rounded-full bg-[#34D562] transition-colors" />
                <ChevronLeft size={14} />
                <span>Return</span>
            </motion.button>
        </div>
    );
};

export default PMUshaEventDetail;
