"use client";

import React from "react";

const WorkInProgress = () => {
  return (
    <div className="bg-[#0e1726] mt-10 text-gray-300 rounded-lg shadow-lg p-6 w-full md:w-1/3 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">🚧 Work in Progress</h3>
        <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-md">
          Coming Soon
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6">
        We're working hard to bring this feature to life. Stay tuned for updates!
      </p>

      {/* Progress Bar */}
      <div className="relative w-full bg-gray-700 rounded-full h-3">
        <div
          className="absolute top-0 left-0 bg-blue-500 h-3 rounded-full"
          style={{ width: "60%" }} // Adjust width to represent progress percentage
        ></div>
      </div>

      {/* Progress Percentage */}
      <div className="text-right mt-2 text-sm text-gray-400">
        60% Complete
      </div>
    </div>
  );
};

export default WorkInProgress;
