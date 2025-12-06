import React from 'react';
import { motion } from 'framer-motion';
import ProgramSection from '../components/ProgramSection';
import GreenEmbers from '../components/ui/GreenEmbers';
import GreenEmbers2 from '../components/ui/GreenEmbers2';
import { CyberHexagon, CyberSquare } from '../components/ui/CyberShapes';

import Program1Img from '../assets/1st.png';
import Program2Img from '../assets/2nd.png';
import Program3Img from '../assets/3rd.png';
import Program4Img from '../assets/4th.png';

const Programs: React.FC = () => {
    const programs = [
        {
            title: "Integrated Degree Programs (UG/PG)",
            // Image: Classic Ivy League Style Campus with Clock Tower/Brick
            image: Program1Img,
            badge: "100% Offline Training",
            duration: "2 to 4 years",
            eligibility: "B.Tech/M.Tech/MBA/BBA/MCA/BCA/BSc/MSc",
            outcome: "Paid Internships & Jobs",
            checklist: [
                "Covers Standard/Affiliated University + Industry Specialization Curriculum",
                "IIT (BTech + MTech) Alumni Teach Offline Classes With Industry Expertise.",
                "End To End Placement Preparation With Project Based Learning.",
                "100% Internship From 4th Sem, Jobs From 7th Sem.",
                "Industry Projects, Soft Skills, And Expert Guest Sessions Provided."
            ]
        },
        {
            title: "Co-Branded Degree Programs (UG / PG)",
            // Image: Grand Historic University with Quad
            image: Program2Img,
            badge: "In Collaboration With E&ICT, IIT Guwahati",
            duration: "2 to 4 years",
            eligibility: "B.Tech/M.Tech/MBA/BBA/MCA/BCA/BSc/MSc",
            outcome: "Paid Internships & Jobs",
            checklist: [
                "All The Benefits Of Integrated Degree Program.",
                "Semester Completion Certification & ID Card From EICT IIT Guwahati.",
                "Guest Lectures From IIT Guwahati Faculty And Industry Experts From Top MNCs.",
                "1 Month Campus Immersion Program In IIT Guwahati Campus Every Year.",
                "Semester Wise Marksheet And Alumni Status From EICT IIT Guwahati."
            ]
        },
        {
            title: "Industrial Placement Training",
            // Image: Modern University Library/Center
            image: Program3Img,
            badge: "100% Placement Assurance",
            duration: "2 to 4 years",
            eligibility: "B.Tech/M.Tech/MBA/BBA/MCA/BCA/BSc/MSc",
            outcome: "Paid Internships & Jobs",
            checklist: [
                "Covers Industrial Standard Curriculum (Technical Skills).",
                "Aptitude, Reasoning, And Communication For Career Readiness.",
                "End To End Placement Preparation With Project Based Learning.",
                "100% Internship And Placement From 4th Semester Onward.",
                "IIT/IIM & MAANG Experts Will Teach Offline."
            ]
        },
        {
            title: "Medical Technical Training",
            // Image: Distinctive Academic Building (Not Hospital)
            image: Program4Img,
            badge: "AI-Powered",
            duration: "2 to 4 years",
            eligibility: "MBBS/BDS/BHMS/BAMS/Pharma/Nursing/Biotech",
            outcome: "Paid Internships & Jobs",
            checklist: [
                "Covers Artificial Intelligence In Medical Science.",
                "Covers Curriculum Of Medical Devices & Clinical Research & Medical Coding.",
                "Covers Curriculum Of Bio Informatics & Hospital And Healthcare Management.",
                "Faculties Teach Offline From AIIMS & Other Government Medical Colleges.",
                "AI-Powered Certifications In Healthcare And Medical Fields."
            ]
        }
    ];

    return (
        <main className="relative min-h-screen bg-[#030303] overflow-hidden">
            {/* Normal Density Embers */}
            <GreenEmbers />

            {/* Hero Section */}
            <div className="relative pt-32 pb-0 px-6 min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56210_1px,transparent_1px),linear-gradient(to_bottom,#34D56210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Halogen Glow Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#34D562]/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/80 to-[#030303]" />

                {/* Extra Embers for Hero */}
                <GreenEmbers2 density={6.5} className="absolute inset-0 z-[5]" />

                {/* Decorative Cyber Shapes */}
                <div className="absolute top-28 left-10 opacity-80 hidden lg:block pointer-events-none">
                    <CyberHexagon size={250} />
                </div>
                <div className="absolute bottom-16 right-10 opacity-80 hidden lg:block pointer-events-none">
                    <CyberSquare size={300} />
                </div>

                <div className="container mx-auto relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-block mb-6 px-6 py-2 rounded-full border border-[#34D562]/30 bg-[#34D562]/10 backdrop-blur-md shadow-[0_0_20px_rgba(52,213,98,0.3)]"
                    >
                        <span className="text-[#34D562] font-mono tracking-widest uppercase text-sm font-bold">World Class Education</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(52,213,98,0.3)]"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-[#28a74b] to-[#34D562] animate-gradient">Programs</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
                    >
                        Discover our thoughtfully designed programs that combine innovation, expertise, and practical learning to help you achieve your goals.
                    </motion.p>
                </div>
            </div>

            {/* Programs Sections - Negative margin to pull up */}
            <div className="relative z-10 space-y-0 -mt-10 md:-mt-20">
                {programs.map((program, index) => (
                    <ProgramSection
                        key={index}
                        {...program}
                        index={index}
                    />
                ))}
            </div>

            {/* Bottom CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#34D562]/5" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Join thousands of students transforming their careers with Geeks of Gurukul.</p>
                    <button className="px-10 py-5 bg-[#34D562] text-black font-bold text-xl rounded-full hover:scale-105 hover:shadow-[0_0_50px_rgba(52,213,98,0.5)] transition-all duration-300">
                        Apply Now
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Programs;
