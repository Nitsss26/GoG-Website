import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Gift, Star, Zap, Pizza, Play, Award, Camera, Heart, Users, Coffee, Sparkles, PartyPopper, Trophy } from 'lucide-react';
import SEO from '../components/SEO';
import GreenEmbers from '../components/ui/GreenEmbers';
import GreenEmbers2 from '../components/ui/GreenEmbers2';
import ViewToggle from '../components/ViewToggle';

// --- ASSETS ---

// Videos
// @ts-ignore
import PartyStream from '../assets/Our_Culture/1000201942.mp4';
// @ts-ignore
import CertVideo from '../assets/Our_Culture/Certficate-video.mp4';

// Party / Holi Photos
// @ts-ignore
import Party1 from '../assets/Our_Culture/1000201938.jpg';
// @ts-ignore
import Party2 from '../assets/Our_Culture/1000201939.jpg';
// @ts-ignore
import Party3 from '../assets/Our_Culture/1000201940.jpg';

// Event Photos
// @ts-ignore
import Event1 from '../assets/Our_Culture/IMG_5992.JPG';
// @ts-ignore
import Event2 from '../assets/Our_Culture/IMG_6058.JPG';
// @ts-ignore
import Event3 from '../assets/Our_Culture/IMG_6077.JPG';
// @ts-ignore
import Event4 from '../assets/Our_Culture/IMG_6157.JPG';
// @ts-ignore
import GoodTimesNew from '../assets/Our_Culture/a/good_times_new.jpg';

// Certificates
// @ts-ignore
import ManagerMonth from '../assets/Our_Culture/Operation_manager_of_month.png';
// @ts-ignore
import ProfMonth from '../assets/Our_Culture/Professor_of_month.png';
// @ts-ignore
import EmployeeMonth from '../assets/Our_Culture/certificate_employee_of_month.png';

// Additional Recent Certifications
// @ts-ignore
import Prof1 from '../assets/Our_Culture/Prof1.png';
// @ts-ignore
import Prof2 from '../assets/Our_Culture/Prof2.png';
// @ts-ignore
import Prof3 from '../assets/Our_Culture/Prof3.png';

// HEIC → hosted AVIF links
const BirthdayImg = 'https://i.ibb.co/vCKF0tN3/Birthday.avif';
const Birthday2Img = 'https://i.ibb.co/wFC7d4bz/Birthday-2.avif';
const PizzaImg = 'https://i.ibb.co/KpNjgXF3/IMG-9235.avif';

// New Culture images from Our_Culture/a/
// @ts-ignore
import CultureA1 from '../assets/Our_Culture/a/IMG_6005.JPG';
// @ts-ignore
import CultureA2 from '../assets/Our_Culture/a/IMG_6009.JPG';
// @ts-ignore
import CultureA3 from '../assets/Our_Culture/a/IMG_6084.JPG';
// @ts-ignore
import CultureA4 from '../assets/Our_Culture/a/IMG_6130.JPG';
// @ts-ignore
import CultureA5 from '../assets/Our_Culture/a/IMG_6146.JPG';
// @ts-ignore
import CultureA6 from '../assets/Our_Culture/a/IMG_8035.JPG';

// --- COMPONENTS ---

