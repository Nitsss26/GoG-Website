import React from 'react';
import { motion } from 'framer-motion';
import GreenEmbers from '../components/ui/GreenEmbers';
import PageSEO from '../components/PageSEO';

// Import existing images
import EduMinAssam from '../assets/OurSocialImpact/EduMinAssam.jpg';
import MP_Assam from '../assets/OurSocialImpact/MP_Assam.jpg';
import IAS_Anil_Kumar_Jha from '../assets/OurSocialImpact/IAS_Anil_Kumar_Jha.jpg';
import MrKeshabMahanta from '../assets/OurSocialImpact/MrKeshabMahanta.png';

// Import new images from Gov folder
// @ts-ignore
import CharanDasMahant from '../assets/Gov/Charan Das Mahant.png';
// @ts-ignore
import AnilFirojiya from '../assets/Gov/Anil Firojiya.jpg';
// @ts-ignore
import JYOTSNA from '../assets/Gov/JYOTSNA.png';
// @ts-ignore
import JitendraParashar from '../assets/Gov/Jitendra Parashar.jpg';
// @ts-ignore
import RaoUdayPratap from '../assets/Gov/Rao_Uday_Pratap_Singh.jpeg';
// @ts-ignore
import IAS_Awanish from '../assets/Gov/IAS Awanish Sharan.jpg';
// @ts-ignore
import DrHemantKhandelwal from '../assets/Gov/Dr.-Hemant-Khandelwal.jpg';
// @ts-ignore
import ShriJishnuDevVarma from '../assets/Gov/Shri-Jishnu-Dev-Varma.jpg';
// @ts-ignore
import DrRamanSingh from '../assets/OurSocialImpact/Dr._Raman_Singh.jpg';

interface OfficialCardProps {
    image: string;
    name: string;
    designation: string;
    index: number;
    imageScale?: number;
    objectPosition?: string;
    className?: string;
}

const GovernmentOfficialCard: React.FC<OfficialCardProps> = ({ image, name, designation, index, imageScale = 1, objectPosition = "top", className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative bg-[#0A0A0A]/60 backdrop-blur-sm rounded-2xl overflow-hidden border-4 border-[#34D562] hover:border-[#34D562] hover:shadow-[0_0_40px_rgba(52,213,98,0.4)] transition-all duration-500 ${className}`}
        >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[#34D562]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none" />
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={image}
                        alt={name}
                        style={{
                            transform: `scale(${imageScale})`,
                            objectPosition: objectPosition
                        }}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                {/* Lighter Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Text Content */}
            <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#34D562] transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {designation}
                </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#34D562]/50 group-hover:border-[#34D562] transition-colors" />
        </motion.div>
    );
};

const OurSocialImpact: React.FC = () => {
    const officials = [
        {
            image: ShriJishnuDevVarma,
            name: "Shri Jishnu Dev Varma",
            designation: "Hon'ble Governor of Maharashtra"
        },
        {
            image: DrHemantKhandelwal,
            name: "Dr. Hemant Khandelwal",
            designation: "Hon'ble State President, Bharatiya Janata Party (BJP), Madhya Pradesh"
        },
        {
            image: DrRamanSingh,
            name: "Dr. Raman Singh",
            designation: "Vidhansabha Speaker, Government of Chhattisgarh"
        },
        {
            image: RaoUdayPratap,
            name: "Rao Uday Pratap Singh",
            designation: "Hon'ble Minister of School Education | Minister of Road and Transport",
            imageScale: 1.15,
            objectPosition: "center 10%"
        },
         {
            image: AnilFirojiya,
            name: "Shri Anil Firojiya",
            designation: "Member of Parliament | Parliamentary Committee on Tourism and Culture, Government of India"
        },
          {
            image: JitendraParashar,
            name: "Mr. Jitendra Parashar",
            designation: "Joint Director, Information Technology Department | Government of Madhya Pradesh"
        },
          {
            image: JYOTSNA,
            name: "Smt. Jyotsna Charandas Mahant",
            designation: "Member of Parliament (Lok Sabha), Korba | Standing Committee on Coal, Mines and Steel"
        },
         {
            image: CharanDasMahant,
            name: "Dr. Charan Das Mahant",
            designation: "Former Lok Sabha Speaker, Government of Chhattisgarh | Former Cabinet Minister, Government of India"
        },
         {
            image: IAS_Anil_Kumar_Jha,
            name: "IAS Mr. Anil Kumar Jha",
            designation: "Cane Commissioner, Government of India | Former Joint Secretary, Ministry of Agriculture"
        },
        {
            image: IAS_Awanish,
            name: "IAS Mr. Awanish Sharan",
            designation: "Chief Executive Officer, Skill Development Mission | Government of Chhattisgarh"
        },
         {
            image: MrKeshabMahanta,
            name: "Mr. Keshab Mahanta",
            designation: "Hon'ble Minister of Revenue & Disaster Management, IT, Science & Technology, Government of Assam"
        },
        {
            image: EduMinAssam,
            name: "Dr. Ranoj Pegu",
            designation: "Hon'ble Education Minister, Government of Assam | Transforming Education Through Technology"
        },  
        {
            image: MP_Assam,
            name: "Shri Ranjit Dutta",
            designation: "Hon'ble Member of Parliament, Assam | Former Minister of Sericulture, Handloom & Textiles"
        },
       
      
        
    ];

    return (
        <main className="relative min-h-screen bg-[#030303] text-white overflow-hidden pt-40 pb-20">
            <GreenEmbers />

            <div className="w-[95%] max-w-[1400px] mx-auto relative z-10 px-4">
                {/* Header */}
                <div className="text-center mb-16">
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

                {/* Centered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {officials.map((official, index) => {
                        let extraClasses = "md:col-span-1 lg:col-span-2";
                        
                        if (index === officials.length - 1 && officials.length % 3 === 1) {
                            extraClasses += " lg:col-start-3";
                        } else if (index === officials.length - 2 && officials.length % 3 === 2) {
                            extraClasses += " lg:col-start-2";
                        }

                        return (
                            <GovernmentOfficialCard
                                key={index}
                                index={index}
                                image={official.image}
                                name={official.name}
                                designation={official.designation}
                                imageScale={(official as any).imageScale}
                                objectPosition={(official as any).objectPosition}
                                className={extraClasses}
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default OurSocialImpact;
