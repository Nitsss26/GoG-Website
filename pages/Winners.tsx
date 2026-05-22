import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Award, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import GreenEmbers from '../components/ui/GreenEmbers';

interface WinnerData {
    id: string;
    awardName: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: React.ReactNode;
    image: string;
    bottomBadges: { icon: React.ReactNode; text: string }[];
    stars: number;
    eventName: string;
    teamName?: string;
}

const winnersData: WinnerData[] = [
    {
        id: "1",
        awardName: "NATIONAL LEVEL HACKATHON",
        titleStart: "GoG x Sage University Bhopal Students",
        titleHighlight: "got 1st Prize of Rs 25,000",
        titleEnd: "at BGI National Level Hackathon",
        eventName: "BGI NATIONAL LEVEL HACKATHON",
        teamName: "Think Tank",
        description: (
            <>
                <p className="mb-4">
                    At the two-day National Level BGI Hackathon, <span className="text-[#34D562] font-semibold">Geeks of Gurukul</span> students from Sage University Bhopal delivered an outstanding performance, clinching the coveted first place. 
                </p>
                <p className="mb-4">
                    Our brilliant students outperformed numerous teams from across the nation, presenting superior solutions for challenges based on the <span className="text-white font-semibold">'Viksit Bharat'</span> theme spanning AI, EV, and App Development.
                </p>
                <p className="italic border-l-2 border-[#34D562] pl-3 text-gray-400">
                    "With the right guidance, every student can become a winner." - Faculty, Geeks of Gurukul
                </p>
            </>
        ),
        image: "/assets/bgi-hackathon.jpg",
        stars: 5,
        bottomBadges: [
            { icon: <Trophy size={16} className="text-[#34D562]" />, text: "1st Prize Winner" },
            { icon: <Medal size={16} className="text-[#34D562]" />, text: "₹25,000 Cash Prize" },
            { icon: <Award size={16} className="text-[#34D562]" />, text: "Best Technical Proficiency" }
        ]
    },
    {
        id: "2",
        awardName: "NATIONAL LEVEL HACKATHON",
        titleStart: "GoG x SGSU Bhopal Students",
        titleHighlight: "got 1st Prize of Rs 25,000",
        titleEnd: "at BGI National Level Hackathon",
        eventName: "BGI NATIONAL LEVEL HACKATHON",
        teamName: "ChargeIn",
        description: (
            <>
                <p className="mb-4">
                    At the two-day National Level BGI Hackathon, <span className="text-[#34D562] font-semibold">Geeks of Gurukul</span> students from SGSU, Bhopal delivered an outstanding performance, clinching the coveted first place.
                </p>
                <p className="mb-4">
                    Our brilliant students outperformed 400+ teams from across the India, presenting superior solutions for challenges based on the <span className="text-white font-semibold">'Viksit Bharat'</span> theme Smart Mobility EVs & Logistics.
                </p>
                <p className="italic border-l-2 border-[#34D562] pl-3 text-gray-400">
                    "With the right guidance, every student can become a winner." - Faculty, Geeks of Gurukul
                </p>
            </>
        ),
        image: "/assets/chargein-hackathon.jpg",
        stars: 5,
        bottomBadges: [
            { icon: <Trophy size={16} className="text-[#34D562]" />, text: "1st Prize Winner" },
            { icon: <Medal size={16} className="text-[#34D562]" />, text: "₹25,000 Cash Prize" },
            { icon: <Award size={16} className="text-[#34D562]" />, text: "Smart Mobility EVs" }
        ]
    },
    {
        id: "3",
        awardName: "NATIONAL LEVEL HACKATHON",
        titleStart: "GoG x SGSU Bhopal Students",
        titleHighlight: "got 1st Prize of Rs 25,000",
        titleEnd: "at BGI National Level Hackathon",
        eventName: "BGI NATIONAL LEVEL HACKATHON",
        teamName: "The Vibe Coders",
        description: (
            <>
                <p className="mb-4">
                    At the two-day National Level BGI Hackathon, <span className="text-[#34D562] font-semibold">Geeks of Gurukul</span> students from SGSU Bhopal delivered an outstanding performance, clinching the coveted first place.
                </p>
                <p className="mb-4">
                    Our brilliant students outperformed 400+ teams from across the India, presenting superior solutions for challenges based on the <span className="text-white font-semibold">'Viksit Bharat'</span> theme Mobile & Next-Gen App Innovation.
                </p>
                <p className="italic border-l-2 border-[#34D562] pl-3 text-gray-400">
                    "With the right guidance, every student can become a winner." - Faculty, Geeks of Gurukul
                </p>
            </>
        ),
        image: "/assets/vibecoders-hackathon.jpg",
        stars: 5,
        bottomBadges: [
            { icon: <Trophy size={16} className="text-[#34D562]" />, text: "1st Prize Winner" },
            { icon: <Medal size={16} className="text-[#34D562]" />, text: "₹25,000 Cash Prize" },
            { icon: <Award size={16} className="text-[#34D562]" />, text: "App Innovation" }
        ]
    }
];

