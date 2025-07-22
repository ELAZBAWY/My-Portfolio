"use client";
import "./footer.css";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
export default function Footer() {
  return (
    <>
      <section id="Contact" className="bg-gradient-to-tr mt-20 liquid-glass">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Barbrossa</h2>
            <p className="text-sm text-white/80">
              Front-End Developer passionate about building modern, responsive
              web interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-purple-400 transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-purple-400 transition"
                >
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                Email:{" "}
                <a
                  href="mailto:ahmed.elazbawy200@gmail.com"
                  className="hover:text-purple-400"
                >
                  ahmed.elazbawy200@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="https://wa.me/201555989244"
                  className="hover:text-purple-400"
                >
                  +20 155 598 9244
                </a>
              </li>
              <li>Location: Egypt</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ELAZBAWY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 hover:text-purple-400" />
              </a>
              <a
                href="https://linkedin.com/in/ahmed-elazbawy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 hover:text-blue-400" />
              </a>
              <a
                href="https://www.instagram.com/a7med.elazbawy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 hover:text-pink-400" />
              </a>
              <a href="mailto:ahmed.elazbawy200@gmail.com">
                <Mail className="w-5 h-5 hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 text-center text-sm py-4 text-white/60">
          &copy; {new Date().getFullYear()} Ahmed Elazbawy. All rights reserved.
        </div>
      </section>
    </>
  );
}
