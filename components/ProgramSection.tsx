import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight, MapPin } from 'lucide-react';

interface ProgramSectionProps {
    title: string;
    image: string;
    badge?: string;
    duration: string;
    eligibility: string;
    outcome: string;
    checklist: string[];
    index: number;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({
    title,
    image,
    badge,
    duration,
    eligibility,
    outcome,
    checklist,
    index
}) => {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    const opacity = index === 0 ? 1 : scrollOpacity;

    return (
        <section ref={ref} className="relative py-12 md:py-20 w-full overflow-hidden">
            {/* Background Elements */}
            <div className={`absolute top-1/2 ${isEven ? 'left-0' : 'right-0'} w-[500px] h-[500px] bg-[#34D562]/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none`} />

            <div className="container mx-auto px-6">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

                    {/* Image Side */}
                    <motion.div
                        style={{ y, opacity }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(52,213,98,0.3)] group-hover:shadow-[0_0_50px_rgba(52,213,98,0.6)] transition-all duration-500 aspect-[4/3]">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                            />

                            {/* Floating Badge */}
                            {badge && (
                                <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md border border-[#34D562]/30 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                    <div className="w-2 h-2 rounded-full bg-[#34D562] animate-pulse" />
                                    <span className="text-sm font-bold tracking-wide">{badge}</span>
                                </div>
                            )}

                            {/* Location/Context Tag (Decorative) */}
                            <div className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-2xl shadow-lg">
                                <MapPin className="w-6 h-6 text-[#34D562]" />
                            </div>
                        </div>

                        {/* Decorative Frame */}
                        <div className={`absolute -inset-4 border border-[#34D562]/20 rounded-[2rem] z-0 ${isEven ? '-rotate-2' : 'rotate-2'} group-hover:rotate-0 transition-transform duration-500`} />
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            animate={index === 0 ? { opacity: 1, x: 0 } : undefined}
                            whileInView={index !== 0 ? { opacity: 1, x: 0 } : undefined}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
                                {title}
                            </h2>

                            {/* Key Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-[#34D562] uppercase tracking-wider font-bold mb-1">Duration</p>
                                    <p className="text-sm text-gray-200 font-medium">{duration}</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-[#34D562] uppercase tracking-wider font-bold mb-1">Eligibility</p>
                                    <p className="text-sm text-gray-200 font-medium truncate" title={eligibility}>{eligibility}</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-[#34D562] uppercase tracking-wider font-bold mb-1">Outcome</p>
                                    <p className="text-sm text-gray-200 font-medium">{outcome}</p>
                                </div>
                            </div>

                            {/* Checklist */}
                            <div className="space-y-4 mb-10">
                                {checklist.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1 p-1 rounded-full bg-[#34D562]/20 text-[#34D562]">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA */}
                            <button className="group relative px-8 py-4 bg-[#34D562] text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(52,213,98,0.6)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#28a74b] to-[#34D562] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Know More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProgramSection;
