import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaBell } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

function AstrologerNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className='h-[61px] flex justify-end items-center mr-[15px] ml-[120px] gap-5 px-5 bg-[#191e3afc] rounded-[8px] relative'>

        <div className='relative' ref={dropdownRef}>
          {/* Profile Image */}
          <Image
            className='rounded-full cursor-pointer'
            src="/Adminprofile.jpg"
            width={40}
            height={40}
            alt="profile"
            onClick={toggleDropdown}
          />

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-[200px] h-[110px] z-10 bg-[#252a41] rounded-lg shadow-lg transition-transform duration-300 ease-in-out origin-top-right ${
              isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <div className="px-4 py-3 text-center text-gray-200 font-medium border-gray-700">
              Ashutosh Mohanty
            </div>
            <button
              className="flex items-center justify-center gap-2 w-full text-left px-4 py-4 text-gray-200  hover:bg-gray-700 rounded-b-lg"
              onClick={() => alert('Logout clicked!')} // Replace with actual logout logic
            >
              <FiLogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstrologerNavbar;
