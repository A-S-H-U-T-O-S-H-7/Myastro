import React from "react";
import { zodiacSigns } from "./zodiacSigns"; 
import Horoscopecard from "./Horoscopecard";
import Link from "next/link";

const HoroscopeContainer = () => {
  return (
    <div className="grid grid-cols-1 py-8 lg:grid-cols-3 gap-5">
      {zodiacSigns.map((sign, index) => (
        <Link href="/horoscope/todays-horoscope/Aries">
        <Horoscopecard
          key={index}
          name={sign.name}
          image={sign.image}
          description={sign.description}
        />
        </Link>
      ))}
    </div>
  );
};

export default HoroscopeContainer;
