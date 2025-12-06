import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Zap, Code, Box, Terminal, Activity, Users } from 'lucide-react';
import { HoverGlowBtn } from '../components/ui/MovingBorder';
import ParticleBackground from '../components/ui/ParticleBackground';
import AptosCrowd from '../assets/Aptos-Crowd1.png';
import AptosHappy from '../assets/Aptos-happy-coding.jpg';
import AptosHackathon1 from '../assets/Aptos-happy-coding.jpg'; // Placeholder: File not found
import AptosHackathon2 from '../assets/Aptos-happy-coding.jpg'; // Placeholder: File not found

import IndianStudent1 from '../assets/IndianStudent1.png';
import IndianStudent2 from '../assets/IndianStudent2.png';
import IndianStudent3 from '../assets/IndianStudent3.png';
import IndianStudent4 from '../assets/IndianStudent4.png';
import IndianStudent5 from '../assets/IndianStudent5.png';

const Aptos: React.FC = () => {
    const hackathons = [
        { name: "Aptos Move Hackathon: 2026", date: "20-03-2026", location: "Global Online", desc: "Build innovative DApps with Move." },
        { name: "GoG Aptos Challenge: Q2 2025", date: "12-02-2026", location: "Online", desc: "Solve challenges, earn Aptos bounties." },
        { name: "GoG World Tour: Delhi Edition", date: "23-01-2026", location: "New Delhi, India", desc: "Connect with GoG core team and developers." },
    ];

    const studentAvatars = [IndianStudent1, IndianStudent2, IndianStudent3, IndianStudent4, IndianStudent5];

    return (
        <section className="relative min-h-screen pt-24 pb-20 bg-transparent font-sans overflow-hidden">


            {/* Global Particle Background - Fixed at z-0 */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <ParticleBackground mode="aurora" primaryColor="#2ED8A7" secondaryColor="#000000" />
            </div>

            {/* Custom Background: Electric Grid & Slanted Lines */}
            <div className="absolute inset-0 bg-black pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(45,216,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,216,167,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 5px, #2DD8A7 5px, #2DD8A7 6px)' }}></div>
            </div>

            <div className="w-[90%] max-w-[1800px] mx-auto relative z-10">

                {/* Section 1: Hero - Aptos Introduction */}
                <div className="flex flex-col lg:flex-row gap-12 items-center min-h-[80vh] mb-20">
                    <div className="lg:w-1/2 relative z-20">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '200px' }}
                            transition={{ duration: 1 }}
                            className="h-4 bg-[#2DD8A7] mb-12 transform -skew-x-12"
                        ></motion.div>

                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="text-8xl md:text-[11rem] font-black text-white italic tracking-tighter leading-[0.8] mb-6 transform -skew-x-6"
                        >
                            APTOS
                        </motion.h1>

                        <motion.h2
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-10 transform -skew-x-6"
                        >
                            THE LAYER 1 FOR <br /> EVERYONE
                        </motion.h2>

                        <div className="flex gap-6">
                            <a href="https://aptosnetwork.com" target="_blank" rel="noopener noreferrer">
                                <button className="px-10 py-4 bg-[#34D562] text-black font-bold text-xl rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(52,213,98,0.5)] transition-all duration-300">
                                    BUILD WITH APTOS
                                </button>
                            </a>
                            <a href="https://aptos.dev" target="_blank" rel="noopener noreferrer" className="px-12 py-5 border-2 border-white/20 text-white font-bold italic transform -skew-x-12 hover:bg-white/10 transition-colors text-xl flex items-center justify-center">
                                DOCS
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative h-[600px] w-full">
                        {/* Interactive Code Block Visual */}
                        <div className="absolute inset-0 bg-[#111]/90 border border-[#2DD8A7]/30 p-8 transform -skew-x-6 shadow-[20px_20px_0px_#2DD8A7]">
                            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-gray-500 font-mono text-sm">move_module.move</span>
                            </div>
                            <pre className="font-mono text-[#2DD8A7] text-sm md:text-base leading-relaxed overflow-hidden">
                                {`module aptos_framework::coin {
    struct Coin has store, key {
        value: u64,
    }

    /// Geeks of Gurukul Grant Program Example
    public fun mint_gog_grant(
        account: address,
        amount: u64,
    ) acquires CoinStore {
        // Create new Coin object
        let new_coin = Coin { value: amount };
        move_to_with_resource_group(account, new_coin);
        // Event: GoG Grant Distributed
    }
}
`}
                            </pre>
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-3 h-6 bg-[#2DD8A7] mt-2"
                            ></motion.div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Partnership Announcement */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-32 group"
                >
                    <img src={AptosCrowd} alt="Geeks of Gurukul x Aptos Partnership" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-12">
                        <h3 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                            <span className="text-[#2DD8A7]">Geeks of Gurukul</span> x Aptos: Driving Student Innovation
                        </h3>
                    </div>
                    <div className="absolute top-10 right-10 flex items-center gap-3 px-6 py-3 rounded-full bg-black/80 backdrop-blur-md border border-[#2DD8A7]/50 text-[#2DD8A7] text-sm font-bold uppercase shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-[#2DD8A7] animate-pulse"></span> Partnership Active
                    </div>
                </motion.div>

                {/* Section 3: Core Features - Slanted Grid */}
                <div className="mb-32">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-16 text-center">
                        Aptos <span className="text-[#2DD8A7]">Core Features</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Move Language", icon: Code, desc: "Designed primarily for safe asset management and strict access control, ensuring secure dApp development." },
                            { title: "Parallel Execution", icon: Zap, desc: "Aptos's Block-STM engine allows for maximum throughput via parallel transaction processing, boosting efficiency." },
                            { title: "Modular Design", icon: Box, desc: "Supports frequent upgrades and rapid innovation without network downtime, ensuring a future-proof blockchain." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -20, backgroundColor: '#1a1a1a', borderColor: '#2DD8A7' }}
                                className="bg-black/40 p-10 border-l-4 border-[#2DD8A7] transform -skew-x-6 relative group overflow-hidden shadow-xl"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2DD8A7]/10 rounded-bl-[100px] group-hover:bg-[#2DD8A7]/20 transition-colors"></div>
                                <feature.icon size={56} className="text-white mb-8 relative z-10" />
                                <h3 className="text-3xl font-bold text-white mb-4 italic font-display">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                <div className="mt-8 flex justify-end">
                                    <MoveRight className="text-[#2DD8A7] transform group-hover:translate-x-2 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 4.5: University Hackathons Gallery */}
                <div className="mb-32">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-16 text-center">
                        Building on <span className="text-[#2DD8A7]">Campus</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { img: AptosHackathon1, title: "University Hackathon", desc: "Students building next-gen DApps." },
                            { img: AptosCrowd, title: "Community Meetup", desc: "Growing the Aptos ecosystem together." },
                            { img: AptosHackathon2, title: "Dev Challenge", desc: "Pushing the boundaries of Move." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#2DD8A7] transition-all duration-500 h-[400px]"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-gray-300 group-hover:text-[#2DD8A7] transition-colors duration-300 font-display mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 group-hover:text-white transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 4.8: What runs on Aptos? */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                            What runs on <span className="text-[#2DD8A7]">Aptos?</span>
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-400 italic">Just about everything.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Stablecoins & Payments",
                                desc: "Aptos is home to the fastest digital dollar—with native support for USDT, USDC, and USDe, plus an expanding network of payment partners around the world.",
                                icon: Activity
                            },
                            {
                                title: "Structured Finance",
                                desc: "Unlock institutional capital onchain. Aptos supports tokenized treasuries, credit, and other RWAs with the infra capital markets demand.",
                                icon: Box
                            },
                            {
                                title: "Decentralized Finance",
                                desc: "Unlock the true power of DeFi: no lags, no limits. Parallel execution, sub-second finality, and composability for everything on-chain.",
                                icon: Zap
                            },
                            {
                                title: "Media & Entertainment",
                                desc: "Create experiences that never stall. Aptos gives media and entertainment apps the speed and scale to deliver content instantly, while making ownership and rewards simple to prove and share.",
                                icon: Users
                            },
                            {
                                title: "AI & Next-Gen Apps",
                                desc: "The next internet is here. AI, DePIN, and beyond, powered by Aptos. For builders, it’s the performance to launch what’s never been done before. For consumers, it’s apps that think faster, connect smarter, and move value instantly, without the friction.",
                                icon: Terminal
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#2DD8A7] transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,216,167,0.15)] flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#2DD8A7]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#2DD8A7] group-hover:text-black">
                                    <item.icon className="w-8 h-8 text-[#2DD8A7] group-hover:text-black transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                                    {item.desc}
                                </p>

                                {/* <div className="mt-auto">
                                    <span className="text-[#2DD8A7] font-bold text-sm uppercase tracking-wider border-b border-transparent group-hover:border-[#2DD8A7] transition-all pb-1">
                                        Learn More
                                    </span>
                                </div> */}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 4: Youth Engagement / Student Developer Hub */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2DD8A7]/10 to-black/40 border border-[#2DD8A7]/30 p-12 md:p-20 text-center mb-32"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10 leading-tight">
                        Nurturing <span className="text-[#2DD8A7]">Aptos Talent</span>: Our Student Developer Hub
                    </h2>
                    <p className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl mb-10 relative z-10">
                        Geeks of Gurukul provides dedicated resources, mentorship, and a vibrant community for students to master the Aptos blockchain and the Move programming language.
                    </p>
                    <div className="flex justify-center -space-x-4 mb-10 relative z-10">
                        {studentAvatars.map((avatar, i) => (
                            <img key={i} src={avatar} alt="Student Developer" className="w-16 h-16 rounded-full border-4 border-black shadow-lg object-cover" />
                        ))}
                        <div className="w-16 h-16 rounded-full border-4 border-black bg-[#2DD8A7] text-black flex items-center justify-center font-bold text-lg shadow-lg">
                            +500
                        </div>
                    </div>
                    <HoverGlowBtn className="relative z-10">
                        Join Dev Community
                    </HoverGlowBtn>
                </motion.div>

                {/* Section 5: Upcoming Events */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-16 text-center">
                        Aptos <span className="text-[#2DD8A7]">Events & Workshops</span>
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {hackathons.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-[#2DD8A7]/50 hover:bg-[#2DD8A7]/5 transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-[#2DD8A7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-y-6"></div>
                                <p className="text-sm font-mono text-[#2DD8A7] mb-4 relative z-10">comming soon | {event.location}</p>
                                <h3 className="text-3xl font-bold text-white mb-4 font-display relative z-10 leading-tight">{event.name}</h3>
                                <p className="text-gray-400 relative z-10">{event.desc}</p>
                                <HoverGlowBtn className="mt-8 relative z-10 text-sm">
                                    View Details
                                </HoverGlowBtn>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Aptos;
