import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface ProgramCardProps {
    title: string;
    image: string;
    badge?: string;
    duration: string;
    eligibility: string;
    outcome: string;
    checklist: string[];
    color?: string; // Optional override for specific card accent color
}

const ProgramCard: React.FC<ProgramCardProps> = ({
    title,
    image,
    badge,
    duration,
    eligibility,
    outcome,
    checklist,
    color = '#34D562' // Default to Koii Green
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative group rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-[#34D562]/50 transition-all duration-500 shadow-2xl"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"
                style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
            />

            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {badge && (
                    <div className="absolute top-4 right-4 z-20 bg-[#FFC107] text-black font-bold px-4 py-1 rounded-full text-sm shadow-[0_0_15px_rgba(255,193,7,0.5)]">
                        {badge}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="relative z-20 p-8 -mt-12">
                <div className="bg-[#111] backdrop-blur-xl bg-opacity-90 border border-white/5 rounded-xl p-6 shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#34D562] transition-colors">
                        {title}
                    </h3>

                    {/* Key Details */}
                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-white/5 text-[#34D562]">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Duration</p>
                                <p className="text-sm text-gray-200">{duration}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-white/5 text-[#34D562]">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Eligibility</p>
                                <p className="text-sm text-gray-200">{eligibility}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-white/5 text-[#34D562]">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Outcome</p>
                                <p className="text-sm text-gray-200">{outcome}</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

                    {/* Checklist */}
                    <ul className="space-y-3 mb-8">
                        {checklist.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                                <Check className="w-5 h-5 text-[#34D562] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#34D562] to-[#28a74b] text-black font-bold flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(52,213,98,0.4)] transition-all duration-300">
                        <span>Know More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProgramCard;
