"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ChooseTimePeriod from "@/components/ChooseTimePeriod";

export default function ZodiacSignPage() {
  const params = useParams();
  const zodiacsign = params?.zodiacsign;
  const [selectedPeriod, setSelectedPeriod] = useState("todays-horoscope");
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const periodsMap = {
    "todays-horoscope": "daily-sun",
    "tomorrows-horoscope": "daily-sun",
    "yesterdays-horoscope": "daily-sun",
    "weekly-horoscope": "weekly-sun",
    "monthly-horoscope": "monthly",
    "yearly-horoscope": "yearly",
  };

  const getZodiacIdByName = (name) => {
    if (!name) return null;
    const zodiacMap = {
      aries: 1,
      taurus: 2,
      gemini: 3,
      cancer: 4,
      leo: 5,
      virgo: 6,
      libra: 7,
      scorpio: 8,
      sagittarius: 9,
      capricorn: 10,
      aquarius: 11,
      pisces: 12,
    };
    return zodiacMap[name] || null;
  };

  const zodiacId = getZodiacIdByName(zodiacsign);

  useEffect(() => {
    if (!zodiacsign || !zodiacId) {
      setError("Invalid zodiac sign.");
      setLoading(false);
      return;
    }

    const fetchHoroscope = async () => {
      setLoading(true);
      setError(null);

      const apiType = periodsMap[selectedPeriod];
      const dateParam =
        selectedPeriod === "yesterdays-horoscope"
          ? new Date(Date.now() - 86400000).toLocaleDateString("en-GB")
          : selectedPeriod === "tomorrows-horoscope"
          ? new Date(Date.now() + 86400000).toLocaleDateString("en-GB")
          : new Date().toLocaleDateString("en-GB");

      const apiUrl = `https://api.vedicastroapi.com/v3-json/prediction/${apiType}?zodiac=${zodiacId}&date=${dateParam}&show_same=true&api_key=76e85635-077b-505a-a046-1167548c6758&lang=en&split=true&type=big`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch horoscope data.");
        }
        const data = await response.json();
        setHoroscopeData(data?.response || null);
      } catch (error) {
        setError("Could not fetch horoscope data.");
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [zodiacsign, zodiacId, selectedPeriod]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const {
    lucky_color: luckyColor,
    lucky_number: luckyNumbers,
    bot_response: botResponse,
  } = horoscopeData || {};

  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-12 py-6 gap-8">
      <div className="flex-1">
        <h2 className="text-[32px] text-center py-4 font-heading font-bold">
          {zodiacsign.charAt(0).toUpperCase() + zodiacsign.slice(1)}'s {selectedPeriod.replace("-", " ")}
        </h2>

        <div className="border border-purple-500 flex flex-col lg:flex-row items-center px-6 py-5 rounded-xl shadow-lg bg-gradient-to-r from-purple-50 to-purple-100">
  <div className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] overflow-hidden rounded-full mb-6 lg:mb-0 lg:mr-8 shadow-md">
  </div>
  <div className="flex flex-wrap justify-between w-full lg:w-auto text-sm gap-6 lg:gap-8">
    <div className="text-center lg:text-left">
      <h3 className="font-extrabold text-2xl text-purple-700">{zodiacsign.charAt(0).toUpperCase() + zodiacsign.slice(1).toLowerCase()}</h3>
    </div>
    <div className="text-center lg:text-left">
      <p className="font-semibold text-lg text-purple-500">Lucky Color</p>
      <p
        className="text-gray-700 text-base text-center font-medium"
      >
        {luckyColor || "N/A"}
      </p>
    </div>
    <div className="text-center lg:text-left">
      <p className="font-semibold text-lg text-purple-500">Lucky Numbers</p>
      <p className="text-gray-700 text-base text-center font-medium">{luckyNumbers?.join(", ") || "N/A"}</p>
    </div>
    <div className="text-center lg:text-left">
      <p className="font-semibold text-lg text-purple-500">Lucky Alphabets</p>
      {/* <p className="text-gray-700 font-medium">{luckyAlphabets || "N/A"}</p> */}
    </div>
  </div>
</div>

          {botResponse ? (
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-6">
                {Object.entries(botResponse).map(([key, value]) => (
                  <div key={key} className="p-6 border border-purple-300 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg text-purple-600 capitalize">{key.replace("_", " ")}</h3>
                    <p className="text-gray-800 mt-2 text-sm">{value.split_response}</p>
                    <p className="text-gray-600 mt-1 text-sm font-medium">Score: {value.score}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 text-sm mt-4">No detailed predictions available.</p>
            )}


      </div>
      <ChooseTimePeriod selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
    </div>
  );
}
