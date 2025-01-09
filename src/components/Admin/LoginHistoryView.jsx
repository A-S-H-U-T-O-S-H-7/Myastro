"use client";

import React from "react";

const LoginHistoryView = ({ isVisible, onClose, data }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#0e1726] text-gray-300 w-3/4 max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#101c35] border-b border-gray-700">
          <h2 className="text-lg font-semibold">Login History Of VIJENDRA SHUKLA</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#101c35]">
              <tr>
                <th className="px-4 py-2 border border-gray-600">Online</th>
                <th className="px-4 py-2 border border-gray-600">Offline</th>
                <th className="px-4 py-2 border border-gray-600">Differences</th>
                <th className="px-4 py-2 border border-gray-600">Next Online</th>
                <th className="px-4 py-2 border border-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-[#1b2e4b]">
                  <td className="px-4 py-2 border border-gray-600">{row.online}</td>
                  <td className="px-4 py-2 border border-gray-600">{row.offline}</td>
                  <td className="px-4 py-2 border border-gray-600">{row.differences}</td>
                  <td className="px-4 py-2 border border-gray-600">{row.nextOnline}</td>
                  <td
                    className={`px-4 py-2 border border-gray-600 ${
                      row.status === "Online" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoginHistoryView;
