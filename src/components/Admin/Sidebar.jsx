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
import { PiFlowerLotusDuotone } from "react-icons/pi";


const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Sidebar state
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile toggle state
  const [dropdowns, setDropdowns] = useState({ astrologers: false, blog: false });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    { icon: <FaHome className="text-xl" />, label: "Dashboard", link: "/admin/dashboard" },
    {
      icon: <FaUser className="text-xl" />,
      label: "Astrologers",
      dropdownKey: "astrologers",
      subItems: [
        { label: "Login History", link: "/admin/loginhistory" },
        { label: "Approved Astrologers", link: "/admin/approved-astrologers" },
        { label: "Complete Astrologers", link: "/admin/complete-astrologers" },
        { label: "Pending Astrologers", link: "/admin/pending-astrologers" },
        { label: "Rejected Astrologers", link: "/admin/rejected-astrologers" },
      ],
    },
    { icon: <FaUser className="text-xl" />, label: "Users", link: "/admin/manageuser" },
    { icon: <FaWallet className="text-xl" />, label: "Transactions", link: "/admin/managetransactions" },
    { icon: <FaPhoneAlt className="text-xl" />, label: "Calls Report", link: "/admin/callreport" },

   

    { icon: <FaCommentDots className="text-xl" />, label: "Chats Report", link: "/admin/chatreport" },
    { icon: <FaShoppingBag className="text-xl" />, label: "Orders", link: "/admin/orders" },
    { icon: <FaWallet className="text-xl" />, label: "Astrologer Wallet", link: "/admin/astrologerwallet" },
    { icon: <FaMoneyCheckAlt className="text-xl" />, label: "Payment History", link: "/admin/payment-history" },
    { icon: <FaBell className="text-xl" />, label: "Notifications", link: "/admin//notification" },
    { icon: <FaStar className="text-xl" />, label: "Reviews", link: "/admin/user-review" },
    {
      icon: <FaBlog className="text-xl" />,
      label: "Blog",
      dropdownKey: "blog",
      subItems: [
        { label: "Add Post", link: "/admin/create-blog" },
        { label: "Manage Posts", link: "/admin/manage-posts" },
      ],
    },
    {
      icon: <PiFlowerLotusDuotone className="text-xl" />,
      label: "Poojas",
      dropdownKey: "Poojas",
      subItems: [
        { label: "Pending Poojas", link: "/admin/pending-poojas" },
        { label: "Approved Poojas", link: "/admin/approved-poojas" },
        { label: "Rejected Poojas", link: "/admin/rejected-poojas" },
      ],
    },
   
  ];

  return (
    <div>
      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#0e1726] text-[#888ea8] shadow-lg z-50 transition-all duration-500 ease-in-out
          ${isExpanded || isMobileOpen ? "w-64" : "w-[90px]"} 
          ${isExpanded ? "overflow-y-auto" : "overflow-hidden"}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Brand Logo Section */}
        <div className="flex items-center px-4 py-3 border-b border-gray-700">
          <img
            src="/Myastro-logo-w.png"
            alt="Logo"
            className={` transition-all duration-500 ${
              isExpanded ? "w-[40px] h-[40px]" : "w-[40px] h-[40px]"
            }`}
          />
          {isExpanded && (
            <h1 className="ml-3 text-lg font-heading font-bold text-white transition-opacity duration-500">
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
                  className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#1e2737] transition-colors"
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
                  <div className="pl-8 bg-[#1a2330] space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-[#1e2737] text-sm text-white"
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
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#1e2737] transition-colors"
              >
                <div className="text-center w-[40px]">{item.icon}</div>
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

export default Sidebar;
