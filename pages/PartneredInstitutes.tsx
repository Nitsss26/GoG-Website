import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, X, ChevronLeft, ChevronRight, Building2, Users, Award, Handshake, Eye } from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';

//College Mou Pics
import AssamDowntownMou from "../assets/Mou_New_Pics/Assam_downtown_Mou_enhanced.webp";
import BGIMou from "../assets/Mou_New_Pics/BGI_Mou.svg";
import CenturionUniversityMou from "../assets/Mou_New_Pics/Centurion_University.webp";
import DonBoscoMou from "../assets/Mou_New_Pics/donbosco.png";
import DYPatilMou from "../assets/Mou_New_Pics/DY_Patil_Mou.png";
import EICT_IITG_Mou from "../assets/Mou_New_Pics/EICT_IIT gUwahati.webp";
import MGIMou from "../assets/Mou_New_Pics/MGI_Mou.webp";
import MGUMou from "../assets/Mou_New_Pics/MGU_Mou.webp";
import SITEMou from "../assets/Mou_New_Pics/SITE_Mou.svg";
import SAGEMou from "../assets/Mou_New_Pics/SAGE_Mou.webp";
import SIRTMou from "../assets/Mou_New_Pics/SIRT_Mou.webp";
import SKITMMou from "../assets/Mou_New_Pics/SKITM.png";
import TGIMou from "../assets/Mou_New_Pics/TGI_Mou.webp";
import WilliamCarreyMou from "../assets/Mou_New_Pics/William_Carey_Mou.png";
import SITMMou from "../assets/Mou_New_Pics/SITM_Mou.webp";
import SGUMou from "../assets/Mou_New_Pics/SAM.png";
import BUMou from "../assets/Mou_New_Pics/BU_Mou.webp";
import SIRTEMou from "../assets/Mou_New_Pics/SIRT-E_Mou.png";
import SGSUMou from "../assets/Mou_New_Pics/SGSU MoU.png";
import OrientalMou from "../assets/Mou_New_Pics/Oriental Group.svg";
import LNCTMou from "../assets/Mou_New_Pics/LNCT2.png";
import OrientalUniversityMou from "../assets/Mou_New_Pics/OrientalUniversityMou.svg";
import CUOrissaMou from "../assets/Mou_New_Pics/CU_Orissa.svg";

//College Logo
import AdtU from "../assets/PartneredColleges/AdtU.svg";
import BGI from "../assets/PartneredColleges/BGI.svg";
import BU from "../assets/PartneredColleges/BU.svg";
import CUTM from "../assets/PartneredColleges/CUTM.svg";
import DY_Patil from "../assets/PartneredColleges/DY_Patil.svg";
import EICT_IITG from "../assets/PartneredColleges/EICT_IITG.svg";
import MGI from "../assets/PartneredColleges/MGI.svg";
import MGU from "../assets/PartneredColleges/MGU.svg";
import SITE from "../assets/PartneredColleges/SITE.svg";
import SAGE from "../assets/PartneredColleges/SAGE.svg";
import SIRT from "../assets/PartneredColleges/SIRT.svg";
import SITM from "../assets/PartneredColleges/SITM.svg";
import SKITM from "../assets/PartneredColleges/SKITM.svg";
import TGI from "../assets/PartneredColleges/TGI.svg";
import WCU from "../assets/PartneredColleges/WCU.svg";
import SGU from "../assets/PartneredColleges/SGU.svg";
import SIRTE from "../assets/PartneredColleges/SIRT-E.svg";
import SGSU from "../assets/PartneredColleges/SGSU.svg";
import DonBosco from "../assets/PartneredColleges/DonBosco.svg";
import LNCTLogo from "../assets/PartneredColleges/LNCTLogo.svg";
import OrientalLogo from "../assets/PartneredColleges/Oriental Logo.svg";

