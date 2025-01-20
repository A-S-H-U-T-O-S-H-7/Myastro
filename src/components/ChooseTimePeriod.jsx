"use client";

import React from "react";

function ChooseTimePeriod({ selectedPeriod, setSelectedPeriod }) {
  const buttons = [
    { name: "Today", period: "todays-horoscope" },
    { name: "Tomorrow", period: "tomorrows-horoscope" },
    { name: "Yesterday", period: "yesterdays-horoscope" },
    { name: "This Week", period: "weekly-horoscope" },
    { name: "This Month", period: "monthly-horoscope" },
    { name: "This Year", period: "yearly-horoscope" },
  ];

  return (
    <div className="py-4 px-2">
      <p className="mb-2 text-sm text-gray-800 font-semibold">Choose Time Period</p>
      <ul className="grid grid-cols-2 gap-2">
        {buttons.map((button, index) => (
          <li
            key={index}
            onClick={() => setSelectedPeriod(button.period)}
            className={`cursor-pointer px-4 py-2 text-sm rounded-md transition-all duration-300 ${
              selectedPeriod === button.period ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {button.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseTimePeriod;
