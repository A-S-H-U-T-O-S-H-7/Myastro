"use client";
import { zodiacSigns } from "@/components/zodiacSigns";
import React, { createContext, useState, useContext } from "react";
const HoroscopeContext = createContext();
export const HoroscopeServices = [
  {
    service_id: 1,
    title: "Horoscope 2025",
    description:
      "Discover what the stars have in store for you with our Horoscope 2024 readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.",
    slug: "horoscope-2025",
    api: "yearly",
  },
  {
    service_id: 2,
    title: "Daily Horoscope",
    description:
      "Discover what the stars have in store for you with our Daily Horoscope readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.",
    slug: "daily-horoscope",
    api: "daily-sun",
  },
  {
    service_id: 3,
    title: "Today's Horoscope",
    description:
      "Discover what the stars have in store for you with our Today's Horoscope readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.",
    slug: "todays-horoscope",
    api: "daily-sun",
  },
  {
    service_id: 4,
    title: "Weekly Horoscope",
    description:
      "Discover what the stars have in store for you with our Weekly Horoscope readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.",
    slug: "weekly-horoscope",
    api: "weekly-sun",
  },
  {
    service_id: 5,
    title: "Monthly Horoscope",
    description:
      "Discover what the stars have in store for you with our Monthly Horoscope readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.",
    slug: "monthly-horoscope",
    api: "weekly-sun",
  },
  {
    service_id: 6,
    title: "Yearly Horoscope",
    description:
      "Discover what the stars have in store for you with our Yearly Horoscope readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.",
    slug: "yearly-horoscope",
    api: "yearly",
  },
  {
    service_id: 7,
    title: "Yesterday's Horoscope",
    description:
      "Discover what the stars have in store for you with our Yesterday's Horoscope readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.",
    slug: "yesterdays-horoscope",
    api: "daily-sun",
  },
  {
    service_id: 8,
    title: "Tomorrow's Horoscope",
    description:
      "Discover what the stars have in store for you with our Tomorrow's Horoscope readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.",
    slug: "tomorrows-horoscope",
    api: "daily-sun",
  },
];

export const HoroscopeContextProvider = ({ children }) => {
  const [selectedHoroscope, setSelectedHoroscope] = useState(
    HoroscopeServices[0]
  );
  const [selectedZodiacSign, setSelectedZodiacSign] = useState(zodiacSigns[0]);

  const handleSelectHoroscope = (slug) => {
    setSelectedHoroscope(HoroscopeServices.find((hs) => hs.slug === slug));
  };
  const handleSelectZodiacSign = (name) => {
    setSelectedZodiacSign(zodiacSigns.find((zs) => zs.name === name));
  };

  return (
    <HoroscopeContext.Provider
      value={{
        selectedHoroscope,
        handleSelectHoroscope,
        selectedZodiacSign,
        handleSelectZodiacSign,
      }}
    >
      {children}
    </HoroscopeContext.Provider>
  );
};
export const useHoroscopeService = () => {
  const context = useContext(HoroscopeContext);
  if (!context) {
    throw new Error("Horoscope context provider is not available");
  }
  return context;
};

