import { portfolio } from "../data/portfolio-data";
import { Github, Linkedin, Facebook } from "lucide-react";

export default function AboutSection() {
  const { social, about, quickFacts } = portfolio;

  return (
    <section id="about" className="relative py-24 px-4 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {about.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex gap-4 pt-4">
              <a
                href={social.github}
                className="group p-3 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all"
              >
                <Github size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href={social.linkedin}
                className="group p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
              >
                <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={social.facebook}
                className="group p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
              >
                <Facebook size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/8">
            <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
            <div className="space-y-1">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-center gap-2 p-1 rounded-xl hover:bg-white/5 transition-all">
                  <fact.icon className={`${fact.color}`} size={18} />
                  <span className="text-gray-300 text-sm">{fact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
