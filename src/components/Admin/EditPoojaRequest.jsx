"use client";
import React, { useState } from "react";

const EditPoojaRequest = () => {
  const [benefits, setBenefits] = useState([
    "Health benefits",
    "Peace of mind",
    "Better energy",
    "Spiritual growth",
  ]);
  const [howItHappens, setHowItHappens] = useState([
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
  ]);
  const [aboutPooja, setAboutPooja] = useState([
    "Point 1",
    "Point 2",
    "Point 3",
    "Point 4",
  ]);
  const [status, setStatus] = useState("Approved");

  const handleArrayChange = (index, value, array, setArray) => {
    const newArray = [...array];
    newArray[index] = value;
    setArray(newArray);
  };

  return (
    <div className="min-h-screen ml-[120px] mr-[15px] rounded-sm bg-gray-900 text-gray-200 p-8">
      <div className="max-w-full mx-auto bg-gray-800 shadow-xl rounded-lg">
        {/* Header */}
        <div className="border-b border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-cyan-400">
            Pooja Request
          </h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Photo Upload Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Pooja Photo</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg border-gray-600">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-400">
                  <label className="relative cursor-pointer rounded-md font-medium text-cyan-400 hover:text-cyan-300">
                    <span>Upload a file</span>
                    <input type="file" className="sr-only" accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Pooja Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Pooja Name</label>
              <input
                type="text"
                defaultValue="Sample Pooja Name"
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Date of Pooja</label>
              <input
                type="datetime-local"
                defaultValue="2025-01-25T10:00"
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <label className="block text-sm font-medium">Benefits</label>
            {benefits.map((benefit, index) => (
              <input
                key={index}
                type="text"
                value={benefit}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, benefits, setBenefits)
                }
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            ))}
          </div>

          {/* How It Happens */}
          <div className="space-y-4">
            <label className="block text-sm font-medium">How Will It Happen</label>
            {howItHappens.map((step, index) => (
              <input
                key={index}
                type="text"
                value={step}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, howItHappens, setHowItHappens)
                }
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder={`Step ${index + 1}`}
              />
            ))}
          </div>

          {/* About Pooja */}
          <div className="space-y-4">
            <label className="block text-sm font-medium">About This Pooja</label>
            {aboutPooja.map((point, index) => (
              <input
                key={index}
                type="text"
                value={point}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, aboutPooja, setAboutPooja)
                }
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder={`Point ${index + 1}`}
              />
            ))}
          </div>

          {/* Dropdown for Status */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="button"
              className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPoojaRequest;
