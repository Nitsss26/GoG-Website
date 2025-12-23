import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
            <GreenEmbers density={0.5} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56208_1px,transparent_1px),linear-gradient(to_bottom,#34D56208_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <section className="relative pt-32 pb-12 px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-[#34D562]/30 bg-[#34D562]/10"
                >
                    <ShieldCheck size={18} className="text-[#34D562]" />
                    <span className="text-[#34D562] font-mono tracking-widest uppercase text-sm font-bold">Legal</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                >
                    Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-[#28a74b]">Policy</span>
                </motion.h1>
                <p className="text-xl text-[#34D562] max-w-2xl mx-auto font-mono">
                    SKILLSCAN EDTECH INDIA PRIVATE LIMITED
                </p>
            </section>

            <div className="container mx-auto px-6 pb-32 relative z-10">
                <div className="max-w-4xl mx-auto bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="lead text-gray-300 mb-8 border-l-4 border-[#34D562] pl-6 italic">
                            At Geeks of Gurukul, we value the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect the personal information you provide to us through our website.
                        </p>

                        <Section title="Information We Collect">
                            <p><strong>Personal Information:</strong> We may collect personal information such as your name, email address, and contact details when you voluntarily provide them to us.</p>
                            <p><strong>Usage Data:</strong> We may collect non-personal information about your interactions with our website, such as your IP address, browser type, and pages visited.</p>
                        </Section>

                        <Section title="Use Of Information">
                            <p>We use the information you provide to improve and personalize your experience on our website, respond to your inquiries, and provide you with relevant information and updates. We may use your email address to send you promotional offers, newsletters, and updates about our services. You can opt out of these communications at any time.</p>
                        </Section>

                        <Section title="Data Security">
                            <p>We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We use secure servers and encryption techniques to safeguard your data.</p>
                        </Section>

                        <Section title="Sharing Of Information">
                            <p>We do not sell, trade, or rent your personal information to third parties without your consent. We may share your information with trusted third-party service providers who assist us in delivering our services, subject to confidentiality agreements.</p>
                        </Section>

                        <Section title="Do third parties see and/or have access to information obtained by the website?">
                            <p>You have the right to opt out of receiving promotional offers, newsletters, and updates from Geeks of Gurukul. If you no longer wish to receive such communications, you can unsubscribe by following the instructions provided in the communication or by contacting us directly. However, please note that even if you opt out of receiving marketing communications, we may still send you important administrative messages related to your account or the services we provide.</p>
                        </Section>

                        <Section title="What are my opt-out rights?">
                            <p>You have the right to opt out of receiving promotional offers, newsletters, and updates from Geeks of Gurukul. If you no longer wish to receive such communications, you can unsubscribe by following the instructions provided in the communication or by contacting us directly. However, please note that even if you opt out of receiving marketing communications, we may still send you important administrative messages related to your account or the services we provide.</p>
                        </Section>

                        <Section title="Data Retention Policy">
                            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will securely delete or anonymize your information when it is no longer needed or upon your request.</p>
                        </Section>

                        <Section title="Children">
                            <p>Geeks of Gurukul does not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately. We will take steps to remove the information from our systems.</p>
                        </Section>

                        <Section title="Security">
                            <p>We take appropriate measures to protect the security of your personal information and ensure that it is treated securely. We implement industry-standard security measures to prevent unauthorized access, disclosure, alteration, or destruction of your information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your information.</p>
                        </Section>

                        <Section title="Changes">
                            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this Privacy Policy periodically for any updates. Your continued use of our website after the posting of any changes constitutes your acceptance of such changes.</p>
                        </Section>

                        <Section title="Consent">
                            <p>By using our website, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.</p>
                        </Section>

                        <Section title="Contact Us">
                            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at <a href="mailto:support@geeksofgurukul.com" className="text-[#34D562] hover:underline">support@geeksofgurukul.com</a>. We will respond to your inquiries as soon as possible.</p>
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#34D562] mb-4 border-b border-white/10 pb-2">{title}</h2>
        <div className="text-gray-300 leading-relaxed text-base space-y-4">
            {children}
        </div>
    </div>
);

export default PrivacyPolicy;
