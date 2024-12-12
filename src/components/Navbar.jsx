"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import UserSignup from "./UserSignup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for side-slider menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for Horoscope dropdown
  const [isProfileOpen, setProfileOpen] = useState(false);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest(".dropdown")) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileOpen]);

  return (
    <nav className="bg-white/60 backdrop-blur-md text-[#212529] sticky top-0 z-50 border-b-2 border-solid border-neutral-200">
      {/* Logo Container */}
      <div className="container  mx-auto flex justify-between items-center px-5 lg:px-[65px] py-2">
        {/* Burger Menu Button */}
        <div className="flex gap-3">
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <Image src="/myastrologo.png" alt="logo" width={80} height={80} objectFit="cover" className="w-12 md:w-20" />
        </div>

        {/* Desktop Navigation */}
       <div className="flex items-center">
        <ul className="hidden lg:flex items-center space-x-4">
          <li className="font-hansenG px-4 py-[4px] leading-6 text-[#212529] font-bold mb-1">
            <Link className="hover:text-[#EE8722]  " href="/">Home</Link>
          </li>
          <li
            className="font-hansenG px-4 py-[4px] leading-6 text-[#212529] font-bold mb-1 relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="cursor-pointer hover:text-[#EE8722] flex items-center">
              Horoscope <RiArrowDropDownLine size={30} />
            </span>
            {isDropdownOpen && (
              <ul className="absolute top-full mt-1 bg-white border border-gray-400 rounded shadow-md w-[180px]">
                {/* Dropdown Options */}
                {[
                  { name: "Horoscope 2024!", href: "/horoscope/daily" },
                  { name: "Daily Horoscope", href: "/horoscope/monthly" },
                  { name: "Today's Horoscope", href: "/horoscope/yearly" },
                  { name: "Weekly Horoscope", href: "/horoscope/yearly" },
                  { name: "Monthly Horoscope", href: "/horoscope/yearly" },
                  { name: "Yearly Horoscope", href: "/horoscope/yearly" },
                  { name: "Yesterday Horoscope", href: "/horoscope/yearly" },
                  { name: "Tomorrow Horoscope", href: "/horoscope/yearly" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* Additional Links */}
          <li className="font-hansenG px-4 py-[4px] leading-6 text-[#212529] font-bold mb-1">
            <Link className="hover:text-[#EE8722]" href="/astrologers">Astrologers</Link>
          </li>
          <li className="font-hansenG px-4 py-[4px] leading-6 text-[#212529] font-bold mb-1">
            <Link className="hover:text-[#EE8722] " href="/about">Kundli</Link>
          </li>
          <li className="font-hansenG px-4 py-[4px] leading-6 text-[#212529] font-bold mb-1">
            <Link className="hover:text-[#EE8722]" href="/services">Blogs</Link>
          </li>
          <li>
       <button className="bg-[#396b6b] items-center text-white flex gap-[10px] px-4 py-2 rounded-md">
              Sign in <Image src="/signinicon.svg" width={20} height={20}/>
            </button>
       </li>

        </ul>
<div className="flex items-center gap-3">
 {/* Wallet Section */}
 <div className="flex sm:visible items-center">
 <Link href="/Wallet"><LuWallet
   className="mr-2 ml-5 cursor-pointer text-[#585866]"
   size={20}
 /></Link>
 <FaRupeeSign size={12} className="text-[#585866]" />
 <p className="text-sm">0.00</p>
</div>

{/* Profile Section */}
<div className="flex gap-2 items-center">
<Link href="/UserProfile"> <Image
   className="rounded-full"
   src="/profileplaceholder.png"
   alt="logo"
   width={24}
   height={24}
 /> </Link>
 <Link href="/UserProfile">
 <p className="hidden  md:block text-[#212529]  cursor-pointer text-sm">Ashutosh</p></Link>
 <div className="relative">
   <RiArrowDropDownLine
     className="text-[#212529] cursor-pointer"
     size={30}
     onClick={() => setProfileOpen(!isProfileOpen)}
     aria-expanded={isProfileOpen}
   />
   {isProfileOpen && (
     <ul className="absolute right-2 top-full mt-1 bg-white border border-gray-300 rounded shadow-md w-40">
       <Link href="/UserProfile">
       <li className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-100">
         Profile
       </li>
       </Link>
       <li className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-100">
         Notification
       </li>
       <li className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-100">
         Session History
       </li>
       <li className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-100">
         Logout
       </li>
       
     </ul>
     
   )}
 </div>
</div>
</div>

</div>
        
      </div>

      {/* Side-Slider Navigation */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 w-[200px]`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="bg-white pb-40  space-y-4 ">

          <li>
            <Link className="flex px-4 py-6 gap-3 bg-[#cd6dd2] font-semibold" href="/"><Image src="/myastrologo.png" alt="logo" width={15} height={15}/> My Astro</Link>
          </li>
          <div className="px-4 flex flex-col gap-5">
          <li >
            <Link className=" hover:text-[#EE8722]" href="/">Home</Link>
          </li>
          <li >
            <Link className=" hover:text-[#EE8722]" href="/Astrologers">Astrologers</Link>
          </li>
          
          <li>
            <Link className=" hover:text-[#EE8722]"  href="/about">Kundli</Link>
          </li>
          <li>
            <Link className=" hover:text-[#EE8722]"  href="/services">Blogs</Link>
          </li>
          <li>
            <button
              className="w-full  hover:text-[#EE8722] flex text-left"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Horoscope  <RiArrowDropDownLine size={25}/>
            </button>
            {isDropdownOpen && (
              <ul className="mt-1 bg-gray-50 border w-[160px] border-gray-300 rounded shadow-md">
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  <Link href="/horoscope/daily">Horoscope 2024!</Link>
                </li>
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  <Link href="/horoscope/monthly">Daily Horoscope</Link>
                </li>
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  <Link href="/horoscope/monthly">Today Horoscope</Link>
                </li>
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  <Link href="/horoscope/monthly">Weekly Horoscope</Link>
                </li>
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  <Link href="/horoscope/monthly">Monthly Horoscope</Link>
                </li>
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  <Link href="/horoscope/yearly">Yearly Horoscope</Link>
                </li>
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  <Link href="/horoscope/monthly">Yesterday Horoscope</Link>
                </li>
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  <Link href="/horoscope/monthly">Tommorow Horoscope</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button className="bg-[#396b6b] text-white flex gap-[10px] px-4 py-2 rounded-md">
              Sign in
            </button>
          </li>
          </div>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
