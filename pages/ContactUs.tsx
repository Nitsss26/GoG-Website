import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }

        if (!formData.fullName) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.message) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // Clear error when user starts typing
        if (errors[id]) {
            setErrors({ ...errors, [id]: "" });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            try {
                const payload = {
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                };

                const response = await fetch(
                    "https://06lccbft43.execute-api.us-east-1.amazonaws.com/contact",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(payload),
                    }
                );

                if (response.ok) {
                    alert("Form submitted successfully!");
                    setFormData({ fullName: "", email: "", phone: "", message: "" });
                    setErrors({});
                } else {
                    alert("Failed to submit form");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("Error submitting form. Please try again later.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
            <GreenEmbers density={0.5} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56208_1px,transparent_1px),linear-gradient(to_bottom,#34D56208_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Header Section */}
            <section className="relative pt-32 pb-12 px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-[#34D562]/30 bg-[#34D562]/10"
                >
                    <MessageSquare size={18} className="text-[#34D562]" />
                    <span className="text-[#34D562] font-mono tracking-widest uppercase text-sm font-bold">Get In Touch</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                >
                    Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-[#28a74b]">Us</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Suggestions, Questions Or Comments? Reach Out To Us. We'd Be Happy To Help.
                </motion.p>
            </section>

            <div className="container mx-auto px-6 pb-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Left Panel - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#34D562]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Get In Touch</h2>
                        <p className="text-gray-400 mb-10 relative z-10">
                            Have Any Doubts? Contact Us Through The Channels Below
                        </p>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#34D562]/10 rounded-xl text-[#34D562]">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Chat With Us</h3>
                                    <a
                                        href="https://wa.me/+919109976089"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#34D562] transition-colors"
                                    >
                                        Click To Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#34D562]/10 rounded-xl text-[#34D562]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                    <a href="mailto:admin@geeksofgurukul.com" className="text-gray-400 hover:text-[#34D562] transition-colors">
                                        admin@geeksofgurukul.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#34D562]/10 rounded-xl text-[#34D562]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                                    <a href="tel:+919109976089" className="text-gray-400 hover:text-[#34D562] transition-colors">
                                        +91 9109976089
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#34D562]/10 rounded-xl text-[#34D562]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        04, 258/3D, 4th Cross Rd, Opposite Narmada Tiffins, Agara Village,
                                        Rajeev Gandhi Nagar, HSR Layout, Bengaluru, Karnataka 560102
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
                            <h3 className="text-lg font-bold text-white mb-6">We Are On Social Media</h3>
                            <div className="flex gap-4">
                                <SocialLink href="https://www.linkedin.com/company/geeks-of-gurukul/posts/?feedView=all" icon={<Linkedin size={20} />} />
                                <SocialLink href="https://x.com/geeksofgurukul/status/1674057698843795461?mx=2" icon={<Twitter size={20} />} />
                                <SocialLink href="https://www.instagram.com/geeksofgurukul/" icon={<Instagram size={20} />} />
                                <SocialLink href="https://www.facebook.com/geeksofgurukul" icon={<Facebook size={20} />} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#34D562]/5 rounded-full blur-[100px] pointer-events-none" />

                        <h2 className="text-3xl font-bold mb-6 text-white">Drop Us A Line</h2>
                        <p className="text-gray-400 mb-10">
                            We are always looking for a great future for you
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <InputGroup
                                id="fullName"
                                label="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                error={errors.fullName}
                            />

                            <InputGroup
                                id="email"
                                type="email"
                                label="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />

                            <InputGroup
                                id="phone"
                                type="tel"
                                label="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                error={errors.phone}
                            />

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message here</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#34D562]/50 focus:bg-white/10 transition-all resize-none`}
                                />
                                {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#34D562] text-black font-bold py-4 rounded-xl hover:bg-[#28a74b] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(52,213,98,0.3)] hover:shadow-[0_0_30px_rgba(52,213,98,0.5)]"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                By submitting this form, you agree to the{' '}
                                <a href="/terms-conditions" className="text-[#34D562] hover:underline">Terms</a> & {' '}
                                <a href="/privacy-policy" className="text-[#34D562] hover:underline">Privacy Policy</a>.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const InputGroup = ({ id, label, value, onChange, error, type = "text" }: { id: string, label: string, value: string, onChange: any, error?: string, type?: string }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="text-sm font-medium text-gray-300">{label}</label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#34D562]/50 focus:bg-white/10 transition-all`}
        />
        {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
);

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#34D562] hover:text-black transition-all transform hover:scale-110"
    >
        {icon}
    </a>
);

export default ContactUs;
