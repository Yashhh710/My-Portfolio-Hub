import { useEffect, useRef } from 'react';
import './AmbientEffects.css';

export default function AmbientEffects() {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const spotlight = spotlightRef.current;

    // Setup Canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle Class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 0.5;
        this.speedY = -(Math.random() * 0.2 + 0.1);
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.y += this.speedY;
        if (this.y < 0) {
          this.reset();
          this.y = canvas.height;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize Particles
    const particleCount = Math.min(60, Math.floor(window.innerWidth / 20));
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animate Particles
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();

    // Mouse Spotlight Handler
    const handleMouseMove = (e) => {
      if (spotlight.style.opacity === '0' || spotlight.style.opacity === '') {
        spotlight.style.opacity = '1';
      }
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Ambient Glow */}
      <div className="ambient-glow"></div>
      
      {/* Mouse Spotlight */}
      <div ref={spotlightRef} id="mouse-spotlight"></div>
      
      {/* Particle Canvas */}
      <canvas ref={canvasRef} id="particle-canvas"></canvas>
    </>
  );
}
