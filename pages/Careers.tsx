import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Search, Code, Building, Settings, Share2, Palette, Video, X, Send, User, Mail, Phone, ExternalLink, Briefcase, GraduationCap, FileText, CheckCircle2, ChevronRight, Upload, PencilLine, Globe, Target, Sparkles, Award } from 'lucide-react';
import SEO from '../components/SEO';
import GreenEmbers from '../components/ui/GreenEmbers';
import GreenEmbers2 from '../components/ui/GreenEmbers2';

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    fullDescription: string;
    requirements: string[];
    responsibilities: string[];
    eligibility: string;
    compensation: string[];
    selectionProcess: string[];
    icon: React.FC<any>;
}

const jobs: Job[] = [
    {
        id: 'sde-prof',
        title: 'SDE & Professor',
        department: 'Engineering & Academics',
        location: 'Bhopal/Indore (On-site)',
        type: 'Full-time',
        icon: Code,
        description: 'Build cutting-edge software solutions while mentoring the next generation of developers.',
        fullDescription: 'Geeks of Gurukul is seeking passionate Software Development Engineers (SDEs) and Professors to join our dynamic team. This role is an excellent opportunity for IIT graduates who want to build cutting-edge software solutions while also contributing to education by mentoring and guiding students.',
        responsibilities: [
            'Develop & implement industry-relevant projects for student training and learning outcomes',
            'Design and deliver engaging lessons in core computer science subjects and modern technologies',
            'Mentor and guide students through project-based learning and practical problem-solving'
        ],
        requirements: [
            'Freshers with strong fundamentals and a passion for teaching/training are welcome'
        ],
        eligibility: 'B.Tech/M.Tech graduates from any IIT',
        compensation: [
            'Package: ₹4 – 7 LPA (Performance-Based)',
            'Work with IITians & Industry Experts'
        ],
        selectionProcess: [
            'Resume Shortlisting',
            'Technical Interview',
            'HR Interview',
            'Managerial Round',
            'Offer Letter'
        ]
    },
    {
        id: 'hoi',
        title: 'Head of Institute',
        department: 'Leadership',
        location: 'Bhopal/Indore (On-site)',
        type: 'Full-time',
        icon: Building,
        description: 'Lead institutional operations and academic excellence to bridge the industry-academia gap.',
        fullDescription: 'Lead our partnered institutes to excellence as the Head of Institute. You will be responsible for streamlining curriculum, managing day-to-day business activities, and ensuring high-quality academic delivery.',
        responsibilities: [
            'Work with faculty to streamline curriculum',
            'Gather and act on student feedback',
            'Manage day-to-day business activities'
        ],
        requirements: [
            'Minimum 1 year of experience'
        ],
        eligibility: 'Assistant/Associate Professor background. B.Tech/M.Tech/MS/Phd Degree.',
        compensation: [
            'Competitive Scale',
            'Strategic leadership role'
        ],
        selectionProcess: [
            'Initial Screening',
            'Leadership Interview',
            'HR Interview',
            'Founder Round',
            'Offer Letter'
        ]
    },
    {
        id: 'video-editor',
        title: 'Video Editor',
        department: 'Creative & Marketing',
        location: 'Bhopal (On-site)',
        type: 'Full-time',
        icon: Video,
        description: 'Create high-impact cinematic content and storytelling videos for our global platforms.',
        fullDescription: 'We are looking for a creative Video Editor who can transform raw footage into professional, high-energy videos. You will work closely with our marketing team to produce educational content, advertisements, and brand stories.',
        responsibilities: [
            'Edit raw footage into high-quality videos',
            'Implement sound design and color grading',
            'Optimize content for social media'
        ],
        requirements: [
            'Proficiency in Adobe Premiere Pro & After Effects'
        ],
        eligibility: 'Strong portfolio essential. 1-3 years of experience preferred.',
        compensation: ['₹3.5 – 6 LPA'],
        selectionProcess: ['Portfolio Review', 'Technical Task', 'HR Interview', 'Managerial Round', 'Offer Letter']
    },
    {
        id: 'graphic-designer',
        title: 'Graphic Designer',
        department: 'Creative & Marketing',
        location: 'Bhopal (On-site)',
        type: 'Full-time',
        icon: Palette,
        description: 'Design premium visual identities and high-end marketing assets for the brand.',
        fullDescription: 'We are looking for a visionary Graphic Designer to lead our visual aesthetics. You will be responsible for creating brand identities, UI components, and high-impact social media graphics.',
        responsibilities: [
            'Create high-end visual assets for campaigns',
            'Design UI/UX elements for web/app',
            'Maintain brand consistency'
        ],
        requirements: [
            'Expert mastery of Photoshop, Illustrator, Figma'
        ],
        eligibility: 'Bachelor’s degree in Fine Arts/Design. 1+ years experience.',
        compensation: ['₹3 – 5 LPA'],
        selectionProcess: ['Portfolio Review', 'Skill Test', 'HR Interview', 'Managerial Round', 'Offer Letter']
    },
    {
        id: 'seo-specialist',
        title: 'SEO Specialist',
        department: 'Growth & Marketing',
        location: 'Remote/Hybrid',
        type: 'Full-time',
        icon: Search,
        description: 'Master search engine optimization to drive organic growth and brand visibility.',
        fullDescription: 'Join our growth team as an SEO Specialist. You will be responsible for on-page, off-page, and technical SEO strategies to ensure Geeks of Gurukul dominates search results.',
        responsibilities: [
            'Keyword research and competitor analysis',
            'Optimize content and meta tags',
            'Implement link-building strategies'
        ],
        requirements: [
            'Proven track record in organic growth'
        ],
        eligibility: 'Graduate with 2+ years of SEO experience.',
        compensation: ['₹4 – 6 LPA'],
        selectionProcess: ['Strategy Presentation', 'Technical Interview', 'HR Interview', 'Managerial Round', 'Offer Letter']
    },
    {
        id: 'content-writer',
        title: 'Content Writer',
        department: 'Growth & Marketing',
        location: 'Remote/Hybrid',
        type: 'Full-time',
        icon: PencilLine,
        description: 'Craft compelling stories and SEO-friendly copy that resonates with our community.',
        fullDescription: 'We are looking for a wordsmith who can capture the voice of Geeks of Gurukul. You will write blogs, website copy, and scripts that inspire students and drive engagement.',
        responsibilities: [
            'Write high-quality SEO blog posts',
            'Create engaging social media copy',
            'Research complex tech topics'
        ],
        requirements: [
            'Exceptional command over storytelling'
        ],
        eligibility: 'Graduate in English/Journalism. 1+ years exp.',
        compensation: ['₹3 – 5 LPA'],
        selectionProcess: ['Writing Task', 'Interview', 'HR Interview', 'Managerial Round', 'Offer Letter']
    },
    {
        id: 'social-media-manager',
        title: 'Social Media Manager',
        department: 'Growth & Marketing',
        location: 'Bhopal (On-site)',
        type: 'Full-time',
        icon: Share2,
        description: 'Lead our social presence and build a viral brand community across all platforms.',
        fullDescription: 'We need a high-energy Social Media Manager to take Geeks of Gurukul to the next level. You will manage our community, plan viral campaigns, and lead our social voice.',
        responsibilities: [
            'Manage end-to-end social media strategy',
            'Plan and execute viral campaigns',
            'Analyze engagement metrics'
        ],
        requirements: [
            'Deep understanding of social algorithms'
        ],
        eligibility: 'Graduate with 1-2 years exp in social management.',
        compensation: ['₹3.5 – 5.5 LPA'],
        selectionProcess: ['Strategy Review', 'Interview', 'HR Interview', 'Managerial Round', 'Offer Letter']
    },
    {
        id: 'om',
        title: 'Operations Manager',
        department: 'Operations',
        location: 'Bhopal/Indore',
        type: 'Full-time',
        icon: Settings,
        description: 'Streamline offline and online operations for smooth program execution.',
        fullDescription: 'We are looking for an Operations Manager to oversee the smooth execution of our programs at partnered institutes and our center.',
        responsibilities: [
            'Oversee day-to-day operations at campus',
            'Coordinate between students/faculty',
            'Manage resources and logistics'
        ],
        requirements: [
            'Operations management experience'
        ],
        eligibility: 'Graduate with 2+ years of relevant experience.',
        compensation: ['Industry standard pay'],
        selectionProcess: ['Initial Interview', 'HR Interview', 'Managerial Round', 'Offer Letter']
    }
];

