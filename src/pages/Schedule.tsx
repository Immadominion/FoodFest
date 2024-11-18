import React from "react";

const Schedule: React.FC = () => {
  const eventSchedule = [
    {
      time: "10:00 AM",
      event: "Opening Ceremony",
      location: "Main Stage",
    },
    {
      time: "11:30 AM",
      event: "Local Chef Cooking Demonstration",
      location: "Culinary Arena",
    },
    {
      time: "1:00 PM",
      event: "Food Vendor Showcase",
      location: "Vendor Village",
    },
    {
      time: "3:00 PM",
      event: "Live Music Performance",
      location: "Main Stage",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Event Schedule
      </h1>

      <div className="grid gap-4">
        {eventSchedule.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-500">
                {item.event}
              </h3>
              <p className="text-gray-600">{item.location}</p>
            </div>
            <div className="text-gray-800 font-medium">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
