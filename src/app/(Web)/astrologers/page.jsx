import React from 'react'
import AstroNavbar from '@/components/AstroNavbar'
import AstrologerCardContainer from '@/components/AstrologerCardContainer'
import DetailsContent from '@/components/DetailsContent'
import FAQ from '@/components/FAQ'
import Image from 'next/image'

const Astrologers = () => {
  const faqsData = [
    {
      key: 1,
      question: "What can astrology tell me about my life?",
      answer:
        "Astrology can provide insights into various aspects of your life, such as your personality, relationships, career, and future prospects. By analyzing the positions and movements of celestial bodies at the time of your birth, astrology helps to highlight your strengths, challenges, and potential paths for personal growth. It can offer guidance on making decisions that align with your true self, allowing you to better understand your purpose and navigate life's ups and downs with more clarity.",
    },
    {
      key: 2,
      question: "How accurate are online astrology readings?",
      answer:
        "Online astrology readings can be quite accurate if based on reliable data, such as your birth chart, and interpreted by experienced astrologers. While astrology is not a science in the conventional sense, many people find that it provides valuable perspectives and guidance. The key to accuracy is the depth of analysis, as even minor details like the exact time and place of birth can influence the insights provided. Many platforms also offer personalized readings that can be more tailored to your life’s unique circumstances.",
    },
    {
      key: 3,
      question: "How can astrology help me with my career?",
      answer:
        "Astrology offers valuable insights into your natural talents, strengths, and potential career paths based on your birth chart. By examining your Sun sign, Moon sign, and other planetary positions, astrologers can identify the types of work environments where you might thrive, the kind of roles you are most suited for, and even the timing of when you may experience career growth. Whether you're facing a career transition or seeking more fulfillment in your current job, astrology can offer a different perspective to help you make decisions aligned with your purpose.",
    },
    {
      key: 4,
      question: "What is a birth chart, and why is it important?",
      answer:
        "A birth chart, also known as a natal chart, is a map of the sky at the exact moment of your birth. It shows the positions of the Sun, Moon, and planets in relation to the Earth and their influence on your personality and life events. The birth chart reveals the fundamental aspects of your character, your emotional responses, life challenges, and even your spiritual purpose. Understanding your birth chart allows you to gain deeper self-awareness and better understand why you approach life the way you do.",
    },
    {
      key: 5,
      question: "Can astrology predict my future?",
      answer:
        "Astrology doesn’t predict the future with absolute certainty, but it can offer guidance and highlight potential trends, opportunities, and challenges in your life. By analyzing the movements of planets and their effects on your birth chart, astrologers can give you insights into upcoming cycles or phases, whether they relate to love, career, health, or personal growth. While the future is shaped by your actions and choices, astrology provides you with a roadmap of influences that can help you make more informed decisions and prepare for what lies ahead.",
    },
    {
      key: 6,
      question: "Are online astrology apps and their advice trustworthy?",
      answer:
        "Online astrology apps can be a helpful tool, but their trustworthiness depends on several factors. While these apps can provide useful general guidance, it's important to understand that astrology is a deeply personal and complex practice. A lot of online platforms offer generalized horoscopes or automated readings based on basic details like your zodiac sign or birth date. These might not always be accurate or tailored to your specific circumstances. For more personalized advice, apps that rely on a detailed birth chart, including the exact time and place of birth, tend to offer more accurate insights.\n\nHowever, the expertise of the astrologer behind the app or service is another crucial factor. Trusted apps are typically run by professional astrologers with significant experience in chart interpretation, while others may rely on automated algorithms, which can be less reliable. Always look for apps that provide transparency about their methodology and offer personalized readings based on a complete astrological chart rather than generic advice. In summary, online astrology apps can offer valuable perspectives, but it’s essential to approach them with an open mind and a critical eye. Cross-referencing advice from different sources or consulting with an experienced astrologer can help you make more informed decisions.",
    },
  ];
  

  return (
    <>
     <div className="relative px-[10px] lg:px-[65px]">
              <Image className="w-full h-[250px] my-[10px] quality={100} rounded-lg flex" src="/AstrologerHeroImage.jpg" alt="Icon" width={1900} height={1900}/>
                  
            </div>
      <AstroNavbar />
      <AstrologerCardContainer sliceCount={50} />
      <DetailsContent />
      <FAQ faqs={faqsData} />
    </>
  )
}

export default Astrologers