const Winners = () => {
    return (
        <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden font-sans selection:bg-[#34D562] selection:text-black">
            <SEO
                title="Our Winners & Achievers | Geeks of Gurukul"
                description="Celebrating the remarkable achievements of our students and the prestigious awards won by Geeks of Gurukul."
                keywords="winners, achievements, awards, geeks of gurukul, hackathon winners, edtech awards"
                canonical="/winners"
            />

            <GreenEmbers density={0.3} />

            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56205_1px,transparent_1px),linear-gradient(to_bottom,#34D56205_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Header */}
            <div className="relative pt-32 pb-16 px-6 container mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#34D562]/10 border border-[#FFD700]/30 text-[#FFD700] font-mono text-sm mb-6 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                >
                    <Trophy size={16} />
                    <span>HALL OF FAME</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight"
                >
                    Celebrating Our <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-[#FFD700] to-[#34D562] animate-gradient-x">
                        Champions & Winners
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
                >
                    From prestigious industry recognitions to national hackathon victories, discover the proud moments that define our journey of excellence.
                </motion.p>
            </div>

            {/* Winners List */}
            <div className="container mx-auto px-4 md:px-8 pb-32 z-10 relative space-y-32">
                {winnersData.map((winner, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={winner.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                        >
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 relative group">
                                {/* Decorative elements behind image */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#34D562] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                                <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
                                    <img
                                        src={winner.image}
                                        alt={winner.eventName}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                    {/* Event Name Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Trophy size={20} className="text-[#FFD700]" />
                                            <span className="text-[#FFD700] font-bold tracking-wider text-sm md:text-base">
                                                {winner.eventName}
                                            </span>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(winner.stars)].map((_, i) => (
                                                <Star key={i} size={16} className="text-[#FFD700] fill-[#FFD700]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative">
                                {/* Decorative Quotes */}
                                <div className="absolute -top-10 -left-10 text-9xl text-white/5 font-serif select-none pointer-events-none">"</div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#34D562]/30 bg-[#34D562]/10 backdrop-blur-md text-[#34D562] font-semibold text-sm mb-6 shadow-[0_0_15px_rgba(52,213,98,0.1)]"
                                >
                                    <span>🏆</span> {winner.awardName}
                                </motion.div>

                                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                                    {winner.teamName && (
                                        <span className="block text-xl md:text-2xl text-gray-300 font-medium mb-2">
                                            Team <span className="text-white">"{winner.teamName}"</span>
                                        </span>
                                    )}
                                    {winner.titleStart}{' '}
                                    <span className="text-[#34D562]">{winner.titleHighlight}</span>{' '}
                                    {winner.titleEnd}
                                </h2>

                                <div className="relative pl-6 border-l-2 border-[#FFD700]/50 mb-10">
                                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                        {winner.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {winner.bottomBadges.map((badge, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm shadow-lg"
                                        >
                                            {badge.icon}
                                            <span className="text-sm font-medium text-gray-200">{badge.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <div className="relative py-20 px-6 z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0A0A0A]">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl md:text-4xl font-bold mb-6">Be the Next Champion</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join Geeks of Gurukul and unlock your potential to achieve greatness on global platforms.</p>
                    <a
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#34D562] text-black font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(52,213,98,0.3)]"
                    >
                        Explore Programs <ChevronRight size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Winners;
