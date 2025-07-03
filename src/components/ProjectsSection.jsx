import { useState } from "react";
import { Code, Server, Github, ExternalLink, FolderOpen } from "lucide-react";
import sekyu from "../assets/sekyu.png";
import ilocate from "../assets/ilocate.png";
import ipeps from "../assets/ipeps.png";
import pts from "../assets/pts.png";
import sagapai from "../assets/sagapai.png";
import konekta from "../assets/konekta.png";
import running_blog from "../assets/running-blog.png";
import coding_challenge from "../assets/coding-challenge.png";
import k_fashion from "../assets/k-fashion.png";
import budget_ease from "../assets/budget-ease.png";
import water_wise from "../assets/water-wise.png";
import dsacademy from "../assets/dsacademy.gif";

export default function ProjectsSection() {
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
    {
      id: 6,
      title: "Konekta",
      description:
        "KONEK TA is a Hiligaynon word meaning 'Let's Connect.' It is a social media platform designed to bring users together based on shared interests. Unlike traditional social networks that emphasize broad connections, KONEK TA focuses on interest-based networking, enabling users to discover like-minded individuals, exchange ideas, and engage in meaningful discussions.",
      tech: ["Python Flask", "Tailwind", "React", "Git", "Github"],
      status: "On Going",
      category: "web",
      features: [
        "Interest-Based Networking",
        "Content Creation & Engagement",
        "User Control & Moderation",
      ],
      github: "https://github.com/edge405", // Replace with actual URLs
      // live: "https://thesis-system.com", // Replace with actual URLs
      image: konekta,
    },
    {
      id: 7,
      title: "Running Blog",
      description:
        "A blogging platform for my classmate to share his running journey. It features user authentication, a like and comment system, and two user roles: regular users (can like and comment) and admins (can create and manage blog posts).",
      tech: ["PHP", "HTML", "CSS", "Javascript", "MySQL", "Git", "Github"],
      status: "Completed",
      category: "web",
      features: [
        "Blog Post Editor",
        "Interactive Comments Section",
        "Like System",
      ],
      github: "https://github.com/edge405", // Replace with actual URLs
      // live: "https://thesis-system.com", // Replace with actual URLs
      image: running_blog,
    },
    {
      id: 8,
      title: "DSAcademy",
      description:
        "DSAcademy is an online learning platform that offers a variety of courses in data structures and algorithms. It provides lessons, and quizzes to help learners enhance their skills.",
      tech: ["HTML", "CSS", "JavaScript", "Git", "Github"],
      status: "Completed",
      category: "web",
      features: ["Lessons", "Quizzes"],
      github: "https://github.com/edge405", // Replace with actual URLs
      // live: "https://waterwise-gamma.vercel.app/", // Replace with actual URLs
      image: dsacademy,
    },
    {
      id: 9,
      title: "K-Fashion",
      description:
        "A blogging platform for fashion enthusiasts to share their style journeys.",
      tech: ["PHP", "HTML", "CSS", "MySQL", "Git", "Github"],
      status: "Completed",
      category: "web",
      features: [
        "Blog Post Editor",
        "Interactive Comments Section",
        "Like System",
      ],
      github: "https://github.com/edge405", // Replace with actual URLs
      // live: "https://thesis-system.com", // Replace with actual URLs
      image: k_fashion,
    },
    {
      id: 10,
      title: "Budget Ease",
      description:
        "A comprehensive personal finance management application designed to help you take control of your financial life. Track income, expenses, and savings with intuitive tools and real-time analytics.",
      tech: ["Vite + React", "Tailwind", "Git", "Github"],
      status: "Completed",
      category: "web",
      features: ["Budget Tracking", "Expense Categorization", "Savings Goals"],
      github: "https://github.com/edge405", // Replace with actual URLs
      live: "https://budget-ease-rust.vercel.app/", // Replace with actual URLs
      image: budget_ease,
    },
    {
      id: 11,
      title: "Cracking a Coding Challenge",
      description:
        "A personal project website blog where I tackled a coding challenge to improve my problem-solving skills.",
      tech: ["PHP", "HTML", "CSS", "MySQL", "Git", "Github"],
      status: "Completed",
      category: "web",
      features: [
        "Manage Blog Post",
        "Interactive Comments Section",
        "Like System",
      ],
      github: "https://github.com/edge405",
      live: "https://ejlindayao.ct.ws/",
      image: coding_challenge,
    },
    {
      id: 12,
      title: "Water Wise",
      description:
        "WaterWise helps you maintain proper hydration by tracking your daily water intake and sending helpful reminders. Set your daily goal, log your water consumption, and receive notifications to stay on track with your hydration habits.",
      tech: ["Angular", "Tailwind", "Git", "Github"],
      status: "Completed",
      category: "web",
      features: ["Water Intake Tracking", "Daily Reminders", "Goal Setting"],
      github: "https://github.com/edge405", // Replace with actual URLs
      live: "https://waterwise-gamma.vercel.app/", // Replace with actual URLs
      image: water_wise,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "web", "game"];
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate project counts
  const totalProjects = projects.length;
  const webProjects = projects.filter((p) => p.category === "web").length;
  const gameProjects = projects.filter((p) => p.category === "game").length;

  return (
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
                className={`px-5 py-2 rounded-xl font-medium transition-all capitalize cursor-pointer ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {category} (
                {category === "all"
                  ? totalProjects
                  : category === "web"
                  ? webProjects
                  : gameProjects}
                )
              </button>
            ))}
          </div>
        </div>

        {/* Projects Display */}
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
  );
}
