"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function ChooseTimePeriod() {
  const currentPath = usePathname();
  const router = useRouter();

  const buttons = [
    { name: "Today", period: "todays-horoscope" },
    { name: "Tomorrow", period: "tomorrows-horoscope" },
    { name: "Yesterday", period: "yesterdays-horoscope" },
    { name: "This Week", period: "weekly-horoscope" },
    { name: "This Month", period: "monthly-horoscope" },
    { name: "This Year", period: "yearly-horoscope" },
  ];

  const currentzodiacsign = currentPath.split("/").pop();

  const handleNavigation = (period) => {
    router.push(`/horoscope/${period}/${currentzodiacsign}`);
  };

  return (
    <div className="py-4 hidden md:block px-2">
      <p className="mb-2 text-sm text-gray-800 mt-5 font-semibold">Choose Time Period</p>
      <ul className="grid grid-cols-2 min-w-[250px] gap-2 mt-5">
        {buttons.map((button, index) => (
          <li
            key={index}
            onClick={() => handleNavigation(button.period)}
            className={`cursor-pointer border-[1.5px] border-purple-200 px-4 py-2 text-sm rounded-md transition-all duration-300 ease-in-out ${
              currentPath.includes(button.period)
                ? "bg-[#9b57ed] text-white"
                : "bg-white text-gray-800 hover:border-[#9b57ed] hover:shadow-sm"
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
