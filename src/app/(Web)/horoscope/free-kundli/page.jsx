import React from 'react'
import Image from 'next/image'
import RecomendedAstro from '@/components/RecomendedAstro'
import CallchatReusable from '@/components/CallchatReusable'
import FAQ from '@/components/FAQ'
import Freekundli from '@/components/Freekundli'

function page() {
  const faqsData = [
    {
      key: 1,
      question: "Why is creating a Kundli important for me?",
      answer:
        "Creating a Kundli is essential for understanding various aspects of your life, including your personality, strengths, weaknesses, and potential future events. It serves as a roadmap to navigate your life’s journey with better clarity. By analyzing the planetary positions at the time of your birth, a Kundli can help uncover your natural talents, suitable career paths, relationships, and even life challenges. It’s a tool that empowers self-awareness and decision-making.",
    },
    {
      key: 2,
      question: "How can I create a Kundli online that resonates with my personal details?",
      answer:
        "To create an accurate Kundli online, you need to provide your exact date, time, and place of birth. These details are crucial because even minor variations can change the planetary positions in your chart. Once you enter this information, the system generates a personalized birth chart that reflects your unique astrological profile. The online process is simple, efficient, and eliminates the need to manually calculate complex astrological elements.",
    },
    {
      key: 3,
      question: "Can an online Kundli truly reflect who I am?",
      answer:
        "Yes, an online Kundli can provide an accurate and detailed picture of your astrological identity, provided your birth details are correct. These charts are based on precise Vedic astrology principles, which have been trusted for centuries. The insights offered often resonate deeply with an individual’s life experiences, from career and relationships to personal challenges. While interpretations can vary, the fundamental calculations are accurate and reliable.",
    },
    {
      key: 4,
      question: "Do I need to know astrology to understand my Kundli?",
      answer:
        "Absolutely not! Online Kundli tools are designed to be user-friendly and accessible to everyone. You don’t need any prior knowledge of astrology. Most tools provide detailed explanations and summaries of the key elements in your chart, such as your Lagna (ascendant), planetary placements, and life periods. These interpretations are presented in simple terms, making it easy for anyone to explore and understand their astrological profile.",
    },
    {
      key: 5,
      question: "What specific benefits will I gain from creating my Kundli?",
      answer:
        "Creating your Kundli offers numerous benefits. It can help you understand your personality traits, identify your strengths, and discover areas where improvement is needed. You can also gain insights into your career path, financial opportunities, and compatibility with others. Many people use their Kundli to plan important life events, such as marriage or career changes, as it provides a broader perspective on the timing and likelihood of success.",
    },
    {
      key: 6,
      question: "Is creating a Kundli online really free, and are there any hidden costs?",
      answer:
        "Yes, the basic process of generating a Kundli online is completely free. This means you can access your birth chart, planetary positions, and basic interpretations without any charges. However, some platforms may offer optional premium services, such as detailed reports or personalized consultations, which you can choose to purchase if needed. Rest assured, the free version itself provides significant value.",
    },
  ];
  
  return <div>
      <div className=" px-[10px] lg:px-[65px] py-4 ">
        <div className="relative">
          <Image className="w-full h-[250px] quality={100} rounded-lg flex" src="/FK2.jpg" alt="Icon" width={800} height={850}/>
          {/* <h2 className="absolute top-1/2 left-2/3 transform -translate-x-1/2
                   -translate-y-1/2 text-yellow-300 text-[50px] font-heading font-bold
                   [text-shadow:_1px_1px_0_black,_-1px_1px_0_black,_1px_-1px_0_black,_-1px_-1px_0_black]">
            Kundli Patrika
          </h2> */}

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
      <FAQ faqs={faqsData}/>
      <RecomendedAstro />
    </div>;
}

export default page
