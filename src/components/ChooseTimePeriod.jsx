"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function ChooseTimePeriod() {
     const currentPath = usePathname(); 
    
     
      const buttons = [
        { name: "Today", path: "/horoscope/todays-horoscope" },
        { name: "Tomorrow", path: "/horoscope/tomorrows-horoscope" },
        { name: "Yesterday", path: "/horoscope/yesterdays-horoscope" },
        { name: "This Week", path: "/horoscope/weekly-horoscope" },
        { name: "This Month", path: "/horoscope/monthly-horoscope" },
        { name: "This Year", path: "/horoscope/yearly-horoscope" },
      ];

  return (
    <div className="py-4 px-2">
        <p>Choose Time period</p>
    <ul className="grid grid-cols-2 min-w-[250px] gap-2">
      {buttons.map((button, index) => (
        <Link href={button.path} key={index}>
          <li
            className={`cursor-pointer border-[1.5px] px-4 py-2 text-sm rounded-md transition-all duration-300 ease-in-out ${
              currentPath === button.path
                ? 'bg-[#9b57ed] text-white'
                : 'border-white hover:border-[#9b57ed] hover:shadow-sm  text-gray-800'
            }`}
          >
            {button.name}
          </li>
        </Link>
      ))}
    </ul>
  </div>
);
};
 

export default ChooseTimePeriod
