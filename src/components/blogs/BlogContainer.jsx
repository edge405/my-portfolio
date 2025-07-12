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
            onClick={() => navigate("/")}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
      </div>

      {/* Blog Post Header */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400 text-[16px]">
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
              <span className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-[16px]">
                {blogPost.category}
              </span>
            </div>
          </div>
          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8 text-xl">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-[16px] hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Featured Image */}
          {blogPost.image && (
            <div className="w-full md:h-96 bg-gray-800 rounded-lg overflow-hidden mb-8">
              <img
                src={blogPost.image}
                alt={blogPost.imageAlt || blogPost.title}
                className="w-full h-full object-contain"
              />
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
      {/* <div className="flex justify-center container mx-auto px-4 py-8 border-t border-gray-800">
        <button
          onClick={() => navigate("/blogs")}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Blogs
        </button>
      </div> */}
    </div>
  );
};
