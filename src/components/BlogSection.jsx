import React from "react";

export default function BlogSection() {
  const blogPosts = [
    // {
    //   id: 1,
    //   title: "My Journey from Full-Stack Development to DevOps",
    //   excerpt:
    //     "Exploring the transition from traditional development roles to the exciting world of DevOps engineering and infrastructure automation.",
    //   content:
    //     "As a fresh graduate with a strong foundation in full-stack development, I've begun my journey into DevOps...",
    //   date: "2024-12-15",
    //   readTime: "5 min",
    //   category: "Career",
    //   tags: ["DevOps", "Career", "Learning"],
    //   featured: true,
    // },
    // {
    //   id: 2,
    //   title: "Building Scalable Thesis Management Systems",
    //   excerpt:
    //     "Lessons learned while developing thesis management systems for multiple courses and the challenges overcome.",
    //   content:
    //     "During my final year, I had the unique opportunity to work on thesis management systems...",
    //   date: "2024-11-28",
    //   readTime: "7 min",
    //   category: "Development",
    //   tags: ["Python", "Flask", "PostgreSQL"],
    //   featured: false,
    // },
    // {
    //   id: 3,
    //   title: "Docker Fundamentals for Python Developers",
    //   excerpt:
    //     "A beginner-friendly guide to containerizing Python Flask applications using Docker.",
    //   content:
    //     "Containerization has become essential in modern development workflows...",
    //   date: "2024-11-10",
    //   readTime: "6 min",
    //   category: "DevOps",
    //   tags: ["Docker", "Python", "Containerization"],
    //   featured: false,
    // },
    // {
    //   id: 4,
    //   title: "React Best Practices I Learned the Hard Way",
    //   excerpt:
    //     "Common React mistakes and the best practices I discovered through real project experience.",
    //   content:
    //     "Working on multiple React projects taught me valuable lessons...",
    //   date: "2024-10-22",
    //   readTime: "8 min",
    //   category: "Development",
    //   tags: ["React", "JavaScript", "Best Practices"],
    //   featured: true,
    // },
  ];

  return (
    <section id="blog" className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-purple-400">
          Latest Blog Posts
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Sharing my journey, learnings, and insights in development
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
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group hover:bg-white/10 transition-all flex-shrink-0 w-96"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    {post.featured && (
                      <Star className="text-yellow-400" size={20} />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg text-xs flex items-center"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium flex items-center cursor-pointer">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
