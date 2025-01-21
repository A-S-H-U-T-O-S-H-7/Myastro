"use client";
import { HoroscopeServices, useHoroscopeService } from "@/lib/HoroscopeServicesContext";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function ChooseTimePeriod() {
  const { selectedHoroscope, handleSelectHoroscope } = useHoroscopeService();
  const pathname = usePathname();
  const router = useRouter()
  const handleServicePath = (slug) => {
    handleSelectHoroscope(slug)
    const pathSegments = pathname.split("/");
    pathSegments[2] = slug;
    router.push(`${pathSegments.join("/")}`)
  }
  return (
    <div className="py-4 px-2">
      <p className="mb-2 text-sm text-gray-800 font-semibold">Choose Time Period</p>
      <ul className="grid grid-cols-2 gap-2">
        {HoroscopeServices.map((horoscope, index) => (
          <li
            key={index}
            onClick={() => handleServicePath(horoscope.slug)}
            className={`cursor-pointer px-4 py-2 text-sm rounded-md transition-all duration-300 ${selectedHoroscope.slug === horoscope.slug ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
          >
            {horoscope.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseTimePeriod;
