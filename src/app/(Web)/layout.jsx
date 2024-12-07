"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Subfooter from "@/components/Subfooter";
import HeroSection from "@/components/HeroSection";
import AstroNavbar from "@/components/AstroNavbar";
import AstrologerCardContainer from "@/components/AstrologerCardContainer";
import FAQ from "@/components/FAQ";
import DetailsContent from "@/components/DetailsContent";
import CustomerFeedbackCarousel from "@/components/CustomerFeedbackCarousel";

export default function Main() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <AstroNavbar />
      <AstrologerCardContainer />

      <div className="flex justify-center py-6">
        <div className="max-w-[250px] min-h-[41px] rounded-3xl px-8 py-2  hover:text-white   text-[#317f7f] hover:bg-[#3C0184] border border-[#3C0184] ">
          <h3 className="font-semibold cursor-pointer ">
            View All Astrologers
          </h3>
        </div>
      </div>
      <CustomerFeedbackCarousel />
      <DetailsContent />
      <FAQ />
      <Footer />
      <Subfooter />
    </div>
  );
}
