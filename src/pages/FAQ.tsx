import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "When and where is FoodFest happening?",
      answer:
        "FoodFest 2024 will take place on December 15-16 at the Food Science Technology Hall. Doors open at 10 AM each day.",
    },
    {
      question: "Are tickets refundable?",
      answer:
        "Tickets are refundable up to 7 days before the event. After that, we offer event credit for future events.",
    },
    {
      question: "What food options are available?",
      answer:
        "We have over 30 local vendors offering a wide range of cuisines including vegetarian, vegan, and gluten-free options.",
    },
    {
      question: "Is the event family-friendly?",
      answer:
        "Absolutely! We have activities for all ages, including kids' cooking workshops and family-friendly entertainment.",
    },
    {
      question: "Can I bring my own food or drinks?",
      answer:
        "Outside food and drinks are not permitted. However, we offer a diverse range of affordable food and beverage options.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Frequently Asked Questions
      </h1>

      <div className="max-w-2xl mx-auto">
        {faqItems.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="text-xl font-semibold text-orange-500">
                {faq.question}
              </span>
              <span className="text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
