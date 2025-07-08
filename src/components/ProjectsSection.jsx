import { useState } from "react";
import { Code, Server, Github, ExternalLink, FolderOpen } from "lucide-react";
import { projects } from "../data/projects-data";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "web", "game", "desktop"];
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate project counts
  const totalProjects = projects.length;
  const webProjects = projects.filter((p) => p.category === "web").length;
  const gameProjects = projects.filter((p) => p.category === "game").length;
  const desktopProjects = projects.filter(
    (p) => p.category === "desktop"
  ).length;

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
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-1 sm:p-2 border border-white/10 w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-5 py-2 rounded-xl font-medium transition-all capitalize cursor-pointer text-xs sm:text-sm flex-1 sm:flex-none ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="hidden sm:inline">
                    {category} (
                    {category === "all"
                      ? totalProjects
                      : category === "web"
                      ? webProjects
                      : category === "game"
                      ? gameProjects
                      : desktopProjects}
                    )
                  </span>
                  <span className="sm:hidden">
                    {category === "all" ? "All" : category}
                  </span>
                </button>
              ))}
            </div>
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
