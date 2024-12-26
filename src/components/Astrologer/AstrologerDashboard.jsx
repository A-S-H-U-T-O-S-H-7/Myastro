"use client";
import React, { useState, useRef } from "react";

function AstrologerDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState("auto");
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    if (isOpen) {
      // Calculate the current height for closing animation
      setHeight(`${contentRef.current.scrollHeight}px`);
      setTimeout(() => setHeight("0px"), 0);
    } else {
      // Set height to 'auto' after animation completes for opening
      setHeight(`${contentRef.current.scrollHeight}px`);
      setTimeout(() => setHeight("auto"), 500); // Match the duration
    }
    setIsOpen(!isOpen);
  };


  const stats = [
    {
        title: "Chats Overview",
        details: [
          { label: "Total Chat Requests", value: "0" },
          { label: "Total Chat Duration", value: "0 Seconds" },
          { label: "Earned Amount", value: "₹0" },
        ],
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      },
      {
        title: "Calls Overview",
        details: [
          { label: "Total Call Requests", value: "0" },
          { label: "Total Call Duration", value: "0 Seconds" },
          { label: "Earned Amount", value: "₹0" },
        ],
        gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
      {
        title: "Wallet Overview",
        details: [
          { label: "Wallet Amount", value: "₹0" },
         
        ],
        gradient: "bg-gradient-to-r from-green-500 to-teal-500",
      },
    ];
  

  return (
    <div>
      {/* Toggle Bar */}
      <div
        className={`flex items-center ml-[120px] mr-[15px] mt-[10px] justify-between bg-purple-500 dark:bg-cyan-500 text-[#212529] dark:text-[#888EA8] px-6 py-4 rounded-md shadow-lg cursor-pointer ${
          isOpen ? "rounded-b-none" : ""
        }`}
        onClick={toggleDropdown}
      >
        <h3 className="font-bold font-heading text-white text-lg">
          SOP FOR ASTROLOGERS
        </h3>
        <i
          className={`fas ${
            isOpen ? "fa-chevron-up" : "fa-chevron-down"
          } text-xl text-white`}
        ></i>
      </div>

      {/* Context Section with Smooth Transition */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
      >
        <div className="bg-[#F3F4F6] ml-[120px] mr-[15px] mb-[10px] dark:bg-[#0e1726] text-[#212529] dark:text-[#888EA8] border border-purple-500 dark:border-cyan-500 rounded-b-md shadow-md p-6 space-y-4">
          <ol className="list-decimal list-inside space-y-3">
            <li>Log in to your account using registered mobile no and OTP.</li>
            <li>
              Once you have logged in, you have to put on the button below your
              photograph so that your profile will display your online status to
              the users.
            </li>
            <li>You must be online for a minimum of 3-5 hours daily.</li>
            <li>
              Users will contact you through your number (if available) and
              will discuss their problems, concerns, etc.
            </li>
            <li>
              Do not share your personal number or any contacts as every call
              will be monitored, and if found, your account will be suspended
              as per the t&c of the company.
            </li>
            <li>
              After you finish your time, you must log out from the site, and
              before logging out, you must mention the next date and time of
              availability.
            </li>
            <li>
              Finally, the motive of this platform is to grow together, and
              hence you must be polite towards the users of this platform and
              be informative when needed.
            </li>
          </ol>
          <p className="font-bold text-right">Thank You, Myastro Team</p>
        </div>
      </div>


      <div className="py-6 ml-[120px] mr-[15px]">
      <h1 className="text-2xl font-bold text-purple-500 dark:text-cyan-500 mb-6">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((block, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md text-white ${block.gradient}`}
          >
            <h3 className="text-lg font-semibold text-gray-200 font-heading mb-4">{block.title}</h3>
            <ul className="space-y-2">
              {block.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex justify-between pb-2"
                >
                  <span className="font-medium " >{detail.label}</span>
                  <span className="font-bold">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


    </div>
  );
}

export default AstrologerDashboard;
