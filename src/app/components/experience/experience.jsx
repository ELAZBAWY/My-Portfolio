"use client";
import Image from "next/image";
import {
  Building2,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  ExternalLink,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-8 md:py-16 px-4 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            My professional journey as a Front End Developer.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/20 shadow-2xl  duration-300"
          data-aos="fade-right"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6">
            {/* Main Info */}
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              {/* Icon */}
              <div className="bg-gradient-to-br p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/logo.png"
                  width={64}
                  height={64}
                  alt="Company Logo"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Front End Developer
                </h3>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm md:text-base text-white/80 mb-2">
                  <Building2 className="w-3 h-3 md:w-4 md:h-4" />
                  <span>DevWav / Software Development</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm md:text-base text-white/80 mb-4 md:mb-6">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Sphinx Square, Mohandessin, Giza , Egypt • Remote</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
                  <div className="flex items-center justify-center sm:justify-start gap-2 md:gap-3">
                    <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-lg">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-white/60">
                        Duration
                      </p>
                      <p className="text-sm md:text-base text-white font-medium">
                        July 2025 - Aug 2025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-2 md:gap-3">
                    <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-lg">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-white/60">
                        Total Time
                      </p>
                      <p className="text-sm md:text-base text-white font-medium">
                        1 month
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-2 md:gap-3 sm:col-span-2 lg:col-span-1">
                    <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-lg">
                      <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-white/60">
                        Job Type
                      </p>
                      <p className="text-sm md:text-base text-white font-medium">
                        Full-time
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 text-center sm:text-left">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm md:text-base text-white/90 leading-relaxed">
                        Worked with cross-functional teams on multiple SaaS and
                        e-commerce projects simultaneously, improving time
                        management and the ability to meet distinct product
                        requirements efficiently.
                      </p>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm md:text-base text-white/90 leading-relaxed">
                        Built responsive applications using React.js, Tailwind,
                        and Material UI based on incomplete designs, wireframes,
                        or user stories, consistently delivering high-quality
                        UIs with minimal input.
                      </p>
                    </li>
                    <li className="flex items-start gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm md:text-base text-white/90 leading-relaxed">
                        I integrated Firebase into the project to enable
                        real-time data flow, which allowed users to see updates
                        instantly without needing to refresh the page.
                        Firebase’s real-time database and built-in
                        authentication simplified backend development and
                        provided secure, scalable infrastructure for handling
                        dynamic content.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Visit Website Button */}
            <div className="lg:flex-shrink-0 flex justify-center lg:justify-start mt-4 lg:mt-0">
              <a
                href="https://www.linkedin.com/company/devwave7/posts/?feedView=all"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg text-sm md:text-base"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
