import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ChooseZodiacSign() {
  const currentPath = usePathname();

  const zodiacSigns = [
    { name: "Aries", path: "/horoscope/todays-horoscope/aries", image: "/Horoscope-icon/Aries.png" },
    { name: "Taurus", path: "/horoscope/todays-horoscope/taurus", image: "/Horoscope-icon/Taurus.png" },
    { name: "Gemini", path: "/horoscope/todays-horoscope/gemini", image: "/Horoscope-icon/Gemini.png" },
    { name: "Cancer", path: "/horoscope/todays-horoscope/cancer", image: "/Horoscope-icon/Cancer.png" },
    { name: "Leo", path: "/horoscope/todays-horoscope/leo", image: "/Horoscope-icon/Leo.png" },
    { name: "Virgo", path: "/horoscope/todays-horoscope/virgo", image: "/Horoscope-icon/virgo.png" },
    { name: "Libra", path: "/horoscope/todays-horoscope/libra", image: "/Horoscope-icon/Libra.png" },
    { name: "Scorpio", path: "/horoscope/todays-horoscope/scorpio", image: "/Horoscope-icon/Scorpio.png" },
    { name: "Sagittarius", path: "/horoscope/todays-horoscope/sagittarius", image: "/Horoscope-icon/Sagitarius.png" },
    { name: "Capricorn", path: "/horoscope/todays-horoscope/capricorn", image: "/Horoscope-icon/Capricornus.png" },
    { name: "Aquarius", path: "/horoscope/todays-horoscope/aquarius", image: "/Horoscope-icon/Aquarius.png" },
    { name: "Pisces", path: "/horoscope/todays-horoscope/pisces", image: "/Horoscope-icon/Pisces.png" },
  ];

  return (
    <div className="py-6 hidden md:block px-4">
      <p className="mb-4 text-gray-800 font-semibold text-sm">Choose Your Zodiac Sign</p>
      <ul className="grid grid-cols-2  md:grid-cols-2 gap-4">
        {zodiacSigns.map((sign, index) => (
          <Link href={sign.path} key={index}>
            <li
              className={`flex items-center cursor-pointer border border-purple-300 rounded-lg px-1 py-1 transition-transform hover:scale-105 hover:shadow-md ${
                currentPath === sign.path ? "bg-purple-500 text-white" : "text-gray-800"
              }`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden mr-3">
                <img src={sign.image} alt={sign.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium">{sign.name}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ChooseZodiacSign;
