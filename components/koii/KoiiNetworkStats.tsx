import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, DollarSign, Wifi, Globe } from 'lucide-react';

const KoiiNetworkStats: React.FC = () => {
    return (
        <section className="py-10 bg-transparent relative overflow-hidden">
            {/* Reduced max-width to give more empty space on sides */}
            <div className="w-[90%] max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight"
                    >
                        THE POWER OF THE CROWD
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-block px-6 py-2 border border-[#34D562] rounded-full bg-[#34D562]/10"
                    >
                        <p className="text-base md:text-lg font-bold tracking-widest uppercase text-[#34D562]">
                            DON'T WAIT. BUILD ON CLOUD2 TODAY.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content Grid - Aligned to stretch for equal height */}
                <div className="grid lg:grid-cols-3 gap-8 items-stretch">

                    {/* Left Column - Stats */}
                    <div className="flex flex-col justify-between gap-10 py-4">
                        <div className="flex flex-col gap-10">
                            {/* Stat 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            >
                                <div className="mb-3 text-[#34D562] p-2 bg-[#34D562]/10 rounded-xl group-hover:scale-110 transition-transform">
                                    <Activity size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-1 font-display tracking-tighter">
                                    221,782,998
                                </h3>
                                <p className="text-gray-400 font-medium text-base uppercase tracking-wide">
                                    Total Compute Transactions
                                </p>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            >
                                <div className="mb-3 text-[#34D562] p-2 bg-[#34D562]/10 rounded-xl group-hover:scale-110 transition-transform">
                                    <Users size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-1 font-display tracking-tighter">
                                    257,364
                                </h3>
                                <p className="text-gray-400 font-medium text-base uppercase tracking-wide">
                                    On-Chain Accounts
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex justify-center">
                            <a href="https://discord.com/invite/gog" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-[#34D562] text-[#34D562] font-bold hover:bg-[#34D562] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm w-full md:w-auto text-center">
                                Join Our Community
                            </a>
                        </div>
                    </div>

                    {/* Center Column - Globe/Network Graphic */}
                    <div className="relative flex justify-center items-center h-[400px] lg:h-[600px]">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 bg-[#34D562]/5 rounded-full blur-[80px]"></div>

                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="relative z-10 text-[#34D562] opacity-60"
                            >
                                <Globe size={300} strokeWidth={0.5} />
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#34D562] rounded-full shadow-[0_0_20px_#34D562]"
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"
                            />
                        </div>

                        {/* Mainnet Badge */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md border border-[#34D562]/30 rounded-xl p-3 flex items-center gap-3">
                            <div className="text-center">
                                <p className="text-[#34D562] font-bold tracking-widest text-sm">MAINNET</p>

                            </div>
                            {/* <div className="w-10 h-5 bg-[#34D562]/20 rounded-full relative border border-[#34D562]/50">
                                <div className="absolute right-1 top-1 w-3 h-3 bg-[#34D562] rounded-full shadow-[0_0_10px_#34D562]"></div>
                            </div> */}
                        </div>

                        {/* Cloud2 Hello World Button (Replacing Last Updated) */}
                        <div className="absolute bottom-4 text-center w-full flex justify-center">
                            <a href="https://www.koii.network/docs" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-[#34D562] text-black font-bold hover:bg-[#2bc455] transition-all duration-300 uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(52,213,98,0.3)] hover:shadow-[0_0_30px_rgba(52,213,98,0.5)]">
                                Cloud2 Hello World
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Stats */}
                    <div className="flex flex-col justify-between gap-10 py-4">
                        <div className="flex flex-col gap-10">
                            {/* Stat 3 */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            >
                                <div className="relative mb-3">
                                    <div className="absolute inset-0 bg-[#34D562] blur-2xl opacity-10 rounded-full"></div>
                                    <div className="relative w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#34D562]/30 group-hover:border-[#34D562] transition-colors">
                                        <DollarSign size={28} className="text-[#34D562]" />
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-1 font-display tracking-tighter">
                                    $3,000,000
                                </h3>
                                <p className="text-gray-400 font-medium text-base uppercase tracking-wide max-w-xs">
                                    USD value already paid to Node operators.
                                </p>
                            </motion.div>

                            {/* Stat 4 */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            >
                                <div className="mb-3 text-[#34D562] p-2 bg-[#34D562]/10 rounded-xl group-hover:scale-110 transition-transform">
                                    <Wifi size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-1 font-display tracking-tighter">
                                    115,514,368 MB
                                </h3>
                                <p className="text-gray-400 font-medium text-base uppercase tracking-wide">
                                    Total Daily Bandwidth
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex justify-center">
                            <a href="https://www.youtube.com/watch?v=Ie23ey9urnw" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-[#34D562] text-[#34D562] font-bold hover:bg-[#34D562] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm w-full md:w-auto text-center">
                                Deploy Tokens
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default KoiiNetworkStats;
