import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaBell } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import ThemeToggle from './ThemeToggle';

function AstrologerNavbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);
  const notificationsDropdownRef = useRef(null);

  const notifications = [
    {
      message: "Regarding Yearly Rashifal 2025 Video for Myastro Promotion",
      timestamp: "2024-12-28 13:07:30",
    },
    {
      message: "Regarding Yearly Rashifal 2025 Video for Myastro Promotion",
      timestamp: "2024-12-28 13:07:30",
    }, {
      message: "Regarding Yearly Rashifal 2025 Video for Myastro Promotion",
      timestamp: "2024-12-28 13:07:30",
    }, {
      message: "Regarding Yearly Rashifal 2025 Video for Myastro Promotion",
      timestamp: "2024-12-28 13:07:30",
    }, {
      message: "Regarding Yearly Rashifal 2025 Video for Myastro Promotion",
      timestamp: "2024-12-28 13:07:30",
    }, 
  ];

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsNotificationsDropdownOpen(false); // Close other dropdown if open
  };

  const toggleNotificationsDropdown = () => {
    setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen);
    setIsProfileDropdownOpen(false); // Close other dropdown if open
  };

  const handleClickOutside = (event) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setIsProfileDropdownOpen(false);
    }
    if (
      notificationsDropdownRef.current &&
      !notificationsDropdownRef.current.contains(event.target)
    ) {
      setIsNotificationsDropdownOpen(false);
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
      <div className="h-[61px] flex justify-end items-center mr-[15px] ml-[120px] gap-5 px-5 bg-purple-500 dark:bg-[#191e3afc] rounded-[8px] relative">
        <ThemeToggle />
        <div className="relative" ref={notificationsDropdownRef}>
          {/* Bell Icon with Red Dot */}
          <div className="relative cursor-pointer" onClick={toggleNotificationsDropdown}>
            <FaBell className="text-[#bfc9d4] w-[25px] h-[25px]" width={20} height={20} />
            <span className="absolute  bottom-6  left-5 w-[6px] h-[6px] bg-red-500 rounded-full"></span>
          </div>

          {/* Notifications Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-[300px] h-[400px] bg-white dark:bg-[#252a41] rounded-lg shadow-lg transition-transform duration-300 ease-in-out origin-top-right ${
              isNotificationsDropdownOpen
                ? 'scale-100 opacity-100'
                : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <div className="px-4 py-2 flex justify-between items-center text-gray-800 dark:text-gray-200 font-medium border-b dark:border-gray-700">
              <span>Notifications</span>
              <span className="text-sm text-gray-500">{notifications.length} Unread</span>
            </div>
            <div className="max-h-[350px] overflow-y-auto">
              {notifications.map((notif, index) => (
                <div
                  key={index}
                  className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="text-sm font-medium">{notif.message}</div>
                  <div className="text-xs text-gray-500">{notif.timestamp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative" ref={profileDropdownRef}>
          {/* Profile Image */}
          <Image
            className="rounded-full cursor-pointer"
            src="/Adminprofile.jpg"
            width={40}
            height={40}
            alt="profile"
            onClick={toggleProfileDropdown}
          />

          {/* Profile Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-[200px] bg-white dark:bg-[#252a41] rounded-lg shadow-lg transition-transform duration-300 ease-in-out origin-top-right ${
              isProfileDropdownOpen
                ? 'scale-100 opacity-100'
                : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <div className="px-4 py-2 text-gray-800 dark:text-gray-200 font-medium border-b dark:border-gray-700">
              Ashutosh Mohanty
            </div>
            <button
              className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
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
