import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';
import SEO from '../components/SEO';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [faqs, setFaqs] = useState([
        {
            question: "Is the workshop certified?",
            answer: "Yes, the workshop is certified. Participants will receive a certificate of completion upon successfully attending and completing the workshop.",
            isOpen: false
        },
        {
            question: "What should i be prepared with before the workshop starts?",
            answer: "Before the workshop starts, it is recommended to have a stable internet connection, a device (computer or laptop) with a webcam and microphone, and any necessary software or tools as communicated by the organisers. It's also helpful to have a notebook and pen for taking notes during the session.",
            isOpen: false
        },
        {
            question: "When is the workshop?",
            answer: "The workshop is scheduled for Wednesday, May 24, 2023 at 2.00 pm.",
            isOpen: false
        },
        {
            question: "Can AI tools replace human creativity",
            answer: "AI tools are powerful assistants that can enhance creativity, but they are not intended to replace human creativity. Instead, they can provide inspiration, generate ideas, and assist in creative processes.",
            isOpen: false
        },
        {
            question: "Are these AI tools accessible to non-programmers?",
            answer: "Yes, many AI tools are designed to be user-friendly and do not require programming knowledge. The webinar will highlight user-friendly AI tools that can be utilized by non-programmers.",
            isOpen: false
        },
        {
            question: "Will there be practical demonstrations during the webinar",
            answer: "Yes, the webinar will include practical demonstrations to showcase the capabilities and functionalities of AI tools, allowing participants to observe their usage in action.",
            isOpen: false
        },
        {
            question: "I made the payment but didn't receive any email",
            answer: "Please write to us at support@geeksofgurukul.com. Our awesome support team will get back to you as soon as possible.",
            isOpen: false
        },
        {
            question: "Will there be opportunities for interactive participation, such as asking que or engaging in discussions?",
            answer: "Yes, absolutely! The webinar will provide opportunities for interactive participation, including asking questions. There will be a Q&A session at the end of the webinar. We value your input and encourage active participation from all attendees.",
            isOpen: false
        },
        {
            question: "Is there a limit on the number of questions i can ask during the Q&A session?",
            answer: "No, there is no limit on the number of questions you can ask during the Q&A session. We encourage active participation and value your curiosity.",
            isOpen: false
        },

    ]);

    const toggleFAQ = (index: number) => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                return { ...faq, isOpen: !faq.isOpen };
            }
            return { ...faq, isOpen: false }; // Close others efficiently
        }));
    };

    return (
        <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
            <SEO
                title="Frequently Asked Questions"
                description="Find answers to common questions about Geeks of Gurukul programs, workshops, certifications, and support."
                keywords="FAQ, frequently asked questions, GoG support, workshop questions"
                canonical="/faq"
            />
            <GreenEmbers density={0.5} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56208_1px,transparent_1px),linear-gradient(to_bottom,#34D56208_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Header */}
            <section className="relative pt-32 pb-12 px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-[#34D562]/30 bg-[#34D562]/10"
                >
                    <HelpCircle size={18} className="text-[#34D562]" />
                    <span className="text-[#34D562] font-mono tracking-widest uppercase text-sm font-bold">Support</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                >
                    Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-[#28a74b]">Questions</span>
                </motion.h1>
            </section>

            <div className="container mx-auto px-6 pb-32 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full text-left rounded-2xl py-5 px-6 md:px-8 flex justify-between items-center transition-all duration-300 ${faq.isOpen
                                    ? 'bg-[#34D562] text-black shadow-[0_0_30px_rgba(52,213,98,0.3)]'
                                    : 'bg-[#0A0A0A] border border-white/10 text-white hover:border-[#34D562]/50 hover:bg-[#34D562]/5'
                                    }`}
                            >
                                <span className={`flex-grow pr-4 font-bold text-lg md:text-xl`}>{faq.question}</span>
                                <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${faq.isOpen ? 'bg-black/20 text-black' : 'bg-white/10 text-[#34D562]'
                                    }`}>
                                    {faq.isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {faq.isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 md:p-8 text-gray-300 leading-relaxed bg-[#0A0A0A]/50 border-x border-b border-white/10 rounded-b-2xl -mt-2 mx-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
