import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronDown } from 'lucide-react';

interface ApplyFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ApplyForm = ({ isOpen, onClose }: ApplyFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        college: '',
        remarks: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                onClose();
                setFormData({ name: '', email: '', contact: '', subject: '', college: '', remarks: '' });
            }, 3000);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Apply Now</h2>
                            <p className="text-gray-400 text-sm mb-6">Start your journey with India's Skilled University.</p>

                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#34D562]/20 flex items-center justify-center text-[#34D562] mb-4">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
                                    <p className="text-gray-400">Our admissions team will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#34D562] focus:outline-none transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Email */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#34D562] focus:outline-none transition-colors"
                                                placeholder="Email"
                                            />
                                        </div>
                                        {/* Contact */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</label>
                                            <input
                                                required
                                                type="tel"
                                                value={formData.contact}
                                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#34D562] focus:outline-none transition-colors"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject Selection */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Subject of Interest</label>
                                        <div className="relative">
                                            <select
                                                required
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#34D562] focus:outline-none transition-colors appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="bg-[#111] text-white">Select Program</option>
                                                <option value="B.TECH" className="bg-[#111] text-white">B.TECH</option>
                                                <option value="B.COM" className="bg-[#111] text-white">B.COM</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                                        </div>
                                    </div>

                                    {/* Conditional College Selection */}
                                    <AnimatePresence>
                                        {formData.subject && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 mt-2">Preferred College</label>
                                                <div className="relative">
                                                    <select
                                                        required
                                                        value={formData.college}
                                                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#34D562] focus:outline-none transition-colors appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled className="bg-[#111] text-white">Select Campus</option>
                                                        <option value="Centurion University" className="bg-[#111] text-white">Centurion University</option>
                                                        <option value="Sage Bhopal" className="bg-[#111] text-white">Sage Bhopal</option>
                                                        <option value="Sage Indore" className="bg-[#111] text-white">Sage Indore</option>
                                                        <option value="Gyanveer" className="bg-[#111] text-white">Gyanveer</option>
                                                        <option value="SIGU" className="bg-[#111] text-white">SIGU</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Remarks */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Remarks (Optional)</label>
                                        <textarea
                                            value={formData.remarks}
                                            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#34D562] focus:outline-none transition-colors h-24 resize-none"
                                            placeholder="Any specific questions?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-[#34D562] text-black font-bold text-lg rounded-xl hover:bg-[#2dbd56] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(52,213,98,0.3)] mt-4"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
