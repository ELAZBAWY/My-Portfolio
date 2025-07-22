// components/Header.tsx
"use client";
import "./header.css";

import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50  bg-opacity-90 backdrop-blur-md shadow-md rounded-b-xl px-5 py-5 liquid-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Code className="w-5 h-5" />
          Barbrossa
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-bold text-[18px]">
          <a
            href="#Home"
            className="hover:underline hover:text-white/90 transition"
          >
            Home
          </a>
          <a
            href="#Projects"
            className="hover:underline hover:text-white/90 transition"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="hover:underline hover:text-white/90 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 bg-gradient-to-br  bg-opacity-90 text-white px-6 py-6 rounded-b-xl shadow-md animate-slide-down">
          <a href="#Home" className="text-lg font-bold hover:underline">
            Home
          </a>
          <a href="#Projects" className="text-lg font-bold hover:underline">
            Projects
          </a>
          <a href="#Contact" className="text-lg font-bold hover:underline">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
