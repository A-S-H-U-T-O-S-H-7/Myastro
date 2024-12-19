import AstrologerCardContainer from "@/components/AstrologerCardContainer";
import AstroNavbar from "@/components/AstroNavbar";
import BlogSection from "@/components/BlogSection";
import CustomerFeedbackCarousel from "@/components/CustomerFeedbackCarousel";
import DetailsContent from "@/components/DetailsContent";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AstroNavbar />
      <AstrologerCardContainer />
      <div className="flex justify-center py-6">
        <Link href="/astrologers">
        <div className="max-w-[250px] min-h-[41px] rounded-3xl px-8 py-2  hover:text-white   text-[#317f7f] hover:bg-[#3C0184] border border-[#3C0184] ">
          <h3 className="font-semibold cursor-pointer ">
            View All Astrologers
          </h3>
        </div>
        </Link>
      </div>
      <BlogSection />
      <CustomerFeedbackCarousel />
      <DetailsContent />
      <FAQ />
    </>
  );
}
