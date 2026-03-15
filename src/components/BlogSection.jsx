import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogs-data";

export default function BlogSection() {
  const navigate = useNavigate();

  const handleClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section id="blog" className="relative py-24 px-4 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Sharing my journey, learnings, and life experiences
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No blog posts available
          </div>
        ) : (
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent pb-4 -mx-4 px-4">
            <div className="flex gap-6 w-max">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 flex-shrink-0 w-80"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-44 object-contain bg-gray-900/50 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-purple-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>

                    <button
                      onClick={() => handleClick(post.id)}
                      className="text-purple-400 hover:text-purple-300 transition-colors font-medium flex items-center gap-1 text-sm group/btn"
                    >
                      Read More
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
