import { Code, Database, Server, Github } from "lucide-react";

export default function SkillsSection() {
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

  return (
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
  );
}
