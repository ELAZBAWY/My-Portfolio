"use client";
import "./hero.css";
import { Gideon_Roman } from "next/font/google";
// components/Hero.jsx
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  Phone,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      <section
        id="Home"
        className="mt-[50px] min-h-screen bg-gradient-to-tr bg-opacity-30 flex items-center justify-center px-4"
      >
        {/* Hero Section */}
        <div className="hero liquid-glass bg-white/10 backdrop-blur-md min-h-[700px] rounded-2xl pt-16 max-w-7xl w-full text-center text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {/* Profile */}
          <div className="flex justify-center mb-6">
            <Image
              width={200}
              height={200}
              src="/profile.jpeg"
              alt="Profile"
              className="w-[200px] h-[200px] rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Front-End Developer
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-2xl mb-6 max-w-xl mx-auto">
            Focused on building responsive, intuitive UIs, optimizing web
            performance, and delivering clean, accessible code that meets user
            and business needs.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-7 mb-6 flex-wrap">
            <a
              href="/Resume.pdf"
              download
              className="text-[18px] font-bold text-[#0070c9] transition duration-500 px-4 py-2 rounded-full flex items-center gap-2 shadow hover:shadow-[0_0_20px_#0070c9] border border-transparent hover:border-[#0070c9]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="https://wa.me/201555989244"
              className="contactbtn text-[18px] font-bold transition duration-500 px-4 py-2 rounded-full flex items-center gap-2 border border-white hover:bg-[#1e2939] hover:text-white hover:shadow-[0_0_30px_#1e2939]"
            >
              <Phone className="w-4 h-4" />
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-6">
            <a
              href="https://github.com/ELAZBAWY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-black" />
            </a>
            <a
              href="www.linkedin.com/in/ahmed-alazzbaawy-58868726a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-300" />
            </a>
            <a
              href="https://www.instagram.com/a7med.elazbawy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-pink-300" />
            </a>
            <a href="mailto:ahmed.elazbawy200@gmail.com">
              <Mail className="w-5 h-5 hover:text-red-400" />
            </a>
          </div>

          {/* Skills (links) */}
          <div className="links w-full flex flex-wrap justify-center gap-3 text-sm sm:text-base text-white/90 mt-8 p-10 rounded-xl bg-white/5 backdrop-blur-sm">
            <span className="React px-4 py-1 rounded-full bg-cyan-600/70 hover:shadow-[0_0_30px_#0092b8] transition">
              React.js
            </span>
            <span className="Next px-4 py-1 rounded-full bg-gray-800/70 hover:shadow-[0_0_30px_#1e2939] transition">
              Next.js
            </span>
            <span className="Tailwind px-4 py-1 rounded-full bg-sky-500/70 hover:shadow-[0_0_30px_#00a6f4] transition">
              Tailwind
            </span>
            <span className="TypeScript px-4 py-1 rounded-full bg-blue-700/70 hover:shadow-[0_0_30px_#1447e6] transition">
              TypeScript
            </span>
            <span className="HTML px-4 py-1 rounded-full bg-orange-500/70 hover:shadow-[0_0_30px_#ff6900] transition">
              HTML
            </span>
            <span className="CSS px-4 py-1 rounded-full bg-blue-500/70 hover:shadow-[0_0_30px_#2b7fff] transition">
              CSS
            </span>
            <span className="JavaScript px-4 py-1 rounded-full bg-yellow-400/70 text-black hover:shadow-[0_0_30px_#fdc700] transition">
              JavaScript
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
