"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subfooter from "@/components/Subfooter";
import UserSignup from "@/components/UserSignup";
export default function Main({ children }) {
  return (
    <div>
      <Navbar />
      <UserSignup />
      {children}
      <Footer />
      <Subfooter />
    </div>
  );
}
