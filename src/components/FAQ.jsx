"use client";

import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const FAQ = ({ faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-[10px] lg:px-[65px] py-[40px] mx-auto ">
      <h2 className=" text-3xl font-extrabold text-[#3C0184] font-heading mb-6">
        Frequently Asked Questions
      </h2>
      {faqs.length > 0 ? (
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-[0_4px_15px_4px_rgba(60,1,132,0.2)] transition-all duration-400"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>

                <span
                  className={`text-xl font-bold transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No FAQs available.</p>
      )}
    </div>
  );
};

export default FAQ;
