"use client";
import { useEffect, useRef } from "react";

const NetworkBackground = ({ className }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // ===== Resize Canvas =====
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // ===== Particle Class =====
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.color = `rgba(${Math.floor(Math.random() * 50 + 200)}, 
                           ${Math.floor(Math.random() * 50)}, 
                           ${Math.floor(Math.random() * 100 + 155)}, 
                           ${Math.random() * 0.5 + 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 5; // كان 15، قللناه لتحسين الأداء
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    // ===== Particles Setup =====
    const getParticleCount = () => {
      const base = Math.floor((canvas.width * canvas.height) / 15000);
      return Math.min(70, Math.max(30, base)); // من 30 لحد 70 فقط
    };

    const initParticles = () => {
      particlesRef.current = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // ===== Connect Particles =====
    const connectParticles = () => {
      const maxDistance = canvas.width > 1000 ? 120 : 80;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(180, 100, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            connections++;
            if (connections > 5) break; // كل Particle يوصل لـ 5 بس
          }
        }
      }
    };

    // ===== Animation (30 FPS) =====
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const animate = (time) => {
      if (time - lastTime > interval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesRef.current.forEach((p) => {
          p.update();
          p.draw();
        });
        connectParticles();
        lastTime = time;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // ===== Initialize =====
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    // ===== Cleanup =====
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default NetworkBackground;
