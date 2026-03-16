import { useState } from "react";
import { portfolio } from "../data/portfolio-data";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const { social, contact } = portfolio;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      formData.append("_captcha", "false");
      formData.append("_template", "table");
      formData.append("_next", contact.redirectUrl);

      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        `Failed to send message. Please email me directly at ${social.email}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always interested in new opportunities and conversations about
            technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href={`mailto:${social.email}`}
            className="group bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/8 hover:border-green-400/30 transition-all text-center"
          >
            <Mail
              className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <p className="text-gray-400 text-sm">{social.email}</p>
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/8 hover:border-blue-400/30 transition-all text-center"
          >
            <Linkedin
              className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </a>

          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/8 hover:border-purple-400/30 transition-all text-center"
          >
            <Github
              className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h3 className="text-white font-semibold mb-1">GitHub</h3>
            <p className="text-gray-400 text-sm">Check my code</p>
          </a>
        </div>

        <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all disabled:opacity-50"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all disabled:opacity-50"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="_subject"
              required
              disabled={isSubmitting}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all disabled:opacity-50"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              name="message"
              required
              disabled={isSubmitting}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all resize-none disabled:opacity-50"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-10 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <Send size={20} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
