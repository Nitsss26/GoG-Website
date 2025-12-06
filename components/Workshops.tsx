
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, ArrowRight, Zap, Globe, Cpu } from 'lucide-react';

import IndianFace1 from '../assets/indian_face_1.png';
import IndianFace2 from '../assets/indian_face_2.png';
import IndianFace3 from '../assets/indian_face_3.png';
import IndianFace4 from '../assets/indian_face_4.png';
import IndianFace5 from '../assets/indian_face_5.png';

const Workshops: React.FC = () => {
   return (
      // Changed bg-[#030303] to bg-transparent
      <section className="py-24 bg-transparent relative min-h-screen">
         {/* Decorative Background */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#34D562]/5 to-transparent blur-[100px] pointer-events-none"></div>

         <div className="w-[95%] max-w-[1800px] mx-auto relative z-10">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-[#34D562]/20 pb-8">
               <div>
                  <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-none">
                     Upcoming <strong className="text-stroke">Workshops</strong>
                  </h2>
               </div>
               <div className="text-right hidden md:block">
                  <p className="text-gray-400 text-sm font-sans">Join the ecosystem.</p>
                  <p className="text-white font-bold text-xl font-display">Build the Future.</p>
               </div>
            </div>

            {/* Dense Grid Layout */}
            <div className="grid lg:grid-cols-12 gap-8">

               {/* Main Card - Complex UI */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-8 bg-[#080808]/90 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group"
               >
                  {/* Circuit Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#34D562 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-12 relative z-10">
                     <div className="flex gap-2">
                        <div className="px-4 py-1 rounded-full border border-[#34D562] text-[#34D562] text-xs font-bold uppercase tracking-wider">Free Entry</div>
                        <div className="px-4 py-1 rounded-full border border-white/20 text-gray-300 text-xs font-bold uppercase tracking-wider">Beginner Friendly</div>
                     </div>
                     <div className="w-12 h-12 rounded-full bg-[#34D562]/10 flex items-center justify-center animate-pulse">
                        <div className="w-3 h-3 bg-[#34D562] rounded-full"></div>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end">
                     <div>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                           Koii Node Workshop <br />
                           <span className="text-[#34D562]">Protocol Level 1</span>
                        </h3>
                        <div className="flex items-center gap-4 text-gray-400 mb-8">
                           <Globe size={20} />
                           <span className="font-mono text-sm">Global Online Event</span>
                        </div>

                        <div className="flex -space-x-4 mb-4">
                           {/* Indian faces */}
                           {[IndianFace1, IndianFace2, IndianFace3, IndianFace4, IndianFace5].map((src, i) => (
                              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#080808] bg-gray-800 overflow-hidden">
                                 <img src={src} className="w-full h-full object-cover" alt="Community member" />
                              </div>
                           ))}
                           <div className="w-10 h-10 rounded-full border-2 border-[#080808] bg-[#34D562] flex items-center justify-center text-black font-bold text-xs">
                              +800
                           </div>
                        </div>
                        <p className="text-gray-500 text-sm font-sans">Builders have already joined the revolution.</p>
                     </div>

                     <div className="flex flex-col gap-4">
                        <div className="p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group/item">
                           <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-400 text-sm font-sans">Prize Pool</span>
                              <Trophy size={18} className="text-[#34D562]" />
                           </div>
                           <p className="text-2xl font-bold text-white group-hover/item:text-[#34D562] transition-colors font-display">25,000 $ANDR</p>
                        </div>

                        <button className="w-full py-5 bg-[#34D562] text-black font-bold text-lg uppercase tracking-wide rounded-xl hover:bg-[#28a74b] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(52,213,98,0.3)]">
                           Secure Your Spot <ArrowRight size={24} />
                        </button>
                     </div>
                  </div>
               </motion.div>

               {/* Side Info Panel - Dashboard Style */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px]"></div>

                  <div>
                     <h4 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                        <Cpu className="text-[#34D562]" /> Mission Data
                     </h4>

                     <div className="space-y-6">
                        <div className="flex items-start gap-4 pb-6 border-b border-white/5">
                           <div className="p-3 bg-white/5 rounded-lg text-gray-400">
                              <Clock size={20} />
                           </div>
                           <div>
                              <p className="text-sm text-gray-500 mb-1 font-sans">Timeline</p>
                              <p className="text-lg font-bold text-white font-display">20 Jan 2026</p>
                              <p className="text-xs text-[#34D562] font-mono">10:00 AM GMT</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4 pb-6 border-b border-white/5">
                           <div className="p-3 bg-white/5 rounded-lg text-gray-400">
                              <Zap size={20} />
                           </div>
                           <div>
                              <p className="text-sm text-gray-500 mb-1 font-sans">Mode</p>
                              <p className="text-lg font-bold text-white font-display">Live Workshop</p>
                              <p className="text-xs text-[#34D562] font-mono">Interactive Session</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="mt-8 p-4 bg-[#34D562]/10 border border-[#34D562]/20 rounded-xl">
                     <p className="text-sm text-[#34D562] font-medium leading-relaxed font-sans">
                        Limited spots available for live Q&A session. Register early to qualify for airdrops.
                     </p>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default Workshops;
