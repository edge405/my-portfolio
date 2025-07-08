import { Calendar, Clock, Star, Tag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogs-data";
import { BlogContainer } from "./blogs/BlogContainer";

export default function BlogSection() {
  const navigate = useNavigate();

  function handleClick(postId) {
    console.log(`Navigating to blog post with ID: ${postId}`);

    navigate(`/blog/${postId}`);
  }
  return (
    <section id="blog" className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-purple-400">
          Latest Blog Posts
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Sharing my journey, learnings, and life experiences
        </p>

        {/* Horizontal Scrollable Container */}
        {blogPosts.length === 0 ? (
          <div className="text-center text-gray-400">
            No blog posts available
          </div>
        ) : (
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent hover:scrollbar-thumb-purple-500/70 pb-4">
            <div className="flex gap-6 w-max">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group hover:bg-white/10 transition-all flex-shrink-0 w-96"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-48 object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-purple-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs flex items-center"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-gray-400 text-xs px-2 py-1">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleClick(post.id)}
                      className="text-purple-400 hover:text-purple-300 transition-colors font-medium flex items-center cursor-pointer text-sm"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-1" />
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
