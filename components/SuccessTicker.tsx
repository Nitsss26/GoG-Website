import React from 'react';
import { motion } from 'framer-motion';
import { internsSuccess, placementsSuccess } from '../data/admissionsData';

const MarqueeRow = ({ items, direction = 'left', speed = 25, type }: { items: any[], direction?: 'left' | 'right', speed?: number, type: 'Intern' | 'Placement' }) => {
    return (
        <div className="relative flex overflow-hidden py-6">
            <motion.div
                initial={{ x: direction === 'left' ? 0 : "-50%" }}
                animate={{ x: direction === 'left' ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex flex-nowrap gap-8"
            >
                {[...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-5 bg-[#111]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 pr-8 min-w-[340px] hover:border-[#34D562] hover:bg-[#34D562]/10 hover:scale-105 transition-all duration-300 shadow-xl group shrink-0 relative overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#34D562]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#34D562]/10 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#34D562]/50 group-hover:border-[#34D562] transition-colors shadow-lg">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#34D562] rounded-full border-2 border-[#111]" />
                        </div>

                        <div className="flex flex-col z-10">
                            <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${type === 'Intern' ? 'text-blue-400' : 'text-purple-400'}`}>
                                {type === 'Intern' ? '★ Internship' : '✦ Placement'}
                            </span>
                            <span className="text-white font-bold text-lg leading-tight group-hover:text-[#34D562] transition-colors mb-1">{item.name}</span>
                            <span className="text-sm text-gray-400 font-medium bg-white/5 px-2 py-0.5 rounded-md inline-block w-max border border-white/5 group-hover:border-[#34D562]/30 transition-colors">
                                {item.role}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const SuccessTicker = () => {
    return (
        <section className="py-10 bg-[#050505] border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Internships &<span className="text-[#34D562]"> Placements</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Real students, real careers. See who made it big with Geeks of Gurukul.
                </p>
            </div>

            <div className="flex flex-col gap-10">
                {/* Interns Row */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
                    {/* Label Overlay */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-blue-500/10 backdrop-blur-md px-4 py-1 rounded-full border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest hidden md:block">
                        Latest Internships
                    </div>
                    <MarqueeRow items={internsSuccess} type="Intern" direction="left" speed={45} />
                </div>

                {/* Placements Row */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
                    {/* Label Overlay */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-purple-500/10 backdrop-blur-md px-4 py-1 rounded-full border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest hidden md:block">
                        Top Placements
                    </div>
                    <MarqueeRow items={placementsSuccess} type="Placement" direction="right" speed={50} />
                </div>
            </div>
        </section>
    );
};
