import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import GreenEmbers from '../components/ui/GreenEmbers';

const TermsAndConditions = () => {
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
                    <FileText size={18} className="text-[#34D562]" />
                    <span className="text-[#34D562] font-mono tracking-widest uppercase text-sm font-bold">Legal</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                >
                    Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-[#28a74b]">Conditions</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Welcome to Skillscan EdTech India Pvt Ltd ("Skillscan," "we," "us," or "our").
                </p>
            </section>

            <div className="container mx-auto px-6 pb-32 relative z-10">
                <div className="max-w-4xl mx-auto bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="prose prose-invert prose-lg max-w-none">

                        <p className="lead text-gray-300 mb-8 border-l-4 border-[#34D562] pl-6 italic">
                            By accessing or using our website and services, you agree to comply with these Terms of Use. Please read these terms carefully before using our website.
                        </p>

                        <Section title="Effective Date for Policy">
                            <p>These Terms and Conditions are effective. By accessing or using our website, you acknowledge that you have read, understood, and agreed to be bound by these terms.</p>
                        </Section>

                        <Section title="Limitation of Liability and Disclaimer of Warranties">
                            <p>Geeks of Gurukul strives to provide accurate and up-to-date information on our website. However, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics on our website. Your use of the website and reliance on any information is at your own risk. In no event shall Geeks of Gurukul be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the website or the information provided. We disclaim any warranties or representations, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                        </Section>

                        <Section title="Rules of Conduct">
                            <p>When using our website, you agree to abide by the following rules of conduct: You shall not engage in any unlawful or fraudulent activities. You shall not post or transmit any content that is offensive, defamatory, or violates the rights of others. You shall not disrupt or interfere with the functioning of the website or its associated services. You shall not attempt to gain unauthorized access to any part of the website or its servers. You shall not use the website for any commercial purposes without our prior written consent.</p>
                        </Section>

                        <Section title="User Restrictions">
                            <p>By using our website, you represent and warrant that you are at least 18 years of age or have obtained parental consent to use the website. You agree not to use the website if you have been previously suspended or prohibited from accessing it. Geeks of Gurukul reserves the right to suspend or terminate your access to the website at any time, without notice, for any reason, including but not limited to violation of these Terms and Conditions. These Terms and Conditions constitute the entire agreement between you and Geeks of Gurukul regarding your use of the website and supersede any prior agreements or understandings.</p>
                        </Section>

                        <Section title="Account Creation">
                            <p>Before you may use the Site, you must first register an account and fill out personal information. You guarantee that (a) any required registration information you give is true, current, and accurate; and (b) the information's accuracy will be kept up to date. You can delete your Account at any moment by following the instructions on the site. The Company may suspend or terminate your Account in accordance with Section.</p>
                        </Section>

                        <Section title="Account Responsibility">
                            <p>Your Account login credentials must be kept confidential, and you are solely responsible for any acts made using your Account. You agree to immediately notify the Company of any suspected or actual unauthorised use of your Account. You acknowledge that failure to comply with the aforementioned requirements will result in loss or harm for which the Company is not and cannot be held liable.</p>
                        </Section>

                        <Section title="USE OF THE WEBSITE / SERVICES">
                            <p>You acknowledge and agree that when using a Website or Service, You will not: a) Defame, abuse, harass, stalk, threaten, or otherwise infringe upon the legal rights of others; b) publish, post, upload, distribute or disseminate any improper, profane, defamatory, infringing, obscene, indecent, or unlawful topic, name, material, or information; c) conduct or forward surveys, contests, pyramid schemes, d) Falsifying or removing any author attributions, proper legal or other notices, or exclusive designations or labels of the source or origin of any software or other materials present in a file that is submitted e) Any information provided by You on this site shall not be misleading in any way. f) Use any deep-link, robot, spider, or other automatic device, programme, algorithm, or methodology, or any comparable or equivalent manual process, to access, acquire, copy, or monitor any portion of website</p>
                        </Section>

                        <Section title="Termination and Term">
                            <p>Subject to this Section, these Terms will remain in full force and effect while you use the Site. Your ability to use the Site may be suspended or revoked at any time for any reason, including any violation of these Terms, at our sole discretion. If your rights under these Terms are terminated, your Account and the right to access and use the Site will be terminated immediately. You understand that if your Account is terminated, any connected User Content will be removed from our active databases. If your rights under these Terms are terminated for any reason, you have no recourse against Company.</p>
                        </Section>

                        <Section title="Refund Policy">
                            <p>Thank you for choosing Skillscan Edtech India Private Limited for your learning journey. We strive to provide you with high-quality educational experiences that meet your expectations.As part of our commitment to transparency and customer satisfaction, we want to outline our refund policy:Refunds will be issued only under specific circumstances and within a designated timeframe. Once the course has commenced, typically marked by the first session or access to course materials, no refunds will be entertained. We firmly believe in the value of our courses and commit significant resources to ensure their effectiveness. Therefore, after the start of the course, refunds will not be granted, regardless of the circumstances.However, we understand that unforeseen circumstances may arise. In such cases, we encourage you to reach out to our customer support team promptly. We will assess each situation on a case-by-case basis and determine if any alternative solutions or accommodations can be provided.We appreciate your understanding of our refund policy. If you have any questions or concerns, please don't hesitate to contact us at <a href="mailto:support@geeksofgurukul.com" className="text-[#34D562] hover:underline">support@geeksofgurukul.com</a></p>
                            <p>Sincerely,</p>
                            <p>Skillscan Edtech India Private Limited Team</p>
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

export default TermsAndConditions;
