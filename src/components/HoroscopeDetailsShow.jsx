"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useHoroscopeService } from "@/lib/HoroscopeServicesContext";
function HoroscopeDetailsShow() {

    const { horoscopename, zodiacsign } = useParams();
    const [horoscopeData, setHoroscopeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { selectedHoroscope, handleSelectHoroscope, selectedZodiacSign, handleSelectZodiacSign } = useHoroscopeService();
    const capitalizeFirstLetter = (str) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const onZodiacSignSelect = (zodiacsign) => {
        const formattedZodiacSign = capitalizeFirstLetter(zodiacsign);
        return formattedZodiacSign;
    };

    handleSelectHoroscope(horoscopename);
    handleSelectZodiacSign(onZodiacSignSelect(zodiacsign));

    useEffect(() => {
        if (!zodiacsign || !horoscopename) {
          setError("Invalid zodiac sign.");
          setLoading(false);
          return;
        }
    
        const fetchHoroscope = async () => {
          setLoading(true);
          setError(null);
    
          const formatDate = (format) => {
            const date = new Date();
            const options = { day: "2-digit", month: "2-digit", year: "numeric" };
            if (format === "d/m/y") {
              return new Intl.DateTimeFormat("en-GB", options).format(date);
            }
            if (format === "y") {
              return date.getFullYear();
            }
            return "";
          };
    
          let apiUrl = "";
          try {
            if (selectedHoroscope.api === "daily-sun") {
              apiUrl = `https://api.vedicastroapi.com/v3-json/prediction/daily-sun?zodiac=${selectedZodiacSign.id}&date=${formatDate(
                "d/m/y"
              )}&show_same=true&api_key=76e85635-077b-505a-a046-1167548c6758&lang=en&split=true&type=big`;
              
            } else if (selectedHoroscope.api === "weekly-sun") {
              apiUrl = `https://api.vedicastroapi.com/v3-json/prediction/weekly-sun?zodiac=${selectedZodiacSign.id}&week=thisweek&show_same=true&api_key=76e85635-077b-505a-a046-1167548c6758&lang=en`;
            } else if (selectedHoroscope.api === "yearly") {
              apiUrl = `https://api.vedicastroapi.com/v3-json/prediction/yearly?year=${formatDate(
                "y"
              )}&zodiac=${selectedZodiacSign.id}&api_key=76e85635-077b-505a-a046-1167548c6758&lang=en`;
            } else {
              throw new Error("Invalid horoscope type.");
            }
            console.log(apiUrl)
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data)
            setHoroscopeData(data?.response || null);
          } catch (err) {
            console.error("Error fetching horoscope data:", err);
            setError("Could not fetch horoscope data. Please try again later.");
          } finally {
            setLoading(false);
          }
        };
    
        fetchHoroscope();
      }, [horoscopename, zodiacsign]);
    



    if (loading) return <div className="flex-1">Loading...</div>;
    if (error) return <div className="flex-1">{error}</div>;

    const {
        lucky_color: luckyColor,
        lucky_number: luckyNumbers,
        bot_response: botResponse,
    } = horoscopeData || {};
    return (
        <div className="flex-1">
            <h2 className="text-[32px] text-center py-4 font-heading font-bold">
                {selectedZodiacSign?.name}'s {selectedHoroscope.title}
            </h2>

            <div className="border border-purple-500 flex flex-col lg:flex-row items-center px-6 py-5 rounded-xl shadow-lg bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] overflow-hidden rounded-full mb-6 lg:mb-0 lg:mr-8 shadow-md">
                    <img
                        src={`${selectedZodiacSign?.image}`}
                        alt={selectedZodiacSign?.name}
                        className="object-cover w-full h-full rounded-full"
                    />
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
    )
}

export default HoroscopeDetailsShow;