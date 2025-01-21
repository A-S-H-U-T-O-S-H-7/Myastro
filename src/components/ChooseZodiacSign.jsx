"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import { zodiacSigns } from "./zodiacSigns";
import { useHoroscopeService } from "@/lib/HoroscopeServicesContext";

function ChooseZodiacSign() {
  const { handleSelectZodiacSign } = useHoroscopeService();
  const { zodiacsign } = useParams();
  const currentpath = usePathname();
  const router = useRouter();
  const handleSignClick = (sign) => {

    handleSelectZodiacSign(sign.name)
    const zsign = currentpath.split("/");
    zsign[3] = sign.name.toLowerCase();
    router.push(`${zsign.join("/")}`);

  };

  return (
    <div className="py-6 hidden md:block px-4">
      <p className="mb-4 text-gray-800 font-semibold text-sm">Choose Your Zodiac Sign</p>
      <ul className="grid grid-cols-2  md:grid-cols-2 gap-4">
        {zodiacSigns.map((sign, index) => (
          <li
            className={`flex items-center cursor-pointer border border-purple-300 rounded-lg px-1 py-1 transition-transform hover:scale-105 hover:shadow-md ${zodiacsign === sign.name.toLowerCase() ? "bg-purple-500 text-white" : "text-gray-800"
              }`}
            key={index}
            onClick={() => {
              handleSignClick(sign)
            }}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden mr-3">
              <img src={sign.image} alt={sign.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-medium">{sign.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseZodiacSign;
