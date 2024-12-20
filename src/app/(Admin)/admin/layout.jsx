"use client";
import Sidebar from "@/components/Admin/Sidebar";
import Adminnavbar from "@/components/Admin/Adminnavbar";
import Footer from "@/components/Admin/Footer";
export default function Main({ children }) {
  return (
    <div className="bg-[#060818]">
     <Adminnavbar/>
     <Sidebar/>
      {children}
      <Footer/>
    </div>
  );
}
