import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Library, Share2, Users, Code, Zap, Globe, Cpu, Rocket, MapPin, Calendar } from 'lucide-react';
import { HoverGlowBtn } from '../components/ui/MovingBorder';
import BlueEmbers from '../components/ui/BlueEmbers';
import EduHeroImg from '../assets/EduchainXGeeksofGurukul.png';
import EduGroup from '../assets/Educhain-group-pic.png';
import EduHackathon from '../assets/EduchainHackathon.jpg';
import EduHappyCoding from '../assets/Educhain-happy-coding.jpeg';
import EduchainCertificate from '../assets/Educhain.jpeg';
import ShivaImg from '../assets/Shiva Bhattarjee.png';
import AshishImg from '../assets/Ashish Kumar.jpg';
import PrithviImg from '../assets/Prithvi Sinha.jpeg';
import HarshitaImg from '../assets/Harshita Lakhchaura.png';

const Educhain: React.FC = () => {
    const timelineEvents = [
        { year: "Year 1", title: "Verifiable Credentials", icon: Award, desc: "Issue tamper-proof, on-chain degrees and certificates instantly verifiable globally." },
        { year: "Year 2", title: "Sovereign Student Identity", icon: GraduationCap, desc: "Students own their academic records forever, independent of institutions, securely stored on-chain." },
        { year: "Year 3", title: "Decentralized Library", icon: Library, desc: "Immutable, censorship-resistant access to global research papers, journals, and knowledge databases." },
        { year: "Year 4", title: "Peer-to-Peer Learning", icon: Share2, desc: "Direct incentivization for tutors and content creators via micro-payments, fostering a global learning ecosystem." },
    ];

    const upcomingEvents = [
        { date: "01-02-2026", name: "Future of EdTech Hackathon", desc: "Build DApps for decentralized education with GoG mentors." },
        { date: "29-02-2026", name: "EduChain Smart Contract Workshop", desc: "Hands-on session for deploying academic contracts." },
        { date: "05-03-2026", name: "GoG & EduChain Mentorship Program", desc: "Connect with industry leaders and blockchain experts." },
    ];

    const winners = [
        { name: "Shiva Bhattacharjee", college: "Royal Global University", location: "Guwahati, Assam", prize: "$500", img: ShivaImg },
        { name: "Ashish Kumar", college: "Millennium Group of Institutions", location: "Bhopal, MP", prize: "$250", img: AshishImg },
        { name: "Prithvi Sinha", college: "NIT Rourkela", location: "Rourkela, Orissa", prize: "$350", img: PrithviImg },
        { name: "Harshita Lakhchaura", college: "IIIT Bhopal", location: "Bhopal, MP", prize: "$250", img: HarshitaImg },
    ];

    const moreWinners = [
        "PIYUSH NIRANJAN", "Priti Kumari", "Ankit Pandram", "Ashish Kumar", "Ankit Jaiswal", "Prithvi Sinha"
    ];

    const bansalWinners = [
        "Arnav Dwivedi", "Aditya Rajput", "Aman Kushwah", "Drashti Paliwal", "Amrendra Patel", "Atul Saxena"
    ];

    const iiitWinners = [
        "Harshita Lakhchaura", "Shreem Asati"
    ];

    return (
        <section className="relative min-h-screen pt-24 pb-20 bg-[#000814] font-sans overflow-hidden">
            {/* Global Blue Embers Background */}
            <BlueEmbers />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,144,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,144,250,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="w-[95%] max-w-[1600px] mx-auto relative z-10">

                {/* Section 1: Hero - Refined Layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[70vh] mb-20 relative">
                    {/* Left: Text Content */}
                    <div className="lg:w-[45%] z-20 text-left pl-8 lg:pl-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-none tracking-tighter">
                                EDU<span className="text-blue-500">CHAIN</span>
                            </h1>
                            <h2 className="text-3xl md:text-5xl font-light text-gray-300 mb-8 tracking-wide">
                                x Geeks of Gurukul
                            </h2>
                            <p className="text-lg text-gray-400 max-w-lg leading-relaxed mb-10">
                                We are dedicated to spreading knowledge and awareness about the EduChain blockchain. We are building the decentralized future of academia.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://educhain.xyz/" target="_blank" rel="noopener noreferrer">
                                    <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)]">
                                        Know More
                                    </button>
                                </a>
                                <a href="https://devdocs.educhain.xyz/" target="_blank" rel="noopener noreferrer">
                                    <button className="px-8 py-3 rounded-full border border-blue-500 text-blue-400 font-bold hover:bg-blue-500/10 transition-all">
                                        Docs
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Centered Image with Glow & Floating Icons */}
                    <div className="lg:w-[55%] relative z-10 flex justify-center items-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-blue-500/30 blur-[60px] rounded-full animate-pulse"></div>

                            {/* Main Image with Blue Border */}
                            <img
                                src={EduHeroImg}
                                alt="Educhain x GoG"
                                className="w-[400px] md:w-[500px] h-auto object-contain relative z-10 rounded-2xl border-2 border-blue-500/50 shadow-[0_0_30px_rgba(0,144,250,0.3)] bg-black/20 backdrop-blur-sm"
                            />

                            {/* Floating Icons */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-12 -right-8 bg-black/80 backdrop-blur border border-blue-500/50 p-4 rounded-xl text-blue-400 shadow-xl z-20"
                            >
                                <GraduationCap size={32} />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur border border-blue-500/50 p-4 rounded-xl text-cyan-400 shadow-xl z-20"
                            >
                                <Cpu size={32} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Section 2: Community & Vibe (Group Pic) */}
                <div className="mb-32 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-2 opacity-20 blur-md group-hover:rotate-1 transition-transform duration-500"></div>
                            <img src={EduGroup} alt="Community Vibe" className="relative rounded-3xl w-full h-[450px] object-cover shadow-2xl border border-white/10 z-10 grayscale-0" />
                        </motion.div>

                        <div className="pl-4">
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                                CAMPUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">VIBES</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                It's not just about code it is about the people. We are building a movement of blockchain and education. From campus workshops to swag drops, the Geeks of Gurukul vibe is unmatched.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">70+</div>
                                    <div className="text-sm text-blue-400 uppercase tracking-wider">Campuses</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">5000+</div>
                                    <div className="text-sm text-blue-400 uppercase tracking-wider">Students</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Core Features (Moved Up) */}
                <div className="py-20 mb-20">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-20 text-center">
                        EduChain <span className="text-blue-500">Core Features</span>
                    </h2>

                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent"></div>

                        {timelineEvents.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px" }}
                                className={`flex items-center justify-between mb-24 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
                            >
                                {/* Card */}
                                <div className="w-[42%] bg-black/40 border border-white/10 p-8 rounded-2xl relative text-left hover:border-blue-500/50 transition-colors shadow-2xl">
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-black z-10 ${i % 2 === 0 ? '-right-[calc(8%+13px)]' : '-left-[calc(8%+13px)]'} group-hover:scale-125 transition-transform shadow-[0_0_20px_rgba(0,100,255,0.4)]`}></div>
                                    <item.icon size={32} className="text-blue-500 mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">{item.title}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                                </div>

                                {/* Spacer */}
                                <div className="w-[42%]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 4: Offline Impact (Consolidated Hackathons & Events) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">OFFLINE <span className="text-blue-500">IMPACT</span></h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We've organized massive offline hackathons, bootcamps, and awareness sessions. Real building, real connections.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Vertical Hackathon Card */}
                        <div className="lg:col-span-5 h-[600px] relative group rounded-3xl overflow-hidden border border-white/10">
                            <img src={EduHackathon} alt="Past Hackathon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
                                <div className="bg-blue-600 self-start px-4 py-1 rounded-full text-white text-xs font-bold mb-4 uppercase tracking-wider">
                                    Past Event
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Mega Hackathon 2025</h3>
                                <p className="text-gray-300 text-sm">24 Hours of non-stop building. Over 500 participants shipped dApps on EduChain.</p>
                            </div>
                        </div>

                        {/* Past Events Grid */}
                        <div className="lg:col-span-7 grid gap-6">
                            {/* Large Event Card */}
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center h-full">
                                <img src={EduHappyCoding} alt="Workshop" className="w-full md:w-1/2 h-64 object-cover rounded-2xl" />
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Offline Bootcamps</h3>
                                    <p className="text-gray-400 mb-6">
                                        Hands-on workshops where students learned Solidity and deployed their first smart contracts on EduChain.
                                    </p>
                                    <div className="flex gap-4 text-sm text-blue-400 font-mono">
                                        <span className="flex items-center gap-2"><MapPin size={14} /> 7 Cities</span>
                                        <span className="flex items-center gap-2"><Users size={14} /> 5000+ Devs</span>
                                    </div>
                                </div>
                            </div>

                            {/* Smaller Stats/Info Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8">
                                    <Calendar className="text-blue-500 mb-4" size={32} />
                                    <h4 className="text-xl font-bold text-white mb-2">Monthly Meetups</h4>
                                    <p className="text-gray-400 text-sm">Regular community gatherings to discuss EduChain updates.</p>
                                </div>
                                <div className="bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8">
                                    <Rocket className="text-blue-500 mb-4" size={32} />
                                    <h4 className="text-xl font-bold text-white mb-2">Project Launches</h4>
                                    <p className="text-gray-400 text-sm">10+ Student projects launched on mainnet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Stats (Corrected & Transparent) */}
                <div className="mb-32">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Workshops Organized", value: "35+" },
                            { label: "Students Trained", value: "5000+" },
                            { label: "Hackathons", value: "15+" },
                            { label: "Projects Built", value: "300+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-colors">
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-blue-400 text-sm uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: Bounty Winners */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            $20,000+ <span className="text-blue-500">BOUNTIES</span> DISTRIBUTED
                        </h2>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            During Geeks of Gurukul's association with EduChain, we have distributed over $20,000 in bounties to recognize and reward the top talent building the future of decentralized education.
                        </p>
                    </div>

                    {/* Certificate Showcase */}
                    <div className="flex justify-center mb-20">
                        <div className="relative p-2 bg-white/5 rounded-3xl border border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 group-hover:bg-blue-500/30 transition-colors"></div>
                            <img src={EduchainCertificate} alt="Educhain Certificate" className="rounded-2xl max-w-full md:max-w-4xl shadow-lg" />
                        </div>
                    </div>

                    {/* Winners Grid - Enhanced Design */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {winners.map((winner, i) => (
                            <div key={i} className="bg-[#0B1221] border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 group relative overflow-hidden flex flex-col items-center text-center">
                                {/* Prize Badge */}
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-bl-2xl shadow-lg z-10">
                                    {winner.prize}
                                </div>

                                {/* Avatar with Glow */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full group-hover:bg-blue-500/50 transition-all"></div>
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/50 relative z-10 group-hover:scale-105 transition-transform duration-300">
                                        <img src={winner.img} alt={winner.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{winner.name}</h3>
                                <p className="text-blue-400 text-sm font-medium mb-1 line-clamp-1">{winner.college}</p>
                                <p className="text-gray-500 text-xs flex items-center gap-1 justify-center">
                                    <MapPin size={12} /> {winner.location}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* More Winners - Rising Stars Style */}
                    <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
                            <Award className="text-blue-500" /> Rising Stars
                        </h3>

                        <div className="grid md:grid-cols-3 gap-12">
                            {/* General Winners */}
                            <div>
                                <h4 className="text-lg font-bold text-blue-400 mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                                    <Zap size={18} /> Top Contributors
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {moreWinners.map((name, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 rounded-full text-gray-300 text-sm transition-all cursor-default">
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bansal Group of Institutes */}
                            <div>
                                <h4 className="text-lg font-bold text-blue-400 mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                                    <GraduationCap size={18} /> Bansal Group of Institutes
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {bansalWinners.map((name, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 rounded-full text-gray-300 text-sm transition-all cursor-default">
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* IIIT Bhopal */}
                            <div>
                                <h4 className="text-lg font-bold text-blue-400 mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                                    <Code size={18} /> IIIT Bhopal
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {iiitWinners.map((name, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 rounded-full text-gray-300 text-sm transition-all cursor-default">
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6: Upcoming Events (Preserved) */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl text-left">
                        <h3 className="text-4xl font-display font-bold text-white mb-6">Upcoming <span className="text-blue-500">Events</span></h3>
                        <div className="space-y-6">
                            {upcomingEvents.map((event, i) => (
                                <div key={i} className="pb-4 border-b border-white/5 last:border-none">
                                    {/* <p className="text-sm font-mono text-blue-400 mb-1">{event.date}</p> */}
                                    <p className="text-xl font-bold text-white">{event.name}</p>
                                    <p className="text-gray-500 text-sm">{event.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Community Join Card */}
                    <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl text-left flex flex-col justify-center items-center text-center relative overflow-hidden group">
                        {/* Decorative Background Icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600/10 group-hover:text-blue-600/20 transition-colors duration-500 pointer-events-none">
                            <Globe size={300} strokeWidth={0.5} />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold text-white mb-4">Join the Revolution</h3>
                            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
                                Be part of the first decentralized academic network. Build, learn, and grow with Geeks of Gurukul.
                            </p>
                            <a href="https://discord.gg/geeksofgurukul" target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] flex items-center gap-2 mx-auto"
                                >
                                    <Users size={20} />
                                    Join Discord Community
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Educhain;
