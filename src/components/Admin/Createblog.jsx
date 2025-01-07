"use client";

import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Createblog = () => {
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div className="min-h-screen bg-[#0e1726] ml-[120px] mr-[15px] mt-10 text-gray-300 p-6 flex flex-col lg:flex-row gap-6">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 border border-[#22c7d5] bg-[#101c35] rounded-lg p-6 space-y-6">
        <h2 className="text-lg font-semibold">Create Post </h2>

        {/* Post Title */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Post Title</label>
          <input
            type="text"
            placeholder="Enter Post Title"
            className="w-full bg-[#1b2e4b] text-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c7d5]"
          />
        </div>

        {/* Content Editor */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Content</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            className="h-64"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline"],
                ["image", "code-block"],
              ],
            }}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {/* SEO Settings */}
        <div className="bg-[#101c35] border border-[#22c7d5] rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold">SEO Settings</h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Meta Title</label>
            <input
              type="text"
              placeholder="Enter Meta Title"
              className="w-full bg-[#1b2e4b] text-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c7d5]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm  font-semibold">Meta Description</label>
            <textarea
              placeholder="Enter Meta Description"
              className="w-full bg-[#1b2e4b] text-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c7d5] resize-none"
              rows={4}
            ></textarea>
          </div>
        </div>

        {/* Publish Settings */}
        <div className="bg-[#101c35] border border-[#22c7d5] rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold">Publish</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isPublished}
                onChange={() => setIsPublished(!isPublished)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#22c7d5] rounded-full peer dark:bg-gray-700 peer-checked:bg-[#22c7d5]"></div>
            </label>
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Category</label>
            <select
              className="w-full bg-[#1b2e4b] text-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c7d5]"
            >
              <option value="">-- Select Category --</option>
              <option value="Blog">Blog</option>
              <option value="Horoscope">Horoscope</option>
              <option value="News">News</option>
            </select>
          </div>

          {/* Featured Image */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Featured Image</label>
            <div className="border-2 border-dashed border-gray-500 rounded-md p-4 text-center text-sm text-gray-400">
              Drag & Drop your files or <span className="text-[#22c7d5] cursor-pointer">Browse</span>
            </div>
          </div>

          {/* Create Post Button */}
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createblog;
