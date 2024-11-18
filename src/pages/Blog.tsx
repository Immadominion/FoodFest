import React from "react";
import sustainableEatingImage from "../assets/images/goodPractice.jpeg";
import localCuisineImage from "../assets/images/localCuisine.jpeg";
import talentedFoodImage from "../assets/images/talentedFood.jpeg";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Local Cuisine Spotlight: Top 5 Dishes",
      excerpt:
        "Exploring the most delicious local dishes that define our food culture...",
      author: "Sarah Thompson",
      date: "June 15, 2024",
      imageUrl: localCuisineImage,
    },
    {
      id: 2,
      title: "Meet Our Talented Food Vendors",
      excerpt:
        "Behind the scenes with the chefs and creators making FoodFest amazing...",
      author: "Mike Rodriguez",
      date: "May 22, 2024",
      imageUrl: talentedFoodImage,
    },
    {
      id: 3,
      title: "Sustainable Eating: A Festival Commitment",
      excerpt: "How FoodFest is promoting eco-friendly food practices...",
      author: "Emily Chen",
      date: "April 10, 2024",
      imageUrl: sustainableEatingImage,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        FoodFest Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-orange-500 mb-2">
                {post.title}
              </h2>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <p className="text-gray-700">{post.excerpt}</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
