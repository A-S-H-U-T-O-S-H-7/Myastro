"use client"
import { useParams } from 'next/navigation';
import Daysection from '@/components/Daysection'; // Adjust the path as per your structure
import HoroscopeContainer from '@/components/HoroscopeContainer';
import CallchatReusable from '@/components/CallchatReusable';
import RecomendedAstro from '@/components/RecomendedAstro';

const HoroscopePage = () => {
  const { horoscopename } = useParams();

  const formattedName = horoscopename
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div>
      <div className="px-[10px] lg:px-[65px]">
        <h1 className="text-[#212529] py-1 flex justify-center text-[40px] font-heading font-bold">
          {formattedName}
        </h1>
        <p className="flex justify-center font-semibold py-1 text-[#6c757d]">
          {formattedName}
        </p>
        <p className="text-[#212529] py-2">
          Discover what the stars have in store for you with our {formattedName} readings. Our expert astrologers analyze the current planetary positions and alignments to provide you with accurate and insightful predictions for your zodiac sign.
        </p>
        <Daysection />
       <HoroscopeContainer/>
       <CallchatReusable/>
      </div>
      <RecomendedAstro/>
    </div>
  );
};

export default HoroscopePage;
