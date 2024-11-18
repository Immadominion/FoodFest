import React from "react";
import mamaKitchenImage from "../assets/images/mamaKitchen.jpeg";
import spiceRouteImage from "../assets/images/spiceRoute.jpeg";
import greenPlateImage from "../assets/images/greenPlate.jpeg";

// Define Vendor Type
interface Vendor {
  id: number;
  name: string;
  cuisine: string;
  description: string;
  image: string;
}

const Vendors: React.FC = () => {
  const vendors: Vendor[] = [
    {
      id: 1,
      name: "Mama's Kitchen",
      cuisine: "Home-style Comfort Food",
      description: "Traditional recipes passed down through generations",
      image: mamaKitchenImage,
    },
    {
      id: 2,
      name: "Spice Route",
      cuisine: "International Fusion",
      description: "Blending global flavors with local ingredients",
      image: spiceRouteImage,
    },
    {
      id: 3,
      name: "Green Plate",
      cuisine: "Vegetarian & Vegan",
      description: "Sustainable and delicious plant-based meals",
      image: greenPlateImage,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Food Vendors
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-orange-500 mb-2">
                {vendor.name}
              </h2>
              <p className="text-gray-600 mb-4">{vendor.cuisine}</p>
              <p className="text-gray-700">{vendor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
