import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Network, Box, Shield, Code2, Users, Trophy, ArrowRight, Zap, Globe } from 'lucide-react';
import ParticleBackground from '../components/ui/ParticleBackground';
import Agoric1st from '../assets/Agoric-1st.HEIC';
import Agoric2nd from '../assets/Agoric-2nd.HEIC';
import Agoric3rd from '../assets/Agoric-3rd.HEIC';
import AgoricAward from '../assets/Agoric-Award-Centurion-University.jpeg';
import AgoricCrowd from '../assets/Agoric-Crowd.HEIC';
import AgoricGreen from '../assets/Agoric-Green Welcome-Centurion-University.jpeg';
import { HoverGlowBtn } from '../components/ui/MovingBorder';
import IndianStudent1 from '../assets/IndianStudent1.png';
import IndianStudent2 from '../assets/IndianStudent2.png';
import IndianStudent3 from '../assets/IndianStudent3.png';
import IndianStudent4 from '../assets/IndianStudent4.png';
import IndianStudent5 from '../assets/IndianStudent5.png';
import { h1 } from 'framer-motion/client';

const Agoric: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-[#0F0505] text-white font-sans selection:bg-[#D73252] selection:text-white overflow-x-hidden">
            <ParticleBackground mode="embers" primaryColor="#D73252" secondaryColor="#FF6B6B" />

            {/* HERO SECTION - FINAL POLISH */}
            {/* HERO SECTION - SPLIT LAYOUT */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden z-10">

                {/* Background Grid - Clearly Visible */}
                <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="hero-grid-split" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D73252" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-grid-split)" />
                    </svg>
                </div>

                {/* Background Glows */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#D73252]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D73252]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

                    {/* LEFT COLUMN - TEXT & CONTENT */}
                    <div className="text-left">
                        {/* Partnership Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="text-[#D73252] font-black text-xl tracking-wide uppercase">Agoric</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black leading-tight mb-6"
                        >
                            Bringing <br />
                            <span className="text-[#D73252]">Orchestration</span> to <br />
                            <span className="text-white">Web3 Builders</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed"
                        >
                            <strong className="text-white">Geeks of Gurukul</strong> empowers you to master the <span className="text-[#D73252]">Interchain Future</span>. Build <strong className="text-white">feature-rich applications</strong> that seamlessly coordinates assets and services across <strong className="text-white">multiple blockchains</strong>.
                        </motion.p>

                        {/* Buttons & Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="https://agoric.com/" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-3 bg-[#D73252] text-white font-bold rounded-lg hover:bg-[#FF8787] transition-colors shadow-[0_0_20px_rgba(255,107,107,0.4)]">
                                    Explore Agoric
                                </button>
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN - VISUAL (CUBE) */}
                    <div className="relative flex items-center justify-center perspective-1000">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative z-20"
                        >
                            <motion.img
                                src="https://i.postimg.cc/0yMhw8d5/IMG-9662.avif"
                                alt="Agoric Cube"
                                className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain drop-shadow-[0_0_100px_rgba(215,50,82,0.3)] rounded-xl"
                                animate={{ y: [-20, 20, -20] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Floating Cube Icon - Requested Addition */}
                            <motion.div
                                className="absolute -top-8 -right-10 text-[#D73252] opacity-80"
                                animate={{
                                    y: [10, -10, 10],
                                    rotate: [0, 90, 180, 270, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <Box size={64} strokeWidth={1} />
                            </motion.div>
                            <motion.div
                                className="absolute bottom-15 -left-10 text-[#D73252] opacity-60"
                                animate={{
                                    y: [-10, 10, -10],
                                    rotate: [360, 270, 180, 90, 0],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            >
                                <Box size={58} strokeWidth={1} />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* SECTION: WHY AGORIC - COMPRESSED GLASS BAR */}
            {/* SECTION: WHY AGORIC - FLAT BAR WITH DESCRIPTIONS */}
            <section className="relative z-20 py-12 px-6 bg-[#110505] border-b border-[#D73252]/20 shadow-[inset_0_0_100px_rgba(215,50,82,0.05)]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                icon: <Box size={32} />,
                                title: "Offer Safety",
                                desc: "Guaranteed asset protection in every smart contract trade."
                            },
                            {
                                icon: <Globe size={32} />,
                                title: "Interchain Native",
                                desc: "Built for seamless cross-chain orchestration."
                            },
                            {
                                icon: <Code2 size={32} />,
                                title: "Hardened JavaScript",
                                desc: "Secure smart contracts in familiar JavaScript."
                            },
                            {
                                icon: <Users size={32} />,
                                title: "Chain Abstraction",
                                desc: "Unified user experience across any blockchain."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-[#D73252]/10 rounded-2xl flex items-center justify-center text-[#D73252] transition-all duration-300 border border-[#D73252]/20 mb-4 shadow-[0_0_20px_rgba(215,50,82,0.1)]">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-transparent relative z-10 border-y border-[#D73252]/20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* NEW: Multi-chain Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-white max-w-5xl mx-auto leading-tight">
                            We are associated with <span className="text-[#D73252]">Agoric</span> because we believe that the world is going <span className="text-[#D73252]">multi-chain</span>.
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h1 className="text-[#D73252] font-bold uppercase tracking-widest text-xl mb-4">
                                Unlocking Interchain Value
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Users are increasingly exploring multi-chain solutions to solve their problems. Orchestration gives developers the platform to program those solutions, and access to the Total Reachable Value of the entire interchain ecosystem.
                            </p>
                            <div className="flex gap-12">
                                <div>
                                    <div className="text-4xl font-black text-white mb-1">59B+</div>
                                    <div className="text-[#D73252] font-bold uppercase tracking-wider text-sm">IBC Market Cap</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white mb-1">230K</div>
                                    <div className="text-[#D73252] font-bold uppercase tracking-wider text-sm">IBC DAU</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
                            <img
                                src="https://agoric.com/static/illustration-4-e19dd1bc9fa0f9c2713f20ca12a4563e.svg"
                                alt="The world is going multi-chain"
                                className="w-full max-w-md drop-shadow-[0_0_50px_rgba(215,50,82,0.3)]"
                            />
                        </div>
                    </div>

                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1 bg-[#D73252]/20 text-[#D73252] rounded-full font-bold text-sm mb-4 border border-[#D73252]/30"
                        >
                            PARTNERSHIP EVENT
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Agro Fast Hack <span className="text-[#D73252]">Odisha</span></h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Organized in collaboration with <strong className="text-white">Geeks of Gurukul</strong> and <strong className="text-white">Agoric</strong> at the prestigious <strong className="text-white">Centurion University</strong>. A 24-hour non-stop marathon where students built the future of the interchain economy.
                        </p>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="mt-8 inline-block"
                        >
                            <div className="px-8 py-4 bg-gradient-to-r from-[#D73252] to-[#FF6B6B] rounded-2xl shadow-[0_0_40px_rgba(215,50,82,0.6)] animate-pulse">
                                <span className="text-3xl font-black text-white">$1,250 USD PRIZE POOL</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hackathon Timeline */}
                    <div className="mt-16 mb-16">
                        <h3 className="text-2xl font-bold text-white text-center mb-8">
                            <span className="text-[#D73252]">24-Hour</span> Hackathon Timeline
                        </h3>

                        {/* Horizontal Timeline */}
                        <div className="relative overflow-x-auto pb-8">
                            <div className="relative flex gap-0 min-w-max px-4">
                                {/* Main Timeline Line - inside flex container to match content width */}
                                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D73252] via-[#FF6B6B] to-[#D73252] transform -translate-y-1/2 z-0" />

                                {[
                                    { time: "9:00 AM", title: "Registration & Check-in", desc: "Attendees check in and settle in", isTop: true },
                                    { time: "10:00 AM", title: "Opening Ceremony", desc: "Welcome speech, announcements and guidelines", isTop: false },
                                    { time: "11:00 AM - 01:00 PM", title: "Hackathon Begins", desc: "Theoretical Session", isTop: true },
                                    { time: "01:00 PM - 02:00 PM", title: "Lunch Break", desc: "Refuel and network", isTop: false },
                                    { time: "02:00 PM - 05:30 PM", title: "Technical Workshop", desc: "Hands-on building session", isTop: true },
                                    { time: "5:30 PM", title: "Snacks Break", desc: "Quick refreshment", isTop: false },
                                    { time: "8:00 PM", title: "1st Mentoring Round", desc: "Idea submission on Google form", isTop: true },
                                    { time: "9:30 PM", title: "Dinner Break", desc: "Evening meal", isTop: false },
                                    { time: "12:00 AM", title: "2nd Mentoring Round", desc: "Late night guidance", isTop: true },
                                    { time: "1:00 AM", title: "Fun Activities", desc: "Games and munching", isTop: false },
                                    { time: "9:00 AM", title: "Breakfast", desc: "Morning fuel", isTop: true },
                                    { time: "10:00 AM", title: "Submission", desc: "Final project submission", isTop: false },
                                    { time: "10:30 AM", title: "Judging", desc: "Project evaluation", isTop: true },
                                    { time: "1:00 PM", title: "Closing & Results", desc: "Winners announcement", isTop: false },
                                ].map((item, i) => (
                                    <div key={i} className="relative flex flex-col items-center w-44 flex-shrink-0">
                                        {/* Top Card */}
                                        {item.isTop && (
                                            <div className="mb-4 bg-[#1A0A0A] border border-white/10 rounded-xl p-5 w-48 min-h-[120px] text-center hover:border-[#D73252]/50 hover:shadow-[0_0_20px_rgba(215,50,82,0.2)] transition-all duration-300 group flex flex-col justify-center">
                                                <p className="text-xs font-mono text-[#D73252] mb-1">{item.time}</p>
                                                <h4 className="text-sm font-bold text-white mb-1 leading-tight group-hover:text-[#D73252] transition-colors">{item.title}</h4>
                                                <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                                            </div>
                                        )}

                                        {/* Timeline Node */}
                                        <div className="relative z-10 w-4 h-4 bg-[#D73252] rounded-full border-4 border-[#0F0505] shadow-[0_0_15px_rgba(215,50,82,0.5)] my-2" />

                                        {/* Bottom Card */}
                                        {!item.isTop && (
                                            <div className="mt-4 bg-[#1A0A0A] border border-white/10 rounded-xl p-5 w-48 min-h-[120px] text-center hover:border-[#D73252]/50 hover:shadow-[0_0_20px_rgba(215,50,82,0.2)] transition-all duration-300 group flex flex-col justify-center">
                                                <p className="text-xs font-mono text-[#D73252] mb-1">{item.time}</p>
                                                <h4 className="text-sm font-bold text-white mb-1 leading-tight group-hover:text-[#D73252] transition-colors">{item.title}</h4>
                                                <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                                            </div>
                                        )}

                                        {/* Placeholder to maintain height */}
                                        {item.isTop && <div className="h-[120px]" />}
                                        {!item.isTop && <div className="h-[120px] order-first" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Winners Podium Layout - FULL IMAGE CARDS */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">

                        {/* 2nd Place */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="order-2 md:order-1 relative group w-full md:w-1/3"
                        >
                            {/* Running Glow Border Container */}
                            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#C0C0C0] via-white to-[#C0C0C0] animate-border-flow relative overflow-hidden h-64 md:h-72">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0] via-white to-[#C0C0C0] blur-md opacity-50 animate-border-flow"></div>
                                <div className="relative bg-black rounded-2xl overflow-hidden h-full w-full">
                                    {/* Full Image Background */}
                                    <img src="https://i.postimg.cc/wjyws3H8/Agoric-2nd.avif" alt="2nd Prize Winner" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                                    {/* Gradient Overlay for Text Visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                    {/* Text Content Overlay */}
                                    <div className="absolute bottom-0 inset-x-0 p-6 text-center z-10">
                                        <Trophy size={32} className="text-[#C0C0C0] mx-auto mb-2 drop-shadow-[0_0_10px_rgba(192,192,192,0.5)]" />
                                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">2nd Place</h3>
                                        <p className="text-[#C0C0C0] font-bold text-xl drop-shadow-md">$250 USD</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 1st Place - Larger & Center */}
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2 relative group w-full md:w-[40%] z-10 transform md:-translate-y-8"
                        >
                            {/* Running Glow Border Container - Gold */}
                            <div className="p-[3px] rounded-2xl bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] animate-border-flow relative overflow-hidden h-72 md:h-80 shadow-[0_0_50px_rgba(255,215,0,0.4)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] blur-lg opacity-60 animate-border-flow"></div>
                                <div className="relative bg-black rounded-2xl overflow-hidden h-full w-full">
                                    <div className="absolute top-4 right-4 z-20 bg-[#FFD700] text-black font-black px-4 py-1 rounded-full shadow-lg animate-pulse">
                                        WINNER
                                    </div>

                                    {/* Full Image Background */}
                                    <img src="https://i.postimg.cc/pLhsnyxt/Agoric-1st.avif" alt="1st Prize Winner" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                    {/* Text Content Overlay */}
                                    <div className="absolute bottom-0 inset-x-0 p-8 text-center z-10">
                                        <Trophy size={48} className="text-[#FFD700] mx-auto mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]" />
                                        <h3 className="text-4xl font-black text-white mb-1 drop-shadow-lg">1st Place</h3>
                                        <p className="text-[#FFD700] font-bold text-3xl drop-shadow-lg">$300 USD</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3rd Place */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="order-3 relative group w-full md:w-1/3"
                        >
                            {/* Running Glow Border Container - Bronze */}
                            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#CD7F32] via-[#FFA07A] to-[#CD7F32] animate-border-flow relative overflow-hidden h-64 md:h-72">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#CD7F32] via-[#FFA07A] to-[#CD7F32] blur-md opacity-50 animate-border-flow"></div>
                                <div className="relative bg-black rounded-2xl overflow-hidden h-full w-full">
                                    {/* Full Image Background */}
                                    <img src="https://i.postimg.cc/RZNDQX7Y/Agoric-3rd.avif" alt="3rd Prize Winner" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                    {/* Text Content Overlay */}
                                    <div className="absolute bottom-0 inset-x-0 p-6 text-center z-10">
                                        <Trophy size={32} className="text-[#CD7F32] mx-auto mb-2 drop-shadow-[0_0_10px_rgba(205,127,50,0.5)]" />
                                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">3rd Place</h3>
                                        <p className="text-[#CD7F32] font-bold text-xl drop-shadow-md">$150 USD</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: INTERCHAIN ORCHESTRATION */}
            <section className="py-20 bg-transparent relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Interchain Orchestration</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Agoric allows you to orchestrate assets and services across the entire Cosmos ecosystem. Build DApps that interact with multiple chains seamlessly.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Async/Await", desc: "Familiar JavaScript patterns for asynchronous chain communication." },
                                { title: "Offer Safety", desc: "Guaranteed atomic swaps. Users get what they want or keep what they have." },
                                { title: "Component Library", desc: "Reusable, secure smart contract components." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#D73252]/10 flex items-center justify-center text-[#D73252] shrink-0 rounded-lg border border-[#D73252]/30">
                                        <Box size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#150505]/90 p-8 rounded-xl border border-[#D73252]/20 font-mono text-sm relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 text-[#D73252] opacity-50">
                            <Activity size={24} />
                        </div>
                        <div className="text-gray-500 mb-4">// Example: Cross-chain Swap</div>
                        <div className="text-[#D73252]">const</div> <span className="text-white">swap = </span><div className="text-[#D73252]">await</div> <span className="text-white">E(dex).makeSwapInvitation();</span>
                        <br /><br />
                        <div className="text-[#D73252]">const</div> <span className="text-white">proposal = {'{'}</span>
                        <div className="pl-4 text-gray-300">give: {'{'} In: AmountMath.make(brandIn, 10n) {'}'},</div>
                        <div className="pl-4 text-gray-300">want: {'{'} Out: AmountMath.make(brandOut, 5n) {'}'}</div>
                        <span className="text-white">{'}'};</span>
                        <br /><br />
                        <div className="text-[#D73252]">const</div> <span className="text-white">seat = </span><div className="text-[#D73252]">await</div> <span className="text-white">E(zoe).offer(swap, proposal, payments);</span>
                        <br /><br />
                        <div className="text-green-500">// Offer Safety Enforced automatically</div>
                    </div>
                </div>
            </section>

            {/* SECTION: AGORIC CROWD & GREEN WELCOME */}
            <section className="py-20 bg-transparent relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[

                            {
                                img: AgoricGreen,
                                title: "Centurion University",
                                desc: "Welcoming the next generation of Web3 developers."
                            },
                            {
                                img: AgoricCrowd,
                                title: "Community Gathering",
                                desc: "Builders and enthusiasts uniting for the interchain future."
                            }

                        ].map((item, i) => (
                            <div key={i} className="relative group overflow-hidden rounded-2xl border border-[#D73252]/20 shadow-[0_0_30px_rgba(215,50,82,0.1)] h-80 md:h-96">
                                <motion.img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 inset-x-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{item.title}</h3>
                                    <p className="text-gray-300 text-sm drop-shadow-md">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Join Community Section */}
            <section className="py-10 bg-transparent relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#D73252]/10 to-black/40 border border-[#D73252]/30 p-8 md:p-12 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10 leading-tight">
                            Nurturing <span className="text-[#D73252]">Agoric Talent</span>: Our Student Developer Hub
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg mb-8 relative z-10">
                            Geeks of Gurukul provides dedicated resources, mentorship, and a vibrant community for students to master the Agoric blockchain and Hardened JavaScript.
                        </p>
                        <div className="flex justify-center -space-x-4 mb-8 relative z-10">
                            {[IndianStudent1, IndianStudent2, IndianStudent3, IndianStudent4, IndianStudent5].map((avatar, i) => (
                                <img key={i} src={avatar} alt="Student Developer" className="w-12 h-12 rounded-full border-2 border-black shadow-lg object-cover" />
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-black bg-[#D73252] text-white flex items-center justify-center font-bold text-sm shadow-lg">
                                +500
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group px-8 py-3 rounded-full font-bold text-white overflow-hidden z-10"
                        >
                            <div className="absolute inset-0 bg-[#D73252] opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shimmer_1s_infinite]"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Join Dev Community
                            </span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: BOUNTIES */}
            <section className="py-20 bg-transparent border-t border-[#D73252]/20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-black">Upcoming Bounties GoG</h2>
                        <button className="text-[#D73252] font-bold flex items-center gap-2">View All <ArrowRight size={20} /></button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Build a Liquid Staking UI", reward: "2,000 USDC", diff: "Intermediate" },
                            { title: "Create a Governance Dashboard", reward: "3,500 USDC", diff: "Advanced" },
                            { title: "Write a Tutorial: Agoric 101", reward: "500 USDC", diff: "Beginner" },
                            { title: "Fix Bug in Wallet Connector", reward: "1,000 USDC", diff: "Intermediate" }
                        ].map((bounty, i) => (
                            <div key={i} className="p-6 bg-[#150505]/60 border border-white/5 hover:border-[#D73252] transition-colors rounded-xl flex justify-between items-center group backdrop-blur-md">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#D73252] transition-colors mb-2">{bounty.title}</h3>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-[#222] text-xs text-gray-400 rounded">{bounty.diff}</span>
                                        <span className="px-2 py-1 bg-[#222] text-xs text-gray-400 rounded">Dev</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-green-500 font-mono font-bold text-xl">{bounty.reward}</div>
                                    <button className="text-sm text-gray-500 underline hover:text-white">Coming Soon</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Agoric;
