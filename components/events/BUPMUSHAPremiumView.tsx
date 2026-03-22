import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { EventData } from '../../data/eventsData';
import { 
  FiCalendar, FiMapPin, FiUsers, FiCpu, FiShield, 
  FiZap, FiGlobe, FiAward, FiBook, FiCheckCircle,
  FiArrowRight, FiActivity, FiLayers, FiTarget, 
  FiCommand, FiStar, FiGift, FiSunrise, FiInfo
} from 'react-icons/fi';

interface BUPMUSHAPremiumViewProps {
  event: EventData;
}

const GlassCard = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <motion.div 
    {...props}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 ${className}`}
  >
    {children}
  </motion.div>
);

const RevealText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const BUPMUSHAPremiumView: React.FC<BUPMUSHAPremiumViewProps> = ({ event }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 1. THE CONVERGENCE (HERO)
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.9]);

  return (
    <div ref={containerRef} className="relative bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#34D562] selection:text-black">
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(52,213,98,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[#000] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#34D562]/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-[#1a6b31]/10 blur-[150px] rounded-full" 
        />
      </div>

      {/* STICKY NAV RAIL */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50 overflow-hidden">
        <motion.div style={{ scaleX: smoothProgress }} className="h-full bg-[#34D562] origin-left" />
      </div>

      <main className="relative z-10">
        
        {/* 1. HERO: THE CONVERGENCE */}
        <section className="relative min-h-screen flex items-center justify-center p-10 overflow-hidden">
           <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="container mx-auto max-w-7xl text-center">
              <RevealText>
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12">
                   <span className="text-[#34D562] animate-pulse"><FiStar /></span>
                   <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em]">Barkatullah University x PM-UShA</span>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <h1 className="text-7xl md:text-[14rem] font-black leading-[0.8] tracking-tighter italic mb-12">
                   THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-white to-[#34D562] bg-[length:200%_auto] animate-gradient-flow">CONVERGENCE</span>
                </h1>
              </RevealText>

              <RevealText delay={0.4}>
                <p className="text-2xl md:text-3xl font-light text-gray-400 max-w-4xl mx-auto leading-tight italic">
                   The intersection of <span className="text-white font-medium border-b-2 border-[#34D562]">Artificial Intelligence</span> and <span className="text-white font-medium border-b-2 border-white/20">Indian Knowledge Systems</span>.
                </p>
              </RevealText>

              <div className="mt-20 flex flex-wrap justify-center gap-16 text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                 <div className="flex items-center gap-3"><FiCalendar /> Feb 2026</div>
                 <div className="flex items-center gap-3"><FiMapPin /> Bhopal, India</div>
                 <div className="flex items-center gap-3"><FiGlobe /> Viksit Bharat 2047</div>
              </div>
           </motion.div>
        </section>

        {/* 2. THEME & RELEVANCE: NARRATIVE BLOCK */}
        <section className="py-40 px-10">
           <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="absolute -top-20 -left-20 text-[20rem] font-black text-white/[0.02] select-none"
                    >
                      THEME
                    </motion.div>
                    <RevealText>
                       <span className="text-[#34D562] font-mono text-xs tracking-widest uppercase mb-6 block">01 / PHILOSOPHY</span>
                       <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-10 leading-[0.9]">Ethical <br/> Intelligence.</h2>
                       <p className="text-xl text-gray-400 leading-relaxed font-light mb-8 max-w-xl">
                          The relevance of the workshop lies in addressing contemporary issues such as <span className="text-white">climate change</span>, resource management, biodiversity conservation, and <span className="text-white">diser resilience</span>.
                       </p>
                       <p className="text-gray-500 leading-relaxed">
                          While artificial intelligence provides advanced capabilities for data analysis, Indian Knowledge Systems contribute ethical, sustainable, and culturally rooted perspectives.
                       </p>
                    </RevealText>
                 </div>

                 <GlassCard className="lg:mt-32 relative">
                    <div className="absolute top-10 right-10 text-[#34D562]/20">
                       <FiInfo size={60} />
                    </div>
                    <h4 className="text-2xl font-bold mb-6 italic tracking-tight italic italic">Integrative Solutions</h4>
                    <p className="text-gray-400 font-light leading-relaxed mb-6 italic">
                       "Through conceptual discussions and hands-on activities, the workshop enabled participants to apply these integrated approaches in real-world environmental contexts."
                    </p>
                    <div className="h-1 w-20 bg-[#34D562]" />
                 </GlassCard>
              </div>
           </div>
        </section>

        {/* 3. POLICY MEETS PURPOSE: PM-USHA & NEP */}
        <section className="py-40 bg-white/[0.01] border-y border-white/5 overflow-hidden">
           <div className="container mx-auto px-10 max-w-7xl">
              <SectionHeader title="Policy meets Purpose" subtitle="ALIGNED BY MISSION" align="center" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                 {/* PM USHA */}
                 <motion.div whileHover={{ scale: 1.02 }} className="p-16 rounded-[60px] bg-gradient-to-br from-[#111] to-[#000] border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                       <FiShield size={120} />
                    </div>
                    <span className="text-[#34D562] font-mono text-[10px] tracking-widest uppercase mb-4 block">SCHEME ALIGNMENT</span>
                    <h3 className="text-4xl font-bold mb-8 italic italic">PM-UShA Framework</h3>
                    <div className="space-y-6">
                       {[
                         "Multidisciplinary learning & skill development",
                         "Innovation in higher education via AI & IKS",
                         "Strengthening research & digital fluency",
                         "Sustainability & societal relevance"
                       ].map((text, i) => (
                         <div key={i} className="flex gap-4 items-center">
                            <span className="text-[#34D562] shrink-0"><FiCheckCircle /></span>
                            <span className="text-gray-400 font-light italic">{text}</span>
                         </div>
                       ))}
                    </div>
                 </motion.div>

                 {/* NEP 2020 */}
                 <motion.div whileHover={{ scale: 1.02 }} className="p-16 rounded-[60px] bg-white/5 border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                       <FiBook size={120} />
                    </div>
                    <span className="text-blue-400 font-mono text-[10px] tracking-widest uppercase mb-4 block">ACADEMIC PIVOT</span>
                    <h3 className="text-4xl font-bold mb-8 italic">NEP-2020 Vision</h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-8 italic">
                       "Closely aligned with NEP-2020, complementing core subjects by integrating contemporary AI applications with ecological studies."
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                       {[
                         "Bridged theory with practice",
                         "Interdisciplinary cross-pollination",
                         "Hands-on experiential learning"
                       ].map((item, i) => (
                         <div key={i} className="px-6 py-4 rounded-3xl bg-black/40 border border-white/5 text-sm text-gray-300 font-light italic italic">
                            {item}
                         </div>
                       ))}
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* 4. THE ROADMAP: 10 MODULES (HORIZONTAL STORY) */}
        <section className="py-40 relative">
           <div className="container mx-auto px-10 max-w-7xl">
              <SectionHeader title="The Path Observed" subtitle="5 DAYS · 10 PHASES" />
           </div>
           
           <div className="mt-20 overflow-x-auto no-scrollbar scroll-smooth flex px-10 md:px-32 gap-8 pb-20">
              {event.subEvents.map((module, i) => (
                <motion.div 
                  key={module.id}
                  whileHover={{ y: -20, rotate: 1 }}
                  className="shrink-0 w-[400px] h-[600px] rounded-[50px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-12 flex flex-col justify-between relative group"
                >
                   <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.03] select-none italic tracking-tighter italic">
                      {i + 1}
                   </div>
                   <div>
                      <span className="text-[#34D562] font-mono text-xs tracking-widest mb-6 block uppercase">{module.duration} MIN SESSION</span>
                      <h4 className="text-3xl font-bold italic mb-6 leading-tight tracking-tight">{module.title.split(': ')[1] || module.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed italic">{module.summary}</p>
                   </div>
                   <div className="space-y-4">
                      <div className="h-px bg-white/10 w-full" />
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">PHASE {i+1}</span>
                         <FiArrowRight className="text-[#34D562] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* 5. CEREMONY: CHRONICLE & SUSTAINABLE RITUALS */}
        <section className="py-40 px-10 relative bg-black">
           <div className="container mx-auto max-w-7xl">
              <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                 
                 <div className="lg:w-1/2 p-20 rounded-[80px] bg-[#34D562]/5 border border-[#34D562]/10 flex flex-col justify-center">
                    <FiSunrise className="text-6xl text-[#34D562] mb-12" />
                    <SectionHeader title="The Opening" subtitle="INAUGURATION CHRONICLE" align="left" />
                    <p className="text-xl text-gray-400 leading-relaxed font-light mb-10 italic">
                       The training was formally inaugurated under the PM-UShA scheme by distinguished academicians <span className="text-white">Prof. Neeraj Gaur</span>, <span className="text-white">Prof. Ruchi Ghosh Dastidar</span>, and <span className="text-white">Prof. Praveen Tamot</span>.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                       {event.premiumDetails?.galleryGroups[0].images.map((img, i) => (
                         <img key={i} src={img} className="rounded-3xl hover:scale-105 transition-transform duration-500 border border-[#34D562]/20" />
                       ))}
                    </div>
                 </div>

                 <div className="lg:w-1/2 p-20 rounded-[80px] bg-[#111] border border-white/10 flex flex-col justify-between">
                    <div>
                       <SectionHeader title="Sustainable Gestures" subtitle="GUEST FELICITATION" align="left" />
                       <p className="text-lg text-gray-500 font-light mb-12 italic italic">
                          "The no to single use plastic was practised. Guests were honored with tokens of sustainability and knowledge sharing."
                       </p>
                       <div className="grid grid-cols-2 gap-10">
                          {[
                            { name: 'Jute Bag', icon: <FiGift /> },
                            { name: 'Sapling', icon: <FiSunrise /> },
                            { name: 'Memento', icon: <FiAward /> },
                            { name: 'Booklets', icon: <FiBook /> }
                          ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-4 border-l border-white/10 pl-6 group">
                               <div className="text-[#34D562] group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                               <span className="text-white font-mono text-xs tracking-widest uppercase">{item.name}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* 6. APPLIED MASTERY: THE TOOLKIT */}
        <section className="py-40 relative px-10">
           <div className="container mx-auto max-w-7xl">
              <SectionHeader title="Applied Mastery" subtitle="HANDS-ON CONTROL CENTER" align="center" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
                 {event.premiumDetails?.handson.map((section, idx) => (
                   <GlassCard key={idx} className="group hover:border-[#34D562]/40 transition-all duration-500">
                      <div className="h-20 w-20 rounded-[2.5rem] bg-[#34D562]/5 border border-[#34D562]/20 flex items-center justify-center mb-10 group-hover:bg-[#34D562] group-hover:text-black transition-all">
                         {idx === 0 ? <FiLayers size={32} /> : idx === 1 ? <FiTarget size={32} /> : <FiCpu size={32} />}
                      </div>
                      <h4 className="text-3xl font-bold mb-8 tracking-tight italic">{section.title}</h4>
                      <ul className="space-y-4">
                         {section.items.map((item, i) => (
                           <li key={i} className="flex gap-4 items-start text-gray-400 group/item">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#34D562] mt-1.5 group-hover/item:scale-150 transition-transform" />
                              <span className="text-sm font-light italic">{item}</span>
                           </li>
                         ))}
                      </ul>
                   </GlassCard>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. THE ARCHITECTS: TRAINERS */}
        <section className="py-40 relative px-10 bg-white/[0.01]">
            <div className="container mx-auto max-w-7xl">
               <SectionHeader title="The Architects" subtitle="RESOURCE FACULTY" />
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20">
                  {event.trainers?.map((trainer, i) => (
                    <motion.div key={i} whileHover={{ y: -10 }} className="group">
                        <div className="aspect-[3/4] rounded-[40px] overflow-hidden bg-[#111] border border-white/5 relative mb-6 grayscale group-hover:grayscale-0 group-hover:border-[#34D562]/50 transition-all duration-1000">
                           <img src={trainer.image} className="w-full h-full object-cover" />
                        </div>
                        <h5 className="text-xl font-bold tracking-tight italic italic">{trainer.name}</h5>
                        <p className="text-gray-600 font-mono text-[9px] uppercase tracking-widest mt-1 italic">{trainer.role}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
        </section>

        {/* 8. IMPACT & OUTCOMES: THE ROAD AHEAD */}
        <section className="py-60 relative px-10 text-center">
            <div className="absolute inset-0 z-0 opacity-10 blur-3xl overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#34D562]" />
            </div>
            
            <div className="container mx-auto max-w-5xl relative z-10">
               <SectionHeader title="The Road Ahead" subtitle="IMPACT & TRANSFORMATION" align="center" />
               <p className="text-3xl md:text-5xl font-light text-white italic mb-20 leading-tight">
                  "Synthesizing all learning outcomes to form a holistic perspective on AI, IKS, and environmental sustainability."
               </p>
               
               <div className="flex flex-wrap justify-center gap-6">
                  {event.premiumDetails?.outcomes.map((text, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-10 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-light italic"
                    >
                      {text}
                    </motion.div>
                  ))}
               </div>
            </div>
        </section>

        {/* 9. THE PORTFOLIO: FINAL GALLERY */}
        <section className="py-40 px-10 border-t border-white/5">
           <div className="container mx-auto max-w-7xl">
              <SectionHeader title="Observation Log" subtitle="BENTO GALLERY" />
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-20">
                 {event.premiumDetails?.galleryGroups.flatMap(g => g.images).map((img, i) => (
                   <motion.div
                    key={i}
                    whileHover={{ scale: 0.98 }}
                    className={`rounded-[40px] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 ${
                      i % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                   >
                     <img src={img} className="w-full h-full object-cover" />
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* FOOTER: VIKSIT BHARAT */}
        <section className="py-80 bg-black relative flex flex-col items-center justify-center text-center overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              className="absolute text-[24rem] font-black italic tracking-tighter italic italic"
            >
              2047
            </motion.div>
            <h2 className="text-8xl md:text-[16rem] font-black italic tracking-tighter mix-blend-difference mb-12">
               VIKSIT <br/> <span className="text-[#34D562]">BHARAT</span>
            </h2>
            <div className="flex gap-20 font-mono text-[10px] uppercase tracking-[0.5em] text-gray-500 relative z-10">
               <span>BU BHOPAL</span>
               <span>CRISP</span>
               <span>PM-USHA</span>
            </div>
        </section>

      </main>

    </div>
  );
};

const SectionHeader = ({ title, subtitle, align = "left" }: { title: string; subtitle: string; align?: "left" | "center" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        className={`flex items-center gap-3 mb-6 ${align === "center" ? "justify-center" : ""}`}
      >
        <div className="h-px w-8 bg-[#34D562]" />
        <span className="text-[#34D562] font-mono text-[10px] tracking-[0.6em] uppercase">{subtitle}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-[0.8] mb-4"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default BUPMUSHAPremiumView;
