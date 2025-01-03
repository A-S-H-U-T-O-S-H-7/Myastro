import AstroNavbar from "@/components/AstroNavbar";
import BlogSection from "@/components/BlogSection";
import CustomerFeedbackCarousel from "@/components/CustomerFeedbackCarousel";
import DetailsContent from "@/components/DetailsContent";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HomeAstrologerCardContainer from "@/components/HomeAstrologerCardContainer";

export default function Home() {
  const faqsData = [
    {
        key:1,
      question: "What can astrology tell me about my life?",
      answer: "Astrology can provide insights into various aspects of your life, such as your personality, relationships, career, and future prospects. By analyzing the positions and movements of celestial bodies at the time of your birth, astrology helps to highlight your strengths, challenges, and potential paths for personal growth. It can offer guidance on making decisions that align with your true self, allowing you to better understand your purpose and navigate life's ups and downs with more clarity.",
    },
    {
        key:2, 
      question: "How accurate are online astrology readings?",
      answer: "Online astrology readings can be quite accurate if based on reliable data, such as your birth chart, and interpreted by experienced astrologers. While astrology is not a science in the conventional sense, many people find that it provides valuable perspectives and guidance. The key to accuracy is the depth of analysis, as even minor details like the exact time and place of birth can influence the insights provided. Many platforms also offer personalized readings that can be more tailored to your life’s unique circumstances.",
    },
    {
        key:3,
      question: "How can astrology help me with my career?",
      answer: "Astrology offers valuable insights into your natural talents, strengths, and potential career paths based on your birth chart. By examining your Sun sign, Moon sign, and other planetary positions, astrologers can identify the types of work environments where you might thrive, the kind of roles you are most suited for, and even the timing of when you may experience career growth. Whether you're facing a career transition or seeking more fulfillment in your current job, astrology can offer a different perspective to help you make decisions aligned with your purpose.",
    },
    {
      key:4,
    question: "Can astrology help me in finding the right partner?",
    answer: "Astrology can be a powerful tool in understanding the dynamics of romantic relationships. By comparing the birth charts of you and your potential partner, astrologers can assess compatibility, emotional needs, and relationship patterns. This can help in identifying common ground and areas where you may face challenges. While astrology doesn’t guarantee perfect relationships, it can provide insights into your communication styles, emotional compatibility, and the type of partner who would complement you best, guiding you toward a healthier and more fulfilling relationship.",
  },
  {
    key:5,
    question:"How often should I get an astrology reading?",
    answer:"How often you seek an astrology reading depends on your personal needs and what you're hoping to gain. Some individuals consult astrologers once a year, especially around their birthday, to get a look at upcoming transits and opportunities. Others may reach out when facing major life decisions, transitions, or challenges. Many people find that a reading every few months provides helpful guidance for navigating both big and small life events, while others prefer more frequent check-ins for ongoing clarity. Ultimately, it’s about what feels right for your journey."
  },
  {
    key:6,
    question:"Is astrology just about your zodiac sign?",
    answer:"While your zodiac sign—determined by the position of the Sun at the time of your birth—is an important element of astrology, it is just one part of the puzzle. A full astrological analysis includes other factors such as your Moon sign, rising sign, and the positions of the planets. Each of these aspects provides a more detailed picture of your personality, emotions, and life experiences. Zodiac signs give a general overview, but for a complete understanding, you need to look at your full birth chart, which offers a much deeper, more accurate profile of who you are."
  }

  ];
  return (
    <>
      <HeroSection />
      <AstroNavbar />
      <HomeAstrologerCardContainer />
      <BlogSection />
      <CustomerFeedbackCarousel />
      <DetailsContent />
      <FAQ faqs={faqsData}/>
    </>
  );
}