//College Pics
import ADTUSlidePic2 from "../assets/Partnered_College_Pics/ADTU_Pics.jpeg";
import BGISlidePic2 from "../assets/Partnered_College_Pics/Bansal Group.jpeg";
import IITGuwahatiSlidePic2 from "../assets/Partnered_College_Pics/IIT_Guwahati.webp";
import CUSLidePic2 from "../assets/Partnered_College_Pics/Centurion_University.jpeg";
import DonBoscoSlidePic2 from "../assets/Partnered_College_Pics/Don Bosco.jpeg";
import DYPatilSlidePic2 from "../assets/Partnered_College_Pics/DY Patil.jpeg";
import MGISlidePic2 from "../assets/Partnered_College_Pics/MGI.jpeg";
import MGUSlidePic2 from "../assets/Partnered_College_Pics/MGU.jpeg";
import SITESlidePic2 from "../assets/Partnered_College_Pics/SITE.jpg";
import SAGESlidePic2 from "../assets/Partnered_College_Pics/SAGE.jpg";
import SIRTSlidePic2 from "../assets/Partnered_College_Pics/SIRT.jpeg";
import SKITMSlidePic2 from "../assets/Partnered_College_Pics/SKITM.jpeg";
import TGISlidePic2 from "../assets/Partnered_College_Pics/TGI.jpeg";
import WilliamCareySlidePic2 from "../assets/Partnered_College_Pics/William Carey.jpeg";
import SITMSlidePic2 from "../assets/Partnered_College_Pics/SITM.avif";
import BUSlidePic2 from "../assets/Partnered_College_Pics/BU-1.webp";
import SAMlidePic2 from "../assets/Partnered_College_Pics/SAM.jpeg";
import SGSUSlidePic2 from "../assets/Partnered_College_Pics/SGSU.png";
import OrientalSlidePic2 from "../assets/Partnered_College_Pics/OrientalUniversitySlidepic2.jpeg";
import LNCTSLidePic2 from "../assets/Partnered_College_Pics/LNCT College.jpeg";
import SAGEIndoreSlidePic2 from "../assets/Partnered_College_Pics/SAGE_Indore.jpg";
import CUOrissaSlidePic2 from "../assets/Partnered_College_Pics/CU_Odissa.jpeg";
import OrientalUniversitySlidePic2 from "../assets/Partnered_College_Pics/Oriental University Indore.jpeg";

//Third picture of Slideshow
import AdtuSlidePic3 from "../assets/SlideShow_Third_Pic/ADTUSlide3.png";
import BgiSlidePic3 from "../assets/SlideShow_Third_Pic/BGI.png";
import IitGuwahatiSlidePic3 from "../assets/SlideShow_Third_Pic/EICT_IITG.png";
import CUSlidePic3 from "../assets/SlideShow_Third_Pic/CU.png";
import DonBoscoSlidePic3 from "../assets/SlideShow_Third_Pic/donbosco.png";
import DyPatilSlidePic3 from "../assets/SlideShow_Third_Pic/DYPCE.png";
import MgiSlidePic3 from "../assets/SlideShow_Third_Pic/MGI.png";
import MguSlidePic3 from "../assets/SlideShow_Third_Pic/MGU.png";
import SITESlidePic3 from "../assets/SlideShow_Third_Pic/SITE.png";
import SageSlidePic3 from "../assets/SlideShow_Third_Pic/SAGE.png";
import SirtSlidePic3 from "../assets/SlideShow_Third_Pic/SIRT.png";
import SkitmSlidePic3 from "../assets/SlideShow_Third_Pic/SKITM.png";
import TgiSlidePic3 from "../assets/SlideShow_Third_Pic/TGI.png";
import WilliamCareySlidePic3 from "../assets/SlideShow_Third_Pic/WCU.png";
import SGSUThirdPic from "../assets/SlideShow_Third_Pic/SGSU.png";
import OrientalSlidePic3 from "../assets/SlideShow_Third_Pic/OGIB_3rd.png";
import LNCTThirdPic3 from "../assets/SlideShow_Third_Pic/LNCT_3rd.png";
import SitmSlidePic3 from "../assets/SlideShow_Third_Pic/SITM.png";
import BuSlidePic3 from "../assets/SlideShow_Third_Pic/BU.png";
import SamSlidePic3 from "../assets/SlideShow_Third_Pic/SGU.png";
import SIRTESlidePic3 from "../assets/SlideShow_Third_Pic/SIRT-E.png";

