import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import AwardBg from '../assets/images/AwardBlueBackgroundImage.png';
import AwardImage from '../assets/images/AwardsImage2.png';
import LeftFeather from '../assets/images/LeftFeather.svg';
import RightFeather from '../assets/images/RightFeather.svg';

const HomeAwards: React.FC = () => {
    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center items-center mb-16 md:mb-24 px-4"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white font-sans">
                    Awards & Recognition
                </h2>
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Visuals (Specific Layout) */}
                    <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
                        {/* 1. Absolute Blue Background Blob */}
                        <div
                            className="absolute z-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-contain bg-center bg-no-repeat opacity-80"
                            style={{ backgroundImage: `url(${AwardBg})` }}
                        />

                        {/* 2. Main Award Image with Gold Border */}
                        <div className="relative z-10 w-[280px] md:w-[400px]">
                            {/* Left Feather Decoration */}
                            <img
                                src={LeftFeather}
                                alt=""
                                className="absolute -top-10 -left-12 w-20 md:w-28 z-20"
                            />

                            <div className="overflow-hidden border-[8px] border-[#FFD700] rounded-lg shadow-[0_0_50px_rgba(255,215,0,0.2)]">
                                <img
                                    src={AwardImage}
                                    alt="Minissha Lamba awarding Geeks of Gurukul"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Right Feather Decoration */}
                            <img
                                src={RightFeather}
                                alt=""
                                className="absolute -bottom-10 -right-12 w-20 md:w-28 z-20"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center items-center text-center mx-auto w-full space-y-8"
                    >
                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight italic tracking-wide text-[#34D562]">
                            "The Best Ed-Tech Game Changer Of the Year 2025"
                        </h2>

                        {/* Dotted separator or decorative line could go here */}

                        {/* Quote Content */}
                        <div className="max-w-xl relative px-6 mt-6">
                            {/* Top Left Quote Icon (Gold) */}
                            <Quote
                                className="absolute -top-6 -left-0 text-[#FFD700] w-8 h-8 md:w-10 md:h-10 transform -scale-x-100 fill-[#FFD700]"
                            />

                            <p className="font-light text-white text-lg md:text-xl leading-relaxed">
                                Hon'ble Dy. Chief Minister of Madhya Pradesh & Renowned Bollywood Actress <span className="text-[#FFD700] font-semibold">Minissha Lamba</span> awarding Geeks of Gurukul <br /> <span className="text-white font-medium">The BIG Impact Award 2025.</span>
                            </p>

                            {/* Bottom Right Quote Icon (Gold) */}
                            <Quote
                                className="absolute -bottom-6 -right-0 text-[#FFD700] w-8 h-8 md:w-10 md:h-10 fill-[#FFD700]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeAwards;
