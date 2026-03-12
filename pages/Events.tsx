import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { X, Calendar, MapPin, Users, ArrowRight, Sparkles, ChevronRight, BookOpen, Eye } from 'lucide-react';
import SEO from '../components/SEO';
import GreenEmbers from '../components/ui/GreenEmbers';
import GreenEmbers2 from '../components/ui/GreenEmbers2';
import ViewToggle from '../components/ViewToggle';
import { eventsData, EventData } from '../data/eventsData';

/* ───────────────────────────────── helpers ───────────────────────────────── */

const SectionDivider = () => (
    <div className="flex items-center gap-4 my-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#34D562]/30 to-transparent" />
        <Sparkles className="w-5 h-5 text-[#34D562]/50" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#34D562]/30 to-transparent" />
    </div>
);

/* ────────────────────────── Event Detail Modal ──────────────────────────── */

const EventModal: React.FC<{ event: EventData; onClose: () => void }> = ({ event, onClose }) => {
    const [selectedSubEventId, setSelectedSubEventId] = useState<string | null>(null);
    const isPmUsha = event.id === 'pm-usha-bu-2026';

    // Lock body scroll when modal open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ perspective: "2000px" }} // Added perspective for 3D modal motion
        >
            {/* Backdrop with enhanced blur-in */}
            <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
            />

            {/* Modal Container — "Hyper-Space Portal" Entry */}
            <motion.div
                className="relative z-10 w-[92vw] md:w-[85vw] max-w-6xl h-[88vh] md:h-[85vh] bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl shadow-[#34D562]/10"
                initial={{
                    opacity: 0,
                    y: "100vh",
                    scale: 0.4,
                    rotateX: 30,
                    filter: "blur(10px)"
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    filter: "blur(0px)"
                }}
                exit={{
                    opacity: 0,
                    y: "100vh",
                    scale: 0.7,
                    rotateX: -20,
                    filter: "blur(15px)",
                    transition: { duration: 0.5, ease: "easeInOut" }
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 120,
                    mass: 1.2
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Modal Header */}
                <div className="relative flex-shrink-0 px-6 md:px-10 pt-8 pb-6 border-b border-white/5">
                    {/* Ambient glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-[#34D562]/8 blur-[80px] pointer-events-none" />

                    <div className="flex items-start justify-between gap-4 relative">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 bg-[#34D562]/10 text-[#34D562] text-xs font-semibold rounded-full border border-[#34D562]/20 tracking-wider">
                                    {event.isActive ? 'PM-Usha Programme' : event.tag}
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                                {event.title}
                            </h2>
                            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-[#34D562]" />
                                    {event.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4 text-[#34D562]" />
                                    {event.venue}
                                </span>
                            </div>
                        </div>

                        {/* Close button */}
                        <div className="flex items-center gap-3">
                            {isPmUsha && selectedSubEventId && (
                                <button
                                    onClick={() => setSelectedSubEventId(null)}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#34D562] text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                                >
                                    <ChevronRight className="w-4 h-4 rotate-180" /> Back to Programs
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 hover:rotate-90"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="px-6 md:px-10 py-8 space-y-6">

                        {/* Overview */}
                        <div className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl p-6 md:p-8 border border-white/5">
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                {event.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-5">
                                <span className="px-3 py-1.5 bg-[#34D562]/5 border border-[#34D562]/15 rounded-full text-xs text-[#34D562] font-medium">
                                    {event.organizedBy}
                                </span>
                                <span className="px-3 py-1.5 bg-blue-500/5 border border-blue-500/15 rounded-full text-xs text-blue-400 font-medium">
                                    In association with {event.inAssociationWith}
                                </span>
                            </div>
                        </div>

                        {/* Sub Events */}
                        {isPmUsha && !selectedSubEventId ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 max-w-5xl mx-auto">
                                {event.subEvents.map((sub, idx) => (
                                    <motion.div
                                        key={sub.id}
                                        onClick={() => setSelectedSubEventId(sub.id)}
                                        className="group relative cursor-pointer aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a]"
                                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
                                        whileHover={{ y: -15, scale: 1.02 }}
                                    >
                                        {/* Dynamic Border Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#34D562]/20 via-transparent to-[#34D562]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Background Image Layer */}
                                        <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-[2s]">
                                            <img
                                                src={sub.images[0]}
                                                alt={sub.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                            />
                                            {/* Mirror-like Glass Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                                        </div>

                                        {/* Floating Content Layer */}
                                        <div className="relative z-10 h-full p-10 flex flex-col justify-between items-start">
                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.5 + idx * 0.2 }}
                                                className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between w-full"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-[#34D562] animate-pulse" />
                                                    <span className="text-white/80 text-[10px] font-black tracking-widest uppercase">PM-USHA</span>
                                                </div>
                                                {sub.date && (
                                                    <span className="text-[#34D562] text-[9px] font-bold tracking-tighter uppercase italic">{sub.date}</span>
                                                )}
                                            </motion.div>

                                            <div className="w-full mt-auto">
                                                {/* Title - Reduced size more for perfection */}
                                                <h3 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight uppercase italic mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,1)] group-hover:text-[#34D562] transition-colors duration-500">
                                                    {sub.title}
                                                </h3>

                                                {/* Hyper-Button CTA - Enhanced for "WOW" factor */}
                                                <div className="relative group/btn w-full">
                                                    <div className="absolute -inset-1 bg-[#34D562]/40 rounded-xl blur-md opacity-20 group-hover:opacity-100 transition duration-500" />
                                                    <button className="relative w-full py-3.5 bg-gradient-to-r from-[#34D562] to-[#2eb554] text-black rounded-xl font-black text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_8px_25px_rgba(52,213,98,0.5)] group-hover:scale-[1.03]">
                                                        Click here to view details
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Outer Glass Frame */}
                                        <div className="absolute inset-0 border-[3px] border-white/5 rounded-[2rem] group-hover:border-[#34D562]/30 transition-colors duration-500 pointer-events-none z-20" />

                                        {/* Scanline Effect on Hover */}
                                        <div className="absolute inset-0 w-full h-1 bg-white/10 -translate-y-full group-hover:animate-scanline pointer-events-none z-30" />
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            (isPmUsha ? event.subEvents.filter(s => s.id === selectedSubEventId) : event.subEvents).map((subEvent, subIdx) => (
                                <div key={subEvent.id}>
                                    {(subIdx > 0 || (isPmUsha && selectedSubEventId)) && <SectionDivider />}

                                    {/* Sub-event header */}
                                    <div className="mb-8">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#34D562]/10 border border-[#34D562]/20 flex items-center justify-center">
                                                <span className="text-[#34D562] font-bold text-sm">{subIdx + 1}</span>
                                            </div>
                                            <span className="text-[#34D562]/60 text-xs font-semibold uppercase tracking-[0.2em]">Event Module</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                                            {subEvent.title}
                                        </h3>
                                        {subEvent.date && (
                                            <div className="mt-2 flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-[#34D562]/60" />
                                                <span className="text-[#34D562] font-semibold text-sm italic">{subEvent.date}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Summary */}
                                    <div className="relative mb-8">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#34D562] via-[#34D562]/40 to-transparent" />
                                        <p className="pl-6 text-gray-300 leading-relaxed text-base md:text-lg">
                                            {subEvent.summary}
                                        </p>
                                    </div>

                                    {/* Image Gallery — above outcomes */}
                                    <div className="mb-10">
                                        <div className="flex items-center gap-2 mb-5">
                                            <Eye className="w-5 h-5 text-[#34D562]" />
                                            <h4 className="text-base font-semibold text-white uppercase tracking-wider">Event Gallery</h4>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                            {subEvent.images.map((img, imgIdx) => (
                                                <motion.div
                                                    key={imgIdx}
                                                    className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 hover:border-[#34D562]/30 transition-all duration-500 w-[calc(50%-6px)] md:w-[calc(33.333%-11px)]"
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: imgIdx * 0.05 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`${subEvent.title} - Image ${imgIdx + 1}`}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        loading="lazy"
                                                    />
                                                    {/* Hover overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                        <span className="text-white/80 text-xs font-medium">
                                                            {subEvent.title.split(' ').slice(0, 4).join(' ')}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sessions & Learning Outcomes — always even count */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-5">
                                            <BookOpen className="w-5 h-5 text-[#34D562]" />
                                            <h4 className="text-base font-semibold text-white uppercase tracking-wider">Event Outcomes</h4>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {subEvent.sessions.slice(0, subEvent.sessions.length % 2 === 0 ? subEvent.sessions.length : subEvent.sessions.length - 1).map((session, sIdx) => (
                                                <motion.div
                                                    key={sIdx}
                                                    className="group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#34D562]/20 rounded-xl p-4 transition-all duration-300"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: sIdx * 0.03 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#34D562]/10 flex items-center justify-center text-[#34D562] text-xs font-bold mt-0.5">
                                                            {sIdx + 1}
                                                        </span>
                                                        <div>
                                                            <h5 className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-[#34D562] transition-colors duration-200">
                                                                {session.title}
                                                            </h5>
                                                            <p className="text-gray-500 text-xs leading-relaxed">
                                                                {session.learningOutcome}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ──────────────────────────── Event Card ─────────────────────────────────── */

const EventCard: React.FC<{ event: EventData; onClick: () => void }> = ({ event, onClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // 3D Tilt Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics-based spring transitions
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Transform motion values into tilt and rotation values
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Dynamic aura frame position
    const auraX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15%", "15%"]);
    const auraY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15%", "15%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="group relative max-w-md w-full aspect-square cursor-pointer"
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1200px"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            onClick={onClick}
        >
            {/* 1. Cyber-Glow Aura (Outer Layer) */}
            <motion.div
                className="absolute -inset-6 bg-[#34D562]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ x: auraX, y: auraY }}
            />

            {/* 2. Main Frame Brackets (Corner Accents) */}
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-[3px] border-l-[3px] border-[#34D562] z-40 transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-1 group-hover:-translate-y-1 shadow-[0_0_15px_#34D562]" />
            {/* Top Right */}
            <div className="absolute top-0 right-0 w-10 h-10 border-t-[3px] border-r-[3px] border-[#34D562] z-40 transition-all duration-500 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-[0_0_15px_#34D562]" />
            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[3px] border-l-[3px] border-[#34D562] z-40 transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-1 group-hover:translate-y-1 shadow-[0_0_15px_#34D562]" />
            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[3px] border-r-[3px] border-[#34D562] z-40 transition-all duration-500 group-hover:scale-110 group-hover:translate-x-1 group-hover:translate-y-1 shadow-[0_0_15px_#34D562]" />

            {/* 3. The Solid Tech Body */}
            <div
                className="relative h-full w-full bg-[#080808] border border-white/10 group-hover:border-[#34D562]/40 rounded-sm overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10"
                style={{ transform: "translateZ(10px)" }}
            >
                {/* Image background layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={event.cardImage}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                </div>

                {/* Cyber HUD elements removed */}

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-between p-8 z-30" style={{ transform: "translateZ(40px)" }}>

                    {/* Top — Badge + Status + Title (all stacked from top) */}
                    <div>
                        {/* Tech Badges Row */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="px-3 py-1 bg-[#34D562] border border-[#34D562] shadow-[0_0_15px_rgba(52,213,98,0.4)]">
                                <span className="text-black text-[9px] font-black uppercase tracking-tighter italic">{event.tag}</span>
                            </div>
                            <div className="h-4 w-px bg-white/10" />
                            <div className="flex items-center gap-1.5 opacity-80">
                                <Calendar className="w-3.5 h-3.5 text-[#34D562]" />
                                <span className="text-white text-[10px] font-extrabold tracking-[0.2em]">{event.date.toUpperCase()}</span>
                            </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className={`w-1.5 h-1.5 rounded-full ${event.isActive ? 'bg-yellow-500 animate-pulse' : 'bg-[#34D562]'}`} />
                            <span className={`text-[10px] font-bold tracking-widest uppercase ${event.isActive ? 'text-[#34D562]' : 'text-white'}`}>
                                {event.isActive ? 'Program Active' : 'Completed'}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base md:text-lg font-black text-white leading-[1.1] tracking-tighter uppercase italic group-hover:text-[#34D562] transition-colors duration-400">
                            {event.title}
                        </h3>
                    </div>

                    {/* Bottom — Footer (pinned) */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div className="flex flex-col gap-1 max-w-[55%]">
                            <div className="flex items-start gap-1.5 text-white">
                                <MapPin className="w-3 h-3 text-[#34D562] shrink-0 mt-0.5" />
                                <span className="text-[9px] font-black italic leading-tight">{event.venue.split(',')[0].toUpperCase()}</span>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 text-white font-black group/btn overflow-hidden shrink-0"
                        >
                            <span className="text-[11px] tracking-tighter italic">LAUNCH.VIEW</span>
                            <div className="p-2 bg-[#34D562] text-black shadow-[0_0_15px_rgba(52,213,98,0.5)]">
                                <Eye className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Tech Noise (SVG pattern) */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>
        </motion.div>
    );
};

/* ────────────────────────── Main Events Page ──────────────────────────────── */


const GridBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <GreenEmbers density={0.5} />
        <GreenEmbers2 density={1.5} className="absolute inset-0 z-[1]" />

        {/* Halogen Glows */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#34D562]/[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] bg-[#34D562]/[0.05] blur-[100px] rounded-full" />

        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56215_1px,transparent_1px),linear-gradient(to_bottom,#34D56215_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]" />
    </div>
);

const Events: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
    const [is3D, setIs3D] = useState(true);
    const sceneRef = useRef<HTMLDivElement>(null);
    const [sceneRotation, setSceneRotation] = useState({ x: 0, y: 0 });

    const handleSceneMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!is3D || !sceneRef.current) return;
        const rect = sceneRef.current.getBoundingClientRect();
        const x = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
        const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
        setSceneRotation({ x, y });
    }, [is3D]);

    const handleSceneMouseLeave = useCallback(() => {
        setSceneRotation({ x: 0, y: 0 });
    }, []);

    // 3D depth layers — cards stay flat, only Z-depth creates layering
    // Scene-level mouse parallax reveals the depth = clean 3D illusion
    const getCard3DTransform = (idx: number) => {
        const row = Math.floor(idx / 3);
        const zDepth = row % 2 === 0 ? 80 : -60;  // alternate rows forward/back
        const scaleBase = row % 2 === 0 ? 1.03 : 0.96;
        return { z: zDepth, scale: scaleBase };
    };

    return (
        <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#34D562] selection:text-black overflow-x-hidden">
            <SEO
                title="Events | Geeks of Gurukul"
                description="Explore events organised by Geeks of Gurukul — workshops, seminars, hackathons, and training programmes at universities across India."
                canonical="/events"
            />

            <GridBackground />

            {/* ═══════ Hero Section ═══════ */}
            <section className="relative pt-36 md:pt-44 pb-8 md:pb-12 overflow-hidden">
                {/* Grid pattern overlay removed - handled by GridBackground */}

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        {/* <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full mb-8 -mt-10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Sparkles className="w-4 h-4 text-[#34D562]" />
                            <span className="text-gray-400 text-sm font-medium">Building the Future of Education</span>
                        </motion.div> */}

                        {/* Title */}
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6 whitespace-nowrap -mt-7"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Events by{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-emerald-300 to-[#34D562]">
                                Geeks of Gurukul
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-gray-500 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Workshops, seminars, and training programmes empowering the next generation of tech leaders across India's universities.
                        </motion.p>



                    </div>
                </div>

                {/* Bottom fade removed to maintain consistency with GridBackground */}
            </section>

            {/* ═══════ Events Grid ═══════ */}
            <section className="relative py-10 md:py-16">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">

                    {/* 3D Scene Container */}
                    <div
                        ref={sceneRef}
                        onMouseMove={handleSceneMouseMove}
                        onMouseLeave={handleSceneMouseLeave}
                        style={{
                            perspective: is3D ? '1200px' : 'none',
                            perspectiveOrigin: '50% 50%',
                        }}
                    >
                        <motion.div
                            animate={{
                                rotateX: is3D ? sceneRotation.x : 0,
                                rotateY: is3D ? sceneRotation.y : 0,
                            }}
                            transition={{ type: 'spring', stiffness: 50, damping: 30 }}
                            style={{ transformStyle: is3D ? 'preserve-3d' : 'flat' }}
                        >
                            {/* Cards flex container for perfect bottom-row centering */}
                            <div className={`flex flex-wrap justify-center transition-all duration-700 gap-8 ${is3D
                                ? 'md:gap-10 lg:gap-14'
                                : ''
                                }`}>
                                {eventsData.map((event, idx) => {
                                    const t = getCard3DTransform(idx);
                                    return (
                                        <motion.div
                                            key={event.id}
                                            animate={{
                                                z: is3D ? t.z : 0,
                                                scale: is3D ? t.scale : 1,
                                            }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 60,
                                                damping: 18,
                                                delay: idx * 0.06,
                                            }}
                                            style={{
                                                transformStyle: 'preserve-3d',
                                                boxShadow: is3D
                                                    ? `0 ${25 + Math.abs(t.z) * 0.6}px ${50 + Math.abs(t.z) * 1.2}px rgba(0,0,0,0.7), 0 0 ${40 + Math.abs(t.z) * 0.5}px rgba(52,213,98,${t.z > 0 ? '0.15' : '0.05'})`
                                                    : 'none',
                                                borderRadius: is3D ? '1.5rem' : undefined,
                                            }}
                                            className={`transition-all duration-700 flex justify-center w-full ${is3D
                                                ? 'md:w-[calc(50%-1.25rem)] lg:w-[calc(33.3333%-2.3333rem)] hover:!scale-110 hover:!z-[100]'
                                                : 'md:w-[calc(33.3333%-1.3333rem)]'
                                                }`}
                                        >
                                            <EventCard
                                                event={event}
                                                onClick={() => setSelectedEvent(event)}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Coming Soon placeholder */}
                    <motion.div
                        className="text-center mt-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.02] border border-white/[0.04] rounded-full">
                            <div className="w-2 h-2 rounded-full bg-[#34D562] animate-pulse" />
                            <span className="text-gray-600 text-sm">More events coming soon</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════ Event Modal ═══════ */}
            <AnimatePresence>
                {selectedEvent && (
                    <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                )}
            </AnimatePresence>

            {/* Custom scrollbar styles */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(52, 213, 98, 0.2);
                    border-radius: 999px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(52, 213, 98, 0.4);
                }
                @keyframes scanline {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(1000%); opacity: 0; }
                }
                .animate-scanline {
                    animation: scanline 8s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Events;
