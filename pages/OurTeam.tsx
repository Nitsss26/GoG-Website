import React from 'react';
import { motion } from 'framer-motion';
import GreenEmbers from '../components/ui/GreenEmbers';
import { Linkedin } from 'lucide-react';

// Import images
import AnchitSir from '../assets/Team of IITians/Anchit_Sir_IIT Kharagpur.png';
import AbhishekSir from '../assets/Team of IITians/Abhishek_Sir_IIT Guwahati.png';
import AnjaliMaam from "../assets/Team of IITians/Anjali_Ma'am_IIT Hyderabad.png";
import KhushbooMaam from "../assets/Team of IITians/Khushboo_Ma'am_IIT Kharagpur.png";
import HemantSir from '../assets/Team of IITians/Hemant_Sir_IIT Kharagpur.png';
import AnirudhSir from '../assets/Team of IITians/Anirudh_Sir_IIT Kharagpur.png';
import RiyaMaam from "../assets/Team of IITians/Riya_Ma'am_IIT Hyderabad.png";
import GauravSir from '../assets/Team of IITians/Gaurav_Sir_IIT Hyderabad.png';
import KalicharanSir from '../assets/Team of IITians/Kalicharan_Sir_IIT Madras.png';
import IshikaMaam from "../assets/Team of IITians/Ishika_Ma'am_IIT Palakkad.png";
import ShubhamSir from '../assets/Team of IITians/Shubham_Sir_IIT Kharagpur.png';
import RajatSir from '../assets/Team of IITians/Rajat_Sir_IIT Ropar.png';
import JatinSir from '../assets/Team of IITians/Jatin_Sir_IIT Dhanbad.png';
import KrishnaSir from '../assets/Team of IITians/Krishna_Sir_IIT Kharagpur.png';
import SahilSir from '../assets/Team of IITians/Sahil_Sir_IIT Kharagpur.png';
import SunilSir from '../assets/Team of IITians/Sunil_Sir_IIT Kharagpur.png';
import SuryakantaSir from '../assets/Team of IITians/Suryakanta_Sir_IIT Kharagpur.png';
import NiharikaMaam from "../assets/Team of IITians/Niharika_Ma'am_IIT Kharagpur.png";
import AbhiramSir from '../assets/Team of IITians/Abhiram_Sir_IIT Kharagpur.png';
import RajashekarSir from '../assets/Team of IITians/Rajashekar_Sir_IIT Kharagpur.png';
import SujalSir from '../assets/Team of IITians/Sujal_Sir_IIT Roorkee.png';
import JithendraSir from '../assets/Team of IITians/Guguloth_Sir_IIT Kharagpur.png';
import NishalSir from '../assets/Team of IITians/Nishal_Sir_IIT Bombay.png';
import KanchanMaam from "../assets/Team of IITians/Kanchan_Ma'am_IIT Kharagpur.png";
import VarunSir from '../assets/Team of IITians/Varun_Sir_NIT Warangal.png';
import SatyamSir from '../assets/Team of IITians/Satyam_Sir_IIT Roorkee.png';
import AjaySir from '../assets/Team of IITians/Ajay_Sir_IIT Roorkee.png';

// Import Logos
import IITKharagpurLogo from '../assets/IITLogo/IITKharagpurLogo.png';
import IITGuwahatiLogo from '../assets/IITLogo/IITGuwahatiLogo.png';
import IITHyderabadLogo from '../assets/IITLogo/IITHyderabadLogo.png';
import IITMadrasLogo from '../assets/IITLogo/IITMadrasLogo.png';
import IITPalakkadLogo from '../assets/IITLogo/IITPalakkadLogo.png';
import IITRoparLogo from '../assets/IITLogo/IITRoparLogo.png';
import IITDhanbadLogo from '../assets/IITLogo/IITDhanbadLogo.png';
import IITRoorkeeLogo from '../assets/IITLogo/IITRoorkeeLogo.png';
import IITBombayLogo from '../assets/IITLogo/IITBombayLogo.png';
import NITWarangalLogo from '../assets/IITLogo/NITWarangalLogo.png';

