import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Sparkles, ChevronRight, BookOpen, Eye, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { eventsData as eventsData1, EventData } from '../data/eventsData';
import { eventsData as eventsData2 } from '../data/eventsData2';

const eventsData = [...eventsData1, ...eventsData2];
import GreenEmbers from '../components/ui/GreenEmbers';
import GreenEmbers2 from '../components/ui/GreenEmbers2';
import PremiumEventDetail from '../components/events/PremiumEventDetail';
import PMUshaEventDetail from '../components/events/PMUshaEventDetail';
import { Layout, Zap } from 'lucide-react';

/* ───────────────────────────────── helpers ───────────────────────────────── */

const SectionDivider = () => (
    <div className="flex items-center gap-4 my-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#34D562]/30 to-transparent" />
        <Sparkles className="w-5 h-5 text-[#34D562]/50" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#34D562]/30 to-transparent" />
    </div>
);

const GallerySlider: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    if (!images.length) return null;

    return (
        <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-2xl overflow-hidden border border-white/10 group bg-[#050505]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                >
                    <img
                        src={images[currentIndex]}
                        alt="Gallery"
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60" />
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-10 bg-[#34D562] shadow-[0_0_10px_rgba(52,213,98,0.5)]' : 'w-2 bg-white/20'}`}
                        />
                    ))}
                </div>
            )}

            <div className="absolute top-4 left-6 z-10">
                <div className="flex items-center gap-2.5 px-3 py-1.5 bg-[#34D562] border border-[#34D562] shadow-[0_0_15px_rgba(52,213,98,0.4)]">
                    <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                    <span className="text-black text-[9px] font-black uppercase tracking-tighter italic leading-none">Event Highlights</span>
                </div>
            </div>
        </div>
    );
};

const GridBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <GreenEmbers density={0.5} />
        <GreenEmbers2 density={1.5} className="absolute inset-0 z-[1]" />
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#34D562]/[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] bg-[#34D562]/[0.05] blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56215_1px,transparent_1px),linear-gradient(to_bottom,#34D56215_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]" />
    </div>
);

