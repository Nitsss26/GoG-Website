import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, Circle, Sparkles, Award, Users } from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';
import GreenEmbers2 from '../components/ui/GreenEmbers2';
import { CyberHexagon, CyberSquare } from '../components/ui/CyberShapes';
import FounderImg from '../assets/images/founder.png';
import F1Img from '../assets/images/f1.png';
import F2Img from '../assets/images/f2.png';

const AboutGoG: React.FC = () => {
    const leaders = [
        {
            image: FounderImg,
            name: "Mr. Chintan Vatsa Jha",
            role: "Founder",
            quote: "Our Vision Is To Empower Learners Across India By Building A Future-Ready Ecosystem That Blends Ancient Wisdom With Modern Technology. At Geeks of Gurukul, We Believe In Equipping You With Real-World Skills, Industry Exposure, And Mentorship That Truly Makes A Difference. We're not just creating coders or engineers—we're nurturing innovators, creators, and leaders of tomorrow.",
            highlight: "Keep Exploring, Keep Building, And Let's Redefine Education Together.",
            badge: "Founder",
            linkedin: "#"
        },
        {
            image: F2Img,
            name: "Mr. Ajay Katana",
            role: "Chief Technology Officer",
            quote: " In Today's Rapidly Evolving Technological Landscape, It's Crucial To Stay Appropriately Skilled And Up-To-Date With Dynamic Market Trends. At Geeks Of Gurukul, We Pride Ourselves On Teaching Students The Latest, Most In-Demand Technologies, Ensuring That You Are Well-Prepared And Job-Ready For Your Dream Companies.",
            highlight: "Stay Innovative, Stay Determined, And Together, Let's Shape A Brighter Future.",
            badge: "CTO",
            linkedin: "#"
        },
        {
            image: F1Img,
            name: "Mr. Neeraj Sahu",
            role: "Chief Operating Officer",
            quote: " Our Vision Is To Create A Modern-Day Gurukul That Provides You With The Skills, Resources, And Opportunities To Excel. We Are Committed To Ensuring That You Have Access To Quality Education And The Tools Needed To Succeed In Today's Competitive World.",
            highlight: "Stay Curious, Stay Committed, And Together, Let's Achieve Greatness.",
            badge: "COO",
            linkedin: "#"
        }
    ];

    return (
        <main className="relative min-h-screen bg-[#030303] overflow-hidden">
            {/* Background Effects */}
            <GreenEmbers />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-6 min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56210_1px,transparent_1px),linear-gradient(to_bottom,#34D56210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Halogen Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#34D562]/20 blur-[150px] rounded-full pointer-events-none" />

                {/* Extra Embers */}
                <GreenEmbers2 density={3} className="absolute inset-0 z-[5]" />

                {/* Decorative Shapes */}


                <div className="container mx-auto relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-block mb-6 px-6 py-2 rounded-full border border-[#34D562]/30 bg-[#34D562]/10 backdrop-blur-md shadow-[0_0_20px_rgba(52,213,98,0.3)]"
                    >
                        <span className="text-[#34D562] font-mono tracking-widest uppercase text-sm font-bold flex items-center gap-2">
                            <Users size={16} />
                            About GoG
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(52,213,98,0.3)]"
                    >
                        Message From The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-[#28a74b] to-[#34D562]">Leadership Team</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Meet the visionaries driving innovation and excellence at Geeks of Gurukul.
                    </motion.p>
                </div>
            </div>

            {/* Leadership Cards */}
            <div className="container mx-auto px-6 pb-32 relative z-10">
                <div className="space-y-16 w-full max-w-[1600px] mx-auto">
                    {leaders.map((leader, index) => (
                        <LeadershipCard key={index} {...leader} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
};

interface LeadershipCardProps {
    image: string;
    name: string;
    role: string;
    quote: string;
    highlight: string;
    badge: string;
    linkedin: string;
    index: number;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ image, name, role, quote, highlight, badge, linkedin, index }) => {
    const isReversed = index % 2 === 1;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-stretch bg-[#0A0A0A]/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#34D562]/40 transition-all duration-500 group`}
        >
            {/* Image Section */}
            <div className="lg:w-1/3 p-6 relative">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20 bg-[#34D562] text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(52,213,98,0.5)]">
                    {badge}
                </div>

                {/* Image Container */}
                <div className="relative h-full min-h-[400px]">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[#34D562] rounded-2xl blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

                    {/* Image with Border */}
                    <div className="relative h-full rounded-2xl overflow-hidden border-2 border-[#34D562]/30 group-hover:border-[#34D562] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Bottom Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <div className="flex items-center gap-3">
                                <a
                                    href={linkedin}
                                    className="p-3 bg-[#34D562] hover:bg-[#28a74b] rounded-lg text-black transition-colors duration-300"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-display font-bold text-white mb-1">{name}</h3>
                                    <p className="text-sm text-gray-400 font-mono tracking-wide">{role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3 p-6 lg:p-10 flex flex-col justify-center space-y-6">
                {/* Quote Icon */}
                <div className="relative">
                    <Quote className="text-[#34D562]/30 w-16 h-16" />
                </div>

                {/* Quote Text */}
                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light italic relative pl-4">
                        <span className="absolute -left-2 top-0 text-[#34D562]/50 text-4xl">"</span>
                        {quote}
                        <span className="text-[#34D562]/50 text-4xl">"</span>
                    </p>

                    {/* Highlight */}
                    <div className="flex items-start gap-3 bg-[#34D562]/10 border border-[#34D562]/30 rounded-xl p-6">
                        <Sparkles className="text-[#34D562] mt-1 flex-shrink-0" size={24} />
                        <p className="text-xl md:text-2xl text-[#34D562] font-display font-medium leading-relaxed">
                            {highlight}
                        </p>
                    </div>
                </div>

                {/* Decorative Bottom Line */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="flex-1 h-1 bg-gradient-to-r from-[#34D562] to-transparent rounded-full" />
                    <Award className="text-[#34D562]" size={24} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutGoG;
