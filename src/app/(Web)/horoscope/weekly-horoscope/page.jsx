import React from 'react'
import Daysection from '@/components/Daysection';
import CallchatReusable from '@/components/CallchatReusable';
import RecomendedAstro from '@/components/RecomendedAstro';
import HoroscopeContainer from '@/components/HoroscopeContainer';

const page = () => {
  return <div>
      <div className="px-[10px] lg:px-[65px]">
        <h1 className="text-[#212529] py-1 flex justify-center text-[40px] font-heading font-bold">
          Weekly Horoscope
        </h1>
        <p className="flex justify-center font-semibold py-1 text-[#6c757d]">
          Sunday - Saturday
        </p>
        <p className="text-[#212529] py-2">
          Get ready to dive into the cosmic energies and discover what the
          week has in store for you. Our expert astrologers have analyzed the
          planetary movements and alignments to provide you with accurate and
          insightful predictions for your zodiac sign. Whether you’re seeking
          guidance in love, career, or personal growth, our weekly horoscopes
          can offer valuable insights to help you navigate the upcoming days.
          More…..
        </p>
        <Daysection />
        <HoroscopeContainer />
        <CallchatReusable />
      </div>
      <RecomendedAstro />
    </div>;
}

export default page
