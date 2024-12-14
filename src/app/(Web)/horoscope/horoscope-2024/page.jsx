import React from 'react'
import Daysection from '@/components/Daysection';
import CallchatReusable from '@/components/CallchatReusable';
import RecomendedAstro from '@/components/RecomendedAstro';
import HoroscopeContainer from '@/components/HoroscopeContainer';

const page = () => {
  return <div>
      <div className="px-[10px] lg:px-[65px]">
        <h1 className="text-[#212529] py-1 flex justify-center text-[40px] font-heading font-bold">
          Horoscope 2024!
        </h1>
        <p className="flex justify-center font-semibold py-1 text-[#6c757d]">
          2024
        </p>
        <p className="text-[#212529] py-2">
          Are you curious about what the stars have in store for you in the
          year 2024? Our team of expert astrologers has analyzed the celestial
          movements and planetary alignments to bring you accurate and
          insightful horoscope predictions for the upcoming year. Whether
          you’re seeking guidance in your career, love life, or personal
          growth, our horoscopes can provide valuable insights and help you
          navigate the challenges and opportunities that lie ahead. More ……
        </p>
        <Daysection />
        <HoroscopeContainer />
        <CallchatReusable />
      </div>
      <RecomendedAstro />
    </div>;
}

export default page
