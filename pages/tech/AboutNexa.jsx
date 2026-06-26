import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck, Cpu } from 'lucide-react';

import FounderImg from '../../assets/tech/Founders.jpg';
import COOImg from '../../../COO.png'; // CTO and COO might be swapped in filename
import CTOImg from '../../../CTO.png';
import S1Img from '../../../assets/images/founder.png';

import RajImg from '../../../assets/team/raj-kumar-sahoo.jpg';
import VivekImg from '../../../assets/team/vivek-yadav.jpg';
import NiteshImg from '../../../assets/team/Nitesh.jpg';

import AmritaImg from '../../../assets/tech-team/Amrita_Sinha.png';
import AshuImg from '../../../assets/tech-team/Ashu_Patel.png';
import AyushiImg from '../../../assets/tech-team/Ayushi_Rai.png';
import DiyanshuImg from '../../../assets/tech-team/Diyanshu_Kumar_Sahu.png';
import GouriImg from '../../../assets/tech-team/Gouri_Thapa.png';
import KrishnaSaratheImg from '../../../assets/tech-team/Krishna_Sarathe.png';
import RuchitaImg from '../../../assets/tech-team/Ruchita_Singh.png';
import SaurabImg from '../../../assets/tech-team/Saurab_Yadav.png';
import VishalImg from '../../../assets/tech-team/Vishal_Maurya.png';

