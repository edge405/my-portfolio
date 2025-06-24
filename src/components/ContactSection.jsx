import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection({ handleSubmit, isSubmitting }) {
  return (
    <section id="contact" className="relative py-20 px-4 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new opportunities, collaborations, and
          conversations about technology. Whether you want to discuss a project
          or just say hello, feel free to reach out!
        </p>
        <div id="contact-form" className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:ejlindayao@gmail.com"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <Mail
              className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={48}
            />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400">ejlindayao@gmail.com</p>
          </a>

          <a
            href="https://linkedin.com/in/edjay404/"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <Linkedin
              className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={48}
            />
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400">Connect with me</p>
          </a>

          <a
            href="https://github.com/edge405"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <Github
              className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={48}
            />
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400">Check out my code</p>
          </a>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">
            Quick Contact Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://www.edjay.life/#contact-form"
            />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for your message! I'll get back to you soon."
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                disabled={isSubmitting}
                className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                disabled={isSubmitting}
                className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="_subject"
              disabled={isSubmitting}
              className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              name="message"
              disabled={isSubmitting}
              className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center min-w-[200px] ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed scale-100"
                    : "cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
