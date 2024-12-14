import React from 'react'
import Daysection from '@/components/Daysection';
import CallchatReusable from '@/components/CallchatReusable';
import RecomendedAstro from '@/components/RecomendedAstro';
import HoroscopeContainer from '@/components/HoroscopeContainer';

const page = () => {
  return <div>
      <div className="px-[10px] lg:px-[65px]">
        <h1 className="text-[#212529] py-1 flex justify-center text-[40px] font-heading font-bold">
          Daily horoscope
        </h1>
        <p className="flex justify-center font-semibold py-1 text-[#6c757d]">
        Today
        </p>
        <p className="text-[#212529] py-2">
          Welcome to our daily horoscope page! Here, you will find insightful
          predictions for each zodiac sign for the current day. Our expert
          astrologers have carefully analyzed the planetary movements and
          alignments to provide you with accurate guidance and insights into
          your day ahead. More …..
        </p>
        <Daysection />
        <HoroscopeContainer />
        <CallchatReusable />
      </div>
      <RecomendedAstro />
    </div>;
}

export default page
