"use client";
import Sidebar from "@/components/Admin/Sidebar";
import Adminnavbar from "@/components/Admin/Adminnavbar";
import Footer from "@/components/Admin/Footer";
export default function Main({ children }) {
  return (
    <div className="bg-[#060818] pt-3 min-h-[600px]">
     <Adminnavbar/>
     <Sidebar/>
      {children}
      <Footer/>
    </div>
  );
}
