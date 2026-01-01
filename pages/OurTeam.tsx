import React from 'react';
import { motion } from 'framer-motion';
import GreenEmbers from '../components/ui/GreenEmbers';


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

// New Members Imports
import HimanshuVerma from '../assets/Team of IITians/Himanshu Verma.jpg';
import NallaKarunakarRao from '../assets/Team of IITians/Nalla Karunakar Rao.jpeg';
import AdityaKrGautam from '../assets/Team of IITians/Aditya Kr Gautam.jpg';
import AmitSinghPatel from '../assets/Team of IITians/Amit Singh Patel.png';
import ManeeshPatel from '../assets/Team of IITians/Maneesh Patel.jpg';
import VivekHaldkar from '../assets/Team of IITians/Vivek Haldkar.png';
import AvikalShrivastava from '../assets/Team of IITians/Avikal Shrivastava.png';
import MrigankaShekharBarman from '../assets/Team of IITians/Mriganka Shekhar Barman.jpg';
import SumitMaity from '../assets/Team of IITians/Sumit Maity.jpeg';
import VinaypratapSalve from '../assets/Team of IITians/Vinaypratap Salve.jpg';
import PranjulSahu from '../assets/Team of IITians/Pranjul Sahu.png';
import DeepeshKumarVerma from '../assets/Team of IITians/Deepesh Kumar Verma.png';
import KandulaRevanth from '../assets/Team of IITians/Kandula Revanth.jpg';
import PronayDey from '../assets/Team of IITians/Pronay Dey.jpeg';
import ShivangSrivastava from '../assets/Team of IITians/Shivang Srivastava.jpeg';
import ShivangiMehta from '../assets/Team of IITians/Shivangi Mehta.jpg';
import AmanMeena from '../assets/Team of IITians/Aman Meena.jpg';
import SushantBaranawal from '../assets/Team of IITians/Sushant Baranawal.png';
import VermanKumar from '../assets/Team of IITians/Verman Kumar.png';
import RahulKumar from '../assets/Team of IITians/Rahul Kumar.jpg';
import ShekharKumar from '../assets/Team of IITians/Shekhar Kumar.jpg';
import HemalParmar from '../assets/Team of IITians/Hemal Parmar.jpg';
import ChandanKumar from '../assets/Team of IITians/Chandan Kumar.jpg';
import ShankarPal from '../assets/Team of IITians/Shankar Pal.jpeg';
import AbhaJaiswal from '../assets/Team of IITians/Abha Jaiswal.jpeg';
import VadithyaVishalNayak from '../assets/Team of IITians/Vadithya Vishal Nayak.jpg';
import NamanKumarSahu from '../assets/Team of IITians/Naman Kumar Sahu.jpg';
import AnkitSingh from '../assets/Team of IITians/Ankit Singh.jpeg';
import RaviBhushanPratap from '../assets/Team of IITians/Ravi Bhushan Pratap.jpg';

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
import IITBHULogo from '../assets/IITLogo/IITBHULogo.png';
import IITKanpurLogo from '../assets/IITLogo/IITKanpurLogo.png';

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

    // New Members
    { name: "Himanshu Verma", role: "Professor & SDE", alumni: "NIT Warangal", image: HimanshuVerma, logo: NITWarangalLogo },
    { name: "Nalla Karunakar Rao", role: "Professor & SDE", alumni: "IIT Kharagpur", image: NallaKarunakarRao, logo: IITKharagpurLogo },
    { name: "Aditya Kr Gautam", role: "Professor & SDE", alumni: "IIT BHU Varanasi", image: AdityaKrGautam, logo: IITBHULogo },
    { name: "Amit Singh Patel", role: "Professor & SDE", alumni: "IIT Guwahati", image: AmitSinghPatel, logo: IITGuwahatiLogo },
    { name: "Maneesh Patel", role: "Professor & SDE", alumni: "IIT (BHU) Varanasi", image: ManeeshPatel, logo: IITBHULogo },
    { name: "Vivek Haldkar", role: "Professor & SDE", alumni: "IIT Kharagpur", image: VivekHaldkar, logo: IITKharagpurLogo },
    { name: "Avikal Shrivastava", role: "Professor & SDE", alumni: "IIT Kharagpur", image: AvikalShrivastava, logo: IITKharagpurLogo },
    { name: "Mriganka Shekhar Barman", role: "Professor & SDE", alumni: "IIT Kanpur", image: MrigankaShekharBarman, logo: IITKanpurLogo },
    { name: "Sumit Maity", role: "Professor & SDE", alumni: "IIT Kharagpur", image: SumitMaity, logo: IITKharagpurLogo },
    { name: "Vinaypratap Salve", role: "Professor & SDE", alumni: "IIT Kharagpur", image: VinaypratapSalve, logo: IITKharagpurLogo },
    { name: "Pranjul Sahu", role: "Professor & SDE", alumni: "IIT Guwahati", image: PranjulSahu, logo: IITGuwahatiLogo },
    { name: "Deepesh Kumar Verma", role: "Professor & SDE", alumni: "IIT BHU", image: DeepeshKumarVerma, logo: IITBHULogo },
    { name: "Kandula Revanth", role: "Professor & SDE", alumni: "IIT Kharagpur", image: KandulaRevanth, logo: IITKharagpurLogo },
    { name: "Pronay Dey", role: "Professor & SDE", alumni: "IIT Guwahati", image: PronayDey, logo: IITGuwahatiLogo },
    { name: "Shivang Srivastava", role: "Professor & SDE", alumni: "IIT Guwahati", image: ShivangSrivastava, logo: IITGuwahatiLogo },
    { name: "Shivangi Mehta", role: "Professor & SDE", alumni: "Unknown", image: ShivangiMehta, logo: IITKharagpurLogo },
    { name: "Aman Meena", role: "Professor & SDE", alumni: "IIT Kharagpur", image: AmanMeena, logo: IITKharagpurLogo },
    { name: "Sushant Baranawal", role: "Professor & SDE", alumni: "IIT BHU", image: SushantBaranawal, logo: IITBHULogo },
    { name: "Verman Kumar", role: "Professor & SDE", alumni: "IIT BHU Varanasi", image: VermanKumar, logo: IITBHULogo },
    { name: "Rahul Kumar", role: "Professor & SDE", alumni: "IIT Guwahati", image: RahulKumar, logo: IITGuwahatiLogo },
    { name: "Shekhar Kumar", role: "Professor & SDE", alumni: "IIT Kharagpur", image: ShekharKumar, logo: IITKharagpurLogo },
    { name: "Hemal Parmar", role: "Professor & SDE", alumni: "IIT Kanpur", image: HemalParmar, logo: IITKanpurLogo },
    { name: "Chandan Kumar", role: "Professor & SDE", alumni: "IIT Delhi", image: ChandanKumar, logo: IITKharagpurLogo },
    { name: "Shankar Pal", role: "Professor & SDE", alumni: "IIT Kanpur", image: ShankarPal, logo: IITKanpurLogo },
    { name: "Abha Jaiswal", role: "Professor & SDE", alumni: "IIT BHU Varanasi", image: AbhaJaiswal, logo: IITBHULogo },
    { name: "Vadithya Vishal Nayak", role: "Professor & SDE", alumni: "IIT Kharagpur", image: VadithyaVishalNayak, logo: IITKharagpurLogo },
    { name: "Naman Kumar Sahu", role: "Professor & SDE", alumni: "IIT Kharagpur", image: NamanKumarSahu, logo: IITKharagpurLogo },
    { name: "Ankit Singh", role: "Professor & SDE", alumni: "Unknown", image: AnkitSingh, logo: IITKharagpurLogo },
    { name: "Ravi Bhushan Pratap", role: "Professor & SDE", alumni: "IIT Guwahati", image: RaviBhushanPratap, logo: IITGuwahatiLogo },
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
                        <motion.div
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default OurTeam;
