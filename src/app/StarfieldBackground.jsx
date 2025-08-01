"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const NetworkBackground = ({ className }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    // ✅ كده تحمي الكود من null

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        // Violet color palette
        this.color = `rgba(${Math.floor(
          Math.random() * 50 + 200
        )}, ${Math.floor(Math.random() * 50)}, ${Math.floor(
          Math.random() * 100 + 155
        )}, ${Math.random() * 0.5 + 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }

    // Create particles - adjust count based on screen size
    const getParticleCount = () => {
      const base = Math.min(
        100,
        Math.floor((canvas.width * canvas.height) / 10000)
      );
      return Math.max(30, base); // Ensure at least 30 particles
    };

    const initParticles = () => {
      particlesRef.current = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = canvas.width > 1000 ? 150 : 100;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - distance / maxDistance;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(180, 100, 255, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      connectParticles();

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Render the canvas covering the whole viewport
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
