import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";
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
                <Link href="#home" className="hover:text-purple-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-purple-400 transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-purple-400 transition"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-purple-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                Email:{" "}
                <Link
                  href="mailto:ahmed.elazbawy200@gmail.com"
                  className="hover:text-purple-400"
                >
                  ahmed.elazbawy200@gmail.com
                </Link>
              </li>
              <li>
                Phone:{" "}
                <Link
                  href="https://wa.me/201555989244"
                  className="hover:text-purple-400"
                >
                  +20 155 598 9244
                </Link>
              </li>
              <li>Location: Egypt</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/ELAZBAWY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 hover:text-purple-400" />
              </Link>
              <Link
                href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BThOEszh0QWitoDwQGIRl%2BQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 hover:text-blue-400" />
              </Link>
              <Link
                href="https://www.instagram.com/a7med.elazbawy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 hover:text-pink-400" />
              </Link>
              <Link href="mailto:ahmed.elazbawy200@gmail.com">
                <Mail className="w-5 h-5 hover:text-red-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 text-center text-sm py-4 text-white/60">
          &copy; {new Date().getFullYear()} Ahmed Alazzbaawy. All rights
          reserved.
        </div>
      </section>
    </>
  );
}
