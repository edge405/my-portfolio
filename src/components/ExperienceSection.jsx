import { useState } from "react";

export default function ExperienceSection() {
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

  return (
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
                      : `See More (${experiences.length - INITIAL_ITEMS} more)`}
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
  );
}
