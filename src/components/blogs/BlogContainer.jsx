// BlogContainer.jsx

import { ArrowLeft, Calendar, Clock, Tag, Share2, User } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../../data/blogs-data";

export const BlogContainer = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blogPost = blogPosts.find((post) => post.id === parseInt(blogId || ""));

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Blog Post Not Found
          </h2>
          <p className="text-gray-400 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: blogPost.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate("/blogs")}
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </button>
      </div>

      {/* Blog Post Header */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {blogPost.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={blogPost.image}
                alt={blogPost.imageAlt || blogPost.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={blogPost.date}>
                {new Date(blogPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{blogPost.readTime}</span>
            </div>

            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              <span className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-sm">
                {blogPost.category}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center hover:text-white transition-colors"
              title="Share this post"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>

          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Excerpt */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 border-l-4 border-blue-500">
            <p className="text-gray-300 text-lg italic">{blogPost.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            {blogPost.fullContent}
          </article>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share this post
            </button>
          </div>

          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};