const Embers = () => {
    const [embers] = React.useState(() => Array.from({ length: 40 }).map(() => ({
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 7,
        xOffset: Math.random() * 100 - 50,
    })));

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {embers.map((ember, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-neon-emerald"
                    style={{
                        width: ember.size,
                        height: ember.size,
                        left: `${ember.left}%`,
                        bottom: '-10%',
                        boxShadow: '0 0 8px 1px #10b981'
                    }}
                    animate={{
                        y: ['0vh', '-120vh'],
                        x: [0, ember.xOffset, ember.xOffset * 1.5],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: ember.duration,
                        delay: ember.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            ))}
        </div>
    );
};

export default function AboutNexa() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const leaders = [
        {
            image: S1Img,
            name: "Mr. \u00A0 Chintan \u00A0Vatsa\u00A0 Jha",
            role: "Founder\u00A0 & \u00A0 CEO",
            quote: "Our Vision Is To Empower Innovators By Building A Future-Ready Technical Ecosystem. At QuantNexa, We Believe In Architecting Next-Gen Platforms That Turn Groundbreaking Ideas Into Tangible Reality.",
            // badge: "SYS FOUNDER"
        },
        {
            image: CTOImg,
            name: "Mr. \u00A0 Ajay \u00A0 Katana",
            role: "Chief \u00A0Technology\u00A0 Officer",
            quote: "In Today's Rapidly Evolving Technological Landscape, Scalability And Reliability Are Key. At QuantNexa, We Take Pride In Engineering Advanced Solutions Utilizing The Latest Technologies To Drive Global Impact.",
            // badge: "CHIEF TECH"
        },
        {
            image: COOImg,
            name: "Mr.\u00A0 Neeraj \u00A0Sahu",
            role: "Chief \u00A0 Operating \u00A0 Officer",
            quote: "Our Goal Is To Streamline Complex Technical Operations Into Seamless Experiences. We Are Committed To Ensuring That Every Product We Launch Excels In Performance, Usability, And Reach.",
            // badge: "CHIEF OPS"
        },
    ];

    const techTeam = [
        { name: "Amrita Sinha", image: AmritaImg },
        { name: "Ashu Patel", image: AshuImg },
        { name: "Ayushi Rai", image: AyushiImg },
        { name: "Diyanshu Kumar Sahu", image: DiyanshuImg },
        { name: "Gouri Thapa", image: GouriImg },
        { name: "Krishna Sarathe", image: KrishnaSaratheImg },
        { name: "Ruchita Singh", image: RuchitaImg },
        { name: "Saurab Yadav", image: SaurabImg },
        { name: "Vishal Maurya", image: VishalImg }
    ];

    return (
        <main className="relative w-full pb-20 select-none overflow-x-hidden">
            <Embers />
            
            {/* Header Section */}
            <section className="relative pt-24 pb-8 md:pb-16 px-6 md:px-12 flex flex-col items-center border-b border-cyber-border/20 z-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[180px] pointer-events-none -z-10" />
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[1px] w-12 bg-neon-green/40 shadow-[0_0_4px_#22ff66]" />
                        <span className="font-mono text-xs text-neon-green tracking-[0.35em] uppercase font-black">WHO WE ARE</span>
                        <div className="h-[1px] w-12 bg-neon-green/40 shadow-[0_0_4px_#22ff66]" />
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-cyber font-black text-white tracking-tight uppercase mb-6 drop-shadow-[0_0_15px_rgba(34,255,102,0.15)] leading-none">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-emerald text-neon-glow">QuantNexa</span>
                    </h1>
                    
                    <p className="text-cyber-text text-sm md:text-base font-mono max-w-2xl mx-auto">
                        Pioneering next-generation technical solutions and AI-driven platforms with a focus on enterprise architecture and massive scalability.
                    </p>
                </motion.div>
            </section>

            {/* Content Body */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-8 md:pt-20">
                
                {/* Intro Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row gap-12 items-center mb-32"
                >
                    <div className="lg:w-5/12 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/30 to-transparent rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-2xl overflow-hidden border border-cyber-border/40 group-hover:border-neon-green/60 transition-all duration-500">
                            <div className="hologram-scanner" />
                            <img
                                src={FounderImg}
                                alt="Founders"
                                className="w-full h-[250px] md:h-[350px] object-cover object-center filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                    <div className="lg:w-7/12 space-y-6 font-mono text-sm md:text-base text-cyber-text leading-relaxed">
                        <div className="flex items-center gap-2 mb-4">
                            <Cpu className="w-5 h-5 text-neon-green" />
                            <h3 className="text-white font-cyber text-2xl uppercase tracking-wider">The Mission</h3>
                        </div>
                        <p>
                            In the rapidly advancing technological landscape, businesses and innovators face continuous hurdles when scaling their digital operations. Many tech companies prioritize generic tools, leaving complex, highly specific enterprise problems unsolved.
                        </p>
                        <p>
                            Recognizing this gap, we established <span className="text-neon-green font-bold">QuantNexa</span> with a singular mission to build Next-Gen Products, focusing specifically on AI integration and scalable software architecture.
                        </p>
                        <div className="flex items-center gap-2 pt-4 border-t border-cyber-border/20 text-neon-emerald text-[10px] uppercase font-bold tracking-widest">
                            <ShieldCheck className="w-4 h-4" />
                            <span>System Status: Fully Operational</span>
                        </div>
                    </div>
                </motion.div>

                {/* Guiding Team */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-8 w-1.5 bg-neon-green shadow-[0_0_8px_#22ff66]" />
                        <h2 className="text-3xl md:text-5xl font-cyber font-black text-white uppercase tracking-tight">The <span className="text-neon-green text-neon-glow">Guiding</span> Team</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {leaders.map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-panel rounded-xl p-6 border border-cyber-border/40 hover:border-neon-green/50 transition-all duration-300 relative group flex flex-col"
                            >
                                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#22ff66] hologram-scanner" />
                                
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-20 h-20 rounded-md overflow-hidden border border-cyber-border/50 shrink-0">
                                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] text-neon-green font-mono uppercase tracking-[0.2em] mb-6 font-bold">{leader.badge}</div>
                                        <h3 className="text-white font-cyber text-lg uppercase leading-none ml">{leader.name}</h3>
                                        <div className="text-cyber-text text-xs mt-1 text-neon-emerald">{leader.role}</div>
                                    </div>
                                </div>
                                <div className="bg-black/40 border border-cyber-border/30 rounded p-4 flex-1 text-cyber-text font-mono text-[11px] leading-relaxed relative">
                                    <span className="text-neon-green/30 text-3xl font-serif absolute top-2 left-2 pointer-events-none">"</span>
                                    <p className="relative z-10 pl-3">{leader.quote}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Management Team */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-8 w-1.5 bg-neon-green shadow-[0_0_8px_#22ff66]" />
                        <h2 className="text-3xl md:text-5xl font-cyber font-black text-white uppercase tracking-tight">The &nbsp; Management &nbsp; <span className="text-neon-green text-neon-glow">Team</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Mr. \u00A0 Raj\u00A0 Kumar\u00A0 Sahoo", role: "Associate Director Business & Operations", quote: "Scaling our development operations by standardizing advanced software pipelines.", img: RajImg, },
                            { name: "Mr.\u00A0 Vivek\u00A0 Yadav", role: "HR Admin & Finance Head", quote: "Cultivating an environment where deep tech research and development thrives.", img: VivekImg, },
                            { name: "Mr.\u00A0 Nitesh", role: "Technology & Marketing Head", quote: "Designing robust cloud architectures and ensuring perfect execution of our products.", img: NiteshImg, }
                        ].map((mgr, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-panel rounded-xl p-6 border border-cyber-border/40 hover:border-neon-emerald/50 transition-all duration-300 relative group flex flex-col items-center text-center"
                            >
                                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-neon-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#10b981]" />
                                
                                <div className="w-28 h-28 rounded-md overflow-hidden border-2 border-cyber-border/50 group-hover:border-neon-emerald/80 mb-4 shrink-0 transition-all duration-500">
                                    <img src={mgr.img} alt={mgr.name} className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
                                </div>
                                <div className="text-[9px] text-neon-emerald font-mono uppercase tracking-[0.2em] mb-1 font-bold">{mgr.id}</div>
                                <h3 className="text-white font-cyber text-xl uppercase leading-none mb-1">{mgr.name}</h3>
                                <div className="text-neon-emerald font-mono text-[10px] tracking-widest uppercase mb-4 ">{mgr.role}</div>
                                <p className="text-cyber-text font-mono text-xs opacity-70 italic">"{mgr.quote}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* SDE Team */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
                        <div className="h-8 w-1.5 bg-neon-green shadow-[0_0_8px_#22ff66]" />
                        <h2 className="text-3xl md:text-5xl font-cyber font-black text-white uppercase tracking-tight text-center md:text-left">The &nbsp; SDE &nbsp;<span className="text-neon-green text-neon-glow">Team</span></h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {techTeam.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="w-[calc(50%-8px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-35px)] group relative bg-[#020703] border border-cyber-border/40 hover:border-neon-green/40 rounded-lg overflow-hidden transition-all duration-300 flex flex-col"
                            >
                                <div className="w-full aspect-[4/5] md:aspect-auto md:h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90" />
                                    <div className="absolute inset-0 cyber-grid opacity-20 z-10 mix-blend-screen pointer-events-none" />
                                    <img
                                        src={tech.image}
                                        alt={tech.name}
                                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    {/* SDE Badge */}
                                    <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="px-1.5 py-0.5 bg-neon-green text-black text-[6px] md:text-[8px] font-mono font-bold uppercase rounded shadow-[0_0_8px_rgba(34,255,102,0.6)]">SDE</div>
                                    </div>
                                </div>
                                <div className="w-full p-2 text-center bg-black/40 border-t border-cyber-border/30">
                                    <h3 className="text-[10px] md:text-xs font-bold text-white font-mono uppercase tracking-wider">{tech.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
