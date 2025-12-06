import React, { useEffect, useRef } from 'react';

interface GreenEmbersCustomProps {
    density?: number;
    className?: string;
}

const GreenEmbersCustom: React.FC<GreenEmbersCustomProps> = ({ density = 1, className = 'fixed inset-0 z-0' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const resize = () => {
            // Use client dimensions to match the CSS size, preventing distortion
            canvas.width = canvas.clientWidth || window.innerWidth;
            canvas.height = canvas.clientHeight || window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            fadeSpeed: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5; // Smaller size for "crumbs" look

                // Ultra-slow, random floating movement in all directions
                // Speed reduced significantly (0.2 multiplier)
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;

                this.opacity = Math.random() * 0.5 + 0.1;
                this.fadeSpeed = (Math.random() * 0.002) + 0.0005; // Slower fade

                // Varying shades of neon green
                this.color = Math.random() > 0.6 ? '#4dff7e' : '#34D562';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Pulse opacity
                this.opacity += this.fadeSpeed;
                if (this.opacity <= 0 || this.opacity >= 0.6) {
                    this.fadeSpeed = -this.fadeSpeed;
                }

                // Wrap around screen edges seamlessly
                if (this.x < -20) this.x = canvas!.width + 20;
                if (this.x > canvas!.width + 20) this.x = -20;
                if (this.y < -20) this.y = canvas!.height + 20;
                if (this.y > canvas!.height + 20) this.y = -20;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                // Create glowing gradient for each particle
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
                gradient.addColorStop(0, `rgba(52, 213, 98, ${Math.max(0, this.opacity)})`);
                gradient.addColorStop(1, 'rgba(52, 213, 98, 0)');

                ctx.fillStyle = gradient;
                ctx.fill();

                // Small solid core for "fireball" look
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, this.opacity * 0.8)})`;
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            particles = [];
            // Particle density - adjust based on area
            const area = canvas.width * canvas.height;
            const particleCount = Math.min(area / 9000, 250) * density;

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Screen blend mode makes overlapping particles glow intensely
            ctx.globalCompositeOperation = 'screen';

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', () => {
            resize();
            init();
        });

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density]);

    return (
        <canvas
            ref={canvasRef}
            className={`${className} pointer-events-none`}
            style={{ background: 'transparent' }}
        />
    );
};

export default GreenEmbersCustom;
