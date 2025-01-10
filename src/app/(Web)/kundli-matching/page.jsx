import React from 'react'
import Image from 'next/image'
import Freekundli from '@/components/Freekundli';
import CallchatReusable from '@/components/CallchatReusable';
import RecomendedAstro from '@/components/RecomendedAstro';
import FAQ from '@/components/FAQ';
import KundliMatching from '@/components/KundliMatching';

function page() {
  const faqsData = [
    {
      key: 1,
      question: "How does Kundli Matching help in building a successful marriage?",
      answer:
        "Marriage is one of the most significant decisions in life, and Kundli Matching offers a way to evaluate the potential compatibility between two individuals. By analyzing their birth charts, it provides insights into areas like emotional connection, shared goals, and mutual understanding. It identifies strengths in the relationship and highlights potential challenges that the couple may face in their journey together. With this knowledge, both individuals can enter into the marriage with a better understanding of each other, increasing the chances of a harmonious and fulfilling relationship.",
    },
    {
      key: 2,
      question: "Why is compatibility so crucial in a lifelong partnership?",
      answer:
        "A successful marriage thrives on mutual compatibility, which goes beyond shared interests and surface-level understanding. It includes emotional balance, aligned life goals, and the ability to support each other during challenging times. Kundli Matching assesses these deeper aspects of compatibility, such as mental harmony, financial stability, and health prospects. This holistic approach ensures that both partners are well-prepared to handle the ups and downs of life together, creating a strong foundation for a lasting partnership.",
    },
    {
      key: 3,
      question: "What makes Kundli Matching unique compared to modern relationship advice?",
      answer:
        "Modern relationship advice often focuses on communication, trust, and shared values, which are essential for any partnership. Kundli Matching complements this by offering a spiritual and astrological perspective. It delves into the cosmic alignment of two individuals, analyzing factors like planetary positions and their impact on various life areas. This approach helps to foresee and address potential conflicts that might not be apparent through conventional means, offering a unique blend of traditional wisdom and practical preparation for marriage.",
    },
    {
      key: 4,
      question: "How does Kundli Matching provide clarity about the future of a relationship?",
      answer:
        "Kundli Matching uses the Ashtakoota system to evaluate compatibility, assigning points to areas like emotional bonding, health, financial stability, and family dynamics. By comparing the birth charts of both individuals, it identifies patterns that might influence their married life. For instance, it can reveal whether the couple is likely to face financial challenges or health concerns. While it cannot predict specific events, it equips couples with valuable insights, enabling them to plan for their future and build a stronger, more resilient relationship.",
    },
    {
      key: 5,
      question: "What role does Kundli Matching play in overcoming doubts about a relationship?",
      answer:
        "Doubts and uncertainties are natural when considering a lifelong commitment like marriage. Kundli Matching acts as a guiding tool, addressing questions about compatibility, shared values, and potential challenges. By offering a detailed analysis of both individuals' strengths and weaknesses, it helps to resolve ambiguities and provides clarity. This process reassures both partners and their families, instilling confidence in their decision to move forward with the relationship.",
    },
    {
      key: 6,
      question: "Can Kundli Matching support couples who are already in love?",
      answer:
        "Absolutely. Even in love marriages, Kundli Matching offers significant benefits. It doesn’t aim to challenge or question the couple’s bond but enhances their understanding of each other. It highlights areas where they naturally align and areas that may require conscious effort. By addressing these aspects early, couples can strengthen their relationship, ensuring that their love endures through life’s challenges. It’s about making a well-informed decision and building a future with deeper awareness.",
    },
  ];
  


  return <div>
      <div className=" px-[10px] lg:px-[65px] py-4 ">
        <div className="relative">
          <Image className="w-full h-[250px] rounded-lg flex" src="/kundlimatching.jpg" alt="Icon" width={900} height={900} />
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
      <FAQ faqs={faqsData} />
      <RecomendedAstro />
    </div>;
}

export default page
