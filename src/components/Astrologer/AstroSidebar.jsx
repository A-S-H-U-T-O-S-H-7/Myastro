"use client";

import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaWallet,
  FaHistory,
  FaBell,
  FaList,
  FaArrowDown,
  FaArrowUp,
  FaBlog,
  FaShoppingBag,
  FaPhoneAlt,
  FaCommentDots,
  FaMoneyCheckAlt,
  FaStar,
} from "react-icons/fa";

const AstroSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Sidebar state
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile toggle state
  const [dropdowns, setDropdowns] = useState({ astrologers: false, blog: false });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    { icon: <FaHome className="text-xl" />, label: "Dashboard", link: "/astrologer/call-history" },
    { icon: <FaUser className="text-xl" />, label: "Profile", link: "/astrologer/call-history" },
    { icon: <FaPhoneAlt className="text-xl" />, label: "Calls History", link: "/astrologer/call-history" },
    { icon: <FaCommentDots className="text-xl" />, label: "Chats Report", link: "/astrologer/call-history" },
    { icon: <FaShoppingBag className="text-xl" />, label: "Orders", link: "/astrologer/orders" },
    { icon: <FaMoneyCheckAlt className="text-xl" />, label: "Payment Details", link: "/astrologer/payments" },
    { icon: <FaStar className="text-xl" />, label: "Reviews", link: "/astrologer/reviews" },

    
  ];

  return (
    <div>
      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full text-[#212529] bg-[#eaeaeb] dark:bg-[#0e1726] dark:text-[#888ea8] shadow-lg z-50 transition-all duration-500 ease-in-out
          ${isExpanded || isMobileOpen ? "w-64" : "w-[90px]"} 
          ${isExpanded ? "overflow-y-auto" : "overflow-hidden"}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Brand Logo Section */}
        <div className="flex items-center px-4 py-3 border-b border-purple-700 dark:border-[#888ea8]">
          <img
            src="/myastrologo.png"
            alt="Logo"
            className={` transition-all duration-500 ${
              isExpanded ? "w-[40px] h-[40px]" : "w-[40px] h-[40px]"
            }`}
          />
          {isExpanded && (
            <h1 className="ml-3 text-lg font-heading font-bold text-[#3C0184] dark:text-white transition-opacity duration-500">
              MyAstro
            </h1>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col ">
          {menuItems.map((item, index) =>
            item.subItems ? (
              <div key={index} className="group">
                <div
                  onClick={() => toggleDropdown(item.dropdownKey)}
                  className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#dee2e6] dark:hover:bg-[#1e2737] transition-colors"
                >
                  <div className="flex items-center gap-4">

                    <div className="text-center w-[40px]">{item.icon}</div>
                    <span
                      className={`text-base font-medium transition-opacity ${
                        isExpanded ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.label}
                    </span>

                  </div>
                  {isExpanded && (
                    <div>
                      {dropdowns[item.dropdownKey] ? (
                        <FaArrowUp className="text-sm" />
                      ) : (
                        <FaArrowDown className="text-sm" />
                      )}
                    </div>
                  )}
                </div>
                {dropdowns[item.dropdownKey] && isExpanded && (
                  <div className="pl-8 bg-white dark:bg-[#1a2330] space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-[#dee2e6] dark:hover:bg-[#1e2737] text-sm text-white"
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) :(
              <a
                key={index}
                href={item.link}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#dee2e6] dark:hover:bg-[#1e2737] transition-colors"
              >
                <div className="text-center text-purple-700 dark:text-[#22c7d5] w-[40px]">{item.icon}</div>
                <span
                  className={`text-base font-medium w-[150px] text-ellipsis overflow-hidden transition-opacity ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.label}
                </span>
              </a>
            )
            
          )}
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

export default AstroSidebar;
