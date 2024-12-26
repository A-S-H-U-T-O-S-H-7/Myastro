"use client";

import React, { useState } from "react";
import { 
  FaUser, FaBrain, FaEnvelope, FaMapMarkerAlt, FaLanguage, 
  FaTransgender, FaBriefcase, FaBook, FaPhone, FaCalendarAlt 
} from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi2";
import { LiaLanguageSolid } from "react-icons/lia";

const documents = [
    { name: "PAN Card", file: "/path-to-pan-card.pdf" },
    { name: "Aadhar Front", file: "/path-to-aadhar-front.pdf" },
    { name: "Aadhar Back", file: "/path-to-aadhar-back.pdf" },
    { name: "Astrologer Certificate", file: "/path-to-certificate.pdf" },
  ];

  const openDocument = (file) => {
    window.open(file, "_blank");
  };



const ProfileBlock = () => {
  const [chatEnabled, setChatEnabled] = useState(false);
  const [callEnabled, setCallEnabled] = useState(false);

  return (
    <div className="ml-[120px]  mr-[15px]">
    <div className="bg-gray-100 rounded-[8px] my-4 border border-purple-500 dark:border-[#22c7d5] dark:bg-[#0e1726] text-[#212529] dark:text-[#888ea8]  shadow-md p-6">
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          {/* Profile Picture */}
          <div className="mb-4">
            <img
              src="/Heroimage2.png"
              alt="Profile"
              className="w-40 h-40 border-4 border-purple-500 dark:border-[#22c7d5] rounded-md shadow-md"
            />
          </div>

          {/* Toggle Buttons */}
          
          <div className="flex flex-wrap gap-4 mb-4">
  {/* Chat Toggle */}
  <label className="flex items-center gap-2">
    <span className="text-sm font-bold font-heading">Chat</span>
    <div
      className={`relative w-12 h-6 rounded-full cursor-pointer ${
        chatEnabled ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={() => setChatEnabled(!chatEnabled)}
    >
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
          chatEnabled ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  </label>

  {/* Call Toggle */}
  <label className="flex items-center gap-2">
    <span className="text-sm font-bold font-heading">Call</span>
    <div
      className={`relative w-12 h-6 rounded-full cursor-pointer ${
        callEnabled ? "bg-orange-500" : "bg-gray-300"
      }`}
      onClick={() => setCallEnabled(!callEnabled)}
    >
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
          callEnabled ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  </label>




            <button className="bg-purple-500 dark:bg-[#22c7d5] text-white px-4 py-1 rounded-md shadow-md text-sm">
              History
            </button>
          </div>

          {/* Status Info */}
          <div className="text-sm py-1 bg-orange-100 border rounded-[6px] px-2 dark:border-[#22c7d5] border-purple-500 border-dashed text-gray-500  flex items-center gap-2">
            <HiInformationCircle className="text-orange-500 w-6 h-6 " />
            <span className="text-xs">Click the button to set your status to online/offline.</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 space-y-4">
          {/* Name */}
          <h2 className="text-lg font-heading text-[#3C0184] dark:text-[#888ea8] font-bold">Ashutosh Mohanty</h2>

          {/* Primary Details */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex border rounded-[6px] px-2 dark:border-[#22c7d5] border-purple-500 border-dashed py-1 items-center gap-2">
              <FaBrain className="text-purple-500 dark:text-[#22c7d5]" />
              <span>Tarot</span>
            </div>
            <div className="flex  border rounded-[6px] px-2 dark:border-[#22c7d5] border-purple-500 border-dashed py-1 items-center gap-2">
              <FaCalendarAlt className="text-purple-500 dark:text-[#22c7d5]" />
              <span>01-01-1990</span>
            </div>
            <div className="flex  border rounded-[6px] px-2 dark:border-[#22c7d5] border-purple-500 border-dashed py-1 items-center gap-2">
              <FaPhone className="text-purple-500 dark:text-[#22c7d5]" />
              <span>123-456-7890</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-purple-500 dark:text-[#22c7d5]" />
            <span>johndoe@example.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-purple-500 dark:text-[#22c7d5]" />
            <span>123 Main St, Springfield</span>
          </div>

          {/* Additional Details */}
          <div className="flex  flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <LiaLanguageSolid className="text-purple-500 dark:text-[#22c7d5]" />
              <span>English, Spanish</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTransgender className="text-purple-500 dark:text-[#22c7d5]" />
              <span>Male</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-purple-500 dark:text-[#22c7d5]" />
              <span>5 years</span>
            </div>
          </div>

          {/* All Skills */}
          <div className="flex items-center gap-2 text-sm">
            <FaBook className="text-purple-500 dark:text-[#22c7d5]" />
            <span>Tarot, Numerology</span>
          </div>
        </div>
      </div>
      </div>

{/* second blocks */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Block */}
        <div className="bg-gray-100 dark:bg-[#1e2737] border border-purple-500 dark:border-[#22c7d5] rounded-md shadow-lg ">
          <h3 className="text-xl h-10 pl-2 pt-1 rounded-t-md font-bold mb-4 dark:bg-[#22c7d5] bg-purple-500 text-white ">Other Details</h3>

          <div className="space-y-3 px-6 text-sm text-[#212529] dark:text-[#888ea8]">
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold ">PAN No.:</span> ABCDE1234F
            </p> 
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold">Contribute Hours:</span> 40 hours/month
            </p>
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold">Marital Status:</span> Married
            </p>
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold">Pincode:</span> 110001
            </p>
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold">Aadhar Number:</span> 1234-5678-9101
            </p>
            <p className="flex justify-between font-heading py-1 ">
              <span className="font-bold">Qualification:</span> M.Sc in Astrology
            </p>
          </div>
        </div>

        {/* Right Block */}
        <div className="bg-gray-100 dark:bg-[#1e2737] border border-purple-500 dark:border-[#22c7d5] rounded-md shadow-lg">
  <h3 className="text-xl font-bold mb-4 bg-purple-500 rounded-t-md h-10 dark:bg-[#22c7d5] pl-4 pt-1 text-white">
    Uploaded Documents
  </h3>
  <div className="space-y-2 px-4 py-2">
    {documents.map((doc, index) => (
      <div
        key={index}
        className="flex justify-between items-center py-2 px-4 bg-white dark:bg-[#2b3545] rounded-md shadow hover:shadow-lg transition cursor-pointer"
        onClick={() => openDocument(doc.file)}
      >
        <span className="text-black dark:text-white font-heading">{doc.name}</span>
        <div className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM7 20v-2h10v2H7zm10-4H7v-2h10v2zm0-4H7v-2h10v2zM13 9V3.5L18.5 9H13z" />
          </svg>
        </div>
      </div>
    ))}
  </div>
</div>
</div>

{/* payment Details */}
     
      <div className="grid grid-cols-1  py-5 md:grid-cols-2 gap-6">
        {/* Left Block */}
        <div className="bg-gray-100 max-h-[330px] dark:bg-[#1e2737] border border-purple-500 dark:border-[#22c7d5] rounded-md shadow-lg ">
          <h3 className="text-xl h-10 pl-2 pt-1 rounded-t-md font-bold mb-4 dark:bg-[#22c7d5] bg-purple-500 text-white ">Payment Details</h3>

          <div className="space-y-3 px-6 text-sm text-[#212529] dark:text-[#888ea8]">
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold "> Bank Name:</span> Union Bank of India
            </p>
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold">Bank Branch:</span> C R PARK
            </p>
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold">IFSC Code:</span> UBIN0562670
            </p>
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold">A/c Number:</span> 690708719807764
            </p>
            <p className="flex justify-between font-heading py-1 border-b border-[#c5bfbf]">
              <span className="font-bold">UPI ID:</span> singhanveeksha21@okicici
            </p>
            <p className="flex justify-between font-heading py-1 ">
              <span className="font-bold">Profit Share %:</span> 30%
            </p>
          </div>
        </div>
       

{/* helpline */}
  {/* Contact Section */}

<div className="bg-blue-100 rounded-lg shadow-lg border border-[#400186]  space-y-6">
    <h1 className="text-xl h-10 pl-2 pt-1 rounded-t-md font-bold mb-4 bg-[#400186]  text-white ">Helpline</h1>
<div className="space-y-4 px-6">
    <div className="flex flex-wrap items-center justify-between bg-gray-100 p-1.5 rounded-md ">
      <span className="flex items-center space-x-2 text-gray-700 font-medium">
        <i className="fas fa-envelope text-red-500"></i>
        <span>Email</span>
      </span>
      <span className="text-gray-600 text-xs md:text-base font-heading font-bold">ashutoshmohanty13703@gmail.com</span>
    </div>
    <div className="flex items-center justify-between bg-gray-100 p-1.5 rounded-md shadow-sm">
      <span className="flex items-center space-x-2 text-gray-700 font-medium">
        <i className="fab fa-whatsapp text-green-500"></i>
        <span>WhatsApp</span>
      </span>
      <span className="text-gray-600 text-sm md:text-base  font-heading font-bold">9556508941</span>
    </div>
    <div className="flex items-center justify-between bg-gray-100 p-1.5 rounded-md shadow-sm">
      <span className="flex items-center space-x-2 text-gray-700 font-medium">
        <i className="fas fa-phone text-blue-500"></i>
        <span>Contact</span>
      </span>
      <span className="text-gray-600 text-sm md:text-base font-heading font-bold">+91 9556508941</span>
    </div>
  </div>

   {/* Follow Us Section */}
   <div className="flex items-center py-5 justify-center space-x-4">
    <h4 className="text-black text-sm font-semibold">Follow us on:</h4>
    <i className="fab fa-facebook text-blue-600 text-2xl"></i>
    <i className="fab fa-instagram text-pink-500 text-2xl"></i>
    <i className="fab fa-youtube text-red-600 text-2xl"></i>
    <i className="fab fa-twitter text-blue-400 text-2xl"></i>
  </div>

  {/* Logo Section */}
  <div className="flex flex-col rounded-b-md items-center bg-[#400186] justify-center">
    <div className="w-20 border-2 border-[#400186] h-20 mt-[-30px] rounded-full bg-white flex items-center justify-center shadow-md">
      <img src="/myastrologo.png" alt="Logo" className="w-10  h-10" />
    </div>
    {/* Rating Section */}
  <div>
    <h3 className="text-sm text-center text-yellow-200 mb-2">Please Rate us</h3>
    <div className="flex justify-center space-x-2 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <i key={index} className="fas fa-star text-xl"></i>
      ))}
    </div>
    <p className="text-center text-white text-sm px-2 py-4">Loving your experience with Myastro? We'd greatly appreciate it if you could take a moment to share your feedback! 😊</p>
  </div>
  
  </div>
 
  
</div>



</div>
   
    </div>
  );
};

export default ProfileBlock;
