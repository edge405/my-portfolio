import { portfolio } from "../data/portfolio-data";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const { personal, social } = portfolio;

  return (
    <footer className="relative py-12 px-4 z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            {personal.name}
          </div>
          <p className="text-gray-500 mb-6">
            Full-Stack Developer • Aspiring DevOps Engineer • Continuous Learner
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all"
            >
              <Github size={20} className="text-gray-400 hover:text-purple-400" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
            >
              <Linkedin size={20} className="text-gray-400 hover:text-blue-400" />
            </a>
            <a
              href={`mailto:${social.email}`}
              className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-green-400/50 hover:bg-green-500/10 transition-all"
            >
              <Mail size={20} className="text-gray-400 hover:text-green-400" />
            </a>
          </div>
          <div className="border-t border-white/5 pt-8">
            <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} {personal.name}. Built with React + Vite
              <Heart size={14} className="text-purple-500 mx-1" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
