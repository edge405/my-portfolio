import {
  SiReact, SiJavascript, SiTypescript, SiPython, SiExpress,
  SiNodedotjs, SiPostgresql, SiMysql, SiDocker, SiGit, SiGithub,
  SiPostman, SiTailwindcss, SiVite, SiAngular, SiPhp
} from "react-icons/si";
import {
  FaCat, FaCoffee, FaAward, FaCode, FaBriefcase
} from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

export const portfolio = {
  personal: {
    name: "Edjay Lindayao",
    title: "Full-Stack Developer",
    location: "Iloilo City, Philippines",
    age: 21,
    email: "ejlindayao@gmail.com",
    resumeUrl: "/EDJAY-RESUME.pdf",
  },

  seo: {
    title: "Edjay Lindayao | Full Stack Developer Portfolio",
    description: "Hi, I'm Edjay Lindayao, a full stack developer specializing in React, Vite, and modern web technologies. Check out my projects and contact me.",
    keywords: "Edjay Lindayao, Full Stack Developer, React Developer, Vite, Web Developer, Portfolio",
    url: "https://www.edjay.life",
    image: "https://www.edjay.life/preview.jpg"
  },

  social: {
    github: "https://github.com/edge405",
    linkedin: "https://www.linkedin.com/in/edjay404/",
    facebook: "https://www.facebook.com/edjay.leo",
    email: "ejlindayao@gmail.com"
  },

  stats: [
    { label: "Projects Completed", value: "13+", icon: FaBriefcase },
    { label: "Technologies Mastered", value: "10+", icon: FaCode },
    { label: "Hackathons Joined", value: "3+", icon: FaBolt },
    { label: "Clients Project Built", value: "6+", icon: FaAward },
  ],

  rotatingTitles: [
    "Full-Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Software Developer",
    "Aspiring DevOps Engineer",
  ],

  quickFacts: [
    { icon: FaCat, color: "text-pink-400", text: "Ailurophile" },
    { icon: FaCoffee, color: "text-yellow-400", text: "Powered by coffee and curiosity" },
    { icon: FaAward, color: "text-green-400", text: "Computer Science Graduate" },
    { icon: FaBolt, color: "text-red-400", text: "Hackathon participant and coding enthusiast" },
    { icon: FaCode, color: "text-blue-400", text: "Full-stack developer" },
  ],

  about: [
    "I'm from Iloilo City, Philippines. I have a strong foundation in full-stack development and have worked extensively with Laravel, Python Flask, Express, JavaScript, React, MySQL, and PostgreSQL to build robust web applications.",
    "By developing comprehensive management systems, I've cultivated a strong focus on writing clean code, designing scalable architectures, and delivering user-centered solutions.",
  ],

  skills: [
    { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
    { name: "Python", icon: SiPython, color: "#3776AB", category: "Backend" },
    { name: "Express", icon: SiExpress, color: "#828577", category: "Backend" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Database" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", category: "DevOps" },
    { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "Tools" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
    { name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },
    { name: "Angular", icon: SiAngular, color: "#DD0031", category: "Frontend" },
    { name: "PHP", icon: SiPhp, color: "#777BB4", category: "Backend" },
    { name: "Cursor AI", iconName: "CursorAI", color: "#000000", category: "AI Tools" },
    { name: "Antigravity", iconName: "Antigravity", color: "#6C5CE7", category: "AI Tools" },
    { name: "Claude AI", iconName: "Claude", color: "#D97757", category: "AI Tools" },
    { name: "cPanel", iconName: "CPanel", color: "#FF6C37", category: "Tools" },
  ],

  experiences: [
    {
      role: "Solo Backend Developer",
      company: "OJT",
      period: "2025 (4 months)",
      type: "Internship",
      description: "Iloilo Province Employment Portal and Services (IPEPS) is a job-finding platform I worked on during my internship. Developed for the Public Employment Service Office (PESO), the system supports four user types: students, jobseekers, academe, and admin. Each user type has specific features tailored to their needs, making the platform efficient for connecting individuals to employment opportunities across Iloilo Province.",
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
      description: "iLocate is a web-based boarding house finder for Iloilo City. It helps users find nearby boarding houses that match their preferences using the Haversine algorithm to calculate distances accurately. The platform connects tenants with verified landlords, improving search convenience and property visibility.",
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
      description: "A web-based Pension Tracking System that enables seniors in Alimodian to monitor their pension payments and history. Admins oversee pensioner records, schedule payouts, and send notifications to ensure timely and transparent pension management.",
      achievements: [
        "Developed a robust backend with Python Flask and PostgreSQL",
        "Ensured secure and centralized pension data management",
        "Created a responsive frontend using React for seamless user experience",
        "Integrated automated notification system to inform pensioners of scheduled payouts",
        "Optimized database design for efficient tracking of pension records and transactions",
      ],
      tech: ["Python Flask", "PostgreSQL", "React", "Tailwind", "Git", "Github", "Postman"],
    },
    {
      role: "Programmer",
      company: "Odyssey Festival",
      period: "28 days",
      type: "Hackathon",
      description: "Sekyu is an exciting, fast-paced local PvP desktop game inspired by the traditional Filipino Capture the Flag. Developed during a hackathon, it offers thrilling one-on-one gameplay where each player skillfully controls three characters on a single PC, promising engaging and competitive matches that keep players on the edge of their seats.",
      achievements: [
        "Implemented the game logic and mechanics",
        "Integrated the design and animations for a smooth gaming experience",
      ],
      tech: ["Unity", "C#", "Git", "Github"],
    },
  ],

  contact: {
    formEndpoint: "https://formsubmit.co/ajax/d6ce4f99b05adb806d56213759384186",
    redirectUrl: "https://www.edjay.life/#contact-form"
  }
};
