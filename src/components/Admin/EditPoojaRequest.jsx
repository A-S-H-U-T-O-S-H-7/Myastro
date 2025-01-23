"use client";
import React, { useState } from "react";

const EditPoojaRequest = () => {
  const [status, setStatus] = useState("Approved");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="min-h-screen ml-[120px] mr-[15px] rounded-sm bg-gray-900 p-8">
      <div className="max-w-full mx-auto bg-gray-800 shadow-xl rounded-lg">
        {/* Header */}
        <div className="border-b border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-cyan-400">
            Edit Pooja Request
          </h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Photo Upload Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Thumbnail
            </label>
            <div className="space-y-4 border border-dashed py-4 px-4 rounded-md text-center">
      {!uploadedImage ? (
        <>
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
          <div className="flex justify-center text-sm text-gray-400">
            <label className="relative cursor-pointer border px-4 py-1 rounded-md bg-cyan-400  font-medium text-black hover:text-black-300">
              Upload a file
              <input
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
        </>
      ) : (
        <div className="mt-4">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="mx-auto h-40 w-auto rounded-lg border border-gray-300"
          />
          <button
            onClick={() => setUploadedImage(null)}
            className="mt-2 text-sm text-cyan-400 hover:text-cyan-300"
          >
            Upload another file
          </button>
        </div>
      )}
    </div>
          </div>

          {/* Pooja Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Title
              </label>
              <input
                type="text"
                defaultValue="Sample Pooja Name"
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700 text-gray-100"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Date of Pooja
              </label>
              <input
                type="datetime-local"
                defaultValue="2025-01-25T10:00"
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700 text-gray-100"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Price (₹)
              </label>
              <input
                type="number"
                defaultValue="500"
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700 text-gray-100"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Discount (%)
              </label>
              <input
                type="number"
                defaultValue="10"
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700 text-gray-100"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Description
            </label>
            <textarea
              defaultValue="Sample description about the pooja."
              rows={4}
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700 text-gray-100"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Content
            </label>
            <textarea
              defaultValue="Detailed content about the pooja."
              rows={4}
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 bg-gray-700 text-gray-100"
            />
          </div>

          {/* Dropdown for Status */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700 text-gray-100"
            >
              <option value="Pending">Pending</option>
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
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPoojaRequest;
