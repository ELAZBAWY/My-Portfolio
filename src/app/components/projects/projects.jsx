// components/Header.tsx
import { Github, Eye } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
const projects = [
  {
    title: "Dashboard",
    description:
      "A professional and responsive landing page template designed for business solutions and corporate services Built using clean HTML, CSS, and vanilla JavaScript, offering a sleek and modern interface with easy navigation.",
    tags: ["HTML", "CSS", "JS"],
    image: "/Dashboard.jpg",
    github: "https://github.com/ELAZBAWY/Dashboaed.git",
    live: "https://elazbawy.github.io/Dashboaed/",
  },
  {
    title: "Skills",
    description:
      "A responsive and modern business landing page built with HTML, CSS, and JavaScript. Designed to showcase a company's services with a clean and professional layout",
    tags: ["HTML", "CSS", "JS"],
    image: "/Skills.jpg",
    github: "https://github.com/ELAZBAWY/Skills.git",
    live: "https://elazbawy.github.io/Skills/",
  },
  {
    title: "Shrimp-Zone",
    description:
      "Shrimp Zone is a web-based restaurant platform designed to simulate an online food ordering experience. Users can browse a rich menu, add items to their cart, and manage their orders smoothly. The app focuses on user experience, speed, and clean design to reflect the brand of a high-end seafood restaurant.",
    tags: ["HTML", "CSS", "JS", "Bootstrap", "React.js"],
    image: "/Sramp-Zone.png",
    github: "https://github.com/ELAZBAWY/-shramp-zone.git",
    live: "https://shramp-zone.vercel.app",
  },
  {
    title: "Product-Page",
    description: "Landing page using HTML, CSS, and JS.",
    tags: ["HTML", "CSS", "JS", "Next.js"],
    image: "/Product-Page.jpg",
    github: "https://github.com/ELAZBAWY/Product_Page.git",
    live: "https://product-page-bice-two.vercel.app/",
  },
];

export default function Project() {
  return (
    <>
      <section id="Projects" className="py-16 px-4 bg-gradient-to-b ">
        <div className="max-w mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Featured Projects</h1>
          <p className="text-gray-300 mb-8">
            Explore my recent work and the technologies I&apos;ve used to build
            them
          </p>
          <button className="mb-10 px-4 py-2 rounded-full bg-purple-100/10 border border-purple-500 text-purple-300 text-sm hover:bg-purple-100/20 transition">
            🔍 Filter by Skills
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-left shadow-xl hover:shadow-purple-500/30 hover:scale-105 duration-300 transition-all liquid-glass"
              >
                <Image
                  alt="Dashboard"
                  width={500}
                  height={300}
                  src={project.image}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags[0] && (
                    <span className="px-3 py-1 text-xs rounded-full bg-orange-500/30 text-orange-300">
                      {project.tags[0]}
                    </span>
                  )}

                  {project.tags[1] && (
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/30 text-blue-300">
                      {project.tags[1]}
                    </span>
                  )}

                  {project.tags[2] && (
                    <span className="px-3 py-1 text-xs rounded-full bg-yellow-300/30 text-yellow-200">
                      {project.tags[2]}
                    </span>
                  )}

                  {project.tags[3] && (
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-300/30 text-yellow-200">
                      {project.tags[3]}
                    </span>
                  )}

                  {project.tags[4] && (
                    <span className="px-3 py-1 text-xs rounded-full bg-yellow-300/30 text-yellow-200">
                      {project.tags[4]}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={project.github}
                    className="text-sm flex items-center gap-1 px-4 py-1.5 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
                  >
                    Github <Github className="w-4 h-4" />
                  </Link>
                  <Link
                    href={project.live}
                    className="text-sm flex items-center gap-1 px-4 py-1.5 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
                  >
                    Live Preview <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