const EventDetail: React.FC = () => {
    const { id } = useParams();
    const [event, setEvent] = useState<EventData | null>(null);
    const [selectedSubEventId, setSelectedSubEventId] = useState<string | null>(null);
    const [isPremiumDesign, setIsPremiumDesign] = useState(false);

    useEffect(() => {
        if (id) {
            const foundEvent = eventsData.find(e => e.id === id);
            if (foundEvent) {
                setEvent(foundEvent);
                // Check if it's a BU event to determine default design
                const isBU = foundEvent.title.toLowerCase().includes('barkatullah') ||
                    foundEvent.id.toLowerCase().includes('bu-');
                const isPmUsha = foundEvent.id === 'pm-usha-bu-2026';

                // BU events are premium by default, EXCEPT for the main PM-UShA landing which defaults to classic as requested
                setIsPremiumDesign(isBU && !isPmUsha);
            }
        }
    }, [id]);

    if (!event) return (
        <div className="min-h-screen bg-[#030303] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[#34D562] border-t-transparent rounded-full animate-spin" />
        </div>
    );

    const isPmUsha = event.id === 'pm-usha-bu-2026';
    const allGalleryImages = Array.from(new Set(
        event.subEvents.flatMap(sub => sub.images)
    )).filter(Boolean);

    return (
        <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#34D562] selection:text-black overflow-x-hidden relative">
            <SEO
                title={`${event.title} | Geeks of Gurukul`}
                description={event.shortDescription}
                canonical={`/events/${event.id}`}
            />

            {/* Design Toggle Floating Button - Only for BU events */}
            {/* {(event.title.toLowerCase().includes('barkatullah') || event.id.toLowerCase().includes('bu-')) && (
                <div className="fixed bottom-8 right-8 z-[100]">
                    <button
                        onClick={() => setIsPremiumDesign(!isPremiumDesign)}
                        className="flex items-center gap-3 px-6 py-3 bg-[#34D562] text-black font-black uppercase tracking-widest text-xs rounded-full shadow-[0_0_30px_rgba(52,213,98,0.5)] hover:scale-105 transition-all duration-300"
                    >
                        {isPremiumDesign ? (
                            <>
                                <Layout size={18} />
                                Switch to Classic
                            </>
                        ) : (
                            <>
                                <Zap size={18} fill="black" />
                                Premium View
                            </>
                        )}
                    </button>
                </div>
            )} */}



            {isPremiumDesign ? (
                event.id === 'pm-usha-bu-2026' ? (
                    <PMUshaEventDetail
                        event={event}
                        selectedSubEventId={selectedSubEventId}
                        onBack={() => {
                            setIsPremiumDesign(false);
                            setSelectedSubEventId(null);
                        }}
                    />
                ) : (
                    <PremiumEventDetail event={event} />
                )
            ) : (
                <div className="relative">
                    <GridBackground />

                    <div className="relative z-10 container mx-auto px-4 max-w-6xl pt-32 pb-24">
                        {/* Back Link */}
                        <Link to="/events" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#34D562] transition-colors mb-8 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-bold uppercase tracking-wider">Back to Events</span>
                        </Link>

                        {/* Header */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-[#34D562]/10 text-[#34D562] text-xs font-semibold rounded-full border border-[#34D562]/20 tracking-wider">
                                    {event.isActive ? 'PM-UShA Programme' : event.tag}
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-6">
                                {event.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-[#34D562]" />
                                    {event.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-[#34D562]" />
                                    {event.venue}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-12 mb-16">
                            {/* Gallery - Moved to top above Event Module */}
                            {!isPmUsha && <GallerySlider images={allGalleryImages} />}

                            {/* Overview - Moved to top */}
                            <div className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl p-6 md:p-8 border border-white/5">
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    {event.shortDescription}
                                </p>
                                <div className="flex flex-wrap gap-3 mt-5">
                                    <span className="px-3 py-1.5 bg-[#34D562]/5 border border-[#34D562]/15 rounded-full text-xs text-[#34D562] font-medium">
                                        {event.organizedBy}
                                    </span>
                                    {event.inAssociationWith && (
                                        <span className="px-3 py-1.5 bg-blue-500/5 border border-blue-500/15 rounded-full text-xs text-blue-400 font-medium">
                                            In association with {event.inAssociationWith}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sub Events section */}
                        <div className="">
                            {isPmUsha && !selectedSubEventId ? (
                                <div className="space-y-12">
                                    <h2 className="text-2xl md:text-2xl font-bold mb-12 text-center text-white">Event Gallery</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-12">
                                        {event.subEvents
                                            .filter(sub => ['module-1', 'module-2', 'module-3', 'module-4', 'module-5', 'module-6'].includes(sub.id))
                                            .map((sub, idx) => (
                                                <motion.div
                                                    key={sub.id}
                                                    onClick={() => {
                                                        setSelectedSubEventId(sub.id);
                                                        setIsPremiumDesign(true);
                                                    }}
                                                    className="group relative cursor-pointer aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0a0a0a]"
                                                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
                                                    whileHover={{ y: -15, scale: 1.02 }}
                                                >
                                                    {/* Image & Gradient Overlay */}
                                                    <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-[2s]">
                                                        <img
                                                            src={sub.images[0]}
                                                            alt={sub.title}
                                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
                                                    </div>

                                                    {/* Content Overlay */}
                                                    <div className="relative z-10 h-full p-8 flex flex-col justify-between items-start">
                                                        {/* Badge/Date */}
                                                        <div className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between w-full">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full bg-[#34D562] animate-pulse" />
                                                                <span className="text-white/80 text-[10px] font-black tracking-widest">PM-UShA</span>
                                                            </div>
                                                            {sub.date && (
                                                                <span className="text-[#34D562] text-[9px] font-bold tracking-tighter uppercase italic">{sub.date}</span>
                                                            )}
                                                        </div>

                                                        <div className="w-full mt-auto">
                                                            <h3 className="text-base md:text-lg font-black text-white leading-tight tracking-tight italic mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,1)] group-hover:text-[#34D562] transition-colors duration-500 line-clamp-3 min-h-[3.3em]">
                                                                {sub.title}
                                                            </h3>
                                                            <div className="relative group/btn w-full">
                                                                <div className="absolute -inset-1 bg-[#34D562]/40 rounded-xl blur-md opacity-20 group-hover:opacity-100 transition duration-500" />
                                                                <button className="relative w-full py-3.5 bg-gradient-to-r from-[#34D562] to-[#2eb554] text-black rounded-xl font-black text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_8px_25px_rgba(52,213,98,0.5)] group-hover:scale-[1.03]">
                                                                    View Program details
                                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Outer Border Polish */}
                                                    <div className="absolute inset-0 border-[3px] border-white/5 rounded-[2.5rem] group-hover:border-[#34D562]/30 transition-colors duration-500 pointer-events-none z-20" />

                                                    {/* Hover Glow */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#34D562]/20 via-transparent to-[#34D562]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                </motion.div>
                                            ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-16">
                                    {isPmUsha && (
                                        <button
                                            onClick={() => setSelectedSubEventId(null)}
                                            className="mb-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[#34D562] text-sm font-bold hover:bg-white/10 transition-all flex items-center gap-2 group"
                                        >
                                            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to All Programs
                                        </button>
                                    )}
                                    {(isPmUsha ? event.subEvents.filter(s => s.id === selectedSubEventId) : event.subEvents).map((subEvent, subIdx) => (
                                        <div key={subEvent.id}>
                                            {subIdx > 0 && <SectionDivider />}
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

                                            <div className="relative mb-8">
                                                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[#34D562] via-[#34D562]/40 to-transparent" />
                                                <p className="pl-6 text-gray-300 leading-relaxed text-base md:text-lg">
                                                    {subEvent.summary}
                                                </p>
                                            </div>

                                            <div className="mb-12">
                                                <div className="flex items-center gap-2 mb-6">
                                                    <Eye className="w-5 h-5 text-[#34D562]" />
                                                    <h4 className="text-base font-semibold text-white uppercase tracking-wider">Event Gallery</h4>
                                                </div>
                                                <div className={`grid gap-4 ${!isPmUsha && subEvent.images.length === 4
                                                    ? 'grid-cols-2'
                                                    : 'grid-cols-2 md:grid-cols-3'
                                                    }`}>
                                                    {subEvent.images.map((img, imgIdx) => (
                                                        <motion.div
                                                            key={imgIdx}
                                                            className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 hover:border-[#34D562]/30 transition-all duration-500"
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
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-6">
                                                    <BookOpen className="w-5 h-5 text-[#34D562]" />
                                                    <h4 className="text-base font-semibold text-white uppercase tracking-wider">Event Outcomes</h4>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {subEvent.sessions.map((session, sIdx) => (
                                                        <motion.div
                                                            key={sIdx}
                                                            className="group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#34D562]/20 rounded-xl p-5 transition-all duration-300"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: sIdx * 0.03 }}
                                                            viewport={{ once: true }}
                                                        >
                                                            <div className="flex items-start gap-4">
                                                                <span className="flex-shrink-0 w-7 h-7 rounded-md bg-[#34D562]/10 flex items-center justify-center text-[#34D562] text-xs font-bold mt-0.5">
                                                                    {sIdx + 1}
                                                                </span>
                                                                <div>
                                                                    <h5 className="text-white text-base font-semibold leading-snug mb-2 group-hover:text-[#34D562] transition-colors duration-200">
                                                                        {session.title}
                                                                    </h5>
                                                                    <p className="text-gray-500 text-sm leading-relaxed">
                                                                        {session.learningOutcome}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scanline {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(1000%); opacity: 0; }
                }
                .animate-scanline {
                    animation: scanline 8s linear infinite;
                }
            ` }} />
        </div>
    );
};

export default EventDetail;
