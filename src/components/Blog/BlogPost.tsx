import React from "react";
import { useParams } from "react-router-dom";

interface BlogPostData {
  id: number;
  title: string;
  content: string[];
  author: string;
  date: string;
  imageUrl: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const blogPosts: BlogPostData[] = [
    {
      id: 1,
      title: "Local Cuisine Spotlight: Top 5 Dishes",
      content: [
        "Our local cuisine is a vibrant tapestry of flavors, reflecting the rich cultural diversity of our region.",
        "From street food to gourmet preparations, these five dishes represent the heart and soul of our culinary landscape.",
      ],
      author: "Sarah Thompson",
      date: "June 15, 2024",
      imageUrl: "/placeholder-blog.jpg",
    },
    // Add more blog posts here
  ];

  const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            {post.title}
          </h1>
          <div className="flex justify-between text-gray-600">
            <span>By {post.author}</span>
            <span>{post.date}</span>
          </div>
        </header>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose text-gray-800">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
