import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Shield, Zap, Globe, Layers, Cpu, Bitcoin, Pizza, Camera, Star, Flame, MapPin, Users, Calendar, ArrowRight, Trophy } from 'lucide-react';
import { HoverGlowBtn } from '../components/ui/MovingBorder';
import ParticleBackground from '../components/ui/ParticleBackground';
import CoreCrowdHappy from '../assets/Core-Dao-Crowd-Happy.jpg';
import CoreCrowd from '../assets/Core-Dao-Crowd.jpg';
import CoreReward from '../assets/Core-Dao-Reward.jpg';
import CoreReward2 from '../assets/Core-Dao-Reward-2.jpg';
import CoreLogo from '../assets/core-dao-logo.svg';

const CoreDao: React.FC = () => {
    const features = [
        { title: "Bitcoin Security", icon: Bitcoin, desc: "Leveraging Bitcoin's mining hashrate for unmatched network security." },
        { title: "EVM Compatible", icon: Layers, desc: "Seamlessly deploy Ethereum smart contracts and DApps." },
        { title: "Satoshi Plus Consensus", icon: Cpu, desc: "A hybrid consensus mechanism for the future of Web3, combining PoW and DPoS." },
        { title: "Decentralized Governance", icon: Globe, desc: "Community-driven decision-making for a truly democratic network." },
    ];

    const events = [
        { name: "Core Builders Hackathon", date: "15-01-2026", desc: "Build the next generation of DApps on Core DAO." },
        { name: "Satoshi Plus Webinar", date: "28-01-2026", desc: "Deep dive into Core DAO's innovative consensus mechanism." },
        { name: "GoG CoreDAO Quiz Challenge", date: "30-02-2026", desc: "Test your Core DAO knowledge and win prizes!" },
    ];

    return (
        <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF9211] selection:text-black overflow-hidden">

            {/* Global Particle Background - Fixed at z-0 */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ParticleBackground mode="hexagons" primaryColor="#FF9211" secondaryColor="#FFD700" density={40} />
            </div>

            {/* Custom Background: Magma Glow & Hex Patterns */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-[#FF9838]/15 to-transparent rounded-full blur-[150px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tl from-[#34D562]/15 to-transparent rounded-full blur-[150px] animate-pulse-slow delay-500"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            </div>

            <div className="w-[95%] max-w-[1600px] mx-auto relative z-10">

                {/* Section 1: Hero - Redesigned & Compact */}
                <div className="grid lg:grid-cols-2 gap-12 items-center pt-32 mb-20 max-w-7xl mx-auto">
                    {/* Left: Content */}
                    <div className="flex flex-col items-start text-left space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9211]/10 border border-[#FF9211]/30 text-[#FF9211] font-mono text-sm"
                        >
                            <img src={CoreLogo} alt="Core Logo" className="w-5 h-5" />
                            <span className="font-bold tracking-wider">OFFICIAL PARTNER</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
                        >
                            IGNITING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9211] to-[#FFD700]">WEB3</span> <br />
                            EDUCATION
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
                        >
                            <strong className="text-white">Geeks of Gurukul</strong> joins forces with <strong className="text-white">Core DAO</strong> to empower the next generation of builders. Through <strong className="text-white">Bootcamps</strong>, <strong className="text-white">Hackathons</strong>, and <strong className="text-white">Workshops</strong>, we are bringing <strong className="text-white">blockchain</strong> innovation to <strong className="text-white">campuses</strong> across <strong className="text-white">India</strong>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <HoverGlowBtn className="bg-[#FF9211] text-black hover:bg-white font-bold">
                                Join Next Workshop
                            </HoverGlowBtn>
                            <button className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white font-semibold">
                                View Past Events
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Visual Composition */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        {/* Background SVG Glow */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                            <img src={CoreLogo} alt="Core Background" className="w-[400px] h-[400px] animate-pulse-slow blur-xl" />
                        </div>

                        {/* Image 1: Main Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="absolute top-10 left-0 w-[70%] h-[280px] rounded-2xl overflow-hidden border-2 border-[#FF9211] shadow-[0_0_30px_rgba(255,146,17,0.3)] z-20 group"
                        >
                            <img src={CoreCrowd} alt="Core Workshop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                <span className="text-white font-bold text-sm uppercase tracking-wider">Campus Workshops</span>
                            </div>
                        </motion.div>

                        {/* Image 2: Overlapping Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-10 right-0 w-[65%] h-[240px] rounded-2xl overflow-hidden border-2 border-[#FF9211] shadow-[0_0_30px_rgba(255,146,17,0.3)] z-30 group"
                        >
                            <img src={CoreReward} alt="Hackathon Winners" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-right">
                                <span className="text-white font-bold text-sm uppercase tracking-wider">Campus Welcome</span>
                            </div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 -right-10 bg-white/5 backdrop-blur-md border border-[#FF9211] p-4 rounded-xl z-40 shadow-xl"
                        >
                            <div className="flex items-center gap-3 ">
                                <img src={CoreLogo} alt="Core" className="w-8 h-8" />
                                <div>
                                    <div className="text-[#FF9211] font-black text-xl">5000+</div>
                                    <div className="text-xs text-gray-400 uppercase">Students Educated</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-80 mt-20 mr-56 right-60 bg-white/5 backdrop-blur-md border border-[#FF9211] p-4 rounded-xl z-40 shadow-xl"
                        >
                            <div className="flex items-center gap-3 ">
                                <img src={CoreLogo} alt="Core" className="w-8 h-8" />
                                <div>
                                    <div className="text-[#FF9211] font-black text-xl">40+</div>
                                    <div className="text-xs text-gray-400 uppercase">Workshops</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Section 2: Geeks of Gurukul Partnership */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-16 items-center mb-40 bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-[#FF9211]/20 shadow-xl"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                            <span className="text-[#FF9211]">Geeks of Gurukul</span>: Official Campus Partner
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We are proud to be the <strong className="text-white">Official Campus Partner</strong> for Core DAO in India. Our mission is to spread awareness and education about the Core ecosystem through immersive <strong className="text-white">bootcamps</strong>, high-energy <strong className="text-white">hackathons</strong>, and interactive <strong className="text-white">workshops</strong>. We are bridging the gap between students and the decentralized future.
                        </p>
                        <p className="text-gray-500 text-sm">
                            #GoGxCoreDAO #Web3Education #CampusRevolution
                        </p>
                        <HoverGlowBtn className="mt-6 bg-[#FF9211] text-black hover:bg-white">
                            Partner With Us
                        </HoverGlowBtn>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FF9211] group">
                        <img src={CoreCrowdHappy} alt="CoreDAO Partnership" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <span className="text-white text-xl font-bold font-display">Building the Core Community</span>
                        </div>
                    </div>
                </motion.div>

                {/* Section 3: Core Capabilities / Tech Features */}
                <div className="mb-32">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-16 text-center">CORE <span className="text-[#FF9211]">CAPABILITIES</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group relative p-8 md:p-10 bg-white/5 border border-white/5 rounded-2xl hover:border-[#FF9211]/50 hover:bg-[#FF9211]/5 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* <div className="absolute top-4 right-4 text-gray-700 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">0{i + 1}</div> */}
                                <feature.icon size={48} className="text-[#FF9211] mb-6 drop-shadow-[0_0_15px_rgba(255,152,56,0.3)]" />
                                <h3 className="text-2xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PRESERVED SECTION: STUDENT LIFE - PIZZA & FUN */}
                <section className="py-20 bg-transparent relative overflow-hidden z-10 mb-20">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://i.postimg.cc/WbJhZ6xC/IMG-0240.avif" className="w-full h-64 object-cover rounded-lg rotate-2 hover:rotate-0 transition-all duration-500" alt="Pizza" />
                                <img src="https://i.postimg.cc/R0GFmPnK/IMG-0241.avif" className="w-full h-64 object-cover rounded-lg -rotate-2 hover:rotate-0 transition-all duration-500 mt-8" alt="Group Selfie" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF9211] rounded-full blur-[80px] opacity-50" />
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Pizza className="text-[#FF9211]" size={32} />
                                <span className="text-xl font-bold text-white">More Than Just Code</span>
                            </div>
                            <h2 className="text-5xl font-black mb-6">Community, Food & <span className="text-[#FF9211]">Vibes</span></h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Geeks of Gurukul events are known for their energy. We believe in building a community where learning is fun. Expect parties, swag giveaways and lifelong friendships.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
                                    <div className="text-3xl font-bold text-[#FF9211] mb-1">500+</div>
                                    <div className="text-sm text-gray-500">Parties & Giveaways</div>
                                </div>
                                <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
                                    <div className="text-3xl font-bold text-[#FF9211] mb-1">1000+</div>
                                    <div className="text-sm text-gray-500">Swag Kits Distributed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Youth Engagement & Community */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FF9838]/10 to-[#34D562]/10 border border-[#FF9838]/30 p-8 md:p-12 text-center mb-32"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-10"></div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 relative z-10 leading-tight">
                        Empowering the Next Generation of <span className="text-[#FF9838]">CoreDAO Builders</span>
                    </h2>
                    <p className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl mb-6 relative z-10">
                        Geeks of Gurukul is fostering a vibrant community of young developers eager to build and innovate on the CoreDAO blockchain. Join us and be part of the future!
                    </p>
                    <div className="flex justify-center -space-x-4 mb-6 relative z-10">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src={`https://i.pravatar.cc/150?img=${i + 20}`} alt="Student" className="w-16 h-16 rounded-full border-4 border-[#050505] shadow-lg" />
                        ))}
                        <div className="w-16 h-16 rounded-full border-4 border-[#050505] bg-[#FF9838] text-black flex items-center justify-center font-bold text-lg shadow-lg">
                            +1K
                        </div>
                    </div>
                    <HoverGlowBtn className="relative z-10 bg-[#FF9211] text-black hover:bg-white">
                        Join Our CoreDAO Community
                    </HoverGlowBtn>
                </motion.div>

                {/* Section 5: Upcoming Events & Collaborations */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-16 text-center">Upcoming <span className="text-[#FF9211]">Events</span></h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-[#FF9211]/50 hover:bg-[#FF9211]/5 transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF9211]/10 rounded-bl-full group-hover:w-full group-hover:h-full transition-all duration-500"></div>
                                <p className="text-sm font-mono text-[#FF9838] mb-4 relative z-10">{event.date}</p>
                                <h3 className="text-3xl font-bold text-white mb-4 font-display relative z-10 leading-tight">{event.name}</h3>
                                <p className="text-gray-400 relative z-10">{event.desc}</p>
                                <HoverGlowBtn className="mt-8 relative z-10 text-sm">
                                    Register Now
                                </HoverGlowBtn>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PRESERVED SECTION: WORKSHOP FLOW */}
                <section className="py-20 bg-transparent relative z-10">
                    <div className="w-[95%] max-w-[1600px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black mb-4">The Workshop Experience</h2>
                            <p className="text-gray-400">What happens at a Core Connect event?</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { title: "01. Intro to Web3", desc: "Understanding Blockchain & Satoshi Plus Consensus." },
                                { title: "02. Setup Environment", desc: "Installing Metamask & Core Testnet Faucet." },
                                { title: "03. Write Smart Contract", desc: "Solidity basics and deploying to Core Chain." },
                                { title: "04. Build Frontend", desc: "Connecting React app to the smart contract." }
                            ].map((step, i) => (
                                <div key={i} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF9211] transition-colors group rounded-xl">
                                    <div className="text-[#FF9211] font-black text-xl mb-4 group-hover:scale-110 transition-transform origin-left">{step.title}</div>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CoreDao;
