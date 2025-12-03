import React, { useEffect, useRef } from 'react';

const BlueEmbers: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
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
                this.size = Math.random() * 3 + 1; // Slightly larger for squares

                // Float upwards slightly more than random
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.8) * 0.3; // Bias upwards

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

                // Create glowing gradient
                // For squares, we can't easily do a radial gradient fill that looks right with rotation 
                // without more complex canvas ops, so we'll stick to solid fill with shadow

                ctx.shadowBlur = this.size * 4;
                ctx.shadowColor = this.color;
                ctx.fillStyle = `rgba(${this.color === '#0090FA' ? '0, 144, 250' : '0, 229, 255'}, ${Math.max(0, this.opacity)})`;

                // Draw Square (Digital Block)
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);

                ctx.restore();
            }
        }

        const init = () => {
            resize();
            particles = [];
            const particleCount = Math.min((window.innerWidth * window.innerHeight) / 10000, 200);

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = 'screen';

            particles.forEach(p => {
                p.update();
                p.draw();
            });

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
