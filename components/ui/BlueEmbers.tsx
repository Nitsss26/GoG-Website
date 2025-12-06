import React, { useEffect, useRef } from 'react';

const BlueEmbers: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
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
            rotation: number;
            rotationSpeed: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 3 + 1;

                // Float upwards slightly more than random
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.8) * 0.3;

                this.opacity = Math.random() * 0.5 + 0.1;
                this.fadeSpeed = (Math.random() * 0.002) + 0.0005;

                // Blue and Cyan shades
                this.color = Math.random() > 0.5 ? '#0090FA' : '#00E5FF';

                this.rotation = Math.random() * 360;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                // Pulse opacity
                this.opacity += this.fadeSpeed;
                if (this.opacity <= 0 || this.opacity >= 0.6) {
                    this.fadeSpeed = -this.fadeSpeed;
                }

                // Wrap around screen edges
                if (this.x < -20) this.x = canvas!.width + 20;
                if (this.x > canvas!.width + 20) this.x = -20;
                if (this.y < -20) this.y = canvas!.height + 20;
                if (this.y > canvas!.height + 20) this.y = -20;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);

                // OPTIMIZATION: Removed ctx.shadowBlur (expensive)
                // Replaced with simple fill. For "glow", we rely on the particle density and opacity.
                // If a glow is strictly needed, a pre-rendered sprite is better, but simple fill is fastest.

                ctx.fillStyle = this.color === '#0090FA'
                    ? `rgba(0, 144, 250, ${Math.max(0, this.opacity)})`
                    : `rgba(0, 229, 255, ${Math.max(0, this.opacity)})`;

                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);

                ctx.restore();
            }
        }

        const init = () => {
            resize();
            particles = [];
            // OPTIMIZATION: Reduced density slightly for performance
            const particleCount = Math.min((window.innerWidth * window.innerHeight) / 15000, 150);

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // OPTIMIZATION: Removed globalCompositeOperation 'screen' if not strictly necessary, 
            // but it's usually okay. Keeping it simple for now.

            particles.forEach(p => {
                p.update();
                p.draw();
            });

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
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    );
};

export default BlueEmbers;
