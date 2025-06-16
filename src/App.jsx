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
import profileImage from "./assets/me.jpg";
import sekyu from "./assets/sekyu.png";
import ilocate from "./assets/ilocate.png";
import ipeps from "./assets/ipeps.png";
import pts from "./assets/pts.png";
import sagapai from "./assets/sagapai.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  const skills = [
    { name: "Python Flask", icon: Code, category: "Backend" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "JavaScript", icon: Code, category: "Frontend" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "Postman", icon: Server, category: "Tools" },
    { name: "Git", icon: Code, category: "Tools" },
    { name: "Github", icon: Github, category: "Tools" },
    { name: "MySQL", icon: Database, category: "Database" },
    { name: "Java Spring boot", icon: Code, category: "Backend" },
    { name: "PHP", icon: Code, category: "Fullstack" },
    { name: "C#", icon: Code, category: "Game development" },
    { name: "Unity", icon: Server, category: "Tools" },
  ];

  const experiences = [
    {
      role: "Solo Backend Developer",
      company: "OJT",
      period: "2025 (4 months)",
      type: "Internship",
      description:
        "Iloilo Province Employment Portal and Services (IPEPS) is a job-finding platform I worked on during my internship. Developed for the Public Employment Service Office (PESO), the system supports four user types: students, jobseekers, academe, and admin. Each user type has specific features tailored to their needs, making the platform efficient for connecting individuals to employment opportunities across Iloilo Province.",
      achievements: [
        "Structured the backend architecture",
        "Designed and optimized PostgreSQL database schemas",
        "Created over 30 APIs for this project",
      ],
      tech: ["Python Flask", "React", "PostgreSQL", "Postman", "Git", "Github"],
    },
    {
      role: "Solo Full-Stack Developer",
      company: "Our Thesis Project",
      period: "2024 - 2025",
      type: "Thesis",
      description:
        "iLocate is a web-based boarding house finder for Iloilo City. It helps users find nearby boarding houses that match their preferences using the Haversine algorithm to calculate distances accurately. The platform connects tenants with verified landlords, improving search convenience and property visibility.",
      achievements: [
        "Implemented the Haversine algorithm for efficient geolocation-based search",
        "Built a responsive frontend using modern web technologies for seamless user experience",
        "Integrated backend with geospatial logic to handle distance calculations and filtering",
        "Structured database design to manage users, boarding houses, and location data effectively",
        "Added role-based access (user, owner, admin) for secure and organized feature access",
        "Enabled document upload system for permit verification by admins",
        "Implemented user authentication system for secure login and access control",
      ],
      tech: ["React", "Express", "MySQL", "Git", "Github", "Postman"],
    },
    {
      role: "Full-Stack Developer",
      company: "Thesis System of Computer Programming (COE)",
      period: "2024 - 2025",
      type: "Thesis",
      description:
        "A web-based Pension Tracking System that enables seniors in Alimodian to monitor their pension payments and history. Admins oversee pensioner records, schedule payouts, and send notifications to ensure timely and transparent pension management.",
      achievements: [
        "Developed a robust backend with Python Flask and PostgreSQL",
        "Ensured secure and centralized pension data management",
        "Created a responsive frontend using React for seamless user experience",
        "Integrated automated notification system to inform pensioners of scheduled payouts",
        "Optimized database design for efficient tracking of pension records and transactions",
      ],
      tech: [
        "Python Flask",
        "PostgreSQL",
        "React",
        "Tailwind",
        "Git",
        "Github",
        "Postman",
      ],
    },
    {
      role: "Programmer",
      company: "Odyssey Festival",
      period: "28 days",
      type: "Hackathon",
      description:
        "Sekyu is an exciting, fast-paced local PvP desktop game inspired by the traditional Filipino Capture the Flag. Developed during a hackathon, it offers thrilling one-on-one gameplay where each player skillfully controls three characters on a single PC, promising engaging and competitive matches that keep players on the edge of their seats.",
      achievements: [
        "Implemented the game logic and mechanics",
        "Integrated the design and animations for a smooth gaming experience",
      ],
      tech: ["Unity", "C#", "Git", "Github"],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const INITIAL_ITEMS = 1; // Show first 3 items initially

  const displayedExperiences = showAll
    ? experiences
    : experiences.slice(0, INITIAL_ITEMS);
  const hasMoreItems = experiences.length > INITIAL_ITEMS;

  const projects = [
    {
      id: 1,
      title: "Sekyu",
      description:
        "Sekyu is a fast-paced local PvP desktop game inspired by Capture the Flag, developed during a hackathon it features one-on-one gameplay where each player controls three characters on a single PC.",
      tech: ["C#", "Unity", "Git", "Github"],
      status: "Completed",
      category: "game",
      features: [
        "Local Multiplayer",
        "Fast-Paced Action",
        "Capture the Flag",
        "Power ups",
      ],
      github: "https://github.com/edge405", // Replace with actual URLs
      // live: "https://thesis-system.com", // Replace with actual URLs
      image: sekyu,
    },
    {
      id: 2,
      title: "iLocate",
      description:
        "iLocate is a web app that finds nearby boarding houses in Iloilo City using the Haversine algorithm.",
      tech: [
        "React",
        "Tailwind",
        "Express",
        "Mysql",
        "Postman",
        "Git",
        "Github",
      ],
      status: "Completed",
      category: "web",
      features: [
        "Modern UI/UX",
        "API Testing",
        "Database Optimization",
        "Responsive Design",
        "Geolocation Search",
        "Role-based Access Control",
        "Document Upload System",
        "User Authentication",
        "Admin Verification",
      ],
      github: "https://github.com/edge405",
      // live: "https://personal-thesis.com",
      image: ilocate,
    },
    {
      id: 3,
      title: "IPEPS",
      description:
        "A job portal for PESO Iloilo City that offers job postings, training programs, scholarship listings, and an administrative analytics dashboard for efficient management and insights.",
      tech: [
        "React",
        "Tailwind",
        "Python Flask",
        "PostgreSQL",
        "Postman",
        "Git",
        "Github",
      ],
      status: "Completed",
      category: "web",
      features: [
        "Job Postings",
        "Training Programs",
        "Scholarship Listings",
        "Admin Analytics Dashboard",
        "User Authentication",
        "Role-based Access Control",
        "Document Upload System",
        "Admin Verification",
      ],
      github: "https://github.com/edge405",
      live: "https://ipeps-qq7m.vercel.app/",
      image: ipeps,
    },
    {
      id: 4,
      title: "Senior Citizen Pension Tracking System",
      description:
        "A web system for Pianda-an Sur, Alimodian that manages senior records and tracks pension payouts for transparency and efficiency.",
      tech: [
        "Python Flask",
        "PostgreSQL",
        "React",
        "Tailwind",
        "Git",
        "Github",
        "Postman",
      ],
      status: "Completed",
      category: "web",
      features: [
        "User Authentication",
        "Image Upload",
        "Role-based Access",
        "Notifications",
      ],
      github: "https://github.com/edge405", // Replace with actual URLs
      live: "https://pension-tracking-system-frontend.vercel.app/", // Replace with actual URLs
      image: pts,
    },
    {
      id: 5,
      title: "SAGAP.ai",
      description:
        "An AI-powered web app that uses NLP to match projects with suitable consultants by analyzing expertise and requirements, streamlining the selection process. This was our project for a 24-hour Western Visayas AI hackathon, where we won 2nd place.",
      tech: ["Python Flask", "Tailwind", "JavaScript", "HTML/CSS"],
      status: "Completed",
      category: "web",
      features: [
        "AI-Powered Matching",
        "Ranked Consultant Profiles",
        "Simple, User-Friendly Interface",
      ],
      github: "https://github.com/edge405", // Replace with actual URLs
      // live: "https://thesis-system.com", // Replace with actual URLs
      image: sagapai,
    },
  ];

  const blogPosts = [
    // {
    //   id: 1,
    //   title: "My Journey from Full-Stack Development to DevOps",
    //   excerpt:
    //     "Exploring the transition from traditional development roles to the exciting world of DevOps engineering and infrastructure automation.",
    //   content:
    //     "As a fresh graduate with a strong foundation in full-stack development, I've begun my journey into DevOps...",
    //   date: "2024-12-15",
    //   readTime: "5 min",
    //   category: "Career",
    //   tags: ["DevOps", "Career", "Learning"],
    //   featured: true,
    // },
    // {
    //   id: 2,
    //   title: "Building Scalable Thesis Management Systems",
    //   excerpt:
    //     "Lessons learned while developing thesis management systems for multiple courses and the challenges overcome.",
    //   content:
    //     "During my final year, I had the unique opportunity to work on thesis management systems...",
    //   date: "2024-11-28",
    //   readTime: "7 min",
    //   category: "Development",
    //   tags: ["Python", "Flask", "PostgreSQL"],
    //   featured: false,
    // },
    // {
    //   id: 3,
    //   title: "Docker Fundamentals for Python Developers",
    //   excerpt:
    //     "A beginner-friendly guide to containerizing Python Flask applications using Docker.",
    //   content:
    //     "Containerization has become essential in modern development workflows...",
    //   date: "2024-11-10",
    //   readTime: "6 min",
    //   category: "DevOps",
    //   tags: ["Docker", "Python", "Containerization"],
    //   featured: false,
    // },
    // {
    //   id: 4,
    //   title: "React Best Practices I Learned the Hard Way",
    //   excerpt:
    //     "Common React mistakes and the best practices I discovered through real project experience.",
    //   content:
    //     "Working on multiple React projects taught me valuable lessons...",
    //   date: "2024-10-22",
    //   readTime: "8 min",
    //   category: "Development",
    //   tags: ["React", "JavaScript", "Best Practices"],
    //   featured: true,
    // },
  ];

  const stats = [
    { label: "Projects Completed", value: "10+", icon: Award },
    { label: "Technologies Mastered", value: "10+", icon: Code },
    { label: "Coffee Consumed", value: "500+", icon: Coffee },
    { label: "Lines of Code", value: "20K+", icon: Zap },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categories = ["all", "web", "game"];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-20 relative">
            {/* Logo / Branding (Optional Addition) */}
            {/* <div className="absolute left-0 hidden md:block">
              <span 
                onClick={() => scrollToSection('home')}
                className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
              >
                Edjay
              </span>
            </div> */}

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-10">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Blog",
                "Contact",
              ].map((item) => (
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
                {[
                  "Home",
                  "About",
                  "Experience",
                  "Skills",
                  "Projects",
                  "Blog",
                  "Contact",
                ].map((item) => (
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
      {/* Hero Section */}
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
              <MapPin
                size={20}
                className="mr-2 text-purple-400 sm:w-6 sm:h-6"
              />
              <span className="text-sm sm:text-base">
                Iloilo City, Philippines
              </span>
            </div>
            <div className="flex items-center">
              <Calendar
                size={20}
                className="mr-2 text-blue-400 sm:w-6 sm:h-6"
              />
              <span className="text-sm sm:text-base">21 years old</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fresh graduate with hands-on experience in full-stack development.
            Passionate about creating robust systems and continuously learning
            new technologies to build efficient and scalable applications
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
              onClick={() => scrollToSection("contact")}
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
      {/* About Section */}
      <section id="about" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a 21-year-old developer from Iloilo City, Philippines.
                Recently graduated with a strong foundation in full-stack
                development, I've worked extensively with Python Flask, Express,
                Javascript, React, and PostgreSQL to build robust web
                applications.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Through creating comprehensive management systems, I’ve
                developed a strong focus on writing clean code, designing
                scalable architectures, and prioritizing user-centered
                solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Currently, I'm further honing my backend and infrastructure
                skills exploring containerization with Docker, cloud platforms
                like AWS, and automation tools to build more efficient and
                scalable systems.{" "}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/edge405"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/edjay404/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://www.facebook.com/edjay.leo"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Facebook size={28} />
                </a>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-purple-400 mr-3" size={20} />
                  <span className="text-gray-300">
                    Based in Iloilo City, Philippines
                  </span>
                </div>
                <div className="flex items-center">
                  <Zap className="text-red-400 mr-3" size={20} />
                  <span className="text-gray-300">
                    Active participant in hackathon events
                  </span>
                </div>
                <div className="flex items-center">
                  <Code className="text-blue-400 mr-3" size={20} />
                  <span className="text-gray-300">
                    Full-stack developer who honed skills developing thesis
                    projects
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">
                    Fresh Computer Science Graduate
                  </span>
                </div>
                <div className="flex items-center">
                  <Coffee className="text-yellow-400 mr-3" size={20} />
                  <span className="text-gray-300">
                    Powered by coffee and curiosity
                  </span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-pink-400 mr-3" size={20} />
                  <span className="text-gray-300">Loves cats</span>
                </div>
                <div className="flex items-center">
                  <Terminal className="text-cyan-400 mr-3" size={20} />
                  <span className="text-gray-300">Frontend vibe coder</span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-purple-400">
            Experience
          </h2>
          <div className="space-y-8">
            {displayedExperiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 text-lg font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {exp.type}
                    </span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {exp.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-3 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* See More/See Less Button */}
            {hasMoreItems && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <span className="flex items-center space-x-2">
                    <span>
                      {showAll
                        ? "See Less"
                        : `See More (${
                            experiences.length - INITIAL_ITEMS
                          } more)`}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        showAll ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-purple-400">
            Skills & Technologies
          </h2>

          {/* Optional: Skills by Category */}
          <div className="my-16">
            <div className="flex flex-wrap justify-center gap-4">
              {[...new Set(skills.map((skill) => skill.category))].map(
                (category, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-purple-300 text-sm border border-purple-400/30 hover:border-purple-400/50 transition-all cursor-pointer"
                  >
                    {category}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center">
                  <skill.icon
                    className="text-purple-400 mr-4 group-hover:text-blue-400 transition-colors"
                    size={32}
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-purple-400">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills.
          </p>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-xl font-medium transition-all capitalize cursor-pointer ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent hover:scrollbar-thumb-purple-500/70 pb-4">
            <div className="flex gap-6 w-max">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group hover:bg-white/10 transition-all flex-shrink-0 w-80"
                >
                  <div className="h-48 relative overflow-hidden bg-gray-900/50">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback to gradient background if image fails to load
                            e.target.style.display = "none";
                            e.target.nextElementSibling.style.display = "flex";
                          }}
                        />
                        {/* Fallback gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 items-center justify-center hidden">
                          <div className="text-6xl text-white/20">
                            {project.category === "web" ? <Code /> : <Server />}
                          </div>
                        </div>
                        {/* Overlay for better text readability on hover */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </>
                    ) : (
                      /* Default gradient background when no image is provided */
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        <div className="text-6xl text-white/20">
                          {project.category === "web" ? <Code /> : <Server />}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {project.status}
                      </span>
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.live}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-lg text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section id="blog" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-purple-400">
            Latest Blog Posts
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Sharing my journey, learnings, and insights in development
          </p>

          {/* Horizontal Scrollable Container */}

          {blogPosts.length === 0 ? (
            <div className="text-center text-gray-400">
              No blog posts available
            </div>
          ) : (
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent hover:scrollbar-thumb-purple-500/70 pb-4">
              <div className="flex gap-6 w-max">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group hover:bg-white/10 transition-all flex-shrink-0 w-96"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      {post.featured && (
                        <Star className="text-yellow-400" size={20} />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg text-xs flex items-center"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium flex items-center cursor-pointer">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities, collaborations, and
            conversations about technology. Whether you want to discuss a
            project or just say hello, feel free to reach out!
          </p>
          <div id="contact-form" className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:ejlindayao@gmail.com"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <Mail
                className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={48}
              />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">ejlindayao@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/edjay404/"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <Linkedin
                className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={48}
              />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>

            <a
              href="https://github.com/edge405"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <Github
                className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={48}
              />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">Check out my code</p>
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Contact Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Required hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://www.edjay.life/#contact-form"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your message! I'll get back to you soon."
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  disabled={isSubmitting}
                  className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  disabled={isSubmitting}
                  className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="_subject"
                disabled={isSubmitting}
                className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                name="message"
                disabled={isSubmitting}
                className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center min-w-[200px] ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed scale-100"
                      : "cursor-pointer"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-12 px-4 z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Edjay Lindayao
            </div>
            <p className="text-gray-400 mb-6">
              Full-Stack Developer • Aspiring DevOps Engineer • Continuous
              Learner
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/edjay"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/edjay"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:edjay@example.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Edjay Lindayao. Built with React and lots of ☕. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
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
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
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
