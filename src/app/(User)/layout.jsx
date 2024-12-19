"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subfooter from "@/components/Subfooter";
export default function Main({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Subfooter />
    </div>
  );
}
