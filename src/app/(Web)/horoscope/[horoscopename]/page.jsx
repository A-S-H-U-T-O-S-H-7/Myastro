"use client";
import React from "react";
import Daysection from "@/components/Daysection";
import HoroscopeContainer from "@/components/HoroscopeContainer";
import CallchatReusable from "@/components/CallchatReusable";
import RecomendedAstro from "@/components/RecomendedAstro";
import { useHoroscopeService } from "@/lib/HoroscopeServicesContext";
import { useParams } from "next/navigation";

const HoroscopePage = () => {
  const { horoscopename } = useParams();
  const { selectedHoroscope, handleSelectHoroscope } = useHoroscopeService();
  handleSelectHoroscope(horoscopename);

  if (!selectedHoroscope) return <div>Loading...</div>;
  return (
    <div>
      <div className="px-[10px] lg:px-[65px]">
        <h1 className="py-1 flex text-[#3C0184] justify-center text-[40px] font-heading font-bold">
          {selectedHoroscope.title}
        </h1>
        <p className="flex justify-center font-semibold py-1 text-[#6c757d]">
          {selectedHoroscope.title}
        </p>
        <p className="text-[#212529] py-2">{selectedHoroscope.description}</p>
        <Daysection />
        <HoroscopeContainer />
        <CallchatReusable />
      </div>
      <RecomendedAstro />
    </div>
  );
};

export default HoroscopePage;
