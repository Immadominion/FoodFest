import React, { useState } from "react";

interface TicketType {
  id: number;
  name: string;
  price: number;
  description: string;
}

const Tickets: React.FC = () => {
  const [selectedTickets, setSelectedTickets] = useState<{
    [key: number]: number;
  }>({});

  const ticketTypes: TicketType[] = [
    {
      id: 1,
      name: "General Admission",
      price: 25,
      description: "Access to all food vendors and main stage",
    },
    {
      id: 2,
      name: "VIP Experience",
      price: 75,
      description:
        "Priority entry, exclusive tasting areas, chef meet-and-greet",
    },
    {
      id: 3,
      name: "Family Pack",
      price: 60,
      description: "Entry for 2 adults and 2 children",
    },
  ];

  const handleTicketQuantity = (ticketId: number, change: number) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [ticketId]: Math.max(0, (prev[ticketId] || 0) + change),
    }));
  };

  const calculateTotal = () => {
    return ticketTypes.reduce(
      (total, ticket) =>
        total + (selectedTickets[ticket.id] || 0) * ticket.price,
      0
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Ticket Sales
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {ticketTypes.map((ticket) => (
          <div key={ticket.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              {ticket.name}
            </h2>
            <p className="text-gray-600 mb-4">{ticket.description}</p>
            <div className="text-3xl font-bold text-gray-800 mb-4">
              ₦{ticket.price}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleTicketQuantity(ticket.id, -1)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                -
              </button>
              <span className="text-xl">{selectedTickets[ticket.id] || 0}</span>
              <button
                onClick={() => handleTicketQuantity(ticket.id, 1)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Total: ₦{calculateTotal()}</h3>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Tickets;
