import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, BookOpen, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GreenEmbers from '../components/ui/GreenEmbers';
import SEO from '../components/SEO';
import { coursesData, CourseCardData } from '../data/coursesData';

const Courses = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = coursesData.filter(course =>
        course.universityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.programName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCardClick = (link: string, isExternal: boolean) => {
        if (isExternal) {
            window.location.href = link;
        } else {
            navigate(link);
        }
    };

    return (
        <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden font-sans selection:bg-[#34D562] selection:text-black">
            <SEO
                title="Explore Top University Programs"
                description="Discover industry-integrated B.Tech and degree programs from top universities like Centurion, SAGE, and more. Apply now with Geeks of Gurukul."
                keywords="university programs, btech admissions, top colleges india, centurion university, sage university"
                canonical="/courses"
            />

            <GreenEmbers density={0.4} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56208_1px,transparent_1px),linear-gradient(to_bottom,#34D56208_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Header Section */}
            <div className="relative pt-32 pb-12 px-6 container mx-auto text-center z-10">
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block py-1 px-3 rounded-full bg-[#34D562]/10 border border-[#34D562]/20 text-[#34D562] font-mono text-sm mb-4"
                >
                    PREMIUM DEGREES
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold font-display mb-6"
                >
                    Shape Your Future with <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white">Best Universities</span>
                </motion.h1>
                {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
                >
                    Choose from India's most prestigious institutions offering industry-integrated curriculums designed by <b>Geeks of Gurukul</b>.
                </motion.p> */}

                {/* Search Bar */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-xl mx-auto relative group"
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-500 group-focus-within:text-[#34D562] transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search universities, courses, or cities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-[#0A0A0A] border border-white/10 rounded-xl focus:outline-none focus:border-[#34D562]/50 focus:ring-1 focus:ring-[#34D562]/50 text-white placeholder-gray-600 transition-all shadow-lg hover:border-white/20"
                    />
                </motion.div> */}
            </div>

            {/* Course Grid */}
            <div className="container mx-auto px-4 md:px-8 pb-32 z-10 relative">
                <div className="flex flex-wrap justify-center gap-8">
                    {filteredCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} onClick={() => handleCardClick(course.link, course.isExternal)} />
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl">No programs found matching your search.</p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="mt-4 text-[#34D562] hover:underline"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// Extracted Card Component for cleanness
const CourseCard = ({ course, index, onClick }: { course: any, index: number, onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#34D562]/50 transition-all duration-300 shadow-xl cursor-pointer flex flex-col h-full w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.4rem)]"
            onClick={onClick}
        >
            {/* Image Section */}
            <div className="relative h-48">
                <div className="w-full h-full overflow-hidden rounded-t-2xl">
                    <img
                        src={course.image}
                        alt={course.universityName}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
                </div>

                {/* Logo Badge */}
                <div className="absolute -bottom-10 left-6 w-36 h-20 bg-white rounded-xl shadow-2xl flex items-center justify-center z-20 border border-black/5 overflow-hidden p-3 hover:scale-105 transition-transform duration-300">
                    <img src={course.logo} alt="university logo" className="max-w-full max-h-full object-contain" />
                </div>

                {/* Wishlist/Heart Icon (Decorative) */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-[#34D562] transition-colors z-10">
                    <div className="w-4 h-4 rounded-full border border-white/50 group-hover:bg-[#34D562] group-hover:border-[#34D562] transition-colors" />
                </div>
            </div>

            {/* Content Section */}
            <div className="pt-12 pb-6 px-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#34D562] transition-colors">
                        {course.universityName}
                    </h3>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                    <MapPin size={12} />
                    {course.location}
                </div>

                <h4 className="text-lg font-medium text-gray-200 mb-2 border-b border-white/10 pb-3 whitespace-pre-line min-h-[90px]">
                    {course.programName}
                </h4>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-[#34D562] font-mono px-2 py-1 bg-[#34D562]/10 rounded w-fit">
                        {course.approvals}
                    </p>
                    <span className="text-[10px] bg-[#34D562] text-black font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-[0_0_10px_rgba(52,213,98,0.3)]">
                        GoG | Co-Branded
                    </span>
                </div>

                {/* Stats Grid */}
                {/* <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                            <CheckCircle2 size={14} className="text-[#34D562]" />
                            <span>Specialisations</span>
                        </div>
                        <p className="text-white font-semibold pl-6">{course.specialisations}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                            <CheckCircle2 size={14} className="text-[#34D562]" />
                            <span>Certifications</span>
                        </div>
                        <p className="text-white font-semibold pl-6">{course.certifications}</p>
                    </div>
                </div> */}

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-500">Total Fees</p>
                        <p className="text-lg font-bold text-white">{course.fees}</p>
                    </div>
                </div>
            </div>

            {/* CTA Button - Full Width Bottom */}
            <div className="p-4 bg-[#34D562]/10 border-t border-[#34D562]/20 group-hover:bg-[#34D562] transition-colors duration-300">
                <div className="flex items-center justify-center gap-2 text-[#34D562] font-semibold group-hover:text-black">
                    <span>Book Your Seat</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

export default Courses;
