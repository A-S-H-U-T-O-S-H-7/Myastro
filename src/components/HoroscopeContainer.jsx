"use client";
import React from "react";
import { zodiacSigns } from "./zodiacSigns";
import Horoscopecard from "./Horoscopecard";
import Link from "next/link";
import { useHoroscopeService } from "@/lib/HoroscopeServicesContext";

const HoroscopeContainer = () => {
  const { selectedHoroscope } = useHoroscopeService();
  return (
    <div className="grid grid-cols-1 py-8 lg:grid-cols-3 gap-5">
      {zodiacSigns.map((sign, index) => (
        <Link
          key={index}
          href={{
            pathname: `/horoscope/${selectedHoroscope.slug}/${sign.name.toLowerCase()}`
          }}
        >
          <Horoscopecard
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
