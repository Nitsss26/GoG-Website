import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Users, Sparkles } from 'lucide-react';

interface VideoCardProps {
    embedUrl: string;
    index: number;
    isActive: boolean;
}

const VideoCard = React.forwardRef<HTMLIFrameElement, VideoCardProps>(({ embedUrl, index, isActive }, ref) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer"
        >
            {/* Card Container - 9:16 aspect ratio for vertical videos */}
            <div className={`relative aspect-[9/16] rounded-2xl overflow-hidden bg-black/40 border border-white/10 group-hover:border-[#34D562]/50 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_rgba(52,213,98,0.2)] ${isActive ? '' : 'grayscale'}`}>
                {/* LinkedIn Embed */}
                <iframe
                    ref={ref}
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title={`Team Video ${index + 1}`}
                />

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#34D562]/10 blur-3xl" />
                </div>
            </div>
        </motion.div>
    );
});

VideoCard.displayName = 'VideoCard'; // Add display name for forwardRef component

const TeamVideos: React.FC = () => {
    const [activeVideos, setActiveVideos] = useState<Set<number>>(new Set());
    const sectionRef = useRef<HTMLElement>(null);
    const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

    useEffect(() => {
        // Poll for active element changes to detect which iframe is focused
        const checkFocus = () => {
            const activeElement = document.activeElement;

            // Check if the active element is one of our video iframes
            iframeRefs.current.forEach((iframe, index) => {
                if (iframe && activeElement === iframe) {
                    setActiveVideos(prev => {
                        // Only update if not already active to avoid loop
                        if (!prev.has(index)) {
                            return new Set([...prev, index]);
                        }
                        return prev;
                    });
                }
            });
        };

        const intervalId = setInterval(checkFocus, 500);

        // Detect clicks outside the video section to reset grayscale
        const handleDocumentClick = (e: MouseEvent) => {
            if (sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
                // Clicked outside video section - reset all to grayscale
                setActiveVideos(new Set());

                // Also blur the active element if it's an iframe to allow re-focusing
                if (document.activeElement instanceof HTMLIFrameElement) {
                    (document.activeElement as HTMLElement).blur();
                }
            }
        };

        document.addEventListener('click', handleDocumentClick);
        return () => {
            clearInterval(intervalId);
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const videos = [
        {
            embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7356734954258489344?compact=1",
            title: "Vision of Geeks of Gurukul"
        },
        {
            embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7349516214924173312?compact=1",
            title: "Why Join Us"
        },
        {
            embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7351703636613193728?compact=1",
            title: "Our Mission"
        },
        {
            embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7348798590179303424?compact=1",
            title: "Student Success Stories"
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-10 md:py-16 overflow-hidden bg-[#030303]">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#34D562]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#34D562]/5 rounded-full blur-[150px]" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56208_1px,transparent_1px),linear-gradient(to_bottom,#34D56208_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#34D562]/10 border border-[#34D562]/30 backdrop-blur-sm mb-6"
                    >
                        <Sparkles size={16} className="text-[#34D562]" />
                        <span className="text-[#34D562] font-semibold text-sm tracking-wider uppercase">The Future of Learning</span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-[#28a74b]">Geeks of Gurukul?</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        Straight talk from our founders and mentors on the future of tech education, the value of real-world skills and how we're building the next generation of tech leaders.
                    </p>
                </motion.div>

                {/* Video Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {videos.map((video, index) => (
                        <VideoCard
                            key={index}
                            ref={(el) => (iframeRefs.current[index] = el)}
                            embedUrl={video.embedUrl}
                            index={index}
                            isActive={activeVideos.has(index)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                        <Sparkles size={16} className="text-[#34D562]" />
                        <span>Join Geeks of Gurukul transforming their careers with us</span>
                        <Sparkles size={16} className="text-[#34D562]" />
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamVideos;