interface InstituteItem {
    images: {
        mou: string;
        campus: string;
        event: string;
    };
    logo: string;
    name: string;
    category: string;
    location?: string;
}

// Original items - will be shuffled to separate similar institutes
const rawItems: InstituteItem[] = [
    { images: { mou: MGUMou, campus: MGUSlidePic2, event: MguSlidePic3 }, logo: MGU, name: "Mahatma Gandhi University", category: "University", location: "Meghalaya" },
    { images: { mou: EICT_IITG_Mou, campus: IITGuwahatiSlidePic2, event: IitGuwahatiSlidePic3 }, logo: EICT_IITG, name: "E&ICT, IIT Guwahati", category: "IIT", location: "Guwahati, Assam" },
    { images: { mou: DYPatilMou, campus: DYPatilSlidePic2, event: DyPatilSlidePic3 }, logo: DY_Patil, name: "Dr. DY Patil COEI, Pune", category: "University", location: "Pune, Maharashtra" },
    { images: { mou: OrientalMou, campus: OrientalSlidePic2, event: OrientalSlidePic3 }, logo: OrientalLogo, name: "Oriental Group of Institutions", category: "Oriental", location: "Bhopal, MP" },
    { images: { mou: OrientalUniversityMou, campus: OrientalUniversitySlidePic2, event: OrientalSlidePic3 }, logo: OrientalLogo, name: "Oriental University, Indore", category: "Oriental", location: "Indore, MP" },
    { images: { mou: SGUMou, campus: SAMlidePic2, event: SamSlidePic3 }, logo: SGU, name: "SAM Global University", category: "University", location: "Bhopal, MP" },
    { images: { mou: SAGEMou, campus: SAGESlidePic2, event: SageSlidePic3 }, logo: SAGE, name: "SAGE University, Bhopal", category: "SAGE", location: "Bhopal, MP" },
    { images: { mou: AssamDowntownMou, campus: ADTUSlidePic2, event: AdtuSlidePic3 }, logo: AdtU, name: "Assam Downtown University", category: "Northeast", location: "Guwahati, Assam" },
    { images: { mou: DonBoscoMou, campus: DonBoscoSlidePic2, event: DonBoscoSlidePic3 }, logo: DonBosco, name: "Assam Don Bosco University", category: "Northeast", location: "Guwahati, Assam" },
    { images: { mou: SAGEMou, campus: SAGEIndoreSlidePic2, event: SageSlidePic3 }, logo: SAGE, name: "SAGE University, Indore", category: "SAGE", location: "Indore, MP" },
    { images: { mou: CenturionUniversityMou, campus: CUSLidePic2, event: CUSlidePic3 }, logo: CUTM, name: "Centurion University, AP", category: "Centurion", location: "Vizianagaram, AP" },
    { images: { mou: BGIMou, campus: BGISlidePic2, event: BgiSlidePic3 }, logo: BGI, name: "Bansal Group Of Institutions", category: "BGI", location: "Bhopal, MP" },
    { images: { mou: BUMou, campus: BUSlidePic2, event: BuSlidePic3 }, logo: BU, name: "Barkatullah University, Bhopal", category: "University", location: "Bhopal, MP" },
    { images: { mou: CUOrissaMou, campus: CUOrissaSlidePic2, event: CUSlidePic3 }, logo: CUTM, name: "Centurion University, Orissa", category: "Centurion", location: "Bhubaneswar, Odisha" },
    { images: { mou: SGSUMou, campus: SGSUSlidePic2, event: SGSUThirdPic }, logo: SGSU, name: "Scope Global Skill University", category: "University", location: "Bhopal, MP" },
    { images: { mou: MGIMou, campus: MGISlidePic2, event: MgiSlidePic3 }, logo: MGI, name: "Millennium Group Of Institutions", category: "MGI", location: "Bhopal, MP" },
    { images: { mou: TGIMou, campus: TGISlidePic2, event: TgiSlidePic3 }, logo: TGI, name: "Truba Group of Institutions", category: "TGI", location: "Bhopal, MP" },
    { images: { mou: SKITMMou, campus: SKITMSlidePic2, event: SkitmSlidePic3 }, logo: SKITM, name: "Shivajirao Kadam Institute", category: "Institute", location: "Indore, MP" },
    { images: { mou: SITMMou, campus: SITMSlidePic2, event: SitmSlidePic3 }, logo: SITM, name: "Scholars Institute of Technology", category: "Institute", location: "Gwalior, MP" },
    { images: { mou: SIRTMou, campus: SIRTSlidePic2, event: SirtSlidePic3 }, logo: SIRT, name: "Sagar Institute of Research & Technology", category: "SIRT", location: "Bhopal, MP" },
    { images: { mou: SIRTEMou, campus: SIRTSlidePic2, event: SIRTESlidePic3 }, logo: SIRTE, name: "SIRT Excellence", category: "SIRT", location: "Bhopal, MP" },

    { images: { mou: SITEMou, campus: SITESlidePic2, event: SITESlidePic3 }, logo: SITE, name: "SITE, Nathdwara", category: "Institute", location: "Nathdwara, Rajasthan" },
    { images: { mou: LNCTMou, campus: LNCTSLidePic2, event: LNCTThirdPic3 }, logo: LNCTLogo, name: "LNCT, Indore", category: "LNCT", location: "Indore, MP" },
    { images: { mou: WilliamCarreyMou, campus: WilliamCareySlidePic2, event: WilliamCareySlidePic3 }, logo: WCU, name: "William Carey University", category: "University", location: "Shillong, Meghalaya" },
];

