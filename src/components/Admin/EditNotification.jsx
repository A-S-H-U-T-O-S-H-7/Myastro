"use client";

import React, { useState } from "react";

const EditNotification = ({ isVisible, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#0e1726] border border-[#22c7d5] text-gray-300 w-1/3 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#101c35] border-b border-gray-700">
          <h2 className="text-lg font-semibold">Send Notification</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              htmlFor="notificationTitle"
              className="block text-sm font-medium text-gray-400"
            >
              Notification Title
            </label>
            <input
              id="notificationTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="w-full mt-1 p-2 rounded bg-[#101c35] text-gray-300 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="notificationContent"
              className="block text-sm font-medium text-gray-400"
            >
              Notification Content
            </label>
            <textarea
              id="notificationContent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter content"
              rows="4"
              className="w-full mt-1 p-2 rounded bg-[#101c35] text-gray-300 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNotification