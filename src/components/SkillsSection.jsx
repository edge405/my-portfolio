import { useState } from "react";
import { portfolio } from "../data/portfolio-data";
import { iconMap } from "../data/custom-icons";

const SkillIcon = ({ skill }) => {
  if (skill.icon) {
    const IconComponent = skill.icon;
    return <IconComponent className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />;
  }
  
  if (skill.iconName && iconMap[skill.iconName]) {
    const CustomIcon = iconMap[skill.iconName];
    return <CustomIcon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />;
  }
  
  return null;
};

export default function SkillsSection() {
  const { skills } = portfolio;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(skills.map(s => s.category))];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-4 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-2xl p-4 border border-white/8 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-default flex flex-col items-center justify-center gap-2"
            >
              <SkillIcon skill={skill} />
              <span className="text-gray-300 text-xs font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
