import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
    mode: 'lightning' | 'cubes' | 'comets' | 'aurora' | 'rain' | 'embers' | 'hexagons';
    primaryColor: string;
    secondaryColor: string;
    density?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ mode, primaryColor, secondaryColor, density = 80 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        // OPTIMIZATION: GPU acceleration hint
        const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false });
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        let width = window.innerWidth;
        let height = window.innerHeight;
        let lastFrameTime = 0;
        const TARGET_FPS = 30; // OPTIMIZATION: 30fps for background effects
        const FRAME_INTERVAL = 1000 / TARGET_FPS;

        // OPTIMIZATION: Cache background gradient
        let bgGradient: CanvasGradient | null = null;

        const createBgGradient = () => {
            bgGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            bgGradient.addColorStop(0, `${secondaryColor}10`);
            bgGradient.addColorStop(1, 'transparent');
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            createBgGradient();
            initParticles();
        };

        const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 255, g: 255, b: 255 };
        };

        const rgbPrimary = hexToRgb(primaryColor);
        const primaryColorString = `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}`;

        // OPTIMIZATION: Pre-calculate hex path for hexagons mode
        const hexPath = new Path2D();
        for (let i = 0; i < 6; i++) {
            const angle = i * 2 * Math.PI / 6;
            if (i === 0) {
                hexPath.moveTo(Math.cos(angle), Math.sin(angle));
            } else {
                hexPath.lineTo(Math.cos(angle), Math.sin(angle));
            }
        }
        hexPath.closePath();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            life: number;
            maxLife: number;
            type: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 1;
                this.speedY = (Math.random() - 0.5) * 1;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.life = 0;
                this.maxLife = Math.random() * 100 + 50;
                this.type = mode;

                if (mode === 'rain') {
                    this.y = Math.random() * -height;
                    this.speedY = Math.random() * 15 + 10;
                    this.speedX = 0;
                    this.size = Math.random() * 2 + 0.5;
                } else if (mode === 'comets') {
                    this.speedX = Math.random() * 5 + 2;
                    this.speedY = Math.random() * 2 - 1;
                    this.size = Math.random() * 2 + 1;
                    this.maxLife = width / this.speedX + 100;
                } else if (mode === 'cubes') {
                    this.size = Math.random() * 20 + 5;
                    this.speedY = Math.random() * -1 - 0.2;
                } else if (mode === 'embers') {
                    this.x = Math.random() * width;
                    this.y = height + Math.random() * 100;
                    this.speedY = Math.random() * -0.6 - 0.3;
                    this.speedX = (Math.random() - 0.5) * 0.3;
                    this.size = Math.random() * 3 + 1;
                    this.maxLife = Math.random() * 100 + 50;
                } else if (mode === 'hexagons') {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.size = Math.random() * 15 + 5;
                    this.speedX = (Math.random() - 0.5) * 0.5;
                    this.speedY = (Math.random() - 0.5) * 0.5;
                    this.opacity = Math.random() * 0.3 + 0.1;
                    this.maxLife = 0;
                }
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life++;

                if (this.type === 'rain') {
                    if (this.y > height) {
                        this.y = -10;
                        this.x = Math.random() * width;
                    }
                } else if (this.type === 'comets') {
                    if (this.x > width || this.life > this.maxLife) {
                        this.x = -50;
                        this.y = Math.random() * height;
                        this.life = 0;
                    }
                } else if (this.type === 'lightning') {
                    if (Math.random() > 0.98) {
                        this.opacity = 1;
                    } else {
                        this.opacity = Math.random() * 0.3;
                    }
                } else {
                    if (this.x > width) this.x = 0;
                    if (this.x < 0) this.x = width;
                    if (this.y > height) this.y = 0;
                    if (this.y < 0) this.y = height;
                }

                if (this.type === 'embers') {
                    if (this.y < -10 || this.opacity <= 0) {
                        this.y = height + 10;
                        this.x = Math.random() * width;
                        this.opacity = Math.random() * 0.5 + 0.4;
                        this.speedY = Math.random() * -0.6 - 0.1;
                    }
                    if (this.y < height * 0.2) {
                        this.opacity -= 0.005;
                    }
                }

                if (this.type === 'hexagons') {
                    if (this.x > width + 50) this.x = -50;
                    if (this.x < -50) this.x = width + 50;
                    if (this.y > height + 50) this.y = -50;
                    if (this.y < -50) this.y = height + 50;
                }
            }

            draw() {
                if (!ctx) return;
                const safeOpacity = Math.max(0, Math.min(1, this.opacity));

                if (this.type === 'cubes') {
                    ctx.strokeStyle = `${primaryColorString}, ${safeOpacity})`;
                    ctx.lineWidth = 1;
                    ctx.strokeRect(this.x, this.y, this.size, this.size);
                } else if (this.type === 'rain') {
                    ctx.fillStyle = `${primaryColorString}, ${safeOpacity})`;
                    ctx.fillRect(this.x, this.y, 1, this.size * 5);
                } else if (this.type === 'comets') {
                    // OPTIMIZATION: Simplified comet rendering
                    ctx.fillStyle = `${primaryColorString}, ${safeOpacity})`;
                    ctx.fillRect(this.x - this.size * 8, this.y, this.size * 8, this.size);
                } else if (this.type === 'hexagons') {
                    // OPTIMIZATION: Use pre-calculated path with transform
                    ctx.save();
                    ctx.translate(this.x, this.y);
                    ctx.scale(this.size, this.size);
                    ctx.strokeStyle = `${primaryColorString}, ${safeOpacity})`;
                    ctx.lineWidth = 1.5 / this.size;
                    ctx.stroke(hexPath);
                    ctx.restore();
                } else {
                    ctx.beginPath();
                    ctx.fillStyle = `${primaryColorString}, ${safeOpacity})`;
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        const initParticles = () => {
            particles = [];
            // OPTIMIZATION: Cap density to prevent performance issues
            const count = Math.min(density, 80);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(animate);

            // OPTIMIZATION: Frame rate limiting
            const deltaTime = currentTime - lastFrameTime;
            if (deltaTime < FRAME_INTERVAL) return;
            lastFrameTime = currentTime - (deltaTime % FRAME_INTERVAL);

            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Use cached gradient
            if (bgGradient) {
                ctx.fillStyle = bgGradient;
                ctx.fillRect(0, 0, width, height);
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // OPTIMIZATION: Reduce lightning frequency
            if (mode === 'lightning' && Math.random() > 0.97) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                let lx = Math.random() * width;
                let ly = 0;
                ctx.moveTo(lx, ly);
                while (ly < height) {
                    lx += (Math.random() - 0.5) * 50;
                    ly += Math.random() * 50;
                    ctx.lineTo(lx, ly);
                }
                ctx.stroke();
            }
        };

        window.addEventListener('resize', resize);
        resize();
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mode, primaryColor, secondaryColor, density]);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default ParticleBackground;
