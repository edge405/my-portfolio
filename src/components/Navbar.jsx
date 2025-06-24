import React from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) {
  const navItems = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Blog",
    "Contact",
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 relative">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 pb-1 cursor-pointer ${
                    activeSection === item.toLowerCase() ? "text-white" : ""
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform scale-x-100 origin-left transition-transform duration-300"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white absolute right-4 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fadeIn">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left py-2 px-4 rounded-lg transition-all ${
                      activeSection === item.toLowerCase()
                        ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
