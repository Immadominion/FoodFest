import React, { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Contact FoodFest
      </h1>
      
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="name" 
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="phone" 
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone Number
            </label>
            <input 
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Optional: Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="message" 
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;