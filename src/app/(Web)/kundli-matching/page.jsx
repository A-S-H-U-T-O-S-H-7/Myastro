import React from 'react'
import Image from 'next/image'
import Freekundli from '@/components/Freekundli';
import CallchatReusable from '@/components/CallchatReusable';
import RecomendedAstro from '@/components/RecomendedAstro';
import FAQ from '@/components/FAQ';
import KundliMatching from '@/components/KundliMatching';

function page() {
  return <div>
      <div className=" px-[10px] lg:px-[65px] py-4 ">
        <div className="relative">
          <Image className="w-full h-[250px] rounded-lg flex" src="/kundlimatching.webp" alt="Icon" width={400} height={400} />
          <h2 className="absolute top-1/2 left-2/3 transform -translate-x-1/2
                         -translate-y-1/2 text-yellow-300 text-[50px] font-heading font-bold
                         [text-shadow:_1px_1px_0_black,_-1px_1px_0_black,_1px_-1px_0_black,_-1px_-1px_0_black]" />
        </div>

        <div className='pt-10'>
          <h3 className='text-[24px] font-bold text-center'>Find your right one, through matchmaking</h3><br/>
          <p className='text-[18px] font-semibold'>
            Match Making - Kundli Milan & Gun Milan to Check Possibilities of
            Marriage:
          </p><br/>
          <p>
            Kundli milan or kundali matching is an important consideration to
            make when you decide to get married. Kundli matching, also called
            Gun matching or Horoscope matching is the first step towards
            marriage when the parents decide to match the kundlis of the girl
            and the boy to ensure the couple is compatible. The gun milan
            exercise has been a part of India's culture for 1000s of years now
            and continues to be so. <br/> <br/> So, if you too are the lucky one who is
            planning to get married, and hence looking for a horoscope
            matching with someone you have started liking, then Myastro can
            help you. The Kundali milan online software on Myastro has been
            prepared by the top astrologers of Myastro. The software caters to
            the free Kundli milan needs of the individuals and gives you
            insights; such as the number of guns matching for the girl and the
            boy, what they are compatible in, what their future would be like
            if they get married, and so much more. The online gun milan
            software can save you time and the hassle of going out to look for
            an astrologer to get the gun milan exercise done. Also, in case
            you have any doubts about the free kundali milan offered by
            Myastro, you can always connect with the astrologers on board and
            get those doubts sorted for yourself.
          </p>
        </div>

        <KundliMatching/>
      </div>
      <CallchatReusable />
      <FAQ />
      <RecomendedAstro />
    </div>;
}

export default page
