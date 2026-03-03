import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Linkedin } from 'lucide-react';

interface LeadershipCardProps {
    image: string;
    name: string;
    role: string;
    quote: string;
    highlight: string;
    badge: string;
    linkedin: string;
    index: number;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ image, name, role, quote, highlight, badge, linkedin, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col h-full bg-[#0F1310]/80 backdrop-blur-xl border border-[#34D562]/30 rounded-3xl overflow-hidden hover:border-[#34D562]/60 transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(52,213,98,0.2)]"
        >
            {/* Image Section - Compact Aspect Ratio */}
            <div className="relative w-full aspect-[4/4.5] overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20 bg-[#34D562] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(52,213,98,0.5)]">
                    {badge}
                </div>

                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />

                {/* Bottom Info Overlay (Name/Role on Image) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20 bg-gradient-to-t from-black to-transparent pt-12">
                    <div className="flex items-end justify-between gap-3">
                        <div>
                            <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-[#34D562] transition-colors">{name}</h3>
                            <p className="text-xs text-gray-300 font-mono tracking-wide bg-black/50 backdrop-blur-md inline-block px-2 py-0.5 rounded-lg border border-white/10">{role}</p>
                        </div>
                        <a
                            href={linkedin}
                            className="p-2 bg-[#34D562] hover:bg-[#28a74b] rounded-lg text-black transition-colors duration-300 shadow-lg"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Content Section - Compact Padding */}
            <div className="p-5 flex flex-col flex-grow justify-between space-y-4 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute -right-8 -top-8 opacity-5 pointer-events-none">
                    <Quote className="text-[#34D562] w-32 h-32 rotate-180" />
                </div>

                {/* Quote Text */}
                <div className="relative z-10">
                    <Quote className="text-[#34D562]/40 w-6 h-6 mb-2" />
                    <p className="text-gray-300 italic leading-normal text-sm">
                        {quote}
                    </p>
                </div>

                {/* Highlight */}
                <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-start gap-2.5 bg-[#34D562]/5 border border-[#34D562]/20 rounded-xl p-3 group-hover:bg-[#34D562]/10 transition-colors">
                        <Sparkles className="text-[#34D562] mt-0.5 flex-shrink-0" size={16} />
                        <p className="text-[#34D562] font-medium leading-tight text-xs md:text-sm">
                            {highlight}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LeadershipCard;