const BentoCard = ({ children, className = '', depth = 0.15, disableParallax = false }: { children: React.ReactNode; className?: string; depth?: number; disableParallax?: boolean }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], [40 * depth, -40 * depth]);

    return (
        <motion.div
            ref={ref}
            style={{ y: (disableParallax) ? 0 : y }}
            initial={disableParallax ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.97, y: 30 }}
            whileInView={disableParallax ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={disableParallax ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative group overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-white/[0.06] hover:border-[#34D562]/30 transition-all duration-700 shadow-2xl ${className}`}
        >
            {children}
        </motion.div>
    );
};

const GlassLabel = ({ text, icon: Icon }: { text: string; icon: any }) => (
    <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl flex items-center gap-2 z-20">
        <Icon size={14} className="text-[#34D562]" />
        <span className="text-white font-bold uppercase text-[10px] tracking-widest">{text}</span>
    </div>
);

const SectionHeading = ({ badge, badgeIcon: BadgeIcon, title, greenText, subtitle }: {
    badge: string; badgeIcon: any; title: string; greenText: string; subtitle: string;
}) => (
    <div className="text-center mb-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#34D562]/10 border border-[#34D562]/20 rounded-full mb-8"
        >
            <BadgeIcon size={16} className="text-[#34D562] animate-pulse" />
            <span className="text-[#34D562] font-bold text-[10px] uppercase tracking-[0.4em]">{badge}</span>
        </motion.div>

        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8"
        >
            {title}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] via-emerald-400 to-[#34D562] drop-shadow-[0_0_30px_rgba(52,213,98,0.3)]">
                {greenText}
            </span>
        </motion.h2>

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed"
        >
            {subtitle}
        </motion.p>
    </div>
);

// --- MAIN PAGE ---

const GridBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <GreenEmbers density={0.5} />
        <GreenEmbers2 density={1.5} className="absolute inset-0 z-[1]" />

        {/* Halogen Glows */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#34D562]/[0.08] blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] bg-[#34D562]/[0.05] blur-[100px] rounded-full" />

        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#34D56215_1px,transparent_1px),linear-gradient(to_bottom,#34D56215_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]" />
    </div>
);

const Culture: React.FC = () => {
    const [is3D, setIs3D] = useState(false);
    const sceneRef = useRef<HTMLDivElement>(null);

    // 3D Motion Values for smooth parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 60, mass: 1 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

    const handleSceneMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!is3D || !sceneRef.current) return;
        const rect = sceneRef.current.getBoundingClientRect();
        const mX = (e.clientX - rect.left) / rect.width - 0.5;
        const mY = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(mX);
        mouseY.set(mY);
    }, [is3D, mouseX, mouseY]);

    const handleSceneMouseLeave = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    // Pure 3D depth for culture bento grid — no layout shifts
    // Cards get different Z depths to create layered diorama effect
    const getCulture3DTransform = (index: number) => {
        // High-impact alternating row depths to match "Out-of-the-Box" Events style.
        // Even rows pop out significantly (+120), odd rows recede deeply (-80).
        // Added scale adjustments to enhance the perspective illusion.
        const layerData = [
            { z: 120, s: 1.05 }, // 0: Hero wide (Row 1&2 Forward)
            { z: 100, s: 1.04 }, // 1: Join tribe (Row 1 Forward)
            { z: -80, s: 0.94 }, // 2: Pizza (Row 2 Backward)
            { z: 90, s: 1.03 },  // 3: Holi (Row 3 Forward)
            { z: 90, s: 1.03 },  // 4: Team Lunch (Row 3 Forward)
            { z: 90, s: 1.03 },  // 5: Birthday (Row 3 Forward)
            { z: -90, s: 0.92 }, // 6: Dance Floor (Row 4 Backward)
            { z: -90, s: 0.92 }, // 7: Gurukul Pride (Row 4 Backward)
            { z: 100, s: 1.04 }, // 8: Group Photo (Row 5 Forward)
            { z: 100, s: 1.04 }, // 9: Birthday 2 (Row 5 Forward)
            { z: 100, s: 1.04 }, // 10: Memories (Row 5 Forward)
            { z: -70, s: 0.95 }, // 11: Good Times (Row 6 Backward)
            { z: -70, s: 0.95 }, // 12: Fun Hour (Row 6 Backward)
            { z: -70, s: 0.95 }, // 13: Happy Moments (Row 6 Backward)
            { z: 80, s: 1.02 },  // 14: Chill Zone (Row 7 Forward)
            { z: 80, s: 1.02 },  // 15: Work & Play (Row 7 Forward)
            { z: 80, s: 1.02 }   // 16: Vibe (Row 7 Forward)
        ];
        return layerData[index] || { z: 0, s: 1 };
    };

    // Wrapper for 3D depth on individual cards
    // NOTE: This wrapper must capture the grid span classes to prevent layout collapse
    const Card3DWrapper = ({ children, index, className = "" }: { children: React.ReactNode; index: number; className?: string }) => {
        const t = getCulture3DTransform(index);

        if (!is3D) {
            return (
                <div className={className}>
                    {React.Children.map(children, child => {
                        if (React.isValidElement(child)) {
                            // @ts-ignore
                            return React.cloneElement(child, { disableParallax: true });
                        }
                        return child;
                    })}
                </div>
            );
        }

        return (
            <motion.div
                className={`w-full h-full ${className}`}
                animate={{
                    z: t.z,
                    scale: t.s,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 45,
                    damping: 20,
                    delay: index * 0.015,
                }}
                style={{
                    transformStyle: 'preserve-3d',
                    zIndex: Math.floor(t.z) + 1000,
                    borderRadius: '2rem',
                    boxShadow: t.z > 0
                        ? `0 ${20 + t.z * 0.4}px ${40 + t.z * 0.5}px rgba(0,0,0,0.5), 0 0 ${15 + t.z * 0.3}px rgba(52,213,98,0.15)`
                        : 'none'
                }}
            >
                <div className="w-full h-full hover:!scale-[1.03] transition-transform duration-300 relative group/card">
                    {/* Dynamic Glow Shadow */}
                    <div
                        className="absolute inset-4 -z-10 bg-[#34D562]/10 blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-3xl"
                        style={{ transform: 'translateZ(-20px)' }}
                    />

                    {React.Children.map(children, child => {
                        if (React.isValidElement(child)) {
                            // @ts-ignore
                            return React.cloneElement(child, { disableParallax: true });
                        }
                        return child;
                    })}
                </div>
            </motion.div>
        );
    };

    return (
        <main className="bg-[#030303] text-white overflow-x-hidden min-h-screen">
            <SEO
                title="Our Culture"
                description="Our Team is our Heart. Experience the energy, celebrations, and moments that make Geeks of Gurukul special."
                canonical="/culture"
            />

            <GridBackground />

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 1: TEAM MOMENTS
                Birthdays, Holi, Parties, Outings — 11 assets
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <SectionHeading
                        badge="The Heart of Gurukul"
                        badgeIcon={Heart}
                        title="OUR TEAM IS"
                        greenText="OUR SUPERPOWER"
                        subtitle="We don't just build careers — we build memories. Every celebration, every milestone, every shared laugh makes us who we are."
                    />




                    {/* 3D Scene Container */}
                    <div
                        className="mt-8 md:mt-12"
                        ref={sceneRef}
                        onMouseMove={handleSceneMouseMove}
                        onMouseLeave={handleSceneMouseLeave}
                        style={{
                            perspective: is3D ? '1200px' : 'none',
                            perspectiveOrigin: '50% 50%',
                        }}
                    >
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: 'preserve-3d'
                            }}
                        >

                            {/* ── BENTO GRID: 11 Team Moment Assets ── */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[280px] md:auto-rows-[300px]">

                                {/* 1. HERO — Party Video (wide) */}
                                <Card3DWrapper index={0} className="md:col-span-8 md:row-span-2">
                                    <BentoCard className="w-full h-full" depth={0.1}>
                                        <video
                                            src={PartyStream}
                                            autoPlay muted loop playsInline
                                            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-10 left-10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="p-2.5 bg-[#34D562] rounded-xl">
                                                    <Play size={16} className="text-black fill-black" />
                                                </div>
                                                <span className="text-[#34D562] font-bold uppercase text-[10px] tracking-widest">Party Moments</span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
                                                Happiness<br />Engine
                                            </h3>
                                        </div>
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 2. Join The Tribe — Party3 */}
                                <Card3DWrapper index={1} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={Party3} alt="Join The Tribe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute inset-0 border-4 border-[#34D562]/15 rounded-[2rem] m-2 pointer-events-none" />
                                        <div className="absolute bottom-6 left-6">
                                            <span className="text-white font-black uppercase text-sm tracking-widest">Join The Family</span>
                                        </div>
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 3. Pizza Fridays */}
                                <Card3DWrapper index={2} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={PizzaImg} alt="Pizza Friday" className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <Pizza className="text-[#34D562] w-16 h-16 drop-shadow-[0_0_20px_rgba(52,213,98,0.5)]" />
                                        </div>
                                        <GlassLabel text="Pizza Fridays" icon={Zap} />
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 4. Holi Colors — Party1 */}
                                <Card3DWrapper index={3} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={Party1} alt="Holi Celebrations" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Holi Colors" icon={PartyPopper} />
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 5. Team Lunch — Event1 */}
                                <Card3DWrapper index={4} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={Event1} alt="Team Lunch Outing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Team Outing" icon={Users} />
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 6. Birthday Series */}
                                <Card3DWrapper index={5} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={BirthdayImg} alt="Birthday Celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <GlassLabel text="Birthday Series" icon={Gift} />
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 7. Dance Floor — Event2 */}
                                <Card3DWrapper index={6} className="md:col-span-6 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={Event2} alt="Team Dancing" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-6 left-6">
                                            <p className="text-white font-black uppercase text-sm tracking-wider">Dance Floor</p>
                                            <p className="text-gray-400 text-xs font-medium mt-1">Where work meets play</p>
                                        </div>
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 8. Gurukul Pride — Event3 */}
                                <Card3DWrapper index={7} className="md:col-span-6 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={Event3} alt="Modern Age Gurukul" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-6 left-6">
                                            <p className="text-white font-black uppercase text-sm tracking-wider">Superb Energy</p>                                            <p className="text-gray-400 text-xs font-medium mt-1">Celebrating every milestone</p>
                                        </div>
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 9. Group Photo — Event4 */}
                                <Card3DWrapper index={8} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={Event4} alt="Team Group Photo" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                        <div className="absolute inset-0 flex items-end p-6">
                                            <div className="p-4 bg-black/50 backdrop-blur-md rounded-2xl border border-white/5 w-full text-center">
                                                <p className="text-white font-bold text-xs uppercase tracking-widest">The Crew</p>
                                            </div>
                                        </div>
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 10. Birthday 2 */}
                                <Card3DWrapper index={9} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={Birthday2Img} alt="Birthday Celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute top-5 right-5 bg-[#34D562] p-2 rounded-full shadow-lg shadow-[#34D562]/30">
                                            <Star size={12} fill="white" className="text-white" />
                                        </div>
                                        <div className="absolute bottom-6 left-6">
                                            <p className="text-white font-bold uppercase text-[10px] tracking-widest">Celebrations</p>
                                        </div>
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* 11. Memories — Party2 */}
                                <Card3DWrapper index={10} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={Party2} alt="Team Memories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Memories" icon={Camera} />
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* ── Row 5: New Culture Images (1-3) ── */}
                                <Card3DWrapper index={11} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={GoodTimesNew} alt="Good Times" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Good Times" icon={Heart} />
                                    </BentoCard>
                                </Card3DWrapper>

                                <Card3DWrapper index={12} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={CultureA2} alt="Fun Hour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Fun Hour" icon={Coffee} />
                                    </BentoCard>
                                </Card3DWrapper>

                                <Card3DWrapper index={13} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={CultureA6} alt="Happy Moments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Happy Moments" icon={Star} />
                                    </BentoCard>
                                </Card3DWrapper>

                                {/* ── Row 6: New Culture Images (4-6) ── */}
                                <Card3DWrapper index={14} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={CultureA4} alt="Chill Zone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Chill Zone" icon={Zap} />
                                    </BentoCard>
                                </Card3DWrapper>

                                <Card3DWrapper index={15} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={CultureA5} alt="Work Hard Play Hard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Work & Play" icon={Award} />
                                    </BentoCard>
                                </Card3DWrapper>

                                <Card3DWrapper index={16} className="md:col-span-4 md:row-span-1">
                                    <BentoCard className="w-full h-full">
                                        <img src={CultureA3} alt="Vibes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <GlassLabel text="Vibe" icon={Sparkles} />
                                    </BentoCard>
                                </Card3DWrapper>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2: MOMENTOS & RECOGNITION
                Certificates + Ceremony Video — 4 assets
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative pb-24 px-6">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <SectionHeading
                        badge="Excellence Recognized"
                        badgeIcon={Trophy}
                        title="MOMENTOS &"
                        greenText="RECOGNITION"
                        subtitle="Excellence recognized. Greatness celebrated. Our team members set new benchmarks every single month."
                    />

                    {/* ── BENTO GRID: 4 Momento Assets Optimized for Aspect Ratios ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">





                        {/* 1. Certificate Ceremony Video — Vertical (9:16) */}
                        <div className="lg:col-span-3 mt-7">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/[0.06] hover:border-[#34D562]/30 bg-black group shadow-2xl transition-all duration-700"
                            >
                                <video
                                    src={CertVideo}
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-cover transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                                {/* <div className="absolute top-8 left-1/2 -translate-x-1/2">
                                    <Sparkles className="text-[#34D562] w-8 h-8 drop-shadow-[0_0_15px_rgba(52,213,98,0.5)]" />
                                </div> */}
                                {/* <div className="absolute bottom-10 left-6 right-6 p-5 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/5 text-center">
                                    <h3 className="text-sm font-black uppercase text-white mb-1 tracking-tight leading-none">The Momentos</h3>
                                    <p className="text-[#34D562] font-bold text-[8px] uppercase tracking-widest">Ceremony</p>
                                </div> */}
                            </motion.div>
                        </div>
                        {/* 2. Operation Manager — Portrait (3:4) */}
                        <div className="lg:col-span-4 mt-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/[0.06] hover:border-[#34D562]/30 bg-[#080808] shadow-xl group transition-all duration-700"
                            >
                                <img
                                    src={ManagerMonth}
                                    alt="Operation Manager of the Month"
                                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500">
                                    <div className="p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/5 text-center">
                                        <span className="text-[#34D562] font-bold uppercase text-[9px] tracking-widest leading-none">Operation Manager</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* 3. Landscape Pair — Professor & Employee (16:9 stack) */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {/* Professor */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/[0.06] hover:border-[#34D562]/30 bg-[#080808] shadow-xl group transition-all duration-700"
                            >
                                <img
                                    src={ProfMonth}
                                    alt="Professor of the Month"
                                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500">
                                    <div className="p-2.5 bg-black/60 backdrop-blur-md rounded-xl border border-white/5 text-center">
                                        <span className="text-[#34D562] font-bold uppercase text-[9px] tracking-widest leading-none">Professor of the Month</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Employee */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/[0.06] hover:border-[#34D562]/30 bg-[#080808] shadow-xl group transition-all duration-700"
                            >
                                <img
                                    src={EmployeeMonth}
                                    alt="Employee of the Month"
                                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500">
                                    <div className="p-2.5 bg-black/60 backdrop-blur-md rounded-xl border border-white/5 text-center">
                                        <span className="text-[#34D562] font-bold uppercase text-[9px] tracking-widest leading-none">Employee of the Month</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* ── NEW ROW: 3 Additional Images ── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/[0.06] hover:border-[#34D562]/30 bg-[#080808] shadow-xl group transition-all duration-700"
                        >
                            <img src={Prof1} alt="Recent Recognition 1" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 p-2" />
                            <div className="absolute inset-0 border-[4px] border-[#34D562]/10 rounded-[2rem] pointer-events-none" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/[0.06] hover:border-[#34D562]/30 bg-[#080808] shadow-xl group transition-all duration-700"
                        >
                            <img src={Prof2} alt="Recent Recognition 2" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 p-2" />
                            <div className="absolute inset-0 border-[4px] border-[#34D562]/10 rounded-[2rem] pointer-events-none" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/[0.06] hover:border-[#34D562]/30 bg-[#080808] shadow-xl group transition-all duration-700"
                        >
                            <img src={Prof3} alt="Recent Recognition 3" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 p-2" />
                            <div className="absolute inset-0 border-[4px] border-[#34D562]/10 rounded-[2rem] pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                FOOTER CTA
            ═══════════════════════════════════════════════════════════════ */}
            <section className="px-6 pb-32">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 md:p-24 bg-[#0a0a0a] rounded-[3rem] border border-white/5 text-center relative overflow-hidden group shadow-[0_0_80px_rgba(52,213,98,0.04)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#34D562]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <h3 className="relative z-10 text-3xl md:text-6xl font-black text-white leading-none uppercase mb-8 tracking-tighter">
                            READY TO BE THE NEXT<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D562] to-emerald-400">
                                EMPLOYEE OF THE MONTH?
                            </span>
                        </h3>

                        <motion.a
                            href="/careers"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(52,213,98,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="relative z-10 inline-block px-12 py-5 bg-[#34D562] text-black font-black uppercase tracking-widest text-sm rounded-2xl transition-all hover:bg-[#2bc455]"
                        >
                            Join Geeks Culture
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Watermark */}
            {/* <div className="pb-16 flex justify-center opacity-[0.03] select-none pointer-events-none">
                <span className="text-[12vw] font-black text-white uppercase tracking-tighter leading-none">OUR CULTURE</span>
            </div> */}
        </main>
    );
};

export default Culture;
