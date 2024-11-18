import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          FoodFest 2024
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Celebrate local cuisine, discover amazing flavors, and enjoy a
          festival that brings together the best food vendors in one incredible
          event!
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Vendor Directory</h2>
          <p className="mb-4">
            Explore our incredible lineup of local food vendors
          </p>
          <Link
            to="/vendors"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            View Vendors
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Event Schedule</h2>
          <p className="mb-4">
            Check out cooking demos, workshops, and live performances
          </p>
          <Link
            to="/schedule"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            View Schedule
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Buy Tickets</h2>
          <p className="mb-4">
            Secure your spot at the most delicious event of the year
          </p>
          <Link
            to="/tickets"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Get Tickets
          </Link>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h3 className="text-3xl font-bold mb-6">Event Highlights</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Local Cuisine", icon: "🍲" },
            { title: "Live Cooking", icon: "👨‍🍳" },
            { title: "Music & Entertainment", icon: "🎵" },
            { title: "Community Celebration", icon: "🤝" },
          ].map((highlight, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 transform hover:scale-105 transition"
            >
              <div className="text-5xl mb-3">{highlight.icon}</div>
              <h4 className="text-xl font-semibold">{highlight.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
