"use client";

import { useState } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Sidebar state
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile toggle state

  const menuItems = [
    { icon: <FaHome className="text-xl" />, label: "Dashboard", link: "/dashboard" },
    { icon: <FaUser className="text-xl" />, label: "Profile", link: "/profile" },
    { icon: <FaCog className="text-xl" />, label: "Settings", link: "/settings" },
    { icon: <FaSignOutAlt className="text-xl" />, label: "Logout", link: "/logout" },
    { icon: <FaSignOutAlt className="text-xl" />, label: "Logout", link: "/logout" },
    { icon: <FaSignOutAlt className="text-xl" />, label: "Logout", link: "/logout" },
    { icon: <FaSignOutAlt className="text-xl" />, label: "Logout", link: "/logout" },
    { icon: <FaSignOutAlt className="text-xl" />, label: "Logout", link: "/logout" },

  ];

  return (
    <div>
      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#0e1726] text-[#888ea8] shadow-lg z-50 transition-all duration-300
          ${isExpanded || isMobileOpen ? "w-64" : "w-[80px]"} ${
          isExpanded ? "overflow-y-auto" : "overflow-hidden"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Brand Logo Section */}
        <div className="flex flex-col items-center justify-center px-4 py-3 border-b border-gray-700">
          <img
            src="/Myastro-logo-w.png" 
            alt="Logo"
            className="w-[100px] h-[70px] rounded-full mb-2"
          />
          <div className="flex items-center gap-2">
            <FaArrowRight
              className={`transition-transform duration-300 text-[#888ea8] ${
                isExpanded ? "rotate-180" : "justify-center"
              }`}
            />
            <h1
              className={`text-lg font-bold transition-opacity duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
              MyAstro
            </h1>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col mt-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-4 px-4 py-3 hover:bg-[#1e2737] transition-colors"
            >
              <div className="text-center w-[40px]">{item.icon}</div>
              <span
                className={`text-sm font-medium transition-opacity ${
                  isExpanded ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
