import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Edjay Lindayao
          </div>
          <p className="text-gray-400 mb-6">
            Full-Stack Developer • Aspiring DevOps Engineer • Continuous Learner
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/edge405"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/edjay404"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ejlindayao@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Edjay Lindayao. Built with Vite + React and lots of ☕. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
