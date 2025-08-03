"use client";

import Image from "next/image";
import {
  Award,
  Calendar,
  Building2,
  Users,
  Code,
  GitBranch,
} from "lucide-react";

export default function Certificate() {
  return (
    <section
      id="Certificate"
      className="py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Certificate
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-2 sm:px-4">
            Professional recognition and achievements
          </p>
        </div>

        {/* Certificate Card */}
        <div
          className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-2xl transition-all duration-300  hover:shadow-3xl"
          data-aos="fade-left"
        >
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Certificate Image */}
            <div className="lg:w-2/5 w-full">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl">
                  <Image
                    src="/Certificate (11).png"
                    alt="Front-End Web Development Certificate"
                    width={450}
                    height={300}
                    className="object-contain w-full h-auto rounded-md sm:rounded-lg md:rounded-xl"
                  />
                </div>
                {/* Certificate Badge */}
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-purple-600 text-white p-1.5 sm:p-2 md:p-2.5 rounded-full shadow-lg">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/5 w-full">
              {/* Title and Company */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                  Front-End Web Development Certificate
                </h3>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-sm sm:text-base md:text-lg text-white/80 mb-3 sm:mb-4">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0" />
                  <span className="font-medium">
                    DevWav • Web Development Company
                  </span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="bg-purple-500/20 p-1.5 sm:p-2 md:p-2.5 rounded-lg flex-shrink-0">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/60">
                      Work Style
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-white font-medium">
                      Team Collaboration
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="bg-purple-500/20 p-1.5 sm:p-2 md:p-2.5 rounded-lg flex-shrink-0">
                    <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/60">
                      Technologies
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-white font-medium">
                      React, Tailwind, Firebase
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="bg-purple-500/20 p-1.5 sm:p-2 md:p-2.5 rounded-lg flex-shrink-0">
                    <GitBranch className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/60">
                      Version Control
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-white font-medium">
                      Git & Code Reviews
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <div className="bg-purple-500/20 p-1.5 sm:p-2 md:p-2.5 rounded-lg flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/60">
                      Achievement
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-white font-medium">
                      Professional Growth
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  Professional Development Journey
                </h4>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                      <strong className="text-white font-semibold">
                        Transition from Solo to Team Development:
                      </strong>{" "}
                      Evolved from working independently on personal projects to
                      contributing effectively in a collaborative team
                      environment at DevWav.
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                      <strong className="text-white font-semibold">
                        Advanced Technology Stack:
                      </strong>{" "}
                      Expanded technical expertise by mastering modern tools
                      including Tailwind CSS, Firebase, and advanced React
                      patterns in real-world applications.
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                      <strong className="text-white font-semibold">
                        Professional Skills Development:
                      </strong>{" "}
                      Enhanced both technical abilities and soft skills
                      including teamwork, communication, code reviews, Git
                      collaboration, and project management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
