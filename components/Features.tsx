
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    // Changed bg-[#050505] to bg-transparent
    <section className="py-10 bg-transparent">
       <div className="w-[95%] max-w-[1800px] mx-auto">
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
