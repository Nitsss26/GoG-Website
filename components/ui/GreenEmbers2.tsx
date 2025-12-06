import React, { useEffect, useRef } from 'react';

interface GreenEmbers2Props {
  density?: number;
  className?: string;
}

const GreenEmbers2: React.FC<GreenEmbers2Props> = ({ density = 1, className = 'fixed inset-0' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // OPTIMIZATION: GPU acceleration hint
    const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let lastFrameTime = 0;
    const TARGET_FPS = 30; // OPTIMIZATION: 30fps for subtle animations
    const FRAME_INTERVAL = 1000 / TARGET_FPS;

    const getCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        return {
          width: parent.clientWidth || window.innerWidth,
          height: parent.clientHeight || window.innerHeight
        };
      }
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };

    const resize = () => {
      const size = getCanvasSize();
      canvas.width = size.width;
      canvas.height = size.height;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      glowSize: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 0.7 + 0.3;
        this.glowSize = this.size * 3; // Pre-calculated

        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;

        this.opacity = Math.random() * 0.5 + 0.3;
        this.fadeSpeed = (Math.random() * 0.002) + 0.0005;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        this.opacity += this.fadeSpeed;
        if (this.opacity <= 0 || this.opacity >= 0.6) {
          this.fadeSpeed = -this.fadeSpeed;
        }

        if (this.x < -20) this.x = canvasWidth + 20;
        if (this.x > canvasWidth + 20) this.x = -20;
        if (this.y < -20) this.y = canvasHeight + 20;
        if (this.y > canvasHeight + 20) this.y = -20;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const safeOpacity = Math.max(0, Math.min(1, this.opacity));

        // OPTIMIZATION: Simple fill for small particles
        if (this.size < 0.5) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52, 213, 98, ${safeOpacity})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize);
          gradient.addColorStop(0, `rgba(52, 213, 98, ${safeOpacity})`);
          gradient.addColorStop(1, 'rgba(52, 213, 98, 0)');
          ctx.fillStyle = gradient;
          ctx.fill();

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
      const area = canvas.width * canvas.height;
      // OPTIMIZATION: Cap particle count to prevent performance issues
      const particleCount = Math.min(Math.max(50, (area / 8000) * density), 500);

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
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
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      ctx.globalCompositeOperation = 'source-over';
    };

    // Delay initialization
    const initTimeout = setTimeout(() => {
      init();
      animationFrameId = requestAnimationFrame(animate);
    }, 100);

    const handleResize = () => {
      resize();
      particles.forEach(p => {
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} pointer-events-none`}
      style={{
        background: 'transparent',
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default GreenEmbers2;
