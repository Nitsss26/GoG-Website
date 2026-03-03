import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react';
import { ChevronRight, ArrowRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import './Tech.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

/* =========================================================================
   1. FIXED ELEMENTS
   ========================================================================= */
const FixedElements = () => {
    const { scrollY, scrollYProgress } = useScroll();
    const [scrolledPast, setScrolledPast] = useState(false);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    useEffect(() => {
        const st = ScrollTrigger.create({
            trigger: '#nexus-journey',
            start: 'bottom 15%', // Trigger slightly before it fully leaves for smoother blend
            onEnter: () => setScrolledPast(true),
            onLeaveBack: () => setScrolledPast(false),
        });
        return () => st.kill();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#FF8C42] origin-left z-[2000] shadow-[0_0_10px_rgba(0,229,255,0.4)]"
                style={{ scaleX }}
            />

            {/* Top-Left Logo */}
            <div className="fixed top-6 left-6 z-[1000] flex items-center h-16 pointer-events-auto group cursor-pointer">
                <a href="/" className="flex items-center">
                    <img
                        src="https://i.ibb.co/j95yW7dm/nexus-logo.png"
                        alt="nexus-logo"
                        className="h-20 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                    />
                </a>
            </div>

            {/* Central Blended Navigation */}
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[1000] hidden lg:block">
                <nav className={`flex items-center gap-2 px-3 py-2 transition-all duration-700 rounded-full 
                    ${scrolledPast
                        ? 'bg-[#131920]/80 backdrop-blur-2xl font-bold border border-white/10 hover:border-[#00E5FF]/40 shadow-[0_0_50px_rgba(0,0,0,0.6)]'
                        : 'bg-transparent font-bold border-transparent shadow-none backdrop-blur-none'}`}
                >
                    {[
                        { name: 'Launchpad', id: 'nexus-journey' },
                        { name: 'Services', id: 'bento-grid' },
                        { name: 'Flagships', id: 'case-studies' },
                        { name: 'AI Labs', id: 'ai-products' },
                        { name: 'Stat-Map', id: 'stats-row' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="px-6 py-2 rounded-full font-mono text-[11px] text-[#A5B4C2] hover:text-[#00E5FF] hover:bg-white/5 transition-all uppercase tracking-widest relative overflow-hidden group/item"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover/item:text-white">{item.name}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF]/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000" />
                        </button>
                    ))}
                </nav>
            </div>

            {/* Top-Right CTA */}
            <div className="fixed top-8 right-8 z-[1000] pointer-events-auto">
                <button
                    onClick={() => scrollToSection('contact-footer')}
                    className="bg-white hover:bg-[#00E5FF] text-[#0B0F14] font-dm font-semibold rounded-full px-8 py-3 text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] border border-white/20 hover:border-[#00E5FF] uppercase tracking-widest"
                >
                    Begin Your Project <ArrowRight size={16} />
                </button>
            </div>
        </>
    );
};

/* =========================================================================
   2. LOADING SCREEN
   ========================================================================= */
const LoadingScreen = ({ onComplete, frameProgress }: { onComplete: () => void, frameProgress: number }) => {
    const [displayProgress, setDisplayProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDisplayProgress(Math.round(frameProgress));

        if (frameProgress >= 100) {
            const timer = setTimeout(() => {
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.9,
                    ease: 'power4.inOut',
                    onComplete
                });
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [frameProgress, onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[3000] bg-[#0B0F14] flex flex-col items-center justify-center">
            {/* Drone Icon */}
            <div className="relative w-24 h-24 mb-12 drone-spinner opacity-80">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-10 bg-[#00E5FF] rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-10 bg-[#00E5FF] rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-2 bg-[#00E5FF] rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-2 bg-[#00E5FF] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#00E5FF] rounded-full border-4 border-[#0B0F14]" />
            </div>

            <div className="text-center mb-12">
                <h1 className="font-clash text-5xl md:text-6xl text-[#F8FAFF] tracking-wider mb-2">NEXUS</h1>
                <p className="font-dm font-light text-[#00E5FF] text-base tracking-widest uppercase">by Geeks of Gurukul</p>
            </div>

            <div className="flex flex-col items-center">
                <div className="w-[200px] h-[2px] bg-[rgba(0,229,255,0.2)] mb-4 overflow-hidden rounded-full relative">
                    <motion.div
                        className="absolute h-full bg-[#00E5FF] left-0 top-0"
                        initial={{ width: 0 }}
                        animate={{ width: `${displayProgress}%` }}
                    />
                </div>
                <div className="font-mono text-[0.7rem] text-[#4A5C6A] tracking-[0.2em] uppercase">
                    {displayProgress}% — LOADING CAMPUS
                </div>
            </div>
        </div>
    );
};

/* =========================================================================
   CANVAS FRAME PRELOADER
   ========================================================================= */
const useFramePreloader = (totalFrames: number) => {
    const [frames, setFrames] = useState<HTMLImageElement[]>([]);
    const [loadedPercent, setLoadedPercent] = useState(0);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const frameImages: HTMLImageElement[] = [];

        const preloadFrames = async () => {
            for (let i = 1; i <= totalFrames; i++) {
                const img = new Image();
                const frameIdx = i.toString().padStart(3, '0');
                img.src = `/frames/ezgif-frame-${frameIdx}.jpg`;

                img.onload = () => {
                    loadedCount++;
                    setLoadedPercent((loadedCount / totalFrames) * 100);
                    if (loadedCount === totalFrames) {
                        setIsReady(true);
                    }
                };
                frameImages.push(img);

                if (i % 20 === 0) {
                    await new Promise(r => setTimeout(r, 5));
                }
            }
            setFrames(frameImages);
        };

        preloadFrames();
    }, [totalFrames]);

    return { frames, loadedPercent, isReady };
};

/* =========================================================================
   3. HERO SECTION
   ========================================================================= */
const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.5 });
        tl.from('.status-pill', { y: 20, opacity: 0, duration: 0.4 })
            .from('.hero-line-1', { y: 60, opacity: 0, duration: 0.7, ease: 'power3.out' })
            .from('.hero-line-2', { y: 60, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
            .from('.hero-line-3', { y: 60, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
            .from('.hero-line-4', { y: 60, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
            .from('.domain-pills .pill', { y: 20, opacity: 0, stagger: 0.08, duration: 0.4 })
            .from('.hero-body', { y: 20, opacity: 0, duration: 0.5 })
            .from('.cta-row', { y: 20, opacity: 0, duration: 0.5 })
            .from('.hero-stats .stat', { y: 15, opacity: 0, stagger: 0.1, duration: 0.4 })
            .from('.campus-3d', { scale: 0.85, opacity: 0, duration: 1.2, ease: 'power2.out' }, 0.5);
    }, { scope: heroRef });

    return (
        <section ref={heroRef} className="relative h-screen flex flex-col md:flex-row items-center overflow-hidden px-6 md:px-16 pt-20">
            {/* Background Particles (Subtle) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.05)_0%,transparent_50%)] pointer-events-none" />

            {/* Left 55% - Text Box */}
            <div className="w-full md:w-[55%] flex flex-col justify-center z-10 pt-12 md:pt-0">
                <div className="status-pill inline-flex items-center gap-2 border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.06)] rounded-full px-4 py-1.5 w-max mb-8">
                    <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                    <span className="font-mono text-xs text-[#F8FAFF] tracking-wider">NOW ACTIVE — NEXUS 2026</span>
                </div>

                <div className="mb-8">
                    <div className="hero-line-1 font-dm font-light text-[1.2rem] text-[#8FA3B1] tracking-[0.35em] uppercase mb-4">WELCOME TO</div>
                    <div className="hero-line-2 font-clash text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] text-[#F8FAFF]">THE NEXUS</div>
                    <div className="hero-line-3 font-clash text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] text-[#F8FAFF]">TECHNOLOGY</div>
                    <div className="hero-line-4 font-clash text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] text-gradient-teal-amber pb-2">CAMPUS.</div>
                </div>

                <div className="domain-pills flex flex-wrap gap-2 mb-8">
                    {['🤖 AI Solutions', '⬡ Blockchain', '🏛 GovTech', '🎓 EdTech', '🏢 Enterprise'].map(tag => (
                        <span key={tag} className="pill font-mono text-[0.72rem] rounded-full border border-[rgba(0,229,255,0.25)] bg-[rgba(0,229,255,0.05)] px-3 py-1.5 text-[#8FA3B1] whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="hero-body font-dm font-light text-base md:text-lg text-[#8FA3B1] max-w-[480px] leading-relaxed mb-10">
                    India's premier AI and technology solutions agency.<br />
                    Custom-built software, AI systems, and digital infrastructure — engineered by IITians, deployed across government, education, and enterprise.
                </p>

                <div className="cta-row flex flex-wrap items-center gap-4 mb-12">
                    <button className="bg-[#00E5FF] text-[#0B0F14] font-dm font-semibold rounded-full px-8 py-3.5 hover:scale-105 hover:shadow-[0_0_20px_var(--sunset-amber)] transition-all">
                        Explore Our Work →
                    </button>
                    <button className="bg-transparent text-[#F8FAFF] border border-white/25 font-dm rounded-full px-8 py-3.5 hover:bg-white/5 transition-colors">
                        ▷ Watch Overview
                    </button>
                </div>

                <div className="hero-stats flex flex-wrap items-center gap-6">
                    {[
                        { n: '50+', l: 'Enterprise Clients' },
                        { n: '5+', l: 'Gov Projects' },
                        { n: '1M+', l: 'End Users' },
                        { n: '100%', l: 'Custom' }
                    ].map((stat, i) => (
                        <div key={i} className="stat flex items-center gap-4">
                            {i > 0 && <div className="w-[1px] h-6 bg-[rgba(0,229,255,0.3)] hidden md:block" />}
                            <div className="flex flex-col">
                                <span className="font-dm font-bold text-[#00E5FF] text-xl leading-none mb-1">{stat.n}</span>
                                <span className="font-dm font-light text-[0.7rem] text-[#4A5C6A] uppercase tracking-wider">{stat.l}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right 45% - 3D Campus */}
            <div className="campus-3d hidden md:flex w-[45%] h-full items-center justify-center isometric-container relative">
                <div className="campus-model">
                    {/* Simple CSS blocks to simulate the buildings requested */}
                    <div className="glass-building" style={{ width: '120px', height: '120px', left: '100px', top: '100px', transform: 'translateZ(0)' }}>
                        <div className="absolute inset-0 border border-[#00E5FF]/20" />
                    </div>
                    <div className="glass-building" style={{ width: '80px', height: '80px', left: '260px', top: '150px', transform: 'translateZ(40px)' }}></div>
                    <div className="glass-building" style={{ width: '140px', height: '60px', left: '50px', top: '260px', transform: 'translateZ(-20px)' }}></div>

                    {/* Grid Base */}
                    <div className="absolute inset-0 border border-[#00E5FF]/10 bg-[radial-gradient(transparent_0%,rgba(0,229,255,0.02)_100%)]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    />
                    {/* Floating drone dots */}
                    <div className="absolute w-2 h-2 bg-[#00E5FF] rounded-full shadow-[0_0_10px_#00E5FF] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite]" style={{ transformOrigin: '80px 80px' }}></div>
                </div>
            </div>
        </section>
    );
};

/* =========================================================================
   4. CANVAS SCROLL SECTION (Cinematic Journey)
   ========================================================================= */
const CanvasScrollSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const totalFrames = 222;
    const { frames, isReady } = useFramePreloader(totalFrames);
    const currentFrameRef = useRef(0);

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx || !frames[index]) return;

        const img = frames[index];
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgAspect;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgAspect;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useGSAP(() => {
        if (!isReady) return;

        drawFrame(0);

        const st = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            pin: '.canvas-sticky',
            scrub: 0.5,
            onUpdate: (self) => {
                const frameIndex = Math.min(
                    totalFrames - 1,
                    Math.floor(self.progress * (totalFrames - 1))
                );
                if (frameIndex !== currentFrameRef.current) {
                    currentFrameRef.current = frameIndex;
                    drawFrame(frameIndex);
                }

                const overlays = gsap.utils.toArray<HTMLElement>('.scene-overlay');
                overlays.forEach((overlay) => {
                    const start = parseFloat(overlay.dataset.start || '0');
                    const end = parseFloat(overlay.dataset.end || '1');
                    const progress = self.progress;

                    if (progress >= start && progress <= end) {
                        const mid = (start + end) / 2;
                        const dist = (end - start) / 2;

                        // If it's the very first scene (starts at 0.0), make it visible at 0 scroll
                        let opacity;
                        if (start === 0 && progress < 0.1) {
                            opacity = 1;
                        } else {
                            opacity = 1 - Math.abs(progress - mid) / dist;
                        }

                        gsap.set(overlay, {
                            opacity: Math.max(0, opacity * 1.5),
                            display: 'flex'
                        });
                    } else {
                        gsap.set(overlay, { opacity: 0, display: 'none' });
                    }
                });
            }
        });

        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
                canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
                drawFrame(currentFrameRef.current);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            st.kill();
            window.removeEventListener('resize', handleResize);
        };
    }, [isReady, frames]);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
            canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
        }
    }, []);

    return (
        <section id="nexus-journey" ref={containerRef} className="h-[450vh] relative bg-[#0B0F14]">
            <div className="canvas-sticky sticky top-0 left-0 w-full h-screen overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover canvas-tech" />

                <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                <div className="absolute inset-0 pointer-events-none">
                    <div className="scene-overlay flex absolute inset-0 flex-col items-center justify-center text-center p-6" data-start="0.0" data-end="0.12" style={{ opacity: 1 }}>
                        <span className="font-semibold text-xs text-white border border-[#00E5FF]/20 bg-[#00E5FF]/2 rounded-full px-4 py-1.5 mb-6 uppercase tracking-[0.3em]">MISSION: DIGITALIZING BHARAT</span>
                        <h2 className="font-clash text-[8vw] md:text-7xl leading-[0.9] text-white">ENGINEERING<br />THE NEW <span className="text-gradient-teal-amber">ERA.</span></h2>
                        <p className="font-dm font-light text-xl text-white mt-8 max-w-2xl">Providing world-class technology solutions for the Bharat of tomorrow.</p>
                        <div className="mt-12 group flex items-center gap-3">
                            <div className="w-12 h-[1px] bg-[#00E5FF]/50" />
                            <span className="font-mono text-[10px] text-[#00E5FF] animate-pulse">SCROLL TO DISCOVER PHASE 1.0</span>
                            <div className="w-12 h-[1px] bg-[#00E5FF]/50" />
                        </div>
                    </div>

                    <div className="scene-overlay flex absolute inset-0 p-16 md:p-24 flex-col justify-start items-start mt-16" data-start="0.12" data-end="0.25" style={{ opacity: 0 }}>
                        {/* <span className="font-mono text-xs border border-white/20 bg-white/5 rounded-full px-4 py-1.5 mb-6">CORE ARCHITECTURE</span> */}
                        <h2 className="font-clash text-[7vw] leading-[0.85] text-white">VISIONARY</h2>
                        <h2 className="font-clash text-[7vw] leading-[0.85] text-white">AI-TECH SOLUTION</h2>
                        <h2 className="font-clash text-[7vw] leading-[0.85] text-gradient-teal-amber mb-6">BUILT FOR BHARAT.</h2>
                        <p className="font-dm font-light text-xl text-white max-w-xl leading-relaxed">
                            Empowering Governments, Startups, and Tech Giants with resilient digital ecosystems that scale across the nation.
                        </p>
                    </div>

                    <div className="scene-overlay flex absolute inset-0 p-16 md:p-24 flex-col justify-center items-center text-center" data-start="0.25" data-end="0.4" style={{ opacity: 0 }}>
                        <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-6">GOVTECH · AI-POWERED · NATION SCALE</span>
                        <h2 className="font-clash text-[8vw] md:text-6xl leading-[0.9] text-white">THE NATION<br />DESERVES<br /><span className="text-[#00E5FF]">INTELLIGENT</span><br /><span className="text-gradient-warm">TECHNOLOGY.</span></h2>
                        <p className="font-dm font-light text-xl text-white my-8 max-w-lg">Custom-engineered by the best minds in the country. Delivered with precision.</p>
                    </div>

                    <div className="scene-overlay flex absolute inset-0 p-16 md:p-24 flex-col justify-center items-start" data-start="0.4" data-end="0.6" style={{ opacity: 0 }}>
                        <span className="font-mono text-xs border border-white/20 bg-white/5 rounded-full px-4 py-1.5 mb-6">TRUSTED BY THE SYSTEM</span>
                        <h2 className="font-clash text-[6vw] leading-[0.9] text-white">WE BUILD FOR</h2>
                        <h2 className="font-clash text-[7vw] leading-[0.9] text-gradient-teal-amber mb-10">THE GOVERNMENT.</h2>
                        <div className="flex flex-col gap-4">
                            {["AgriScan — AI for Indian Farmers", "Secure Blockchain Credentialing", "High-Scale Management Platforms"].map((tag, i) => (
                                <div key={i} className="flex items-center gap-4 bg-[#131920]/80 backdrop-blur-md border-l-4 border-l-[#00E5FF] px-6 py-4 rounded-r-lg w-max">
                                    <span className="text-[#00E5FF]">→</span>
                                    <span className="font-mono text-sm text-[#F8FAFF]">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="scene-overlay flex absolute inset-0 p-16 md:p-24 flex-col justify-center items-center text-center" data-start="0.6" data-end="0.8" style={{ opacity: 0 }}>
                        <h2 className="font-clash text-[9vw] leading-[0.85] text-white">AI-Tech Solutions</h2>
                        <h2 className="font-clash text-[9vw] leading-[0.85] text-gradient-teal-amber mb-12">FOR THE NEW ERA.</h2>
                        <button
                            onClick={() => document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-[#00E5FF] to-[#FF8C42] text-[#0B0F14] font-clash font-semibold text-2xl md:text-3xl rounded-full px-12 py-6 shadow-[0_0_40px_rgba(255,140,66,0.4)] hover:scale-105 transition-transform pointer-events-auto"
                        >
                            START THE DIGITAL TRANSFORMATION →
                        </button>
                    </div>

                    <div className="scene-overlay flex absolute inset-0 p-16 md:p-24 flex-col justify-end items-center text-center pb-24" data-start="0.8" data-end="0.95" style={{ opacity: 0 }}>
                        <span className="font-clash text-2xl text-[#00E5FF] tracking-widest mb-4">THE GLOBAL STAGE AWAITS</span>
                        <p className="font-dm font-light text-2xl text-white mb-6">Your vision. Our technology. Built in Bharat, for the World.</p>
                        <a href="#" className="font-mono text-sm text-[#00E5FF] underline underline-offset-4 hover:text-white transition-colors">geeksofgurukul.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
};


/* =========================================================================
   5. ROBOT ASSEMBLY SECTION (350vh sticky scroll)
   ========================================================================= */
const RobotAssemblySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.8,
                pin: '.robot-sticky'
            }
        });

        // Step 2: Torso rises
        tl.to('.rob-torso', { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 0)
            .to('.rob-text-1', { opacity: 0, duration: 0.5 }, 0.5)
            .to('.rob-text-2', { opacity: 1, duration: 0.5 }, 1)

            // Step 3: Pelvis + Legs
            .to('.rob-pelvis', { y: 0, opacity: 1, duration: 1 }, 1)
            .to('.rob-leg', { y: 0, opacity: 1, duration: 1 }, 1)
            .to('.rob-text-2', { opacity: 0, duration: 0.5 }, 1.5)
            .to('.rob-text-3', { opacity: 1, duration: 0.5 }, 2)

            // Step 4: Feet
            .to('.rob-foot', { y: 0, opacity: 1, duration: 0.8 }, 2)

            // Step 5: Arms swing in
            .to('.rob-arm-left', { x: 0, rotation: 0, opacity: 1, duration: 1 }, 2.5)
            .to('.rob-arm-right', { x: 0, rotation: 0, opacity: 1, duration: 1 }, 2.5)
            .to('.rob-text-3', { opacity: 0, duration: 0.5 }, 2.5)
            .to('.rob-text-4', { opacity: 1, duration: 0.5 }, 3)

            // Step 6 & 7: Neck + Head bounce
            .to('.rob-neck', { y: 0, opacity: 1, duration: 0.5 }, 3.5)
            .to('.rob-head', { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out' }, 3.8)
            .to('.rob-text-4', { opacity: 0, duration: 0.5 }, 4)
            .to('.rob-text-5', { opacity: 1, duration: 0.5 }, 4.5)

            // Step 8: Activation
            .to('.rob-eye', { opacity: 1, scale: 1, fill: '#00E5FF', duration: 0.5 }, 5)
            .to('.rob-core-rings', { rotation: 360, duration: 2, repeat: -1, ease: 'linear' }, 5)
            .to('.rob-glow', { opacity: 1, duration: 1 }, 5)
            .to('.status-ticks', { opacity: 1, stagger: 0.2, duration: 1 }, 5);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="robot-section h-[350vh] relative bg-[#0B0F14]">
            {/* Subtle warm radial bg at center */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,140,66,0.04)_0%,transparent_60%)] pointer-events-none" />

            <div className="robot-sticky sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center">

                {/* Section Header */}
                <div className="absolute top-12 left-0 w-full flex flex-col items-center pointer-events-none z-10 text-center text-white" style={{ opacity: 1 }}>
                    <span className="font-mono text-[10px] text-[#00E5FF] tracking-widest uppercase mb-4">THE ENGINE</span>
                    <h2 className="font-clash text-4xl leading-[0.9]">
                        POWERED BY<br />
                        <span className="text-gradient-teal-amber">INTELLIGENT SYSTEMS.</span>
                    </h2>
                </div>

                {/* Left Side Text Stack */}
                <div className="absolute left-[10%] md:left-[20%] top-1/2 -translate-y-1/2 w-full max-w-sm z-20">
                    <div className="rob-text-1 absolute top-1/2 -translate-y-1/2 w-full text-white">
                        <h3 className="font-clash text-5xl leading-none">CUSTOM AI</h3>
                        <h3 className="font-clash text-5xl text-[#00E5FF] leading-none mb-4">SOLUTIONS</h3>
                        <p className="font-dm font-light text-[#8FA3B1]">Built from scratch. Zero templates.</p>
                    </div>
                    <div className="rob-text-2 absolute top-1/2 -translate-y-1/2 w-full opacity-0 text-white">
                        <h3 className="font-clash text-5xl leading-none">Multiple DOMAINS</h3>
                        <h3 className="font-clash text-5xl text-[#00E5FF] leading-none mb-4">OF EXPERTISE</h3>
                        <p className="font-dm font-light text-[#8FA3B1]">Web · App · AI · EdTech · GovTech · Enterprise</p>
                    </div>
                    <div className="rob-text-3 absolute top-1/2 -translate-y-1/2 w-full opacity-0">
                        <h3 className="font-clash text-5xl text-[#00E5FF] leading-none">IIT-TRAINED</h3>
                        <h3 className="font-clash text-5xl text-white leading-none mb-4">MINDS.</h3>
                        <p className="font-dm font-light text-[#8FA3B1]">250+ IIT mentors. 7+ years of building.</p>
                    </div>
                    <div className="rob-text-4 absolute top-1/2 -translate-y-1/2 w-full opacity-0">
                        <h3 className="font-clash text-5xl text-white leading-none">CORE SYSTEMS</h3>
                        <h3 className="font-clash text-4xl text-gradient-teal-amber leading-none mb-4">INITIALIZING...</h3>
                    </div>
                    <div className="rob-text-5 absolute top-1/2 -translate-y-1/2 w-full opacity-0">
                        <h3 className="font-clash text-5xl text-white leading-none mb-2">INTELLIGENCE</h3>
                        <h3 className="font-clash text-6xl text-gradient-teal-amber leading-none mb-6 tracking-wide">ACTIVATED.</h3>
                        <div className="font-mono text-xs flex items-center gap-2">
                            <span className="text-[#00E5FF]">NEXUS SYSTEM / FULLY OPERATIONAL</span>
                            <div className="flex gap-1 ml-2">
                                {[1, 2, 3, 4].map(i => <span key={i} className="status-ticks opacity-0 text-[#34D562]">✓</span>)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Robot SVG Assembly */}
                <div className="absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px]">
                    <svg viewBox="0 0 400 500" className="w-full h-full filter drop-shadow-[0_0_2px_rgba(0,229,255,0.2)]">

                        {/* FEET */}
                        <g className="rob-foot opacity-0" style={{ transform: 'translateY(500px)' }}>
                            {/* Left foot */}
                            <path d="M 130 460 L 170 460 L 180 480 L 120 480 Z" className="blueprint-fill" />
                            <line x1="140" y1="465" x2="160" y2="465" className="blueprint-path" />
                            <circle cx="125" cy="480" r="4" className="blueprint-fill" />
                            {/* Right foot */}
                            <path d="M 230 460 L 270 460 L 280 480 L 220 480 Z" className="blueprint-fill" />
                            <line x1="240" y1="465" x2="260" y2="465" className="blueprint-path" />
                            <circle cx="275" cy="480" r="4" className="blueprint-fill" />
                        </g>

                        {/* LEGS */}
                        <g className="rob-leg opacity-0" style={{ transform: 'translateY(400px)' }}>
                            {/* Left Leg */}
                            <polygon points="140,280 160,280 170,360 130,360" className="blueprint-fill" />
                            <circle cx="150" cy="370" r="10" className="blueprint-fill" fill="#00E5FF" />
                            <polygon points="135,380 165,380 160,460 140,460" className="blueprint-fill" />
                            <line x1="150" y1="290" x2="150" y2="350" className="blueprint-path" />
                            {/* Right Leg */}
                            <polygon points="240,280 260,280 270,360 230,360" className="blueprint-fill" />
                            <circle cx="250" cy="370" r="10" className="blueprint-fill" fill="#00E5FF" />
                            <polygon points="235,380 265,380 260,460 240,460" className="blueprint-fill" />
                            <line x1="250" y1="290" x2="250" y2="350" className="blueprint-path" />
                        </g>

                        {/* PELVIS */}
                        <g className="rob-pelvis opacity-0" style={{ transform: 'translateY(300px)' }}>
                            <polygon points="120,250 280,250 260,280 140,280" className="blueprint-fill" />
                            <polygon points="190,255 210,255 215,270 185,270" className="blueprint-path" />
                            <circle cx="200" cy="265" r="5" className="blueprint-fill rob-glow opacity-0" fill="#00E5FF" />
                        </g>

                        {/* TORSO */}
                        <g className="rob-torso opacity-0" style={{ transform: 'translateY(200px) scale(0.8)', transformOrigin: '200px 170px' }}>
                            <polygon points="100,100 300,100 280,250 120,250" className="blueprint-fill" />
                            {/* Hex Core */}
                            <polygon points="200,140 230,155 230,185 200,200 170,185 170,155" className="blueprint-path rob-core" />
                            <g className="rob-core-rings" style={{ transformOrigin: '200px 170px' }}>
                                <circle cx="200" cy="170" r="15" strokeDasharray="5,5" className="blueprint-path" />
                                <circle cx="200" cy="170" r="8" className="blueprint-fill rob-glow opacity-0" fill="#00E5FF" />
                            </g>

                            {/* Status lights */}
                            <circle cx="140" cy="120" r="3" className="blueprint-fill" fill="#00E5FF" />
                            <circle cx="140" cy="130" r="3" className="blueprint-fill" fill="#00E5FF" />
                            <circle cx="140" cy="140" r="3" className="blueprint-fill" fill="#00E5FF" />

                            {/* Shoulders */}
                            <path d="M 80 100 Q 100 80 120 100" className="blueprint-path" />
                            <path d="M 280 100 Q 300 80 320 100" className="blueprint-path" />
                        </g>

                        {/* ARMS */}
                        <g className="rob-arm-left opacity-0" style={{ transform: 'translateX(-500px) rotate(-45deg)', transformOrigin: '90px 110px' }}>
                            <polygon points="70,110 100,110 90,190 75,190" className="blueprint-fill" />
                            <circle cx="82" cy="200" r="8" className="blueprint-fill" fill="#00E5FF" />
                            <polygon points="75,210 90,210 80,280 70,280" className="blueprint-fill" />
                            {/* Claw */}
                            <path d="M 70 280 L 60 300 M 80 280 L 90 300 M 75 280 L 75 310" stroke="#00E5FF" strokeWidth="2" fill="none" />
                        </g>

                        <g className="rob-arm-right opacity-0" style={{ transform: 'translateX(500px) rotate(45deg)', transformOrigin: '310px 110px' }}>
                            <polygon points="300,110 330,110 325,190 310,190" className="blueprint-fill" />
                            <circle cx="317" cy="200" r="8" className="blueprint-fill" fill="#00E5FF" />
                            <polygon points="310,210 325,210 330,280 320,280" className="blueprint-fill" />
                            {/* Claw */}
                            <path d="M 320 280 L 310 300 M 330 280 L 340 300 M 325 280 L 325 310" stroke="#00E5FF" strokeWidth="2" fill="none" />
                        </g>

                        {/* NECK */}
                        <g className="rob-neck opacity-0" style={{ transform: 'translateY(-200px)' }}>
                            <rect x="185" y="80" width="30" height="20" className="blueprint-fill" />
                            <line x1="190" y1="85" x2="210" y2="85" className="blueprint-path" />
                            <line x1="190" y1="95" x2="210" y2="95" className="blueprint-path" />
                        </g>

                        {/* HEAD */}
                        <g className="rob-head opacity-0" style={{ transform: 'translateY(-400px)' }}>
                            <polygon points="160,30 240,30 250,60 230,80 170,80 150,60" className="blueprint-fill" />
                            {/* Antenna */}
                            <line x1="200" y1="30" x2="200" y2="10" className="blueprint-path" />
                            <circle cx="200" cy="8" r="3" className="blueprint-fill rob-glow opacity-0" fill="#00E5FF" />
                            {/* Eyes Base */}
                            <circle cx="180" cy="55" r="10" stroke="#00E5FF" strokeWidth="1" fill="none" />
                            <circle cx="220" cy="55" r="10" stroke="#00E5FF" strokeWidth="1" fill="none" />
                            {/* Eyes Activation */}
                            <circle cx="180" cy="55" r="4" className="rob-eye opacity-0" style={{ transform: 'scale(0.5)', transformOrigin: '180px 55px' }} />
                            <circle cx="220" cy="55" r="4" className="rob-eye opacity-0" style={{ transform: 'scale(0.5)', transformOrigin: '220px 55px' }} />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
};

/* =========================================================================
   6. BENTO GRID SECTION (Services)
   ========================================================================= */
const BentoGridSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.service-card', {
            y: 70, opacity: 0, stagger: 0.1, duration: 0.65, ease: 'power2.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 65%' }
        });

        const textTarget = document.getElementById('typing-text');
        if (textTarget) {
            const text = "const future = await build();";
            gsap.to(textTarget, {
                text: { value: text },
                duration: 3,
                ease: "none",
                scrollTrigger: {
                    trigger: '#card-web',
                    start: 'top center',
                    toggleActions: 'play none none reset'
                }
            });
        }

        gsap.to('.ai-node', {
            scale: 1.2, opacity: 1, duration: 1,
            stagger: { each: 0.2, yoyo: true, repeat: -1 },
            ease: 'sine.inOut'
        });
    }, { scope: containerRef });

    return (
        <section id="bento-grid" ref={containerRef} className="py-24 bg-[#0B0F14] relative border-t border-[rgba(255,140,66,0.1)]">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[rgba(255,140,66,0.02)] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="mb-16">
                    <span className="font-mono text-xs border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.05)] text-[#00E5FF] rounded-full px-4 py-1.5 uppercase tracking-wider mb-6 inline-block">WHAT WE BUILD</span>
                    <h2 className="font-clash text-5xl md:text-[6vw] leading-[0.9] text-white">MULTIPLE DOMAINS.</h2>
                    <h2 className="font-clash text-5xl md:text-[6vw] leading-[0.9] text-gradient-teal-amber mb-6">INFINITE SOLUTIONS.</h2>
                    <p className="font-dm font-light text-xl text-[#8FA3B1] max-w-xl">Purpose-built enterprise platforms, automated intelligence, and scalable infrastructure.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* CARD 1: WEB SOLUTIONS */}
                    <div id="card-web" className="service-card bento-card p-7 rounded-2xl md:row-span-2 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-white">
                        <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#00E5FF] m-5" />

                        <div className="mb-8 h-40 bg-[#0B0F14] rounded-lg border border-white/5 relative overflow-hidden flex flex-col">
                            <div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-[#080B10]">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                <div className="ml-2 font-mono text-[8px] text-[#4A5C6A]">nexus-web-solution.app</div>
                            </div>
                            <div className="p-4 font-mono text-xs text-[#00E5FF] tracking-wider relative h-full">
                                <span className="text-white/50">{'> '}</span>
                                <span id="typing-text">const future...</span>
                                <span className="inline-block w-1.5 h-3 bg-[#00E5FF] animate-pulse ml-1 align-middle" />
                            </div>
                        </div>

                        <div>
                            <span className="font-mono text-[10px] text-[#00E5FF] border border-[#00E5FF]/30 px-2 py-0.5 rounded-full mb-4 inline-block tracking-widest">WEB</span>
                            <h3 className="font-dm text-2xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">Web Solutions</h3>
                            <p className="font-dm font-light text-[#8FA3B1] text-sm leading-relaxed mb-6">Enterprise platforms, SaaS portals, and blazing-fast websites built on modern stack.</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {['React', 'Next.js', 'Node.js', 'AWS'].map(tech => (
                                    <span key={tech} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>

                            <div className="font-dm text-sm font-semibold text-[#00E5FF] flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn More <ChevronRight size={16} />
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: APP SOLUTIONS */}
                    <div className="service-card bento-card p-7 rounded-2xl lg:col-span-2 flex flex-col md:flex-row gap-8 justify-between group cursor-pointer relative text-white">
                        <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#00BCD4] m-5" />

                        <div className="flex-1">
                            <span className="font-mono text-[10px] text-[#00BCD4] border border-[#00BCD4]/30 px-2 py-0.5 rounded-full mb-4 inline-block tracking-widest">MOBILE</span>
                            <h3 className="font-dm text-2xl font-bold text-white mb-2 group-hover:text-[#00BCD4] transition-colors">App Solutions</h3>
                            <p className="font-dm font-light text-[#8FA3B1] text-sm leading-relaxed mb-6 max-w-sm">Native and cross-platform apps users love. Engineered for performance and scale.</p>

                            <div className="flex flex-wrap gap-2">
                                {['React Native', 'Flutter', 'iOS', 'Android'].map(tech => (
                                    <span key={tech} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            {/* App Interface Visual */}
                            <div className="hidden md:flex flex-col gap-2 w-32">
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[70%] bg-[#00BCD4]/40" />
                                </div>
                                <div className="h-1.5 w-[40%] bg-white/5 rounded-full" />
                                <div className="h-1.5 w-[85%] bg-white/5 rounded-full" />
                            </div>

                            {/* Persistent Mobile Border */}
                            <div className="w-12 h-20 border-2 border-[#00BCD4] rounded-[4px] opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(0,188,212,0.3)] transition-all flex justify-center pt-2">
                                <div className="w-4 h-[2px] rounded-full bg-[#00BCD4]/40" />
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: AI SOLUTIONS (Wide) */}
                    <div className="service-card bento-card p-7 rounded-2xl lg:col-span-2 flex flex-col md:flex-row gap-8 items-center cursor-pointer group relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#00E5FF]/10 to-[#FF8C42]/10 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#00E5FF] m-5" />

                        <div className="flex-1 w-full">
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-mono text-[10px] text-transparent bg-clip-text bg-gradient-warm border border-[#FF8C42]/30 px-2 py-0.5 rounded-full inline-block tracking-widest">ARTIFICIAL INTELLIGENCE</span>
                                <div className="bg-[#FF8C42]/10 border border-[#FF8C42]/20 px-3 py-1 rounded-full flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="font-mono text-[8px] text-[#FF8C42] tracking-wider uppercase">In Production</span>
                                </div>
                            </div>
                            <h3 className="font-dm text-3xl font-bold text-white mb-2">AI Solutions</h3>
                            <p className="font-dm font-light text-[#8FA3B1] text-sm leading-relaxed mb-6 max-w-sm">Computer vision, NLP, custom ML models, and AI products trained specifically on your domain data.</p>

                            <div className="flex flex-wrap gap-2">
                                {['TensorFlow', 'PyTorch', 'OpenAI', 'Custom LLMs'].map(tech => (
                                    <span key={tech} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="h-40 w-full md:w-64 bg-[#0B0F14] rounded-xl flex items-center justify-center relative border border-white/5 group-hover:border-[currentColor] text-[#00E5FF] transition-colors">
                            <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                                <line x1="20" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="0.5" />
                                <line x1="20" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
                                <line x1="50" y1="20" x2="80" y2="50" stroke="#FF8C42" strokeWidth="0.5" />
                                <line x1="50" y1="80" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
                                <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                                <circle cx="20" cy="50" r="4" fill="currentColor" className="ai-node opacity-50" />
                                <circle cx="50" cy="20" r="5" fill="#FF8C42" className="ai-node opacity-50" />
                                <circle cx="50" cy="80" r="5" fill="currentColor" className="ai-node opacity-50" />
                                <circle cx="80" cy="50" r="4" fill="#FF8C42" className="ai-node opacity-50" />
                            </svg>
                        </div>
                    </div>

                    {/* CARD 4: EDTECH */}
                    <div className="service-card bento-card p-7 rounded-2xl flex flex-col justify-between group cursor-pointer relative text-white">
                        <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#B2EBF2] m-5" />

                        <div>
                            <span className="font-mono text-[10px] text-[#B2EBF2] border border-[#B2EBF2]/30 px-2 py-0.5 rounded-full mb-4 inline-block tracking-widest">EDTECH</span>
                            <h3 className="font-dm text-2xl font-bold text-white mb-2 group-hover:text-[#B2EBF2] transition-colors">Education Tech</h3>
                            <p className="font-dm font-light text-[#8FA3B1] text-sm leading-relaxed mb-6">Online judges, AI interviews, and placement platforms.</p>

                            <div className="flex flex-wrap gap-2">
                                {['LMS', 'Online Judge', 'AI Assess'].map(tech => (
                                    <span key={tech} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute right-6 top-8 opacity-20 group-hover:opacity-100 group-hover:text-[#B2EBF2] transition-all">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>
                        </div>
                    </div>

                    {/* CARD 5: GOVTECH */}
                    <div className="service-card bento-card p-7 rounded-2xl flex flex-col justify-between group cursor-pointer relative text-white">
                        <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#00E5FF] m-5" />

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-mono text-[10px] text-gradient-teal-amber border border-[#00E5FF]/30 px-2 py-0.5 rounded-full inline-block tracking-widest">GOVTECH</span>
                            </div>
                            <h3 className="font-dm text-2xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">Government Solutions</h3>
                            <p className="font-dm font-light text-[#8FA3B1] text-sm leading-relaxed mb-6">Blockchain-verified, audit-ready secure infrastructure.</p>

                            <div className="flex flex-wrap gap-2">
                                {['Blockchain', 'Smart Contracts', 'Cloud'].map(tech => (
                                    <span key={tech} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                        </div>
                        {/* <div className="mt-6 bg-[#FF8C42]/10 border border-[#FF8C42]/20 px-3 py-1.5 rounded text-xs text-[#FF8C42] font-mono tracking-widest uppercase w-max">
                            Deployed — MP Gov
                        </div> */}
                    </div>

                    {/* CARD 6: ENTERPRISE (Tall) */}
                    <div className="service-card bento-card p-7 rounded-2xl flex flex-col justify-between group cursor-pointer relative overflow-hidden text-white">
                        <div className="absolute top-0 left-0 w-[12px] h-[12px] border-t border-l border-[#00E5FF] m-5" />

                        <div className="mb-8 w-full h-40 bg-[#0B0F14] rounded-lg border border-white/5 relative overflow-hidden p-3 flex flex-col gap-2">
                            {/* Tiny Dashboard Mockup */}
                            <div className="w-1/3 h-2 bg-white/10 rounded-full mb-2" />
                            <div className="flex gap-2">
                                <div className="w-2/3 h-16 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded flex items-end p-2 gap-1">
                                    <div className="w-1/4 bg-[#00E5FF]/40 h-1/2 rounded-t-sm" />
                                    <div className="w-1/4 bg-[#00E5FF]/60 h-3/4 rounded-t-sm" />
                                    <div className="w-1/4 bg-[#00E5FF]/80 h-full rounded-t-sm" />
                                </div>
                                <div className="w-1/3 h-16 bg-white/5 rounded border border-white/10 flex flex-col justify-between p-2">
                                    <div className="w-full h-1 bg-white/20 rounded-full" />
                                    <div className="w-3/4 h-1 bg-white/20 rounded-full" />
                                </div>
                            </div>

                        </div>

                        <div>
                            <span className="font-mono text-[10px] text-[#00E5FF] border border-[#00E5FF]/30 px-2 py-0.5 rounded-full mb-4 inline-block tracking-widest">Enterprise Systems</span>
                            <h3 className="font-dm text-2xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">Enterprise Systems</h3>
                            <p className="font-dm font-light text-[#8FA3B1] text-sm leading-relaxed mb-6">HRMS, ERP, CRM — fully customizable, white-labeled, and built to match your exact business process.</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {['HRMS', 'ERP', 'CRM', 'White-label'].map(tech => (
                                    <span key={tech} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

/* =========================================================================
   7. CASE STUDIES SECTION
   ========================================================================= */
const CaseStudiesSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.case-study').forEach((study: any) => {
            gsap.from(study, {
                y: 80, opacity: 0, duration: 0.8, ease: 'power2.out',
                scrollTrigger: { trigger: study, start: 'top 75%' }
            });
        });
    }, []);

    return (
        <section id="case-studies" className="py-24 bg-[#0B0F14] relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20 text-center text-white">
                    <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-4 inline-block">CASE STUDIES</span>
                    <h2 className="font-clash text-5xl md:text-[5vw] leading-[1]">REAL PRODUCTS.</h2>
                    <h2 className="font-clash text-5xl md:text-[5vw] leading-[1] text-gradient-teal-amber mb-6">REAL IMPACT.</h2>
                    <p className="font-dm font-light text-xl text-[#8FA3B1]">Five flagship builds that changed how India works.</p>
                </div>

                <div className="flex flex-col gap-12 text-white">
                    {/* Study 01: Degree Verification */}
                    <div className="case-study flex flex-col md:flex-row bg-[#131920] border border-[rgba(0,229,255,0.2)] rounded-[20px] overflow-hidden relative border-l-4 border-l-[#00E5FF]">
                        <div className="absolute top-[-2%] left-[-2%] font-clash text-[18vw] leading-none text-white opacity-5 pointer-events-none select-none z-0">01</div>

                        <div className="w-full md:w-1/2 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['GOVERNMENT', 'BLOCKCHAIN', 'EDUCATION'].map(t => (
                                    <span key={t} className="font-mono text-[10px] text-[#00E5FF] border border-[#00E5FF] px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                            <h3 className="font-dm text-3xl font-bold text-white mb-4">Degree Verification Portal</h3>
                            <p className="font-dm font-light text-sm md:text-base text-[#8FA3B1] leading-relaxed mb-6">
                                Digitalizing India's academic credentials through blockchain — making every certificate tamper-proof, instantly verifiable, and permanently fraud-resistant.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {['Blockchain', 'Smart Contracts', 'Web3', 'React', 'Node.js'].map(t => (
                                    <span key={t} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                            <div>
                                <div className="font-clash text-5xl text-[#00E5FF] leading-none mb-2">100%</div>
                                <div className="font-dm text-[#8FA3B1] text-sm">Fraud-Proof Credential Integrity</div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 bg-[#0B0F14] p-8 flex items-center justify-center relative border-l border-white/5">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]" />
                            <svg viewBox="0 0 200 100" className="w-full max-w-[300px] text-[#00E5FF] filter drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                                <line x1="30" y1="50" x2="170" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[marquee_20s_linear_infinite]" />
                                <polygon points="30,30 50,40 50,60 30,70 10,60 10,40" fill="#131920" stroke="currentColor" strokeWidth="2" />
                                <polygon points="100,30 120,40 120,60 100,70 80,60 80,40" fill="#131920" stroke="currentColor" strokeWidth="2" />
                                <polygon points="170,30 190,40 190,60 170,70 150,60 150,40" fill="#131920" stroke="currentColor" strokeWidth="2" />
                                <circle cx="30" cy="50" r="3" fill="currentColor" className="animate-pulse" />
                                <circle cx="100" cy="50" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                                <circle cx="170" cy="50" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s' }} />
                            </svg>
                        </div>
                    </div>

                    {/* Study 02: UIMS */}
                    <div className="case-study flex flex-col md:flex-row-reverse bg-[#131920] border border-[rgba(0,229,255,0.2)] rounded-[20px] overflow-hidden relative border-r-4 border-r-[#00E5FF]">
                        <div className="absolute top-[-2%] right-[-2%] font-clash text-[18vw] leading-none text-white opacity-5 pointer-events-none select-none z-0">02</div>

                        <div className="w-full md:w-1/2 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['ENTERPRISE', 'EDTECH', 'SaaS'].map(t => (
                                    <span key={t} className="font-mono text-[10px] text-[#00E5FF] border border-[#00E5FF] px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                            <h3 className="font-dm text-3xl font-bold text-white mb-4">University Management System</h3>
                            <p className="font-dm font-light text-sm md:text-base text-[#8FA3B1] leading-relaxed mb-6">
                                A complete operating system for universities — admissions, attendance, exams, fees, faculty, results — all on one platform.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {['React', 'Node.js', 'MySQL', 'REST API', 'Auth'].map(t => (
                                    <span key={t} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                            <div>
                                <div className="font-clash text-5xl text-[#00E5FF] leading-none mb-2">5,000+</div>
                                <div className="font-dm text-[#8FA3B1] text-sm">Daily Active Users</div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 bg-[#0B0F14] p-8 flex flex-col items-center justify-center relative border-r border-white/5 gap-4">
                            <div className="w-full max-w-[280px] h-[60px] bg-[#131920] border border-[#00E5FF]/20 rounded-lg p-2 flex items-center justify-between">
                                <div className="w-8 h-8 rounded-full bg-[#00E5FF]/20" />
                                <div className="flex-1 px-4"><div className="w-full h-2 bg-white/10 rounded-full" /></div>
                                <div className="w-16 h-4 bg-[#00E5FF]/20 rounded-sm" />
                            </div>
                            <div className="w-full max-w-[280px] flex gap-4 h-[120px]">
                                <div className="w-1/2 bg-[#131920] border border-[#00E5FF]/20 rounded-lg p-3 flex flex-col gap-2">
                                    <div className="w-1/2 h-2 bg-[#00E5FF]/40 rounded-full mb-2" />
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-2 bg-white/5 rounded-full" />)}
                                </div>
                                <div className="w-1/2 bg-[#131920] border border-[#00E5FF]/20 rounded-lg p-3 flex items-end gap-1">
                                    <div className="w-1/3 bg-[#00E5FF]/30 h-1/3 rounded-t-sm" />
                                    <div className="w-1/3 bg-[#00E5FF]/60 h-2/3 rounded-t-sm" />
                                    <div className="w-1/3 bg-[#00E5FF] h-full rounded-t-sm" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Study 03: AgriScan */}
                    <div className="case-study flex flex-col md:flex-row bg-[#131920] border border-[rgba(0,229,255,0.2)] rounded-[20px] overflow-hidden relative border-l-4 border-l-[#00E5FF]">
                        <div className="absolute top-[-2%] left-[-2%] font-clash text-[18vw] leading-none text-white opacity-5 pointer-events-none select-none z-0">03</div>

                        <div className="w-full md:w-1/2 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                            <div className="mb-6 bg-[#FF8C42] text-[#0B0F14] font-mono text-[9px] font-bold px-3 py-1.5 rounded w-max inline-block tracking-widest">
                                GOVERNMENT DEPLOYED — MADHYA PRADESH
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['MP GOVERNMENT', 'COMPUTER VISION', 'AI'].map(t => (
                                    <span key={t} className="font-mono text-[10px] text-[#00E5FF] border border-[#00E5FF] px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                            <h3 className="font-dm text-3xl font-bold text-white mb-4">AgriScan</h3>
                            <p className="font-dm font-light text-sm md:text-base text-[#8FA3B1] leading-relaxed mb-6">
                                AI-powered crop health diagnosis. Photograph your crop — our trained vision model detects disease, assesses health, and recommends treatment instantly.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {['Python', 'TensorFlow', 'Computer Vision', 'React Native'].map(t => (
                                    <span key={t} className="font-mono text-[10px] text-[#4A5C6A] bg-white/5 px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                            <div>
                                <div className="font-clash text-3xl text-[#00E5FF] leading-none mb-2">STATE-WIDE</div>
                                <div className="font-dm text-[#8FA3B1] text-sm">Deployment Across MP</div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 bg-[#0B0F14] p-8 flex items-center justify-center relative border-l border-white/5">
                            <div className="w-[180px] h-[360px] border-[4px] border-[#222] rounded-[30px] bg-[#131920] relative overflow-hidden flex flex-col">
                                <div className="w-20 h-4 bg-[#222] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20" />
                                <div className="h-[60%] w-full bg-[#1A2332] relative overflow-hidden flex items-center justify-center">
                                    <svg viewBox="0 0 50 50" className="w-12 h-12 text-[#FF8C42]/50">
                                        <path d="M25 5 Q10 20 25 45 Q40 20 25 5" fill="currentColor" />
                                    </svg>
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-[float_2s_ease-in-out_infinite]" />
                                </div>
                                <div className="flex-1 bg-[#131920] p-4 flex flex-col gap-3">
                                    <div className="w-full h-8 bg-[#1A2332] rounded border border-[#00E5FF]/30 flex items-center px-3 justify-between">
                                        <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                                        <div className="text-[10px] text-[#00E5FF] font-mono">98%</div>
                                    </div>
                                    <div className="w-full h-2 bg-white/10 rounded-full" />
                                    <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* =========================================================================
   8. AI PRODUCTS SECTION
   ========================================================================= */
const AIProductsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to('.cube-container', {
            rotationY: 360, rotationX: 15, duration: 15, repeat: -1, ease: 'none', transformOrigin: '50% 50% -75px'
        });
    }, { scope: containerRef });

    return (
        <section id="ai-products" ref={containerRef} className="py-24 bg-[#0B0F14] relative border-t border-[rgba(255,140,66,0.1)] text-white">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,140,66,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 items-center">

                {/* Left Side: 3D AI Creatives (No Overlap) */}
                <div className="w-full md:w-[45%] flex flex-col items-center gap-12 py-10 relative">
                    {/* Creative 1: AI Hub */}
                    <motion.div
                        className="w-full max-w-[320px] relative z-20 group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF] to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <img
                                src="/images/ai-hub.png"
                                alt="AI Processing Hub"
                                className="relative w-full rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_60px_rgba(0,229,255,0.2)] transition-all duration-500"
                            />
                            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[#00E5FF]/50 uppercase tracking-widest">Core Architecture v3.0</div>
                        </motion.div>
                    </motion.div>

                    {/* Creative 2: AI Eye */}
                    <motion.div
                        className="w-full max-w-[320px] relative z-20 group self-end md:-mt-12"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-l from-[#FF8C42] to-transparent rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                            <img
                                src="/images/ai-eye.png"
                                alt="AI Neural Sensor"
                                className="relative w-full rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(255,140,66,0.1)] group-hover:shadow-[0_0_60px_rgba(255,140,66,0.2)] transition-all duration-500"
                            />
                            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#FF8C42]/50 uppercase tracking-widest">Neural Sensor Array</div>
                        </motion.div>
                    </motion.div>

                    {/* Tech Background Accents */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,229,255,0.05)_0%,transparent_50%)] pointer-events-none" />
                </div>

                {/* Right Side: Features */}
                <div className="w-full md:w-[60%] flex flex-col justify-center relative z-10">
                    <div className="mb-10">
                        <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-4 inline-block">ARTIFICIAL INTELLIGENCE</span>
                        <h2 className="font-clash text-5xl leading-[1] text-white">AI PRODUCTS</h2>
                        <h2 className="font-clash text-5xl leading-[1] text-gradient-teal-amber mb-4">WE CRAFT.</h2>
                        <p className="font-dm font-light text-lg text-[#8FA3B1]">From concept to custom deployment.</p>
                    </div>

                    <div className="flex flex-col gap-5 mb-12">
                        {[
                            { t: 'Computer Vision Systems', d: 'Eyes that see what humans miss' },
                            { t: 'Natural Language Processing', d: 'Machines that read context' },
                            { t: 'Predictive Analytics', d: 'Data predicting your next move' },
                            { t: 'Workflow Automation', d: 'Processes that run themselves' },
                            { t: 'Custom LLM Fine-tuning', d: 'AI trained on YOUR specific domain' },
                        ].map((f, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-[#1A2332] pb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded border border-[#00E5FF]/40 bg-[#00E5FF]/10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-sm" />
                                    </div>
                                    <div>
                                        <h4 className="font-dm font-bold text-white text-base md:text-lg">{f.t}</h4>
                                        <p className="font-dm font-light text-[#8FA3B1] text-xs md:text-sm">{f.d}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2 border border-[#34D562]/20 bg-[#34D562]/10 px-2 py-1 rounded-full">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#34D562] animate-pulse" />
                                    <span className="font-mono text-[9px] text-[#34D562] uppercase tracking-wider">Active</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#131920] border-t-2 border-t-[#FF8C42] rounded-b-xl p-6 md:p-8 mb-8 relative overflow-hidden">
                        <div className="absolute right-0 top-0 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
                            <svg viewBox="0 0 100 100" className="w-[300px] h-[300px]">
                                <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="#fff" />
                            </svg>
                        </div>
                        <p className="font-dm font-medium text-white text-lg relative z-10 leading-relaxed italic">
                            "Every AI product we ship is custom-trained, custom-built, and entirely owned by you."
                        </p>
                    </div>

                    <button className="bg-gradient-warm text-[#0B0F14] font-dm font-bold rounded-full px-8 py-4 uppercase text-sm w-max tracking-widest shadow-[0_4px_20px_rgba(255,140,66,0.3)] hover:scale-105 transition-transform">
                        Discuss Your AI Project →
                    </button>
                </div>

            </div>
        </section>
    );
};


/* =========================================================================
   9. STATS ROW SECTION
   ========================================================================= */
const StatsRowSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.utils.toArray('.stat-num').forEach((num: any) => {
            const target = parseFloat(num.getAttribute('data-target'));
            gsap.to(num, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: num,
                    start: 'top 80%'
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section id="stats-row" ref={containerRef} className="bg-[#0B0F14] border-t border-[rgba(0,229,255,0.1)] relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 tech-grid opacity-30" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0B0F14] to-transparent z-0" />

            <div className="max-w-7xl mx-auto px-6 py-24 lg:px-12 relative z-10 flex flex-col md:flex-row gap-12 justify-between">
                {[
                    { num: 250, suffix: '+', label: 'IIT-Trained Builders', desc: 'Elite engineering team' },
                    { num: 50, suffix: '+', label: 'Enterprise Systems', desc: 'Deployed across sectors' },
                    { num: 1.5, suffix: 'M+', label: 'Daily Requests', desc: 'Processed securely' },
                    { num: 100, suffix: '%', label: 'Custom Code', desc: 'Zero templates used' }
                ].map((stat, i) => (
                    <div key={i} className="flex-1 border-l border-[#00E5FF]/20 pl-6 relative">
                        <div className="absolute top-0 -left-[2px] w-[3px] h-8 bg-gradient-to-b from-[#00E5FF] to-transparent" />
                        <div className="font-clash text-5xl md:text-6xl text-white mb-2 flex items-baseline gap-1">
                            <span className="stat-num text-gradient-teal-amber" data-target={stat.num}>0</span>
                            <span>{stat.suffix}</span>
                        </div>
                        <div className="font-dm font-bold text-white text-lg mb-1">{stat.label}</div>
                        <div className="font-mono text-xs text-[#8FA3B1] uppercase tracking-wider">{stat.desc}</div>
                    </div>
                ))}
            </div>

            {/* Marquee Ticker */}
            <div className="border-y border-[#1A2332] bg-[#080B10] py-4 overflow-hidden relative flex text-nowrap select-none">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080B10] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080B10] to-transparent z-10" />
                <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-12 font-mono text-xs tracking-widest text-[#4A5C6A] uppercase whitespace-nowrap">
                    {Array(10).fill('NEXUS TECHNOLOGY SYSTEM / v3.0 // HIGH PERFORMANCE ARCHITECTURE //').map((text, i) => (
                        <span key={i}>{text}<span className="text-[#00E5FF] ml-12">●</span></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* =========================================================================
   10. CONTACT CTA & FOOTER
   ========================================================================= */
const ContactFooterSection = () => {
    return (
        <section id="contact-footer" className="bg-[#0B0F14] relative text-white">
            {/* Contact Form CTA */}
            <div className="py-24 px-6 lg:px-12 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">

                    {/* Horizon Visual */}
                    <div className="absolute inset-x-0 bottom-0 h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,140,66,0.15)_0%,transparent_70%)] pointer-events-none" />

                    {/* Left Text */}
                    <div className="w-full lg:w-1/2 static z-10 flex flex-col justify-center">
                        <span className="font-mono text-xs text-[#00E5FF] border border-[#00E5FF]/30 px-3 py-1.5 rounded-full w-max uppercase tracking-widest mb-6">OPEN TRANSMISSION</span>
                        <h2 className="font-clash text-5xl md:text-7xl leading-[0.9] text-white mb-6">BUILD THE<br />IMPOSSIBLE.</h2>
                        <p className="font-dm font-light text-xl text-[#8FA3B1] max-w-md mb-12">
                            Ready to engineer your next flagship product? Send us a signal. Our architects are standing by.
                        </p>

                        <div className="flex flex-col gap-6 font-mono text-sm text-[#8FA3B1]">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 border border-[#00E5FF]/20 rounded-full flex items-center justify-center bg-[#131920]">
                                    <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                                </div>
                                <div>
                                    <div className="text-white">STATUS: ONLINE</div>
                                    <div className="text-xs">Incoming Secure Channel</div>
                                </div>
                            </div>
                            <div className="flex gap-12">
                                <div>
                                    <div className="text-[#4A5C6A] text-[10px] mb-1">LATITUDE</div>
                                    <div className="text-[#00E5FF]">22.7196° N</div>
                                </div>
                                <div>
                                    <div className="text-[#4A5C6A] text-[10px] mb-1">LONGITUDE</div>
                                    <div className="text-[#00E5FF]">75.8577° E</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full lg:w-1/2 static z-10">
                        <div className="glass-panel p-8 md:p-12 border border-[#1A2332] rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0B0F14]/50 backdrop-blur-xl">
                            <div className="absolute top-0 right-0 w-[50px] h-[50px] overflow-hidden rounded-tr-2xl pointer-events-none">
                                <div className="absolute top-0 right-0 w-[100px] h-[2px] bg-[#00E5FF] rotate-45 transform origin-top-right translate-y-3 -translate-x-3" />
                            </div>

                            <h3 className="font-dm text-2xl font-bold mb-8 flex items-center gap-3">
                                START THE IGNITION
                            </h3>

                            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-xs text-[#8FA3B1] uppercase tracking-wider">Entity Name</label>
                                    <input type="text" className="bg-[#131920] border-b-2 border-[#1A2332] focus:border-[#00E5FF] px-4 py-3 text-white font-dm outline-none transition-colors" placeholder="Company Name" />
                                </div>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label className="font-mono text-xs text-[#8FA3B1] uppercase tracking-wider">Email</label>
                                        <input type="email" className="bg-[#131920] border-b-2 border-[#1A2332] focus:border-[#00E5FF] px-4 py-3 text-white font-dm outline-none transition-colors" placeholder="ai@future.com" />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label className="font-mono text-xs text-[#8FA3B1] uppercase tracking-wider">Classification</label>
                                        <select className="bg-[#131920] border-b-2 border-[#1A2332] focus:border-[#00E5FF] px-4 py-3 text-white font-dm outline-none transition-colors appearance-none cursor-pointer">
                                            <option>Web Platform</option>
                                            <option>AI / Machine Learning</option>
                                            <option>Mobile App</option>
                                            <option>Enterprise Architecture</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-xs text-[#8FA3B1] uppercase tracking-wider">Mission Parameters</label>
                                    <textarea rows={4} className="bg-[#131920] border-b-2 border-[#1A2332] focus:border-[#00E5FF] px-4 py-3 text-white font-dm outline-none transition-colors resize-none" placeholder="Describe the scale and scope..."></textarea>
                                </div>

                                <button type="submit" className="mt-4 bg-gradient-to-r from-[#00E5FF] to-[#0097A7] text-[#0B0F14] font-dm font-bold rounded-lg px-8 py-4 uppercase text-sm tracking-widest hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-3">
                                    TRANSMIT SECURELY <span className="font-mono">→</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Redesigned Terminal Footer */}
            <footer className="border-t border-[#1A2332] relative overflow-hidden bg-[#080B10] pt-14 -mt-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
                        {/* Col 1: Brand Identity */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="font-clash text-3xl text-white tracking-widest leading-none flex items-center gap-2">
                                    <div className="flex items-baseline font-bold text-white tracking-widest text-4xl">
                                        <span className="text-[1.35em] leading-none">n</span>
                                        <span className="leading-none">EXUS</span>
                                    </div>


                                </div>
                                <div className="font-mono text-[14px] text-[#4A5C6A] uppercase tracking-[0.2em]">by GEEKS OF GURUKUL</div>
                            </div>
                            <p className="font-dm font-light text-sm text-[#8FA3B1] leading-relaxed max-w-xs">
                                Engineering high-performance digital infrastructure for the next billion users. Built with precision in Bharat.
                            </p>
                        </div>

                        {/* Col 2: Navigation */}
                        <div>
                            <h4 className="font-mono text-xs text-white uppercase tracking-[0.3em] mb-8 border-l-2 border-[#00E5FF] pl-4">Navigation</h4>
                            <div className="flex flex-col gap-4 font-mono text-sm text-[#8FA3B1]">
                                {['Case Studies', 'AI Products', 'Core Engine', 'Roadmap'].map(item => (
                                    <a key={item} href="#" className="hover:text-[#00E5FF] transition-all hover:translate-x-1 duration-300 w-max">{item}</a>
                                ))}
                            </div>
                        </div>

                        {/* Col 3: Resources */}
                        <div>
                            <h4 className="font-mono text-xs text-white uppercase tracking-[0.3em] mb-8 border-l-2 border-[#FF8C42] pl-4">Resources</h4>
                            <div className="flex flex-col gap-4 font-mono text-sm text-[#8FA3B1]">
                                {['Documentation', 'Technical Blog', 'Brand Assets', 'Contact Us'].map(item => (
                                    <a key={item} href="#" className="hover:text-[#FF8C42] transition-all hover:translate-x-1 duration-300 w-max">{item}</a>
                                ))}
                            </div>
                        </div>

                        {/* Col 4: System Metrics */}
                        <div>
                            <h4 className="font-mono text-xs text-white uppercase tracking-[0.3em] mb-8 border-l-2 border-[#34D562] pl-4">System Status</h4>
                            <div className="flex flex-col gap-4 font-mono text-xs text-[#4A5C6A]">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>NETWORK UPTIME</span>
                                    <span className="text-[#34D562]">99.98%</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>LOAD BALANCER</span>
                                    <span className="text-white">OPTIMAL</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>REGION</span>
                                    <span className="text-white">AP-SOUTH-1</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>SYSTEM VERSION</span>
                                    <span className="text-white">v3.4.2-STABLE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Background GOG Text - Improved Visibility & Alignment */}
                    <div className="w-full relative py-12 pointer-events-none select-none">
                        <h1 className="font-clash font-bold text-[4vw] leading-none whitespace-nowrap text-transparent/5 bg-clip-text bg-gradient-to-b from-white/40 to-transparent/50 text-center -mb-3">
                            Geeks of Gurukul
                        </h1>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-2 pb-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] text-[#4A5C6A] uppercase tracking-widest relative z-10">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                            <p>© {new Date().getFullYear()} NEXUS by Geeks of Gurukul. ALL HUMAN RIGHTS RESERVED.</p>
                            <div className="flex gap-8">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Security Audit</a>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center bg-[#131920] px-4 py-2 rounded-full border border-white/5">
                            <span className="flex items-center gap-2">
                                SYNC: <span className="text-[#00E5FF]">ENCRYPTED</span>
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#34D562] animate-pulse shadow-[0_0_8px_#34D562]" />
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00E5FF]/5 to-transparent pointer-events-none" />
            </footer>
        </section>
    );
};


/* =========================================================================
   MAIN TECH PAGE COMPONENT
   ========================================================================= */
export default function TechPage() {
    const [loading, setLoading] = useState(true);
    const { frames, loadedPercent, isReady } = useFramePreloader(222);

    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
            <div className="bg-[#0B0F14] text-[#F8FAFF] font-dm selection:bg-[#00E5FF] selection:text-[#0B0F14] overflow-x-hidden">
                {loading && <LoadingScreen onComplete={() => setLoading(false)} frameProgress={loadedPercent} />}

                {!loading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <FixedElements />
                        <main>

                            <CanvasScrollSection />
                            {/* <RobotAssemblySection /> */}
                            <BentoGridSection />
                            <CaseStudiesSection />
                            <AIProductsSection />
                            <StatsRowSection />
                            <ContactFooterSection />
                        </main>
                    </motion.div>
                )}
            </div>
        </ReactLenis>
    );
}
