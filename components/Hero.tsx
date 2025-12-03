import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import KoiiToken from './ui/KoiiToken';
import DecentralizedNode from './ui/DecentralizedNode';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Updated image paths as requested
  const HERO_IMAGES = [
    {
      src: "https://i.postimg.cc/FscVdLQ5/Screenshot-2025-12-01-144334.png",
      caption: "Signing Ceremony"
    },
    {
      src: "https://i.postimg.cc/vH9tgVwS/Screenshot-2025-12-01-144313.png",
      caption: "Strategic Partnership"
    },
    {
      src: "https://i.postimg.cc/NLhLvFND/Screenshot-2025-12-01-144234.png",
      caption: "Team Collaboration"
    },
    {
      src: "https://i.postimg.cc/NfTk9Hvn/Screenshot-2025-12-01-144356.png",
      caption: "Future of AI"
    }
  ];

  return (
    <section className="relative min-h-screen pt-40 pb-20 overflow-hidden flex flex-col items-center">

      {/* Massive Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-[#34D562]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      {/* 3D Floating Token */}
      <motion.div style={{ y: y1 }} className="absolute top-60 right-[5%] lg:right-[10%] z-0 hidden lg:block opacity-60">
        <DecentralizedNode size={180} />
      </motion.div>
      <motion.div style={{ y: y1 }} className="absolute top-60 left-[5%] lg:left-[10%] z-0 hidden lg:block opacity-60">
        <DecentralizedNode size={180} />
      </motion.div>
      {/* <motion.div style={{ y: y1 }} className="absolute top-60 right-[5%] lg:right-[10%] z-0 hidden lg:block opacity-60">
        <KoiiToken size={180} />
      </motion.div>
      <motion.div style={{ y: y1 }} className="absolute top-60 left-[5%] lg:left-[10%] z-0 hidden lg:block opacity-60">
        <KoiiToken size={180} />
      </motion.div> */}

      <div className="w-[95%] max-w-[1800px] mx-auto relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#34D562]/10 border border-[#34D562]/30 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D562] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D562]"></span>
            </span>
            <span className="text-[#34D562] text-sm font-bold tracking-widest uppercase font-display">Official Partnership</span>
          </div>
        </motion.div>

        {/* Dense Headline with Logo Font Match */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tight mb-8 max-w-[90vw]"
        >
          {/* Applied font-slab (Zilla Slab) to match logo */}
          <span className="font-slab font-bold text-white">Geeks of Gurukul</span> <br />
          <span className="font-display font-bold text-transparent bg-clip-text bg-[#34D562] bg-[length:200%_auto] animate-scan">
            Koii Labs
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-16 font-light border-l-2 border-[#34D562] pl-6 text-left md:text-center md:border-none md:pl-0 font-sans"
        >
          Geeks of Gurukul becomes the Service Partner of Koii Network (Koii). We are thrilled to announce our latest collaboration with KN. Together, we are committed to empowering students with the skills, knowledge, and opportunities they need to excel in the rapidly evolving tech landscape.
        </motion.p>

        {/* Ultra-Wide Image Deck */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {HERO_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="group relative h-[300px] rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-[#34D562] transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.caption}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800`;
                }}
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">

                <p className="text-white font-bold">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Association Section - Redesigned to be unique with Neon Grid */}
        <div className="w-full mt-10">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-[#34D562]/40 bg-[#020202] shadow-[0_0_50px_rgba(52,213,98,0.1)]">

            {/* Dedicated Neon Grid Background for this section */}
            <div className="absolute inset-0 bg-neon-grid opacity-40 pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-0">

              {/* Left Block - Title */}
              <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#34D562]/30 bg-gradient-to-br from-[#34D562]/10 to-transparent">
                <h3 className="text-[#34D562] font-mono mb-2 tracking-[0.2em] text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#34D562] rounded-full animate-pulse"></span>
                  STRATEGIC ALLIANCE
                </h3>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] mb-2">
                  WE ASSOCIATED
                </h2>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-[#34D562] leading-[0.9] mb-8">
                  WITH KOII GLOBAL
                </h2>
                <div className="w-full h-1 bg-gradient-to-r from-[#34D562] to-transparent"></div>
              </div>

              {/* Right Block - Description & CTA */}
              <div className="lg:col-span-7 p-12 md:p-16 flex flex-col justify-center bg-black/60 backdrop-blur-md relative">
                {/* Holographic corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#34D562]/20 to-transparent border-l border-b border-[#34D562]/20 rounded-bl-3xl"></div>

                <p className="text-xl md:text-3xl text-white font-light leading-relaxed mb-12 tracking-wide font-display">
                  "Empowering the future of digital interaction by seamlessly merging Web2 applications with Web3 native cultures, all through a single platform."
                </p>

                <div className="flex flex-wrap items-center gap-8">
                  {/* Fixed Hover Effect Button */}
                  <button className="group relative px-10 py-5 bg-transparent border border-[#34D562] text-[#34D562] font-bold uppercase tracking-wider overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-[#34D562] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-3">
                      Explore Koii <ExternalLink size={20} />
                    </span>
                  </button>

                  <div className="flex items-center gap-3 text-sm text-gray-400 font-mono border-l border-white/20 pl-6">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D562] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#34D562]"></span>
                    </span>
                    LIVE PARTNERSHIP STATUS: ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;