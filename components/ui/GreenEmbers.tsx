
import React, { useEffect, useRef } from 'react';

interface GreenEmbersProps {
  density?: number;
}

const GreenEmbers: React.FC<GreenEmbersProps> = ({ density = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // OPTIMIZATION: Use willReadFrequently: false for GPU acceleration
    const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let lastFrameTime = 0;
    const TARGET_FPS = 30; // OPTIMIZATION: Limit to 30fps for subtle animations
    const FRAME_INTERVAL = 1000 / TARGET_FPS;

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
      glowSize: number; // OPTIMIZATION: Pre-calculate glow size

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.glowSize = this.size * 3; // Pre-calculated

        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;

        this.opacity = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = (Math.random() * 0.002) + 0.0005;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        this.opacity += this.fadeSpeed;
        if (this.opacity <= 0 || this.opacity >= 0.6) {
          this.fadeSpeed = -this.fadeSpeed;
        }

        if (this.x < -20) this.x = canvas!.width + 20;
        if (this.x > canvas!.width + 20) this.x = -20;
        if (this.y < -20) this.y = canvas!.height + 20;
        if (this.y > canvas!.height + 20) this.y = -20;
      }

      draw() {
        if (!ctx) return;
        const safeOpacity = Math.max(0, Math.min(1, this.opacity));

        // OPTIMIZATION: Simple circle fill instead of gradient for small particles
        if (this.size < 1) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52, 213, 98, ${safeOpacity})`;
          ctx.fill();
        } else {
          // Gradient for larger particles
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize);
          gradient.addColorStop(0, `rgba(52, 213, 98, ${safeOpacity})`);
          gradient.addColorStop(1, 'rgba(52, 213, 98, 0)');
          ctx.fillStyle = gradient;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${safeOpacity * 0.8})`;
          ctx.fill();
        }
      }
    }

    const init = () => {
      resize();
      particles = [];
      // OPTIMIZATION: Cap particle count
      const particleCount = Math.min((window.innerWidth * window.innerHeight) / 9000, 200) * density;

      for (let i = 0; i < particleCount; i++) {
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'screen';

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      ctx.globalCompositeOperation = 'source-over';
    };

    const handleResize = () => {
      resize();
      init();
    };

    window.addEventListener('resize', handleResize);

    init();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default GreenEmbers;