// Shuffle function that separates similar categories
function shuffleWithSeparation(items: InstituteItem[]): InstituteItem[] {
    const result: InstituteItem[] = [];
    const categorized: Record<string, InstituteItem[]> = {};

    items.forEach(item => {
        if (!categorized[item.category]) categorized[item.category] = [];
        categorized[item.category].push(item);
    });

    const categories = Object.keys(categorized).sort(() => Math.random() - 0.5);

    let hasMore = true;
    while (hasMore) {
        hasMore = false;
        for (const cat of categories) {
            if (categorized[cat].length > 0) {
                result.push(categorized[cat].shift()!);
                hasMore = true;
            }
        }
    }

    return result;
}

// Simple rotating image component - only handles the image transition
const RotatingImage: React.FC<{ images: string[]; alt: string; className: string }> = ({ images, alt, className }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={alt}
                    className={`${className} absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentIndex === i ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}
        </>
    );
};

const PartneredInstitutes: React.FC = () => {
    const [selectedInstitute, setSelectedInstitute] = useState<InstituteItem | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const items = useMemo(() => shuffleWithSeparation([...rawItems]), []);

    const openGallery = (item: InstituteItem) => {
        setSelectedInstitute(item);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedInstitute(null);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % 3);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + 3) % 3);
    };

    const getImageByIndex = (item: InstituteItem, index: number) => {
        const images = [item.images.mou, item.images.campus, item.images.event];
        return images[index];
    };

    const imageLabels = ["MoU Signing Ceremony", "Campus View", "Institute"];

    return (
        <main className="relative min-h-screen bg-[#030303] text-white overflow-hidden">
            {/* Background */}
            <GreenEmbers density={0.6} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56208_1px,transparent_1px),linear-gradient(to_bottom,#34D56208_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-[#34D562]/30 bg-[#34D562]/10"
                        >
                            <Handshake size={18} className="text-[#34D562]" />
                            <span className="text-[#34D562] font-mono tracking-widest uppercase text-sm font-bold">Partnerships</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                        >
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-[#28a74b]">Partnered Institutes</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            Collaborating with 50+ premier educational institutions across India to shape the future of technology education.
                        </motion.p>
                    </div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    >
                        {[
                            { icon: Building2, value: `50+`, label: "Partner Institutes" },
                            { icon: Users, value: "300,000+", label: "Students Reached" },
                            { icon: Award, value: "40+", label: "States Covered" },
                            { icon: GraduationCap, value: "500+", label: "Events Conducted" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#0A0A0A]/80 border border-white/10 rounded-2xl p-6 text-center hover:border-[#34D562]/30 transition-colors">
                                <stat.icon className="text-[#34D562] mx-auto mb-3" size={28} />
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Institutes Grid */}
            <section className="relative pb-32 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.name + index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                onClick={() => openGallery(item)}
                                className="group cursor-pointer"
                            >
                                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-[#34D562]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(52,213,98,0.15)]">
                                    {/* Main Image - Auto-rotating */}
                                    <div className="relative h-56 overflow-hidden">
                                        <RotatingImage
                                            images={[item.images.mou, item.images.campus, item.images.event]}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                                        {/* View Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="px-6 py-3 bg-[#34D562] text-black font-bold rounded-full flex items-center gap-2 shadow-[0_0_30px_rgba(52,213,98,0.5)]">
                                                <Eye size={18} />
                                                View Gallery
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <div className="flex items-start gap-4">
                                            {/* Logo */}
                                            {/* <div className="w-16 h-16 bg-white rounded-xl p-2 flex-shrink-0 shadow-lg">
                                                <img
                                                    src={item.logo}
                                                    alt={item.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div> */}

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-bold text-white group-hover:text-[#34D562] transition-colors duration-300 leading-tight mb-1 line-clamp-2">
                                                    {item.name}
                                                </h3>
                                                {item.location && (
                                                    <p className="text-sm text-gray-500">{item.location}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Image Previews */}
                                        <div className="flex gap-2 mt-4">
                                            {[item.images.mou, item.images.campus, item.images.event].map((img, i) => (
                                                <div key={i} className="flex-1 h-16 rounded-lg overflow-hidden border border-white/10 group-hover:border-[#34D562]/30 transition-colors">
                                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="h-1 bg-gradient-to-r from-transparent via-[#34D562]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedInstitute && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={closeGallery}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl max-h-[85vh] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg p-1.5">
                                        <img src={selectedInstitute.logo} alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white">{selectedInstitute.name}</h2>
                                        {selectedInstitute.location && (
                                            <p className="text-sm text-gray-400">{selectedInstitute.location}</p>
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={closeGallery}
                                    className="p-3 bg-white/10 hover:bg-[#34D562] rounded-full transition-colors group"
                                >
                                    <X size={24} className="text-white group-hover:text-black" />
                                </button>
                            </div>

                            {/* Main Image */}
                            <div className="w-full flex items-center justify-center bg-[#111]">
                                <div className="relative max-w-full max-h-[60vh]">
                                    <img
                                        src={getImageByIndex(selectedInstitute, currentImageIndex)}
                                        alt={selectedInstitute.name}
                                        className="max-w-full max-h-[60vh] object-contain mx-auto"
                                    />

                                    {/* Navigation */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-[#34D562] rounded-full transition-colors group"
                                    >
                                        <ChevronLeft size={24} className="text-white group-hover:text-black" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-[#34D562] rounded-full transition-colors group"
                                    >
                                        <ChevronRight size={24} className="text-white group-hover:text-black" />
                                    </button>

                                    {/* Image Label */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#34D562] text-black font-bold rounded-full text-sm">
                                        {imageLabels[currentImageIndex]}
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="p-4 flex justify-center gap-3">
                                {[0, 1, 2].map((i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        className={`relative w-32 h-20 rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === i
                                            ? 'border-[#34D562] shadow-[0_0_20px_rgba(52,213,98,0.5)]'
                                            : 'border-white/10 opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={getImageByIndex(selectedInstitute, i)}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 inset-x-0 bg-black/70 py-1 text-center">
                                            <span className="text-xs text-white font-medium">{imageLabels[i].split(' ')[0]}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default PartneredInstitutes;