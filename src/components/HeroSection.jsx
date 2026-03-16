import { useState, useEffect } from "react";
import { portfolio } from "../data/portfolio-data";
import { ArrowRight, Download, ChevronDown, MapPin } from "lucide-react";
import profileImage from "../assets/me.jpg";

export default function HeroSection({ scrollToSection }) {
  const { personal, stats, rotatingTitles } = portfolio;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = rotatingTitles[currentTitleIndex];
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTitleIndex, rotatingTitles]);

  const handleDownloadResume = () => {
    window.open(personal.resumeUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 z-10 overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptLTQgNHYyaC0ydi0yaDJ6bTgtOGgydjJoLTJ2LTJ6bS00IDhoLTJ2LTJoMnptLTQgOGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

      <div className="relative text-center max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full animate-spin-slow opacity-75 blur-xl" />
            <div className="absolute inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full animate-spin-slow" />
            <div className="absolute inset-3 bg-black rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>

        <div className="text-2xl md:text-3xl mb-6 h-10 flex items-center justify-center">
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold">
            {displayedText}
            <span
              className="inline-block w-0.5 bg-purple-400 animate-blink ml-1"
              style={{ height: "0.9em" }}
            />
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-gray-400 mb-8 gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-purple-400" />
            <span>{personal.location}</span>
          </div>
        </div>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Computer Science degree holder with years of experience in full-stack
          development. Passionate about creating robust systems and continuously
          learning new technologies to build efficient and scalable
          applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm rounded-2xl p-5 border border-white/8 hover:border-purple-400/30 transition-all duration-300"
            >
              <stat.icon className="text-purple-400 mx-auto mb-2" size={28} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection("projects")}
            className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center cursor-pointer"
          >
            View My Work
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
          <button
            onClick={handleDownloadResume}
            className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={36} className="mx-auto text-purple-400/60" />
        </div>
      </div>
    </section>
  );
}
