import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, MonitorPlay, Globe, ArrowRight, TrendingUp, Calculator, MessageCircle, X, Calendar
} from 'lucide-react';
import {
    studentVlogs, careerPathData, alumniSuccess, recruiterTestimonials, blogUpdates
} from '../data/admissionsData';

export const StudentVlogs = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {studentVlogs.map((vlog) => (
            <div key={vlog.id} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#34D562] transition-colors shadow-lg">
                <img src={vlog.thumbnail} alt={vlog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#34D562] flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Play size={20} fill="currentColor" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white font-bold text-sm leading-tight mb-1 line-clamp-2">{vlog.title}</p>
                    <span className="text-xs text-gray-300 flex items-center gap-1">
                        <MonitorPlay size={10} className="text-[#34D562]" /> {vlog.duration}
                    </span>
                </div>
            </div>
        ))}
    </div>
);

export const VirtualTour = () => (
    <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600" alt="Campus 360" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(52,213,98,0.3)]">
                <Globe size={40} className="text-[#34D562]" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">Virtual Campus Tour</h3>
            <p className="text-gray-300 max-w-md mx-auto mb-6">Experience our labs, hostels, and smart classrooms in 360° before you arrive.</p>
            <button className="bg-[#34D562] text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors flex items-center gap-2">
                Start Exploring <ArrowRight size={18} />
            </button>
        </div>
    </div>
);

export const CareerVisualizer = () => (
    <div className="relative py-8 overflow-x-auto">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-[1000px] md:w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />

        <div className="flex md:grid md:grid-cols-5 gap-6 relative z-10 w-[1000px] md:w-auto px-4 md:px-0">
            {careerPathData.map((step, i) => (
                <div key={i} className="group relative w-48 md:w-auto shrink-0 flex flex-col">
                    <div className="bg-[#111] border border-white/10 p-5 rounded-2xl hover:border-[#34D562] transition-all duration-300 h-full flex flex-col min-h-[180px] shadow-lg group-hover:-translate-y-1">
                        <div className="text-xs font-mono text-[#34D562] mb-3 px-2 py-1 bg-[#34D562]/10 rounded border border-[#34D562]/20 w-fit">Year {step.year}</div>
                        <h4 className="text-white font-bold text-lg leading-tight mb-2">{step.role}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed mb-auto">{step.desc}</p>
                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-white font-bold text-sm">
                            <ArrowRight size={14} className="text-[#34D562]" /> {step.salary}
                        </div>
                    </div>
                    {/* Connector Dot */}
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-[#111] border-2 border-[#34D562] rounded-full -translate-y-1/2 z-20 group-hover:scale-125 transition-transform" />
                </div>
            ))}
        </div>
    </div>
);

export const ScholarshipStats = () => {
    const [marks, setMarks] = useState(85);
    const scholarship = marks > 95 ? "50%" : marks > 90 ? "30%" : marks > 85 ? "20%" : marks > 80 ? "10%" : "0%";
    const savings = marks > 95 ? "₹2.5 Lakhs" : marks > 90 ? "₹1.5 Lakhs" : marks > 85 ? "₹1 Lakh" : marks > 80 ? "₹50,000" : "₹0";

    return (
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="text-[#34D562]" /> Scholarship Calculator
            </h3>
            <div className="mb-8">
                <div className="flex justify-between text-gray-400 mb-2">
                    <span>12th Grade / JEE Score</span>
                    <span className="text-white font-bold">{marks}%</span>
                </div>
                <input
                    type="range"
                    min="60"
                    max="100"
                    value={marks}
                    onChange={(e) => setMarks(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#34D562]"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#34D562]/10 p-4 rounded-xl border border-[#34D562]/20 text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Scholarship</p>
                    <p className="text-[#34D562] text-3xl font-bold">{scholarship}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">You Save</p>
                    <p className="text-white text-3xl font-bold">{savings}</p>
                </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">*Estimated based on current merit policies. T&C apply.</p>
        </div>
    );
};

export const AlumniNetwork = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {alumniSuccess.map((alum, i) => (
            <div key={i} className="bg-[#111] border border-white/10 p-5 rounded-2xl hover:border-[#34D562]/50 transition-all hover:bg-white/5 group">
                <div className="flex items-center gap-4 mb-4">
                    <img src={alum.image} alt={alum.name} className="w-16 h-16 rounded-xl border-2 border-[#34D562] object-cover" />
                    <div className="min-w-0">
                        <h4 className="text-white font-bold text-sm truncate">{alum.name}</h4>
                        <p className="text-[#34D562] text-xs font-mono truncate">{alum.company}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="bg-white/5 px-3 py-2 rounded flex justify-between items-center text-xs">
                        <span className="text-gray-400">Role</span>
                        <span className="text-white font-medium max-w-[100px] truncate block text-right">{alum.role}</span>
                    </div>
                    <div className="bg-[#34D562]/10 px-3 py-2 rounded flex justify-between items-center text-xs border border-[#34D562]/20">
                        <span className="text-gray-400">Package</span>
                        <span className="text-[#34D562] font-bold">{alum.package}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export const RecruiterTestimonials = () => (
    <div className="grid md:grid-cols-3 gap-6">
        {recruiterTestimonials.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#34D562] rounded-full flex items-center justify-center text-black font-serif text-3xl font-bold">"</div>
                <img src={item.logo} alt={item.company} className="h-8 mb-6 object-contain opacity-80" />
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{item.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-black">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                </div>
            </div>
        ))}
    </div>
);

export const BlogUpdates = () => (
    <div className="grid md:grid-cols-3 gap-8">
        {blogUpdates.map((post, i) => (
            <div key={i} className="group cursor-pointer">
                <div className="rounded-xl overflow-hidden mb-4 relative aspect-video">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-[#34D562] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <Calendar size={12} /> {post.date}
                </div>
                <h4 className="text-white font-bold text-lg group-hover:text-[#34D562] transition-colors leading-tight">
                    {post.title}
                </h4>
            </div>
        ))}
    </div>
);

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
                    >
                        <div className="bg-[#003366] p-4 flex justify-between items-center">
                            <h4 className="text-white font-bold flex items-center gap-2">
                                <MessageCircle size={18} /> Admissions AI
                            </h4>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white"><X size={18} /></button>
                        </div>
                        <div className="p-4 h-64 overflow-y-auto bg-gray-50">
                            <div className="flex gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#34D562] flex items-center justify-center text-black font-bold text-xs shrink-0">AI</div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                                    Hi! I can help you with Fee Structure, Syllabus, or Placements. What would you like to know?
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs">
                                {["Fee Structure", "Placement Stats", "Scholarship", "Apply Now"].map((tag) => (
                                    <button key={tag} className="px-3 py-2 bg-white border border-[#34D562] text-[#006633] rounded-full hover:bg-[#34D562] hover:text-white transition-colors">
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-3 border-t border-gray-100 bg-white">
                            <input type="text" placeholder="Type a message..." className="w-full text-sm p-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#34D562]" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[#34D562] rounded-full shadow-[0_4px_20px_rgba(52,213,98,0.4)] flex items-center justify-center text-black hover:scale-110 transition-transform"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} fill="currentColor" />}
            </button>
        </div>
    );
};
