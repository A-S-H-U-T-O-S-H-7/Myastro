"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import ChooseTimePeriod from "@/components/ChooseTimePeriod";
import ChooseZodiacSign from "@/components/ChooseZodiacSign";

export default function ZodiacSignPage() {
  const params = useParams();
  const zodiacsign = params?.zodiacsign; 
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      const apiUrl = `https://api.vedicastroapi.com/v3-json/prediction/daily-sun?zodiac=${zodiacId}&date=${new Date().toLocaleDateString(
        "en-GB"
      )}&show_same=true&api_key=76e85635-077b-505a-a046-1167548c6758&lang=en&split=true&type=big`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch horoscope data.");
        }

        const data = await response.json();
        setHoroscopeData(data?.response || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching horoscope data:", error);
        setError("Could not fetch horoscope data.");
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [zodiacsign, zodiacId]);

  if (loading) {
    return (
      <div className="flex flex-col lg:flex-row px-4 lg:px-12 py-6 gap-8">
        {/* Skeleton for Header */}
        <div className="w-full flex flex-col items-center mb-6">
          <div className="h-8 w-1/2 bg-gray-200 rounded-full shimmer"></div>
          <div className="h-4 w-1/4 bg-gray-200 rounded-full mt-2 shimmer"></div>
        </div>
  
        {/* Skeleton for Zodiac Details */}
        <div className="border border-gray-200 flex flex-col lg:flex-row items-center px-6 py-8 rounded-xl shadow-lg bg-white w-full">
          <div className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] overflow-hidden rounded-full bg-gray-200 shimmer"></div>
          <div className="flex flex-wrap justify-between w-full lg:w-auto text-sm gap-6 lg:gap-8 mt-6 lg:mt-0">
            {["Name", "Lucky Color", "Lucky Numbers"].map((item, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start">
                <div className="h-6 w-24 bg-gray-200 rounded-md shimmer"></div>
                <div className="h-4 w-16 bg-gray-200 mt-2 rounded-md shimmer"></div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Skeleton for Predictions */}
        <div className="mt-8 w-full">
          <div className="h-6 w-1/3 bg-gray-200 rounded-md shimmer"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg shadow-md bg-white"
                >
                  <div className="h-4 w-1/2 bg-gray-200 rounded-md shimmer mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded-md shimmer mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded-md shimmer"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (error) return <p className="text-red-500">{error}</p>;

  const {
    lucky_color: luckyColor,
    lucky_number: luckyNumbers,
    bot_response: botResponse,
  } = horoscopeData || {};

  return (
    <div className="flex ">

    <div className="flex flex-col lg:flex-row px-4 lg:px-12 py-6 gap-8">
      <div className="flex-1">
        <div className="mb-6 text-center">
          <h2 className="text-[32px] text-[#3C0184] font-heading font-bold text-center ">
          {zodiacsign.charAt(0).toUpperCase() + zodiacsign.slice(1).toLowerCase()} Today's Horoscope
          </h2>
          <p className="text-center font-bold text-gray-600">{new Date().toLocaleDateString("en-GB")}</p>
        </div>

        <div className="border border-purple-500 flex flex-col lg:flex-row items-center px-6 py-8 rounded-xl shadow-lg bg-gradient-to-r from-purple-50 to-purple-100">
  <div className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] overflow-hidden rounded-full mb-6 lg:mb-0 lg:mr-8 shadow-md">
    <Image src={`/Horoscope-icon/${zodiacsign?.toLowerCase()}.png`} alt={zodiacsign} width={180} height={180} className="object-cover" />
  </div>
  <div className="flex flex-wrap justify-between w-full lg:w-auto text-sm gap-6 lg:gap-8">
    <div className="text-center lg:text-left">
      <h3 className="font-extrabold text-2xl text-purple-700">{zodiacsign.charAt(0).toUpperCase() + zodiacsign.slice(1).toLowerCase()}</h3>
      <p className="text-gray-500 text-base">April 20 - May 20</p>
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


        <div className="mt-8">
          <h2 className="text-[24px] font-heading font-bold">Daily Prediction</h2>
          {botResponse ? (
  <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-6">
    {Object.entries(botResponse).map(([key, value]) => (
      <div
        key={key}
        className="p-6 border border-purple-300 rounded-lg shadow-md"
      >
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
      </div>
    </div>
    <div >
      <ChooseTimePeriod/>
      <ChooseZodiacSign/>
    </div>

    </div>
  );
}
