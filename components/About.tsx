
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';
import { MovingBorder } from './ui/MovingBorder';

const About: React.FC = () => {
  const text = "Koii is a Decentralized Physical Infrastructure Network (DePIN). You can Turn Your Device into an AI NodeMine KOII, and help fuel decentralized cutting - edge AI projects with your compute power. Koii Nodes generate passive rewards for operators, enabling task creators to source data, storage, and compute via microservices.";

  const words = text.split(" ");

  return (
    // Changed bg-[#050505] to bg-transparent
    <section className="py-20 relative overflow-hidden bg-transparent">
      <div className="w-[95%] max-w-[1800px] mx-auto relative z-10">

        {/* Kinetic Typography Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="h-1 w-12 bg-[#34D562] mb-6"></div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 uppercase leading-[0.9]">
                ABOUT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-white">KOII LABS</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed font-sans">
                A truly decentralized network powered by a global pool of node operators.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/5 p-10 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#34D562]/10 blur-[50px]"></div>

              <div className="flex flex-wrap gap-x-2 gap-y-1 relative z-10">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.015 }}
                    className={`text-xl md:text-3xl font-light leading-snug font-sans ${i < 8 ? 'text-white font-medium' : 'text-gray-400'}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid - Dense & Symmetric */}
        <div className="w-full">
          <div className="mb-10 border-b border-white/10 pb-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">CORE CAPABILITIES</h3>
            <p className="text-[#34D562] font-medium text-lg font-sans">
              Developers Can Use Their Own Tokens To Reward Their Community Members. Koii Enables:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((feature, index) => (
              <MovingBorder
                key={index}
                duration={70000}
                className="h-full bg-[#0A0A0A]"
                startAngle={(index % 4 + 1) * 90} // 0°, 90°, 180°, 270°, then repeat
              >
                <div className="h-[280px] p-6 flex flex-col justify-between relative z-20">
                  {/* Header */}
                  <div className="flex justify-center items-start">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#34D562] group-hover:text-[#34D562] group-hover:bg-[#34D562]/10 transition-colors duration-300">
                      <feature.icon size={30} />
                    </div>
                  </div>

                  {/* Body */}
                  <div>
                    <h4 className="text-lg font-display font-bold text-white leading-tight mb-3 flex justify-center items-start">
                      {feature.title}
                    </h4>
                    <p className="text-s text-gray-500 leading-relaxed font-sans line-clamp-4 flex justify-center items-start">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom line */}
                  <div className="w-full h-[1px] bg-white/5 mt-4"></div>
                </div>
              </MovingBorder>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
