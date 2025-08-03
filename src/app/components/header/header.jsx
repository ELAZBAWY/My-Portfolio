"use client";

import { useState } from "react";
import { Menu, X, Code } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50  bg-opacity-90 backdrop-blur-md shadow-md rounded-b-xl px-5 py-5 liquid-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Code className="w-5 h-5" />
          Ahmed Alazzbaawy
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-bold text-[18px]">
          <Link
            href="#Home"
            className="hover:underline hover:text-white/90 transition"
          >
            Home
          </Link>
          <Link
            href="#Projects"
            className="hover:underline hover:text-white/90 transition"
          >
            Projects
          </Link>
          <Link
            href="#Certificate"
            className="hover:underline hover:text-white/90 transition"
          >
            Certificate
          </Link>
          <Link
            href="#experience"
            className="hover:underline hover:text-white/90 transition"
          >
            Experience
          </Link>
          <Link
            href="#Contact"
            className="hover:underline hover:text-white/90 transition"
          >
            Contact
          </Link>
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
          <Link href="#Home" className="text-lg font-bold hover:underline">
            Home
          </Link>
          <Link href="#Projects" className="text-lg font-bold hover:underline">
            Projects
          </Link>
          <Link href="#Contact" className="text-lg font-bold hover:underline">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
