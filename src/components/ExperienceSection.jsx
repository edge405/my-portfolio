import { useState } from "react";
import { portfolio } from "../data/portfolio-data";
import { ChevronDown, Building2, Calendar, Award } from "lucide-react";

export default function ExperienceSection() {
  const { experiences } = portfolio;
  const [showAll, setShowAll] = useState(false);
  const INITIAL_ITEMS = 2;

  const displayedExperiences = showAll
    ? experiences
    : experiences.slice(0, INITIAL_ITEMS);
  const hasMoreItems = experiences.length > INITIAL_ITEMS;

  const getTypeColor = (type) => {
    const colors = {
      Internship: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      Thesis: "bg-blue-500/20 text-blue-300 border-blue-400/30",
      Hackathon: "bg-orange-500/20 text-orange-300 border-orange-400/30",
      Job: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    };
    return colors[type] || "bg-purple-500/20 text-purple-300 border-purple-400/30";
  };

  return (
    <section id="experience" className="relative py-24 px-4 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My professional journey and key projects
          </p>
        </div>
        
        <div className="space-y-6">
          {displayedExperiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Building2 size={18} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${getTypeColor(exp.type)}`}>
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Award size={18} className="text-purple-400" />
                  Key Achievements
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">●</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg text-sm border border-white/10 hover:border-purple-400/30 hover:text-purple-300 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hasMoreItems && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span>
                {showAll ? "Show Less" : `View All ${experiences.length} Experiences`}
              </span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} 
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
