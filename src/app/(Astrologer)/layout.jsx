"use client";
import AstrologerNavbar from "@/components/Astrologer/AstrologerNavbar";
import AstroFooter from "@/components/Astrologer/AstroFooter";
import AstroSidebar from "@/components/Astrologer/AstroSidebar";

export default function Main({ children }) {
  return (
    <div className="bg-white dark:bg-[#060818] pt-3 min-h-[600px]">
      <AstrologerNavbar />
      <AstroSidebar />
      {children}
      <AstroFooter />
    </div>
  );
}
