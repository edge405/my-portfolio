import {
  Github,
  Linkedin,
  Facebook,
  Zap,
  Code,
  Award,
  Coffee,
  Terminal,
  Cat,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a 21-year-old developer from Iloilo City, Philippines.
              Recently graduated with a strong foundation in full-stack
              development, I've worked extensively with Python Flask, Express,
              Javascript, React, and PostgreSQL to build robust web
              applications.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Through creating comprehensive management systems, I’ve developed
              a strong focus on writing clean code, designing scalable
              architectures, and prioritizing user-centered solutions.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Currently, I'm further honing my backend and infrastructure skills
              exploring containerization with Docker, cloud platforms like AWS,
              and automation tools to build more efficient and scalable systems.{" "}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/edge405"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/edjay404/"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.facebook.com/edjay.leo"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Facts</h3>
            <div className="space-y-4">
              {/* <div className="flex items-center">
                  <MapPin className="text-purple-400 mr-3" size={20} />
                  <span className="text-gray-300">
                    Based in Iloilo City, Philippines
                  </span>
                </div> */}
              {/* <div className="flex items-center">
                <Cat className="text-pink-400 mr-3" size={20} />
                <span className="text-gray-300">Cat lover</span>
              </div> */}
              <div className="flex items-center">
                <Coffee className="text-yellow-400 mr-3" size={20} />
                <span className="text-gray-300">
                  Powered by coffee and curiosity
                </span>
              </div>
              <div className="flex items-center">
                <Award className="text-green-400 mr-3" size={20} />
                <span className="text-gray-300">
                  Fresh Computer Science Graduate
                </span>
              </div>

              <div className="flex items-center">
                <Zap className="text-red-400 mr-3" size={20} />
                <span className="text-gray-300">
                  Active participant in hackathon events
                </span>
              </div>

              <div className="flex items-center">
                <Code className="text-blue-400 mr-3" size={20} />
                <span className="text-gray-300">Full-stack developer</span>
              </div>

              {/* <div className="flex items-center">
                <Terminal className="text-cyan-400 mr-3" size={20} />
                <span className="text-gray-300">Frontend vibe coder</span>
              </div> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
