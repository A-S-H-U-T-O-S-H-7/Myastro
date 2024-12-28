"use client"
import React, { useState } from 'react';
import BlogCard from './BlogCard'

export default function BlogPage() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalBlogs = 15; // Total number of blogs
  const blogsPerPage = 9; // 3 blogs per row, 5 rows
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const handleToggleSidebar = () => setSidebarVisible(!sidebarVisible);

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) setCurrentPage(currentPage - 1);
    if (direction === 'next' && currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Banner */}
      <div className="h-[250px] w-full bg-purple-700 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Our Blogs</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row lg:px-8 py-6 gap-6 relative">
        {/* Left Sidebar */}
        <div
          className={`${
            sidebarVisible ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static top-0 left-0 bg-white lg:bg-transparent w-[80%] lg:w-[20%] h-full lg:h-auto shadow-lg lg:shadow-none transform transition-transform duration-300 z-50 lg:z-auto p-6`}
        >
          <h2 className="text-xl font-bold text-purple-700 mb-4">Categories</h2>
          <ul className="space-y-3">
            {[
              'All Blogs',
              'Tarot Card',
              'Numerology',
              'Vedic Astrology',
              'Vaastu',
              'Healings',
              'Festivals',
            ].map((category) => (
              <li
                key={category}
                className="cursor-pointer hover:text-purple-500 transition-colors duration-300"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle Sidebar Button (Mobile) */}
        <button
          onClick={handleToggleSidebar}
          className="lg:hidden absolute top-5 right-5 bg-purple-700 text-white p-2 rounded-full shadow-lg"
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Right Section */}
        <div className="flex-1 lg:w-[80%]">
          {/* Search Box */}
          <div className="flex items-center gap-2 bg-white p-3 shadow-md rounded-lg mb-6">
            <input
              type="text"
              placeholder="Search Blogs..."
              className="flex-1 outline-none"
            />
            <span className="material-icons text-purple-500 cursor-pointer">search</span>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: blogsPerPage }).map((_, idx) => (
              <BlogCard key={idx} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end items-center mt-6 space-x-3">
            <button
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-600 transition-all disabled:bg-gray-400"
            >
              Previous
            </button>
            <span className="text-purple-700 font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange('next')}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-600 transition-all disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to Close Sidebar */}
      {sidebarVisible && (
        <div
          onClick={() => setSidebarVisible(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
        ></div>
      )}
    </div>
  );
}
