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
import IndianStudent1 from '../assets/IndianStudent1.png';
import IndianStudent2 from '../assets/IndianStudent2.png';
import IndianStudent3 from '../assets/IndianStudent3.png';
import IndianStudent4 from '../assets/IndianStudent4.png';
import IndianStudent5 from '../assets/IndianStudent5.png';

const CoreDao: React.FC = () => {
    const features = [
        { title: "Bitcoin Security", icon: Bitcoin, desc: "Leveraging Bitcoin's mining hashrate for unmatched network security." },
        { title: "EVM Compatible", icon: Layers, desc: "Seamlessly deploy Ethereum smart contracts and DApps." },
        { title: "Satoshi Plus Consensus", icon: Cpu, desc: "A hybrid consensus mechanism for the future of Web3, combining PoW and DPoS." },
        { title: "Decentralized Governance", icon: Globe, desc: "Community-driven decision-making for a truly democratic network." },
    ];

    const events = [
        { name: "Core Builders Hackathon", date: "15-01-2026", desc: "Build the next generation of DApps on Core DAO." },
        { name: "Satoshi Plus Webinar", date: "28-01-2026", desc: "Deep dive into Core's innovative consensus mechanism." },
        { name: "GoG CoreDAO Quiz Challenge", date: "30-02-2026", desc: "Test your Core DAO knowledge and win prizes!" },
    ];

    const studentAvatars = [IndianStudent1, IndianStudent2, IndianStudent3, IndianStudent4, IndianStudent5];

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
                            <span className="font-bold tracking-wider">Strategic Partner</span>
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
                            <strong className="text-white">Geeks of Gurukul</strong> partners with <strong className="text-white">Core DAO</strong> to empower the next generation of builders. Through <strong className="text-white">Bootcamps</strong>, <strong className="text-white">Hackathons</strong>, and <strong className="text-white">Workshops</strong>, we are bringing <strong className="text-white">blockchain</strong> innovation to <strong className="text-white">campuses</strong> across <strong className="text-white">India</strong>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <a href="https://coredao.org/" target="_blank" rel="noopener noreferrer">
                                <HoverGlowBtn className="bg-[#FF9211] text-black hover:bg-white font-bold">
                                    Explore Core Dao
                                </HoverGlowBtn>
                            </a>
                            <a href="https://docs.coredao.org/docs/intro" target="_blank" rel="noopener noreferrer">
                                <button className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white font-semibold">
                                    View Docs
                                </button>
                            </a>
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
                            <span className="text-[#FF9211]">Geeks of Gurukul</span>: Strategic Partner
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We are proud to be the <strong className="text-white">Strategic Partner</strong> for Core DAO in India. Core DAO is a <strong className="text-white">Bitcoin-powered</strong>, EVM-compatible blockchain combining <strong className="text-white">Bitcoin's security</strong> with <strong className="text-white">Ethereum's scalability</strong> via <strong className="text-white">Satoshi Plus consensus</strong> for a decentralized future. We are bridging the gap between students and the future of Web3.
                        </p>
                        <p className="text-gray-500 text-sm">
                            #GoGxCoreDAO #Web3Education #CampusRevolution
                        </p>
                        {/* <HoverGlowBtn className="mt-6 bg-[#FF9211] text-black hover:bg-white">
                            Know More
                        </HoverGlowBtn> */}
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

                {/* Section: Ecosystem Builders (New) */}
                <section className="py-24 relative z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                                    Low fee, high TPS Bitcoin <br />
                                    <span className="text-[#FF9211]">yield lending</span>
                                    <span className="text-gray-500 mx-4">—</span>
                                    All in one place
                                </h2>
                            </div>
                            <a href="https://developer.coredao.org/" target="_blank" rel="noreferrer">
                                <button className="px-8 py-4 bg-[#FF9211] hover:bg-[#ff9f2e] text-black font-bold rounded-xl transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,146,17,0.4)]">
                                    Launch on Core
                                </button>
                            </a>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-[#FF9211] transition-all duration-300 group">
                                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-[#FF9211]/10 transition-colors">
                                    <svg width="60" height="60" viewBox="0 0 113 119" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                                        <path opacity="0.4" d="M21.079 59.2152C21.079 53.0769 21.1305 46.9364 21.0468 40.8002C21.0232 39.0193 21.6047 37.9512 23.1474 37.0553C33.7944 30.8865 44.4003 24.6457 54.9958 18.3875C56.251 17.6463 57.3045 17.6006 58.5791 18.3526C69.359 24.7198 80.1624 31.05 90.9724 37.3649C92.0882 38.0166 92.5881 38.8733 92.586 40.1833C92.5645 52.933 92.5666 65.6827 92.5817 78.4324C92.5838 79.6858 92.1182 80.5403 91.0325 81.1746C80.1624 87.5287 69.3032 93.9047 58.4525 100.298C57.3045 100.974 56.2939 100.956 55.146 100.278C44.4218 93.9548 33.6914 87.6464 22.9307 81.386C21.5811 80.6013 21.0382 79.6378 21.0532 78.0662C21.1155 71.784 21.079 65.4996 21.079 59.2152Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round"></path>
                                        <path opacity="0.2" d="M7.02025 59.0819C7.02026 50.4909 7.09202 41.8967 6.97542 33.3088C6.94253 30.8163 7.75274 29.3214 9.90241 28.0675C24.7379 19.4337 39.5163 10.6993 54.28 1.94045C56.029 0.903185 57.497 0.839122 59.273 1.89165C74.2938 10.803 89.3472 19.6626 104.41 28.5007C105.965 29.4129 106.661 30.6119 106.658 32.4454C106.628 50.2895 106.631 68.1336 106.652 85.9777C106.655 87.7319 106.006 88.9278 104.494 89.8156C89.3472 98.7087 74.216 107.632 59.0965 116.58C57.497 117.526 56.0888 117.502 54.4893 116.553C39.5462 107.702 24.5944 98.8734 9.60044 90.1115C7.71985 89.0133 6.96345 87.6648 6.98438 85.4652C7.07109 76.6728 7.02025 67.8773 7.02025 59.0819Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round"></path>
                                        <path opacity="0.6" d="M32.5159 59.2435C32.5159 55.0807 32.5509 50.9165 32.494 46.7552C32.478 45.5474 32.8734 44.8231 33.9224 44.2155C41.1623 40.0321 48.3744 35.7998 55.5793 31.5557C56.4329 31.0531 57.1493 31.0221 58.0159 31.5321C65.3463 35.8501 72.6926 40.1429 80.0434 44.4254C80.8021 44.8674 81.1421 45.4484 81.1406 46.3368C81.126 54.9832 81.1275 63.6295 81.1377 72.2758C81.1392 73.1258 80.8226 73.7053 80.0843 74.1355C72.6926 78.4446 65.3084 82.7685 57.9299 87.1042C57.1493 87.5625 56.462 87.5507 55.6814 87.0909C48.389 82.8025 41.0923 78.5244 33.7751 74.2789C32.8573 73.7467 32.4882 73.0933 32.4984 72.0275C32.5407 67.7671 32.5159 63.5053 32.5159 59.2435Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round"></path>
                                        <path d="M48.7156 59.2837C48.7156 57.9431 48.7273 56.6021 48.7083 55.262C48.7029 54.8731 48.8347 54.6398 49.1844 54.4441C51.5977 53.0969 54.0018 51.734 56.4034 50.3673C56.6879 50.2054 56.9267 50.1954 57.2156 50.3596C59.6591 51.7502 62.1078 53.1326 64.5581 54.5117C64.811 54.6541 64.9243 54.8412 64.9238 55.1273C64.919 57.9117 64.9195 60.6961 64.9229 63.4805C64.9233 63.7542 64.8178 63.9409 64.5717 64.0794C62.1078 65.4671 59.6464 66.8595 57.1869 68.2558C56.9267 68.4033 56.6976 68.3995 56.4374 68.2515C54.0066 66.8705 51.5744 65.4928 49.1353 64.1256C48.8294 63.9542 48.7063 63.7438 48.7098 63.4005C48.7239 62.0286 48.7156 60.6561 48.7156 59.2837Z" stroke="#FD8D37" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round"></path>
                                        <path d="M83.25 72.8042C83.25 74.323 82.0188 75.5542 80.5 75.5542C78.9812 75.5542 77.75 74.323 77.75 72.8042C77.75 71.2854 78.9812 70.0542 80.5 70.0542C82.0188 70.0542 83.25 71.2854 83.25 72.8042Z" fill="#181717" stroke="white" strokeWidth="1.5"></path>
                                        <circle cx="106" cy="30.3042" r="6.25" transform="rotate(90 106 30.3042)" fill="#181717" stroke="white" strokeWidth="1.5"></circle>
                                        <circle cx="106" cy="30.3042" r="2.25" transform="rotate(90 106 30.3042)" fill="#181717" stroke="white" strokeWidth="1.5"></circle>
                                        <rect x="59.25" y="16.0542" width="4.5" height="4.5" rx="1.25" transform="rotate(90 59.25 16.0542)" fill="#181717" stroke="white" strokeWidth="1.5"></rect>
                                        <rect x="13.25" y="82.0542" width="12.5" height="12.5" rx="3.25" transform="rotate(90 13.25 82.0542)" fill="#181717" stroke="white" strokeWidth="1.5"></rect>
                                        <rect x="9.25" y="86.0542" width="4.5" height="4.5" rx="2.25" transform="rotate(90 9.25 86.0542)" fill="#181717" stroke="white" strokeWidth="1.5"></rect>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Supports every major dApp category</h3>
                                <p className="text-gray-400 leading-relaxed">From DeFi to gaming, NFTs to bridges and more...</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-[#FF9211] transition-all duration-300 group">
                                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-[#FF9211]/10 transition-colors">
                                    <svg width="60" height="60" viewBox="0 0 175 94" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                                        <line y1="-0.75" x2="23" y2="-0.75" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 20.4746 93.1523)" stroke="white" strokeWidth="1.5"></line>
                                        <line y1="-0.75" x2="47" y2="-0.75" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 10.4746 93.1523)" stroke="white" strokeWidth="1.5"></line>
                                        <line y1="-0.75" x2="69" y2="-0.75" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 0.474609 93.1523)" stroke="white" strokeWidth="1.5"></line>
                                        <path d="M87.5009 47.9463L134.527 70.5638L87.5009 93.1522L40.4746 70.5638L87.5009 47.9463Z" stroke="#8F8F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M87.5009 24.5964L134.527 47.1848L87.5009 69.8023L40.4746 47.1848L87.5009 24.5964Z" stroke="#C7C7C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M87.4746 1.25659L134.475 23.7566L87.4746 46.2566L40.4746 23.7566L87.4746 1.25659Z" stroke="#FD8D37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <line x1="153.777" y1="93.1523" x2="153.777" y2="70.1523" stroke="white" strokeWidth="1.5"></line>
                                        <line x1="163.777" y1="93.1523" x2="163.777" y2="46.1523" stroke="white" strokeWidth="1.5"></line>
                                        <line x1="173.777" y1="93.1523" x2="173.777" y2="24.1523" stroke="white" strokeWidth="1.5"></line>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Build with the fastest growing network</h3>
                                <p className="text-gray-400 leading-relaxed">Thriving ecosystem. Top performing dApps. Engaged community.</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-[#FF9211] transition-all duration-300 group">
                                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-[#FF9211]/10 transition-colors">
                                    <svg width="60" height="60" viewBox="0 0 156 83" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                                        <path d="M119.601 0.811523C119.933 0.814371 120.293 0.905669 120.711 1.12207L120.894 1.22266V1.22363C128.989 5.92662 137.089 10.6211 145.202 15.2939L153.32 19.958C153.922 20.3028 154.283 20.6521 154.502 21.0342C154.694 21.3685 154.808 21.7823 154.829 22.3428L154.833 22.5918C154.77 28.8259 154.807 35.0657 154.807 41.291C154.807 46.6091 154.767 51.945 154.813 57.2764L154.839 59.5615C154.85 60.3605 154.722 60.9228 154.471 61.3672C154.251 61.7554 153.905 62.1116 153.353 62.4629L153.103 62.6133C145.064 67.2018 137.05 71.8302 129.046 76.4756L121.045 81.126C120.485 81.4515 120.03 81.5905 119.613 81.5977C119.252 81.6038 118.861 81.5118 118.396 81.2725L118.192 81.1611C110.054 76.4253 101.903 71.7101 93.7461 67.0068L85.5879 62.3076C85.1086 62.0318 84.8118 61.7417 84.6279 61.4268C84.4675 61.1519 84.3668 60.8125 84.3447 60.3633L84.3398 60.1641C84.3506 53.8424 84.3552 47.5208 84.3555 41.1992L84.3438 22.2354C84.3428 21.7097 84.4415 21.3232 84.6152 21.0176C84.7669 20.7509 85.0008 20.5015 85.3643 20.2666L85.5273 20.167C93.733 15.4412 101.933 10.7033 110.127 5.95508L118.319 1.2041C118.81 0.919642 119.222 0.80832 119.601 0.811523Z" stroke="#FD8D37" strokeWidth="1.5"></path>
                                        <path opacity="0.6" d="M50.8835 41.5514C50.8835 36.1615 50.9291 30.7697 50.855 25.3818C50.8341 23.818 51.3488 22.8802 52.7144 22.0935C62.1389 16.6769 71.527 11.197 80.9058 5.7019C82.0169 5.05113 82.9495 5.01094 84.0777 5.67127C93.6198 11.2621 103.183 16.8204 112.751 22.3653C113.739 22.9376 114.182 23.6898 114.18 24.8401C114.161 36.0352 114.163 47.2303 114.176 58.4254C114.178 59.5259 113.766 60.2762 112.805 60.8332C103.183 66.4125 93.5704 72.011 83.9656 77.6248C82.9495 78.2182 82.0549 78.2029 81.0388 77.6076C71.546 72.0551 62.0477 66.5159 52.5226 61.0188C51.3279 60.3298 50.8474 59.4838 50.8607 58.1038C50.9158 52.5876 50.8835 47.0695 50.8835 41.5514Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round"></path>
                                        <path opacity="0.4" d="M20.5142 41.2429C20.5142 37.1364 20.5486 33.0283 20.4928 28.9232C20.477 27.7318 20.8648 27.0172 21.8937 26.4179C28.9943 22.2909 36.0675 18.1158 43.1338 13.929C43.9709 13.4332 44.6735 13.4026 45.5235 13.9057C52.7128 18.1654 59.9177 22.4003 67.127 26.625C67.8712 27.061 68.2046 27.6341 68.2031 28.5106C68.1888 37.0401 68.1903 45.5697 68.2003 54.0993C68.2017 54.9378 67.8912 55.5095 67.1671 55.9338C59.9177 60.1847 52.6756 64.4503 45.4391 68.7275C44.6735 69.1795 43.9995 69.1679 43.2339 68.7143C36.0818 64.4838 28.9256 60.2635 21.7492 56.0753C20.8491 55.5503 20.487 54.9057 20.4971 53.8543C20.5386 49.6515 20.5142 45.4472 20.5142 41.2429Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round"></path>
                                        <path opacity="0.2" d="M1.42205 41.6765C1.42205 39.1099 1.44391 36.5424 1.40839 33.9767C1.39838 33.232 1.64515 32.7854 2.29989 32.4108C6.81845 29.8315 11.3196 27.222 15.8163 24.6053C16.349 24.2954 16.7961 24.2763 17.337 24.5907C21.9121 27.253 26.497 29.8998 31.0848 32.5403C31.5583 32.8128 31.7705 33.171 31.7695 33.7187C31.7604 39.0497 31.7613 44.3807 31.7677 49.7117C31.7686 50.2358 31.571 50.5931 31.1102 50.8583C26.497 53.5151 21.8884 56.1811 17.2833 58.8543C16.7961 59.1369 16.3672 59.1296 15.88 58.8461C11.3287 56.202 6.77473 53.5643 2.20792 50.9467C1.63513 50.6186 1.40475 50.2157 1.41113 49.5586C1.43753 46.9318 1.42205 44.3042 1.42205 41.6765Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Everything you need to launch and scale</h3>
                                <p className="text-gray-400 leading-relaxed">EVM-compatible. High throughput. Tailored mentorship. Expansive toolset.</p>
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
                        {studentAvatars.map((avatar, i) => (
                            <img key={i} src={avatar} alt="Student" className="w-16 h-16 rounded-full border-4 border-[#050505] shadow-lg object-cover" />
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
                                {/* <p className="text-sm font-mono text-[#FF9838] mb-4 relative z-10">{event.date}</p> */}
                                <h3 className="text-3xl font-bold text-white mb-4 font-display relative z-10 leading-tight">{event.name}</h3>
                                <p className="text-gray-400 relative z-10">{event.desc}</p>
                                <HoverGlowBtn className="mt-8 relative z-10 text-sm">
                                    Coming Soon
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
