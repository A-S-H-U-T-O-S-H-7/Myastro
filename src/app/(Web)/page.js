import AstroNavbar from "@/components/AstroNavbar";
import BlogSection from "@/components/BlogSection";
import CustomerFeedbackCarousel from "@/components/CustomerFeedbackCarousel";
import DetailsContent from "@/components/DetailsContent";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HomeAstrologerCardContainer from "@/components/HomeAstrologerCardContainer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AstroNavbar />
      <HomeAstrologerCardContainer />
      <BlogSection />
      <CustomerFeedbackCarousel />
      <DetailsContent />
      <FAQ />
    </>
  );
}
