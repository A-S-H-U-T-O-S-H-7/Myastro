"use client";
import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomerFeedbackCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const feedbackData = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      feedback: "Outstanding service! The team went above and beyond my expectations. I couldn't be happier with the results.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      feedback: "Very professional and responsive. The quality of work is exceptional, and I highly recommend their services.",
      rating: 4,
    },
    {
      id: 3,
      name: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      feedback: "Fantastic experience from start to finish. The attention to detail and customer service is remarkable.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ashu Wilson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      feedback: "Faltu experience from start to finish. The attention to detail and customer service is remarkable.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === feedbackData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? feedbackData.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? "text-yellow-400" : "text-gray-300"} text-xl`}
        aria-hidden="true"
      />
    ));
  };

  return (
<div className="px-[10px] lg:px-[65px] py-[40px]">
<div>
<h2 className='text-[28px] font-bold text-[#3C0184] font-heading md:font-semibold md:text-[40px]'>What our Customer are saying</h2>

</div>


    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="relative ">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {feedbackData.map((feedback) => (
              <div key={feedback.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl border  shadow-lg p-9 m-2 transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-6">
                    <img
                      src={feedback.image}
                      alt={feedback.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1511367461989-f85a21fda167";
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{feedback.name}</h3>
                      <div className="flex mt-1" aria-label={`Rating: ${feedback.rating} out of 5 stars`}>
                        {renderStars(feedback.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">"{feedback.feedback}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-gray-600 text-xl" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-gray-600 text-xl" />
        </button>

        <div className="flex justify-center mt-4">
          {feedbackData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerFeedbackCarousel;