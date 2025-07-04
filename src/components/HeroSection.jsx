import React from "react";
import {
  Award,
  Code,
  Rocket,
  MapPin,
  Calendar,
  ArrowRight,
  Download,
  ChevronDown,
  Briefcase,
} from "lucide-react";
import profileImage from "../assets/me.jpg";

export default function HeroSection({ scrollToSection }) {
  const stats = [
    { label: "Projects Completed", value: "12+", icon: Award },
    { label: "Technologies Mastered", value: "10+", icon: Code },
    { label: "Hackathons Joined", value: "3+", icon: Rocket },
    { label: "Clients Project Built", value: "6+", icon: Briefcase },
  ];

  const handleDownloadResume = () => {
    window.open("/EDJAY-RESUME.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 z-10"
    >
      <div className="text-center max-w-5xl mx-auto">
        <div className="mb-8 mt-25">
          <div className="relative w-70 h-70 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Edjay Lindayao
          </span>
        </h1>
        <div className="text-2xl md:text-3xl mb-6">
          <span className="text-gray-300">Full-Stack Developer</span>
          <span className="text-purple-400 mx-2">•</span>
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Aspiring DevOps Engineer
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center text-gray-400 mb-12 space-y-4 sm:space-y-0 sm:space-x-8 text-base sm:text-lg">
          <div className="flex items-center">
            <MapPin size={20} className="mr-2 text-purple-400 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">
              Iloilo City, Philippines
            </span>
          </div>
          <div className="flex items-center">
            <Calendar size={20} className="mr-2 text-blue-400 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">21 years old</span>
          </div>
        </div>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Fresh graduate with hands-on experience in full-stack development.
          Passionate about creating robust systems and continuously learning new
          technologies to build efficient and scalable applications
        </p>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <stat.icon className="text-purple-400 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer"
          >
            View My Work
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
          <button
            onClick={handleDownloadResume}
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </button>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={40} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
}
