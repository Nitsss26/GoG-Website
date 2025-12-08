import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

// Prize winner images
import Koii1st from '../assets/koii-1st.png';
import Koii2nd from '../assets/koii-2nd.png';
import Koii3rd from '../assets/koii-3rd.png';

const Features: React.FC = () => {
  return (
    // Changed bg-[#050505] to bg-transparent
    <section className="py-10 bg-transparent">
      <div className="w-[95%] max-w-[1800px] mx-auto">

        {/* $25,000+ Prizes Distributed Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full border border-[#34D562]/30 bg-[#34D562]/10"
            >
              <Trophy className="text-[#34D562]" size={20} />
              <span className="text-[#34D562] font-bold uppercase tracking-wider text-sm">Winners</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
            >
              $25,000+ <span className="text-[#34D562]">PRIZES</span> DISTRIBUTED
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Recognizing and rewarding the top talent building the future of decentralized computing with Koii Network.
            </motion.p>
          </div>

          {/* Prize Winners - Podium Style */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">

            {/* 2nd Place - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-2 md:order-1 relative group w-full md:w-1/3"
            >
              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#C0C0C0] via-[#E8E8E8] to-[#C0C0C0] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0] via-[#E8E8E8] to-[#C0C0C0] blur-md opacity-50" />
                <div className="relative bg-[#0A0A0A] rounded-2xl overflow-hidden h-64 md:h-72">
                  <img src={Koii2nd} alt="2nd Prize Winner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-center mb-5">
                    <Trophy size={28} className="text-[#C0C0C0] mx-auto mb-2 drop-shadow-lg" />
                    <h3 className="text-xl font-bold text-white mb-1">2nd Place</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 1st Place - Center (Larger) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="order-1 md:order-2 relative group w-full md:w-[40%] z-10 transform md:-translate-y-4"
            >
              <div className="p-[3px] rounded-2xl bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] relative overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] blur-lg opacity-60" />
                <div className="relative bg-[#0A0A0A] rounded-2xl overflow-hidden h-72 md:h-80">
                  {/* <div className="absolute top-4 right-4 z-20 bg-[#FFD700] text-black font-black px-4 py-1 rounded-full shadow-lg animate-pulse">
                    WINNER
                  </div> */}
                  <img src={Koii1st} alt="1st Prize Winner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8 text-center mb-5">
                    <Trophy size={32} className="text-[#FFD700] mx-auto mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]" />
                    <h3 className="text-3xl font-black text-white mb-1">1st Place</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3rd Place - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="order-3 relative group w-full md:w-1/3"
            >
              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#CD7F32] via-[#FFA07A] to-[#CD7F32] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#CD7F32] via-[#FFA07A] to-[#CD7F32] blur-md opacity-50" />
                <div className="relative bg-[#0A0A0A] rounded-2xl overflow-hidden h-64 md:h-72">
                  <img src={Koii3rd} alt="3rd Prize Winner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-center mb-5">
                    <Trophy size={28} className="text-[#CD7F32] mx-auto mb-2 drop-shadow-lg" />
                    <h3 className="text-xl font-bold text-white mb-1">3rd Place</h3>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A]/80 h-[60vh]"
          >
            {/* Mockup of the group photo slider */}
            <div className="w-full h-full relative group">
              {/* Simulated Image */}
              <img
                src="https://www.geeksofgurukul.com/assets/koii_group_photo-vLGd_EbM.svg"
                alt="Koii Labs Community"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
                <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tighter mix-blend-overlay">
                  GLOBAL COMMUNITY
                </h3>

              </div>

              {/* Arrows */}
              <button className="absolute left-8 top-1/2 -translate-y-1/2 p-4 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-[#34D562] hover:text-black transition-all border border-white/10 z-20 pointer-events-auto cursor-pointer">
                <ChevronLeft size={32} />
              </button>
              <button className="absolute right-8 top-1/2 -translate-y-1/2 p-4 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-[#34D562] hover:text-black transition-all border border-white/10 z-20 pointer-events-auto cursor-pointer">
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
