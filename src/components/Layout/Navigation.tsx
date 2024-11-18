import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-s">
          FoodFest
        </Link>
        <div className="space-x-4">
          <Link to="/vendors" className="hover:text-orange-200">
            Vendors
          </Link>
          <Link to="/schedule" className="hover:text-orange-200">
            Schedule
          </Link>
          <Link to="/tickets" className="hover:text-orange-200">
            Tickets
          </Link>
          <Link to="/blog" className="hover:text-orange-200">
            Blog
          </Link>
          <Link to="/faq" className="hover:text-orange-200">
            FAQ
          </Link>
          <Link to="/contact" className="hover:text-orange-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
