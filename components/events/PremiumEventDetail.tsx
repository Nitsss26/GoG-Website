import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Users, Share2, ArrowLeft, ChevronRight, Play, Award, Clock, ChevronLeft, Hexagon, Shield, Zap } from 'lucide-react';
import { EventData } from '../../data/eventsData';
import { Link } from 'react-router-dom';

interface PremiumEventDetailProps {
    event: EventData;
}

const PremiumEventDetail: React.FC<PremiumEventDetailProps> = ({ event }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeSub = event.subEvents[activeIdx];
    const [galIdx, setGalIdx] = useState(0);
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 150]);
    const yText = useTransform(scrollY, [0, 500], [0, -100]);

    const nextImg = () => setGalIdx((p) => (p + 1) % activeSub.images.length);
    const prevImg = () => setGalIdx((p) => (p - 1 + activeSub.images.length) % activeSub.images.length);

    return (
        <div className="min-h-screen bg-[#010101] text-white selection:bg-[#34D562] font-sans overflow-x-hidden">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div style={{ y: yHero }} className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#34D562] rounded-full blur-[160px] animate-pulse" />
                    </motion.div>
                    <motion.div style={{ y: yText }} className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                        <h2 className="text-[30vw] font-black uppercase whitespace-nowrap" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
                            {event.title.split(' ')[0]}
                        </h2>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010101]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1">
                            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-[#34D562]/10 border border-[#34D562]/20 mb-6 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[#34D562] animate-ping" />
                                <span className="text-[10px] font-black uppercase tracking-[3px] text-[#34D562]">{event.isActive ? 'Live' : 'Archived'}</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black font-display tracking-tighter mb-8 leading-[0.9]">{event.title.toUpperCase()}</h1>
                            <div className="flex gap-6 text-gray-500 text-xs font-bold tracking-widest uppercase mb-10">
                                <span className="flex items-center gap-2"><Calendar size={14} className="text-[#34D562]" /> {event.date}</span>
                                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#34D562]" /> {event.venue}</span>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-10 py-4 bg-[#34D562] text-black font-black uppercase tracking-widest text-xs rounded-full hover:shadow-[0_0_40px_rgba(52,213,98,0.4)] transition-all">Explore</button>
                                <button className="px-10 py-4 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all">Details</button>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="flex-1 hidden lg:block">
                            <div className="relative w-full aspect-[4/5] max-w-sm ml-auto bg-[#080808] border border-white/5 rounded-[4rem] p-12 overflow-hidden shadow-2xl">
                                <Hexagon className="absolute -top-10 -right-10 text-[#34D562]/5" size={240} strokeWidth={1} />
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <p className="text-[#34D562] text-[10px] font-black uppercase tracking-[4px] mb-4 italic">Verification Protocol</p>
                                        <h3 className="text-4xl font-black mb-6 italic leading-none">HIGH<br/>INTEGRITY</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">Cryptographic validation active for this node session. All data immutable.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-3xl border border-white/5"><Users size={20} className="text-[#34D562]"/><span className="text-xs font-bold uppercase tracking-widest">Network Validated</span></div>
                                        <div className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-3xl border border-white/5"><Award size={20} className="text-[#34D562]"/><span className="text-xs font-bold uppercase tracking-widest">Premium tier</span></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                    <span className="text-[10px] font-black uppercase tracking-[4px]">Scroll</span>
                    <div className="h-12 w-px bg-gradient-to-b from-[#34D562] to-transparent" />
                </div>
            </section>

            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter uppercase italic">Visual<span className="text-[#34D562]">Proof</span></h2>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[5px] mt-4">Field capture logs</p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={prevImg} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#34D562] hover:text-black transition-all"><ChevronLeft size={24}/></button>
                            <button onClick={nextImg} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#34D562] hover:text-black transition-all"><ChevronRight size={24}/></button>
                        </div>
                    </div>
                    <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
                        <AnimatePresence mode="wait"><motion.img key={activeSub.images[galIdx]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.8 }} src={activeSub.images[galIdx]} className="w-full h-full object-cover"/></AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end pointer-events-none">
                            <h3 className="text-3xl font-black font-display italic uppercase tracking-widest">{activeSub.title}</h3>
                            <div className="flex gap-2">{activeSub.images.map((_, i) => (<div key={i} className={`h-1.5 rounded-full transition-all ${i === galIdx ? 'w-12 bg-[#34D562]' : 'w-4 bg-white/20'}`} />))}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 border-b border-white/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-[400px_1fr] gap-20">
                        <div className="sticky top-12">
                            <h2 className="text-6xl font-black font-display tracking-tighter leading-none mb-6">MODULE<br/><span className="text-[#34D562]">STACK</span></h2>
                            <p className="text-gray-500 font-medium leading-relaxed max-w-xs">{event.shortDescription}</p>
                        </div>
                        <div className="space-y-4">
                            {event.subEvents.map((sub, i) => (
                                <div key={sub.id} className={`group cursor-pointer rounded-[3rem] border transition-all p-10 ${activeIdx === i ? 'bg-[#34D562]/5 border-[#34D562]/30' : 'bg-[#080808] border-white/5 hover:border-white/10'}`} onClick={() => setActiveIdx(i)}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-8">
                                            <span className={`text-5xl font-black font-display ${activeIdx === i ? 'text-[#34D562]' : 'text-gray-900 group-hover:text-gray-800'}`}>{(i+1).toString().padStart(2, '0')}</span>
                                            <h3 className={`text-2xl font-black uppercase italic ${activeIdx === i ? 'text-white' : 'text-gray-500'}`}>{sub.title}</h3>
                                        </div>
                                        <ChevronRight size={24} className={`transition-all ${activeIdx === i ? 'rotate-90 text-[#34D562]' : 'text-gray-700'}`}/>
                                    </div>
                                    <AnimatePresence>{activeIdx === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-8 pt-8 border-t border-white/5 px-4"><p className="text-gray-400 font-light text-lg mb-10 italic">"{sub.summary}"</p><div className="grid md:grid-cols-2 gap-4">{sub.sessions.map((s, si) => (<div key={si} className="p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-[#34D562]/30 transition-all"><h4 className="text-white font-black text-xs uppercase mb-2">{s.title}</h4><p className="text-gray-500 text-[11px] leading-relaxed italic">{s.learningOutcome}</p></div>))}</div></motion.div>)}</AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-40 text-center">
                <Link to="/events" className="group inline-flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#34D562] group-hover:bg-[#34D562]/10 transition-all mb-8"><ArrowLeft size={32}/></div>
                    <span className="text-3xl font-black font-display tracking-widest uppercase italic group-hover:text-[#34D562] transition-all">DIRECTORY</span>
                </Link>
                <div className="mt-20 pt-10 border-t border-white/5 opacity-30 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4"><Hexagon size={24} className="text-[#34D562]"/><span className="text-xl font-black tracking-[1em]">GURUKUL</span></div>
                    <p className="text-[10px] font-black uppercase tracking-[5px]">Protocol Deployment © 2026</p>
                </div>
            </footer>
        </div>
    );
};

export default PremiumEventDetail;
