import React from 'react'
import Image from 'next/image'
import RecomendedAstro from '@/components/RecomendedAstro'
import CallchatReusable from '@/components/CallchatReusable'
import FAQ from '@/components/FAQ'
import Freekundli from '@/components/Freekundli'
import IndivisualAstrologer from '@/components/IndivisualAstrologer'

function page() {
  return <div>
      <div className=" px-[10px] lg:px-[65px] py-4 ">
        <div className="relative">
          <Image className="w-full h-[250px] rounded-lg flex" src="/FreeKundli.png" alt="Icon" width={400} height={400} />
          <h2 className="absolute top-1/2 left-2/3 transform -translate-x-1/2
                   -translate-y-1/2 text-yellow-300 text-[50px] font-heading font-bold
                   [text-shadow:_1px_1px_0_black,_-1px_1px_0_black,_1px_-1px_0_black,_-1px_-1px_0_black]">
            Kundli Patrika
          </h2>

        </div>
        <div className="font-sans pt-10">
          Welcome to our <span className="font-medium">
            Free Kundli
          </span> page! Kundli, also known as a birth chart or horoscope, is a detailed astrological chart that represents the position of celestial bodies at the time of your birth. It provides valuable insights into your personality, life events, and future prospects.<br />
          Our <span className="font-medium">Free Kundli</span> service allows you to generate your personalized Kundli online, without any cost. Simply input your birth details, including date, time, and place of birth, and our advanced software will generate your Kundli instantly.<br />
          <br />
          <p className="font-medium">
            Once you have your Kundli, you can explore various aspects of your
            life, including:
          </p>
          <br />
          <span className="font-semibold">
            Personality Traits:
          </span> Discover your unique personality traits based on the positions of the planets at the time of your birth. Understand your strengths, weaknesses, and potential areas of growth.<br />
          <span className="font-semibold"> Career and Education:</span> Get insights into suitable career paths and educational pursuits based on your Kundli. Identify your natural talents and areas where you can excel.<br />
          <span className="font-semibold">
            {" "}Relationships and Marriage:
          </span> Understand your compatibility with potential partners or gain insights into your existing relationships. Kundli can provide valuable information about your love life and marital prospects.<br />
          <span className="font-semibold"> Health and Well-being:</span> Learn about potential health issues or vulnerabilities based on your Kundli. Take preventive measures and make informed lifestyle choices to maintain your well-being.<br />
          <span className="font-semibold"> Finance and Wealth:</span> Gain insights into your financial prospects and wealth accumulation potential. Kundli can provide guidance on investment opportunities and favorable periods for financial growth.<br />
          <br />
          Our <span className="font-semibold">
            Free Kundli
          </span> service is designed to help you unlock the mysteries of your life and make informed decisions. However, it’s important to remember that astrology is a tool for self-reflection and guidance, and ultimately, your actions and choices shape your destiny.<br />
          Please note that while our <span className="font-semibold">
            Free Kundli
          </span> service provides a comprehensive analysis, for more detailed and personalized insights, you may consider consulting with our expert astrologers.<br />
          <span className="font-bold">
            Unlock the secrets of your destiny with our Free Kundli service
            today!
          </span>
        </div>

       <Freekundli/>
      </div>

      <CallchatReusable />
      <FAQ />
      <RecomendedAstro />
    </div>;
}

export default page
