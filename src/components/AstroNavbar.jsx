"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { MdSort } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import Link from "next/link";

const AstroNavbar = () => {
  const [sortIsOpen, setSortIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-[10px] lg:px-[65px] py-4 flex justify-between flex-wrap gap-3 ">
      <h2 className="text-[30px] text-[#3C0184] font-heading font-bold">Astrologers</h2>

      <div className="flex gap-3 ">
        <div className="md:w-[255px] md:h-[41px] border-solid border border-zinc-300 rounded-[20px] flex gap-1  items-center px-2 overflow-hidden">
          <IoIosSearch className="text-[#858585]" size={20} />
          <input
            className=" overflow-hidden w-full h-8 focus:outline-none"
            id="name"
            type="text"
            placeholder="Name,Language, Category"
          />
        </div>

        <div className="relative" ref={dropdownRef}>
          <div
            className="w-[80px] h-[41px] cursor-pointer border-solid border border-zinc-300 rounded-[20px] flex gap-1  items-center px-4 overflow-hidden"
            onClick={() => setSortIsOpen(!sortIsOpen)}
          >
            <MdSort size={24} />
            <IoMdArrowDropdown size={20} />
            {sortIsOpen && (
              <ul className="absolute top-full mt-1 bg-white border border-gray-300 rounded shadow-md w-40">
                <li className="px-4 py-2 bg-[#C8A2C8] text-white">
                  Sort by
                </li>
                <li className="px-4 py-2 text-sm hover:bg-gray-100">
                  Exp: Low to High
                </li>
                <li className="px-4 py-2  text-sm hover:bg-gray-100">
                  Exp: High to Low
                </li>
                <li className="px-4 py-2  text-sm hover:bg-gray-100">
                  Price:High to Low
                </li>
                <li className="px-4 py-2  text-sm hover:bg-gray-100">
                  Price:Low to High
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="md:w-[94px] md:h-[41px] cursor-pointer border-solid border border-zinc-300 rounded-[20px] flex gap-1  items-center px-4 overflow-hidden">
          <FaFilter className="text-[#858585] w-8" size={15}  />

          <h1 className="text-[#212529] cursor-pointer text-[12px] md:text-lg">Filter</h1>
        </div>
      </div>
    </div>
  );
};

export default AstroNavbar;