const teamMembers = [
    { name: "Anchit Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: AnchitSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/anchit-ranjan-046578163/" },
    { name: "Abhishek Sir", role: "Professor & SDE", alumni: "IIT Guwahati", image: AbhishekSir, logo: IITGuwahatiLogo, linkedin: "https://www.linkedin.com/in/abhishek-tripathi-469006277/" },
    { name: "Khushboo Ma'am", role: "Professor & SDE", alumni: "IIT Kharagpur", image: KhushbooMaam, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/khushboo-singhania-4227481b3/" },
    { name: "Anjali Ma'am", role: "Professor & SDE", alumni: "IIT Hyderabad", image: AnjaliMaam, logo: IITHyderabadLogo, linkedin: "https://www.linkedin.com/in/anjali-anjalii/" },
    { name: "Hemant Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: HemantSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/hemant-mishra-4a6b23190/" },
    { name: "Kalicharan Sir", role: "Professor & SDE", alumni: "IIT Madras", image: KalicharanSir, logo: IITMadrasLogo, linkedin: "https://www.linkedin.com/in/kalicharan-prajapati-7975311a0/" },
    { name: "Anirudh Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: AnirudhSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/anirudha-rajodiya-6356b5221/" },
    { name: "Riya Ma'am", role: "Professor & SDE", alumni: "IIT Hyderabad", image: RiyaMaam, logo: IITHyderabadLogo, linkedin: "https://www.linkedin.com/in/riya-dhiman-632634285/" },
    { name: "Shubham Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: ShubhamSir, logo: IITKharagpurLogo, linkedin: "www.linkedin.com/in/shubham-patil-0185b0247/" },
    { name: "Gaurav Sir", role: "Professor & SDE", alumni: "IIT Hyderabad", image: GauravSir, logo: IITHyderabadLogo, linkedin: "https://www.linkedin.com/in/gaurav-gangwar/" },
    { name: "Krishna Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: KrishnaSir, logo: IITKharagpurLogo, linkedin: "www.linkedin.com/in/krishna-dani-iitkgp" },
    { name: "Ishika Ma'am", role: "Professor & SDE", alumni: "IIT Palakkad", image: IshikaMaam, logo: IITPalakkadLogo, linkedin: "https://www.linkedin.com/in/ishika18/" },
    { name: "Sahil Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: SahilSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/sahil-burde-325186197/" },
    { name: "Rajat Sir", role: "Professor & SDE", alumni: "IIT Ropar", image: RajatSir, logo: IITRoparLogo, linkedin: "https://www.linkedin.com/in/rajat-garg-36bab0141/" },
    { name: "Sunil Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: SunilSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/sunil-tudu-117853247" },
    { name: "Jatin Sir", role: "Professor & SDE", alumni: "IIT Dhanbad", image: JatinSir, logo: IITDhanbadLogo, linkedin: "https://www.linkedin.com/in/jatin-garg-8b2138202/" },
    { name: "Suryakanta Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: SuryakantaSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/suryakanta-behera-73a1b9236" },
    { name: "Sujal Sir", role: "Professor & SDE", alumni: "IIT Roorkee", image: SujalSir, logo: IITRoorkeeLogo, linkedin: "www.linkedin.com/in/sujal-verma-042658201" },
    { name: "Niharika Ma'am", role: "Professor & SDE", alumni: "IIT Kharagpur", image: NiharikaMaam, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/niharika-amadala-623792211/" },
    { name: "Nishal Sir", role: "Professor & SDE", alumni: "IIT Bombay", image: NishalSir, logo: IITBombayLogo, linkedin: "https://www.linkedin.com/in/nishal-caleb-karre-a34129a8" },
    { name: "Abhiram Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: AbhiramSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/abhiram-bolisetti-782873237/" },
    { name: "Varun Sir", role: "Professor & SDE", alumni: "NIT Warangal", image: VarunSir, logo: NITWarangalLogo, linkedin: "https://www.linkedin.com/in/varun-rathore-36b927264/" },
    { name: "Rajashekar Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: RajashekarSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/banoth-rajashekar-131814190" },
    { name: "Satyam Sir", role: "Professor & SDE", alumni: "IIT Roorkee", image: SatyamSir, logo: IITRoorkeeLogo, linkedin: "https://in.linkedin.com/in/satyam-mandloi-106234236" },
    { name: "Jithendra Sir", role: "Professor & SDE", alumni: "IIT Kharagpur", image: JithendraSir, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/guguloth-jithender-2730a2245/" },
    { name: "Ajay Sir", role: "Professor & SDE", alumni: "IIT Roorkee", image: AjaySir, logo: IITRoorkeeLogo, linkedin: "https://www.linkedin.com/in/ajay-bagul-2a9340202/" },
    { name: "Kanchan Ma'am", role: "Professor & SDE", alumni: "IIT Kharagpur", image: KanchanMaam, logo: IITKharagpurLogo, linkedin: "https://www.linkedin.com/in/kanchan-verma-85935115b" },
];

const OurTeam: React.FC = () => {
    return (
        <main className="relative min-h-screen bg-[#030303] text-white overflow-hidden pt-40 pb-20">
            <GreenEmbers />

            <div className="w-[95%] max-w-[1600px] mx-auto relative z-10 px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        Our Team Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-white">IITians</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto font-sans"
                    >
                        Meet Our Dedicated Team Of IIT Alumni, Bringing Expertise, Innovation, And A Passion For Excellence To Every Project.
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={index < 8 ? { opacity: 1, scale: 1 } : undefined}
                            whileInView={index >= 8 ? { opacity: 1, scale: 1 } : undefined}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-[#0A0A0A]/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#34D562]/50 transition-colors duration-300 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(25%-2rem)] xl:w-[calc(20%-2rem)] max-w-[300px]"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                />
                                {/* LinkedIn Icon (Always Visible) */}
                                <div className="absolute top-3 right-3 p-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-[#0077b5] transition-colors z-10">
                                    <Linkedin size={18} />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-white mb-1 font-display">{member.name}</h3>
                                <p className="text-xs text-gray-400 mb-4 font-sans">{member.role}</p>

                                <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Alumni</span>
                                        <span className="text-xs font-bold text-[#34D562]">{member.alumni}</span>
                                    </div>
                                    <div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center">
                                        <img
                                            src={member.logo}
                                            alt={member.alumni}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default OurTeam;
