import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-600 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">FoodFest</h3>
          <p className="text-sm">Celebrating local cuisine and community</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <nav className="space-y-2">
            <Link to="/" className="block hover:text-orange-200">
              Home
            </Link>
            <Link to="/vendors" className="block hover:text-orange-200">
              Vendors
            </Link>
            <Link to="/schedule" className="block hover:text-orange-200">
              Schedule
            </Link>
            <Link to="/tickets" className="block hover:text-orange-200">
              Tickets
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="space-y-2">
            <a href="#" className="block hover:text-orange-200">
              Facebook
            </a>
            <a href="#" className="block hover:text-orange-200">
              Instagram
            </a>
            <a href="#" className="block hover:text-orange-200">
              Twitter
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">
            Email: nwakanmadominion.20211274242@futo.edu.net
            <br />
            Phone: +234 802 595 0834
          </p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-orange-500 pt-4">
        <p className="text-sm">© 2024 FoodFest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
