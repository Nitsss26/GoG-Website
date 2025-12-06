import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code2, Server, Globe, Trophy, Users, Zap, Star, ArrowRight, ArrowRightLeft, Coins, Banknote } from 'lucide-react';
import { HoverGlowBtn } from '../components/ui/MovingBorder';
import ParticleBackground from '../components/ui/ParticleBackground';
import StellarAward from '../assets/Stellar-Award.jpg'; // Using the 6MB file
import StellarCrowd from '../assets/Steller-Crowd-main.jpg'; // Using the 3MB file
import StellarBanner from '../assets/Steller-with-banner.png';
import Steller from '../assets/Steller-Crowd.jpg';
import StellarAward1 from '../assets/Steller-Award.png'; // Using the 6MB file



const Stellar: React.FC = () => {
    const features = [
        { title: "Global Reach", icon: Globe, desc: "Connecting financial systems worldwide into a single, interoperable network for seamless transfers." },
        { title: "Asset Issuance", icon: Coins, desc: "Create, send, and trade digital representations of any form of value, from fiat to commodities, with ease." },
        { title: "Fast Exchange", icon: ArrowRightLeft, desc: "Built-in decentralized exchange (DEX) allows for lightning-fast, low-cost asset swaps directly on-chain." },
        { title: "Soroban Smart Contracts", icon: Rocket, desc: "Build powerful, scalable smart contracts with Rust, extending Stellar's capabilities for complex DApps." },
    ];

    const youthStats = [
        { label: "Students in Programs", value: "18000+" },
        { label: "Projects on Soroban", value: "50+" },
        { label: "Community Events", value: "300+" },
    ];

    return (
        <div className="relative min-h-screen bg-[#050408] text-white font-sans selection:bg-[#FAB638] selection:text-black overflow-hidden">

            {/* Global Particle Background - Fixed at z-0 */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ParticleBackground mode="comets" primaryColor="#FAB638" secondaryColor="#36213E" density={200} />
            </div>

            {/* Additional Background Layers from Snippet */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050408] via-purple-950/20 to-[#050408] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-500/10 rounded-full blur-[200px] animate-pulse-slow delay-1000 pointer-events-none"></div>

            {/* HERO SECTION - PRESERVED & OPTIMIZED */}
            <section className="relative min-h-screen flex flex-col justify-center pb-20 px-6 overflow-hidden z-10 pt-24">
                {/* Background Glow - Optimized Blur */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0 pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-[#FAB638]/5 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <div className="w-2 h-2 bg-[#FAB638] rounded-full animate-pulse mt-5 -mb-4" />
                            <span className="text-[#FAB638] font-mono tracking-widest uppercase mt-5 -mb-4">Geeks of Gurukul x Stellar</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-8xl font-black leading-none mb-8"
                        >
                            BUILD THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAB638] to-[#FFE5B4]">NEW FINANCIAL</span> <br />
                            SYSTEM
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed border-l-4 border-[#FAB638] pl-6"
                        >
                            <strong className="text-white">Geeks of Gurukul</strong> runs the premier  <strong className="text-white">Soroban</strong> Smart Contract bootcamp. We are training developers to build real-world  <strong className="text-white">financial applications</strong> on the <strong className="text-white">Stellar Network</strong>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-4"
                        >
                            <a href="https://stellar.org" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#FAB638] text-black font-bold text-lg hover:bg-[#FACC75] transition-colors skew-x-[-10deg] shadow-[0_0_30px_rgba(250,182,56,0.3)] inline-block">
                                <span className="block skew-x-[10deg] flex items-center gap-2">Know More <ArrowRight size={20} /></span>
                            </a>
                            <a href="https://developers.stellar.org/docs" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors skew-x-[-10deg] inline-block">
                                <span className="block skew-x-[10deg]">View Docs</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Hero Visual - Layered Collage */}
                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        {/* Main Banner Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 left-0 w-full h-[85%] z-10 rounded-[2.5rem] overflow-hidden border-2 border-[#FAB638]/50 shadow-[0_0_80px_rgba(250,182,56,0.4)]"
                        >
                            <img src={StellarBanner} alt="Stellar Bootcamp Banner" className="w-full h-full object-cover" />

                            {/* Official Partner Badge */}
                            <div className="absolute top-6 left-6 bg-white/5 backdrop-blur-md px-5 py-3 border border-[#FAB638]/50 rounded-xl shadow-[0_0_20px_rgba(250,182,56,0.2)]">
                                <div className="text-[#FAB638] font-bold text-[10px] tracking-widest uppercase mb-0.5">Official Partner</div>
                                <div className="text-white font-bold text-sm">Stellar Development Foundation</div>
                            </div>
                        </motion.div>

                        {/* Overlapping Award Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, x: 20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute bottom-0 right-0 w-[65%] h-[55%] z-20 rounded-[2rem] overflow-hidden border-[4px] border-[#FAB638]/30 shadow-[0_0_60px_rgba(250,182,56,0.3)]"
                        >
                            <img src={StellarAward} alt="Stellar Award" className="w-full h-full object-cover" />

                            {/* Floating Label */}
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                <div className="text-white text-xs font-bold flex items-center gap-2">
                                    <Trophy size={14} className="text-[#FAB638]" />
                                    Excellence Awarded
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Globe */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-20 -right-40 z-0 opacity-20 pointer-events-none mix-blend-screen"
                        >
                            <Globe size={400} className="text-[#FAB638]" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            className="absolute top-60 right-80 z-0 opacity-20 pointer-events-none mix-blend-screen"
                        >
                            <Globe size={400} className="text-[#FAB638]" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="w-[95%] max-w-[1800px] mx-auto relative z-10 flex flex-col items-center">

                {/* Section 2: Partnership Announcement */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-16 items-center mb-20 bg-black/40 backdrop-blur-sm p-10 rounded-3xl border border-[#FAB638]/20 shadow-xl w-full"
                >
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group border-2 border-[#FAB638] hover:shadow-[0_0_40px_rgba(250,182,56,0.3)] transition-all duration-500">
                        <img src={Steller} alt="Stellar Partnership" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <span className="text-white text-xl font-bold font-display">Geeks of Gurukul: Bridging Financial Inclusion</span>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                            Empowering Global Finance with <span className="text-[#FAB638]">Stellar & GoG</span>
                        </h2>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            <strong className="text-white">Geeks of Gurukul</strong> collaborates with <strong className="text-white">Stellar</strong> to drive <strong className="text-white">financial inclusion</strong> and innovation. Our programs focus on leveraging Stellar's <strong className="text-white">low-cost, high-speed network</strong> to create accessible <strong className="text-white">financial services</strong> for underserved communities worldwide.
                        </p>
                        <p className="text-gray-500 text-sm mt-8">
                            #GoGxStellar #FinancialInclusion #BlockchainForGood
                        </p>
                    </div>
                </motion.div>

                {/* Section 3: Stellar Core Features */}
                <div className="mb-16 w-full">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-16 text-center">
                        Stellar <span className="text-[#FAB638]">Core Features</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group relative p-8 md:p-10 bg-black/40 border border-white/5 rounded-2xl hover:border-[#FAB638]/50 hover:bg-[#FAB638]/5 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="absolute top-4 right-4 text-gray-700 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                <feature.icon size={48} className="text-[#FAB638] mb-6 drop-shadow-[0_0_15px_rgba(250,182,56,0.3)]" />
                                <h3 className="text-2xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* SECTION: INSIDE THE BOOTCAMP (PRESERVED & OPTIMIZED) */}
                <section className="py-20 relative overflow-hidden z-10 w-full">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black mb-4 font-display">Inside the <span className="text-[#FAB638]">Workshop</span></h2>
                            <p className="text-gray-400">Some photos from our recent Soroban workshops.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Crowd Photo */}
                            <div className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#FAB638] transition-colors">
                                <img src={StellarCrowd} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" alt="Stellar Workshop Crowd" />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                    <span className="text-[#FAB638] font-bold text-xl block mb-1">The Community</span>
                                    <span className="text-gray-300 text-sm">Over 500+ developers building on Soroban.</span>
                                </div>
                            </div>

                            {/* Award Photo */}
                            <div className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#FAB638] transition-colors">
                                <img src={StellarAward1} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" alt="Stellar Award Ceremony" />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                    <span className="text-[#FAB638] font-bold text-xl block mb-1">Excellence Awarded</span>
                                    <span className="text-gray-300 text-sm">Recognizing the best DApps built during the hackathon.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Real Use Cases (New) */}
                <section className="py-20 w-full relative z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <p className="text-[#FAB638] font-mono uppercase tracking-widest mb-4">See Stellar in action</p>
                            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                                Real use cases, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAB638] to-[#FFE5B4]">live today</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                From global remittances to tokenizing treasuries, see how organizations use Stellar to deliver real-world financial services.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Stellar for payments",
                                    desc: "Scale your payments globally and expand to new markets with 24/7 settlement on the Stellar network.",
                                    img: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/c34184f7b5ff1e80fa78a700c52e4f856b961341-4200x3508.png",
                                    link: "https://stellar.org/use-cases/payments"
                                },
                                {
                                    title: "Stellar for asset tokenization",
                                    desc: "Tokenize real-world value on the network built for asset issuance.",
                                    img: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/85b07bd18b7b74f4f25538917f2ab6bdbc4dc3d5-4200x3508.png",
                                    link: "https://stellar.org/use-cases/tokenization"
                                },
                                {
                                    title: "Where defi meets the real world",
                                    desc: "Build the future of financial access on an unmatched network of real-world utility and scalable decentralized finance.",
                                    img: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/1a053d57535f71378e8298dc41142583bd7e4ea3-506x405.png",
                                    link: "https://stellar.org/use-cases/defi"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#FAB638]/50 transition-all duration-300 hover:bg-white/10"
                                >
                                    <div className="h-64 w-full p-8 flex items-center justify-center bg-black/20">
                                        <img src={item.img} alt={item.title} className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-[#FAB638] transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 mb-8 leading-relaxed min-h-[80px]">{item.desc}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FAB638] font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                                            View <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: Youth Engagement / Learn & Earn */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-500/10 to-black/40 border border-purple-500/30 p-12 md:p-20 text-center mb-32 w-full"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10 leading-tight">
                        Stellar <span className="text-[#FAB638]">Learn & Earn</span>: Empowering Youth
                    </h2>
                    <p className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl mb-10 relative z-10">
                        Through our collaboration, Geeks of Gurukul offers students unique opportunities to learn about Stellar and earn Lumens (XLM) through educational modules and hands-on projects.
                    </p>
                    <div className="grid grid-cols-3 gap-8 justify-center items-center mb-10 relative z-10">
                        {youthStats.map((stat, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-gray-400 uppercase text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <HoverGlowBtn className="relative z-10 bg-[#34D562] hover:bg-[#2bc455] text-black">
                        Join Our Community
                    </HoverGlowBtn>
                </motion.div>

                {/* Section 5: Upcoming Events */}
                <div className="mb-20 w-full">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-16 text-center">
                        Stellar <span className="text-[#FAB638]">Community Events</span>
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-8 w-full">
                        {[
                            { date: "10/01/2026", name: "Soroban Smart Contract Workshop", desc: "Hands-on coding session for Rust-based smart contracts." },
                            { date: "25/01/2026", name: "Stellar Payment Network Hackathon", desc: "Build payment solutions for emerging markets." },
                            { date: "18/02/2026", name: "GoG & Stellar AMA Session", desc: "Live Q&A with Stellar developers and GoG mentors." },
                        ].map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-[#FAB638]/50 hover:bg-[#FAB638]/5 transition-all duration-300 relative overflow-hidden group"
                            >
                                <p className="text-sm font-mono text-purple-400 mb-4 relative z-10">coming soon</p>
                                <h3 className="text-3xl font-bold text-white mb-4 font-display relative z-10 leading-tight">{event.name}</h3>
                                <p className="text-gray-400 relative z-10">{event.desc}</p>
                                <HoverGlowBtn className="mt-8 relative z-10 text-sm bg-[#34D562] hover:bg-[#2bc455] text-black">
                                    Register Now
                                </HoverGlowBtn>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stellar;