const GridBackground = () => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <GreenEmbers density={0.5} />
        <GreenEmbers2 density={1.5} className="absolute inset-0 z-[1]" />

        {/* Halogen Glows */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#34D562]/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#34D562]/5 blur-[100px] rounded-full" />

        {/* AboutGoG Style Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56215_1px,transparent_1px),linear-gradient(to_bottom,#34D56215_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]" />
    </div>
);

const ApplyPortal = ({ job, isOpen, onClose }: { job: Job | null, isOpen: boolean, onClose: () => void }) => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!job) return null;

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
                    >
                        {!isSubmitted ? (
                            <>
                                {/* Header */}
                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-8 h-1 bg-[#34D562] rounded-full" />
                                            <span className="text-[#34D562] font-display font-black text-[10px] uppercase tracking-[0.3em] font-bold">Step {step} of 3</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight font-black">Application Portal</h2>
                                        <p className="text-gray-500 font-sans text-xs mt-1 font-bold">Applying for <span className="text-white font-black">{job.title}</span></p>
                                    </div>
                                    <button onClick={onClose} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all">
                                        <X size={20} className="text-gray-400 font-black" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Step 1: Personal Info */}
                                    {step === 1 && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#34D562]/60 font-bold">Full Name</label>
                                                    <div className="relative">
                                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                                                        <input required type="text" placeholder="Enter your full name" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-[#34D562]/50 transition-all font-sans text-sm text-white font-bold" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#34D562]/60 font-bold">Email Address</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                                                        <input required type="email" placeholder="Email" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-[#34D562]/50 transition-all font-sans text-sm text-white font-bold" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-[#34D562]/60 font-bold">Mobile Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                                                    <input required type="tel" placeholder="+91 00000 00000" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-[#34D562]/50 transition-all font-sans text-sm text-white font-bold" />
                                                </div>
                                            </div>
                                            <button type="button" onClick={nextStep} className="w-full bg-[#34D562] text-black font-display font-black uppercase tracking-widest py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-xs shadow-2xl font-black">
                                                Continue <ChevronRight size={16} />
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Professional Details */}
                                    {step === 2 && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-[#34D562]/60 font-bold">Highest Education</label>
                                                <div className="relative">
                                                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                                                    <input required type="text" placeholder="Degree / University Name" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-[#34D562]/50 transition-all font-sans text-sm text-white font-bold" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-[#34D562]/60 font-bold">Past Employment (If Any)</label>
                                                <div className="relative">
                                                    <Briefcase className="absolute left-4 top-[1.25rem] text-gray-500" size={16} />
                                                    <textarea rows={3} placeholder="Describe your previous roles and responsibilities" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-[#34D562]/50 transition-all font-sans text-sm text-white resize-none font-bold" />
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <button type="button" onClick={prevStep} className="flex-1 border border-white/10 text-white font-display font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-white/5 transition-all text-xs font-black">
                                                    Back
                                                </button>
                                                <button type="button" onClick={nextStep} className="flex-[2] bg-[#34D562] text-black font-display font-black uppercase tracking-widest py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all text-xs shadow-2xl font-black">
                                                    Almost Done
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 3: Documents */}
                                    {step === 3 && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-[#34D562]/60 font-bold">Upload Resume / CV</label>
                                                <div className="border-2 border-dashed border-white/10 rounded-[2rem] p-12 text-center hover:border-[#34D562]/40 transition-all group cursor-pointer">
                                                    <div className="bg-[#34D562]/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                        <Upload className="text-[#34D562]" size={24} />
                                                    </div>
                                                    <p className="text-white font-sans text-sm font-black">Drop your resume here or click to upload</p>
                                                    <p className="text-gray-500 font-sans text-[10px] mt-2 font-bold uppercase tracking-widest">PDF, DOCX (Max 5MB)</p>
                                                    <input type="file" className="hidden" />
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <button type="button" onClick={prevStep} className="flex-1 border border-white/10 text-white font-display font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-white/5 transition-all text-xs font-black">
                                                    Back
                                                </button>
                                                <button type="submit" className="flex-[2] bg-[#34D562] text-black font-display font-black uppercase tracking-widest py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all text-xs shadow-2xl font-black">
                                                    Submit Application
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </form>
                            </>
                        ) : (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                                <div className="bg-[#34D562]/10 p-8 rounded-full w-fit mx-auto mb-8">
                                    <CheckCircle2 size={56} className="text-[#34D562] drop-shadow-[0_0_15px_rgba(52,213,98,0.4)]" />
                                </div>
                                <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-4 font-black">Application Received</h2>
                                <p className="text-gray-500 font-sans text-sm max-w-sm mx-auto mb-10 leading-relaxed font-bold">
                                    Thank you for applying to <span className="text-[#34D562] font-black">{job.title}</span>. Our team will review your profile and get back to you soon.
                                </p>
                                <button onClick={onClose} className="px-12 py-4 border border-[#34D562]/30 text-[#34D562] font-display font-black uppercase tracking-widest rounded-2xl hover:bg-[#34D562] hover:text-black transition-all text-xs font-black">
                                    Return to Portal
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const JobDetailsModal = ({ job, isOpen, onClose, onApply }: { job: Job | null, isOpen: boolean, onClose: () => void, onApply: (job: Job) => void }) => {
    if (!job) return null;
    const Icon = job.icon;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1500] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="relative w-full max-w-[1000px] bg-[#030303] border border-[#34D562]/20 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(52,213,98,0.1)] z-10 max-h-[95vh] flex flex-col"
                    >
                        {/* Background Ornament */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#34D562]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        {/* Top Header Section - Compact */}
                        <div className="relative p-6 md:p-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-[#34D562]/20 shadow-[0_0_20px_rgba(52,213,98,0.1)]">
                                    <Icon size={32} className="text-[#34D562]" />
                                </div>
                                <div className="space-y-1">
                                    <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(52,213,98,0.3)]">{job.title}</h2>
                                    <div className="flex flex-wrap gap-4 text-xs text-[#34D562] font-medium uppercase tracking-wider">
                                        <span className="flex items-center gap-1.5 bg-[#34D562]/10 px-3 py-1.5 rounded-full border border-[#34D562]/20"><MapPin size={14} /> {job.location}</span>
                                        <span className="flex items-center gap-1.5 bg-[#34D562]/10 px-3 py-1.5 rounded-full border border-[#34D562]/20"><Clock size={14} /> {job.type}</span>
                                        <span className="flex items-center gap-1.5 bg-[#34D562]/10 px-3 py-1.5 rounded-full border border-[#34D562]/20"><Building size={14} /> {job.department}</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 group">
                                <X size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                            </button>
                        </div>

                        {/* Main Content Area - SCROLLABLE FALLBACK */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-[#34D562]/20">
                            {/* Role Overview */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles size={14} className="text-[#34D562]" />
                                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Role Essence</h3>
                                </div>
                                <p className="text-gray-300 font-sans text-sm leading-relaxed font-medium border-l-2 border-[#34D562]/20 pl-4">{job.fullDescription}</p>
                            </div>

                            {/* Two-Column Mid Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                                {/* Left: Responsibilities */}
                                <div className="space-y-4 flex flex-col h-full overflow-hidden">
                                    <div className="flex items-center gap-2">
                                        <Target size={14} className="text-[#34D562]" />
                                        <h3 className="text-sm font-bold text-white uppercase tracking-widest">Key Missions</h3>
                                    </div>
                                    <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#34D562]/20">
                                        <ul className="space-y-3">
                                            {job.responsibilities.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 group">
                                                    <div className="mt-1 flex-shrink-0"><CheckCircle2 size={14} className="text-[#34D562] drop-shadow-[0_0_5px_rgba(52,213,98,0.5)]" /></div>
                                                    <p className="text-gray-400 font-sans text-sm font-medium leading-relaxed group-hover:text-gray-200 transition-colors">{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right: Eligibility & Compensation */}
                                <div className="space-y-6 flex flex-col">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Award size={14} className="text-[#34D562]" />
                                            <h3 className="text-sm font-bold text-white uppercase tracking-widest">The Bar</h3>
                                        </div>
                                        <div className="p-4 rounded-xl bg-[#34D562]/5 border border-[#34D562]/20 shadow-inner">
                                            <p className="text-white font-sans text-sm font-semibold leading-relaxed">{job.eligibility}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={14} className="text-[#34D562]" />
                                            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Incentives</h3>
                                        </div>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {job.compensation.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                                                    <div className="w-1.5 h-1.5 bg-[#34D562] rounded-full shadow-[0_0_10px_#34D562]" />
                                                    <p className="text-[#34D562] font-sans text-xs font-semibold uppercase">{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Selection Preview - Ultra Compact */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Settings size={14} className="text-[#34D562]" />
                                            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Selection Process</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {job.selectionProcess.map((step, i) => (
                                                <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] border border-white/10 rounded-lg backdrop-blur-sm">
                                                    <span className="text-xs font-black text-[#34D562] bg-[#34D562]/10 w-5 h-5 flex items-center justify-center rounded-md">{i + 1}</span>
                                                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Bottom Actions */}
                        <div className="p-6 bg-[#0A0A0A] border-t border-[#34D562]/10 flex items-center justify-between gap-6 mt-auto">
                            <p className="text-gray-500 font-sans text-xs font-medium tracking-tight uppercase">Limited positions available • Fast-track recruitment active</p>
                            <button
                                onClick={() => { onClose(); onApply(job); }}
                                className="px-10 py-4 bg-[#34D562] text-black font-bold uppercase tracking-widest rounded-xl hover:scale-[1.05] active:scale-95 transition-all text-sm shadow-[0_0_30px_rgba(52,213,98,0.4)] border-2 border-[#34D562]"
                            >
                                Submit Your Application
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const JobCard: React.FC<{ job: Job, onView: (job: Job) => void, onApply: (job: Job) => void }> = ({ job, onView, onApply }) => {
    const Icon = job.icon;
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(52, 213, 98, 0.15)" }}
            className="group relative bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 hover:border-[#34D562]/40 transition-all duration-500 flex flex-col h-full shadow-2xl relative overflow-hidden"
        >
            {/* Intensity Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#34D562]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#34D562]/20 transition-all duration-700" />

            <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="p-4 rounded-[1.5rem] bg-[#34D562]/10 border border-[#34D562]/20 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} className="text-[#34D562] drop-shadow-[0_0_8px_rgba(52,213,98,0.5)]" />
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className="text-[#34D562] font-medium text-xs uppercase tracking-wider bg-[#34D562]/10 px-4 py-2 rounded-full border border-[#34D562]/20 shadow-[0_0_15px_rgba(52,213,98,0.1)]">
                        {job.type}
                    </span>
                </div>
            </div>

            <h3 className="text-2xl font-display font-black text-white mb-4 group-hover:text-[#34D562] transition-colors uppercase leading-tight drop-shadow-[0_0_10px_rgba(52,213,98,0.2)] font-black">
                {job.title}
            </h3>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs text-gray-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#34D562]" /> {job.location}</span>
                <span className="flex items-center gap-2"><Building size={14} className="text-[#34D562]" /> {job.department}</span>
            </div>

            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8 font-medium line-clamp-3 border-l border-white/10 pl-3">
                {job.description}
            </p>

            <div className="mt-auto grid grid-cols-2 gap-4 relative z-10">
                <button
                    onClick={() => onView(job)}
                    className="py-4 bg-white/5 border border-white/10 text-white hover:bg-[#34D562]/10 hover:border-[#34D562]/30 transition-all duration-300 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                    Role Detail <ChevronRight size={14} className="text-[#34D562]" />
                </button>
                <button
                    onClick={() => onApply(job)}
                    className="py-4 bg-[#34D562] text-black hover:bg-[#28a74b] transition-all duration-300 rounded-xl text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(52,213,98,0.3)] border-2 border-[#34D562]"
                >
                    Apply Now
                </button>
            </div>
        </motion.div>
    );
};

const Careers: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');
    const [viewingJob, setViewingJob] = useState<Job | null>(null);
    const [applyingJob, setApplyingJob] = useState<Job | null>(null);

    const departments = ['All', ...Array.from(new Set(jobs.map(j => j.department)))];

    const filteredJobs = jobs.filter(job =>
        (selectedDept === 'All' || job.department === selectedDept) &&
        (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <main className="min-h-screen bg-[#030303] text-white overflow-x-hidden pt-24 pb-24 relative font-sans">
            <SEO
                title="Careers"
                description="Join the team of Geeks of Gurukul. Build the future with India's premier education platform."
                canonical="/careers"
            />

            <GridBackground />

            {/* HERO SECTION */}
            <section className="container mx-auto px-6 max-w-7xl text-center mb-24 relative z-20 mt-10">
                {/* AboutGoG Halogen Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#34D562]/15 blur-[150px] rounded-full pointer-events-none -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-5 py-2 rounded-full bg-[#34D562]/10 border border-[#34D562]/30 text-[#34D562] font-bold text-xs uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(52,213,98,0.2)]"
                >
                    <span className="flex items-center gap-2"><Sparkles size={14} /> Recruitment Open</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter mb-8 leading-[0.9] drop-shadow-[0_0_20px_rgba(52,213,98,0.3)]">
                    Join The <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-[#28a74b] to-[#34D562]">Mission Force</span>
                </h1>

                <p className="text-gray-400 font-sans text-sm md:text-lg max-w-3xl mx-auto font-bold leading-relaxed uppercase tracking-tight opacity-80 backdrop-blur-sm px-6 py-4 rounded-[2rem] border border-white/5 inline-block">
                    We're building India's most powerful skill-ecosystem. <br className="hidden md:block" />
                    We don't hire employees, we recruit <span className="text-[#34D562] font-black underline decoration-[#34D562]/50 underline-offset-4">Change Makers</span>.
                </p>
            </section>

            {/* FILTERS */}
            <section className="container mx-auto px-6 max-w-7xl mb-16 relative z-10">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="relative w-full lg:flex-1 group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#34D562] group-focus-within:scale-110 transition-transform" size={18} />
                        <input
                            type="text"
                            placeholder="SEARCH..."
                            className="w-full bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-[1.5rem] py-5 pl-16 pr-8 text-sm font-medium uppercase tracking-wider focus:outline-none focus:border-[#34D562]/50 transition-all shadow-2xl placeholder:text-gray-600"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide w-full lg:w-auto">
                        {departments.map(dept => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDept(dept)}
                                className={`px-6 py-3 rounded-[1.5rem] border text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${selectedDept === dept ? 'bg-[#34D562] border-[#34D562] text-black shadow-[0_0_25px_rgba(52,213,98,0.4)]' : 'bg-[#0A0A0A]/40 backdrop-blur-md border-white/10 text-gray-400 hover:text-white hover:border-[#34D562]/30'}`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* JOB GRID */}
            <section className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredJobs.map(job => (
                            <JobCard key={job.id} job={job} onView={setViewingJob} onApply={setApplyingJob} />
                        ))}
                    </AnimatePresence>
                    {filteredJobs.length === 0 && (
                        <div className="col-span-full py-24 text-center border-2 border-dashed border-[#34D562]/20 rounded-[3rem] bg-[#0A0A0A]/40 backdrop-blur-md flex flex-col items-center gap-6">
                            <div className="p-6 rounded-full bg-[#34D562]/5">
                                <Search className="text-[#34D562]/40" size={48} />
                            </div>
                            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">No matching positions found</p>
                        </div>
                    )}
                </div>
            </section>

            {/* FINAL CTA */}


            <JobDetailsModal
                job={viewingJob}
                isOpen={!!viewingJob}
                onClose={() => setViewingJob(null)}
                onApply={(job) => { setViewingJob(null); setApplyingJob(job); }}
            />
            <ApplyPortal job={applyingJob} isOpen={!!applyingJob} onClose={() => setApplyingJob(null)} />
        </main>
    );
};

export default Careers;
