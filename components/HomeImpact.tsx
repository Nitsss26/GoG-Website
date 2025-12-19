import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Zap, TrendingUp, Layers, Users, Globe } from 'lucide-react';

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

// Ray-Tracing Card Component
const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", delay = 0 }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#030014]/40 backdrop-blur-3xl transition-all hover:border-white/20 ${className}`}
        >
            {/* Ray Tracing Gradient Blob (Green/Violet Mix) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(52, 213, 98, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            {/* Running Neon Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#34D562] to-transparent opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-border-flow-h" />

            {/* Content */}
            <div className="relative h-full z-10">{children}</div>
        </motion.div>
    );
};

const HomeImpact: React.FC = () => {
    return (
        <section className="relative w-full py-32 bg-[#02000f] overflow-hidden">

            {/* 1. Midnight Void Background (Liquid Mesh with Green Accents) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#34D562]/10 rounded-full blur-[150px] animate-blob" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#34D562]/5 rounded-full blur-[150px] animate-blob animation-delay-2000" />
                {/* Abstract Data Waves (Subtle Grid) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(52,213,98,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,213,98,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-20 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6"
                    >
                        Global <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-[#7BFF9E] to-cyan-400 animate-gradient-x">Scale.</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        Orchestrating the next generation of decentralized talent through a high-velocity educational infrastructure.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Card 1: Active Learners (Large Number) */}
                    <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 p-10 flex flex-col justify-between bg-gradient-to-br from-[#1e1b4b]/30 to-transparent">
                        <div className="flex justify-between items-start">
                            <div className="p-3 rounded-full bg-[#34D562]/10 border border-[#34D562]/20 backdrop-blur-md">
                                <Users className="w-6 h-6 text-[#34D562]" />
                            </div>
                            <span className="text-xs font-mono text-[#34D562] border border-[#34D562]/30 px-3 py-1 rounded-full bg-[#34D562]/10">LIVE DATA</span>
                        </div>
                        <div>
                            <h3 className="text-8xl md:text-[8rem] font-bold text-white tracking-tighter leading-[0.8]">115k<span className="text-[#34D562]">+</span></h3>
                            <p className="mt-4 text-xl text-gray-400 font-medium">Active Learners</p>
                            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                                <div className="h-1 w-24 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-[#34D562] rounded-full animate-pulse"></div>
                                </div>
                                <span>85% Engagement Rate</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 2: Partners */}
                    <BentoCard className="md:col-span-1 p-8" delay={0.1}>
                        <Layers className="w-8 h-8 text-cyan-400 mb-6" />
                        <h4 className="text-5xl font-bold text-white mb-2">30+</h4>
                        <p className="text-gray-400 text-sm uppercase tracking-wider">University Partners</p>
                    </BentoCard>

                    {/* Card 3: IITian Mentors (Green Highlight) */}
                    <BentoCard className="md:col-span-1 lg:row-span-2 p-8 bg-gradient-to-b from-[#34D562]/10 to-[#030014] border-[#34D562]/30 group-hover:border-[#34D562]/50" delay={0.2}>
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h4 className="text-6xl font-bold text-white mb-2">250+</h4>
                                <p className="text-[#34D562] font-bold text-lg">IITian Mentors</p>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                    Elite mentorship from India's premier institutes driving innovation.
                                </p>
                            </div>
                            <button className="w-full mt-6 py-4 rounded-xl bg-[#34D562] hover:bg-[#2cb852] text-black font-bold transition-all shadow-lg shadow-[#34D562]/20 flex items-center justify-center gap-2 group">
                                Join The Elite <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </div>
                    </BentoCard>

                    {/* Card 4: Web3 Chains */}
                    <BentoCard className="md:col-span-1 p-8" delay={0.3}>
                        <div className="mb-6 relative">
                            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20 animate-pulse"></div>
                            <TrendingUp className="w-8 h-8 text-cyan-400 relative z-10" />
                        </div>
                        <h4 className="text-5xl font-bold text-white mb-2">3+</h4>
                        <p className="text-gray-400 text-sm uppercase tracking-wider">L1 Ecosystems</p>
                    </BentoCard>

                    {/* Card 5: Cities (Wide) */}
                    <BentoCard className="md:col-span-2 lg:col-span-2 p-8 flex items-center justify-between" delay={0.4}>
                        <div>
                            <h4 className="text-5xl font-bold text-white mb-2">15+ <span className="text-2xl text-gray-500 font-normal">Cities</span></h4>
                            <p className="text-gray-400">Powering innovation across India & Canada</p>
                        </div>
                        <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center">
                            <Globe className="w-6 h-6 text-gray-500" />
                        </div>
                    </BentoCard>

                    {/* Card 6: CTA (Green) */}
                    <BentoCard className="md:col-span-1 lg:col-span-1 p-8 bg-[#34D562] group-hover:bg-[#2cb852] transition-colors border-none" delay={0.5}>
                        <div className="h-full flex flex-col justify-between text-black">
                            <Zap className="w-8 h-8 fill-current text-black" />
                            <div>
                                <p className="font-bold text-lg leading-tight mb-1 text-black">Impact Velocity</p>
                                <p className="text-black/70 text-sm font-medium">Accelerating careers.</p>
                            </div>
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
};

export default HomeImpact;
