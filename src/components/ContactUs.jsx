"use client";

import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl lg:text-5xl font-bold text-purple-600 text-center mb-16">
          Get in Touch
        </h1>

        {/* Box Pattern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            {/* Address Box */}
            <div className="p-6 bg-white shadow-lg shadow-purple-500 rounded-xl transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">Address</h2>
              <p className="text-gray-700">
                Floor No.: 2ND FLOOR<br />
                Building No./Flat No.: A-86/B Of Premises/Building: SCHOOL BLOCK<br />
                Road/Street: CHANDER VIHAR<br />
                City/Town/Village: DELHI<br />
                District: North East Delhi<br />
                State: Delhi<br />
                PIN Code: 110092
              </p>
            </div>

            {/* Phone Box */}
            <div className="p-6 bg-white shadow-lg shadow-purple-500 rounded-xl transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">Phone</h2>
              <p className="text-gray-700">0120-4348458</p>
              <p className="text-gray-700">+91-7683065231</p>
            </div>

            {/* Email Box */}
            <div className="p-6 bg-white shadow-lg shadow-purple-500 rounded-xl transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">Email</h2>
              <p className="text-gray-700">info@myastro.org.in</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-xl overflow-hidden shadow-lg shadow-purple-500">
            <iframe
              title="MyAstro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28014.401599888694!2d77.28091200820107!3d28.66608487955739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8db3b0bda7%3A0x2a2c13d0930a36d3!2sChander%20Vihar%2C%20North%20East%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

       
      </div>
    </div>
  );
}
