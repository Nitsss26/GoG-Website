import React from 'react';
import { motion } from 'framer-motion';
import GreenEmbers from '../components/ui/GreenEmbers';
import EduMinAssam from '../assets/OurSocialImpact/EduMinAssam.jpg';
import MP_Assam from '../assets/OurSocialImpact/MP_Assam.jpg';
import IAS_Anil_Kumar_Jha from '../assets/OurSocialImpact/IAS_Anil_Kumar_Jha.jpg';
import MrKeshabMahanta from '../assets/OurSocialImpact/MrKeshabMahanta.png';

const SocialImpactCard: React.FC<{
    image: string;
    alt: string;
    text: React.ReactNode;
    reverse?: boolean;
    index: number;
}> = ({ image, alt, text, reverse, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
            whileInView={index !== 0 ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.1 }}
            className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-[#0A0A0A]/50 backdrop-blur-sm border border-white/10 p-6 rounded-3xl hover:border-[#34D562]/30 transition-colors duration-300`}
        >
            <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl bg-black/50">
                    <div className="absolute inset-0 bg-[#34D562]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-64 md:h-80 object-contain transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <p className="text-lg text-gray-300 leading-relaxed font-sans text-justify">
                    {text}
                </p>
            </div>
        </motion.div>
    );
};

const OurSocialImpact: React.FC = () => {
    return (
        <main className="relative min-h-screen bg-[#030303] text-white overflow-hidden pt-40 pb-20">
            <GreenEmbers />

            <div className="w-[95%] max-w-[1400px] mx-auto relative z-10 px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-white">Social Impact</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-6xl mx-auto font-sans"
                    >
                        Geeks of Gurukul believes in technology that can unlock the untapped potential of Bharat.
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div className="space-y-12">
                    <SocialImpactCard
                        index={0}
                        image={EduMinAssam}
                        alt="Education Minister Assam"
                        text={
                            <>
                                We had the privilege of meeting <strong className="text-white">Dr. Ranoj Pegu</strong>, <strong className="text-[#34D562]">Education Minister of Assam</strong>, to discuss how <strong className="text-white">Geeks of Gurukul</strong> can transform higher education through <strong className="text-[#34D562]">blockchain technology</strong>. His focus on transparency, security, and skill-based learning aligns with our mission to make degrees and academic credentials more secure and globally recognized.
                            </>
                        }
                    />

                    <SocialImpactCard
                        index={1}
                        image={MP_Assam}
                        alt="MP Assam"
                        reverse={true}
                        text={
                            <>
                                We had the honour of meeting <strong className="text-white">Shri Ranjit Dutta</strong>, <strong className="text-[#34D562]">Honourable MP of Assam</strong>, to discuss how Geeks of Gurukul and our IITian team can innovate the sericulture industry through technology. As former Minister of Sericulture, Handloom & Textiles, Irrigation, and Welfare of Minorities, Shri Dutta’s initiatives like Silk Mark Expo, yarn banks, and block-cluster training have empowered rural artisans. We're building a tech-enabled platform to elevate Assam's sericulture ecosystem.
                            </>
                        }
                    />

                    <SocialImpactCard
                        index={2}
                        image={IAS_Anil_Kumar_Jha}
                        alt="IAS Anil Kumar Jha"
                        text={
                            <>
                                Had the honour of meeting <strong className="text-white">IAS Anil Kumar Jha</strong>, <strong className="text-[#34D562]">Cane Commissioner</strong>, whose deep insight into rural India and bold vision for agri-tech left a lasting impression. From his role as Joint Secretary to leading reforms in Bihar, he’s driven systemic transformation. His focus on tech-based algorithms to enhance the agriculture ecosystem signals a strong move toward <strong className="text-[#34D562]">smart farming</strong> 🚜🌱
                            </>
                        }
                    />

                    <SocialImpactCard
                        index={3}
                        image={MrKeshabMahanta}
                        alt="Mr. Keshab Mahanta"
                        reverse={true}
                        text={
                            <>
                                The Geeks of Gurukul team had the honour of meeting <strong className="text-white">Mr. Keshab Mahanta</strong>, <strong className="text-[#34D562]">Hon'ble Minister of Revenue & Disaster Management</strong>, IT, Science & Technology, and Climate Change, Government of Assam. We discussed empowering Assam's youth with emerging, industry-relevant technologies to boost employability and future readiness. Geeks of Gurukul is proud to be expanding across Northeast India, driving digital and technological growth in the region.
                            </>
                        }
                    />
                </div>
            </div>
        </main>
    );
};

export default OurSocialImpact;
