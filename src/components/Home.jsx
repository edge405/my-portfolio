import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code,
  Server,
  Database,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Clock,
  Tag,
  ArrowRight,
  Star,
  Download,
  Play,
  Volume2,
  Coffee,
  Award,
  Users,
  Zap,
  Facebook,
  Terminal,
  Heart,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import BlogSection from "./BlogSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);

      // Use your assigned token
      formData.append("_captcha", "false");
      formData.append("_template", "table");
      formData.append("_next", "https://www.edjay.life/#contact-form");

      const response = await fetch(
        "https://formsubmit.co/ajax/d6ce4f99b05adb806d56213759384186",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        e.target.reset();
        alert("Message sent successfully!");
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        `Failed to send message. Please email me directly at ejlindayao@gmail.com`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "blog",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Edjay Lindayao | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Edjay Lindayao, a full stack developer specializing in React, Vite, and modern web technologies. Check out my projects and contact me."
        />
        <meta
          name="keywords"
          content="Edjay Lindayao, Full Stack Developer, React Developer, Vite, Web Developer, Portfolio"
        />
        <meta name="author" content="Edjay Lindayao" />
        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Edjay Lindayao | Full Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my projects, skills, and experience in full stack development."
        />
        <meta property="og:url" content="https://www.edjay.life" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.edjay.life/preview.jpg"
        />{" "}
        {/* Make sure this image exists */}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Edjay Lindayao | Full Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore my projects, skills, and experience in full stack development."
        />
        <meta
          name="twitter:image"
          content="https://www.edjay.life/preview.jpg"
        />
      </Helmet>

      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            left: "10%",
            top: "20%",
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${
              mousePosition.y * -0.02
            }px)`,
            right: "10%",
            bottom: "20%",
          }}
        ></div>
      </div>
      {/* Navigation */}
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />
      {/* About Section */}
      <AboutSection />
      {/* Experience Section */}
      <ExperienceSection />
      {/* Skills Section */}
      <SkillsSection />
      {/* Projects Section */}
      <ProjectsSection />
      {/* Blog Section */}
      <BlogSection />
      {/* Contact Section */}
      <ContactSection handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
      {/* Footer */}
      <Footer />
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .text-transparent {
          -webkit-text-fill-color: transparent;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #2563eb);
        }
      `}</style>
    </div>
  );
}
