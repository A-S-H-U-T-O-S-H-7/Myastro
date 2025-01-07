"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import ENV from "./Env";
import Navbar from "./Admin/UpdateNavbar";
import PersonalDetails from "./Admin/PersonalDetailForm";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Blogs",
    "Tarot Card",
    "Numerology",
    "Vedic Astrology",
    "Vaastu",
    "Healings",
    "Festivals",
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${ENV.API_URL}/post/home`); 
        const data = await response.json();

        if (data.status) {
          setPosts(data.posts);
          setFilteredPosts(data.posts); 
        } else {
          console.error('No posts found');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalBlogs = filteredPosts.length;
  const blogsPerPage = 9;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) setCurrentPage(currentPage - 1);
    if (direction === "next" && currentPage < totalPages)
      setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (selectedCategory === "All Blogs") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.category === selectedCategory);
      setFilteredPosts(filtered);
    }
    setCurrentPage(1); 
  }, [selectedCategory, posts]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const searchResults = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(searchResults);
    } else {
      setFilteredPosts(posts); 
    }
    setCurrentPage(1); 
  };

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  if (loading) {
    return <div className="px-[10px] lg:px-[65px]">Loading...</div>;
  }

  return (
    <div className="min-h-screen px-[10px] lg:px-[65px] bg-purple-50">
      {/* Banner */}
      <div className="h-[250px] w-full bg-purple-700 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Our Blogs</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row pt-[70px] gap-6 relative">
        {/* Left Section */}
        <div className="hidden lg:block lg:w-[20%]">
          <h2 className="text-xl font-bold text-purple-700 mb-4">Categories</h2>
          <ul className="space-y-3">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer border px-4 py-2 rounded-lg ${selectedCategory === category
                  ? "bg-purple-500 text-white"
                  : "bg-purple-200 hover:bg-purple-400 hover:text-white"
                  } transition-colors duration-300`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden w-full">
          <div
            className="flex items-center justify-between bg-purple-200 p-3 rounded-lg"
            onClick={toggleDropdown}
          >
            <span className="font-semibold text-purple-700">
              {selectedCategory}
            </span>
            <span className="material-icons text-purple-700 cursor-pointer">
              {dropdownVisible ? <MdExpandLess /> : <MdExpandMore />}
            </span>
          </div>
          {dropdownVisible && (
            <ul className="mt-3 bg-white shadow-md rounded-lg overflow-hidden">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setDropdownVisible(false);
                  }}
                  className={`px-4 py-2 ${selectedCategory === category
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-200"
                    } transition-colors duration-300`}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Section */}
        <div className="flex-1 lg:w-[80%]">
          {/* Search Box */}
          <div className="flex justify-end">
            <div className="flex items-center w-[250px] gap-2 bg-white p-2 shadow-md rounded-lg mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {setSearchQuery(e.target.value);handleSearch();}}
                placeholder="Search Blogs..."
                className="flex-1 outline-none text-sm"
              />
              <span
                className="material-icons text-purple-500 cursor-pointer"
                onClick={handleSearch}
              >
                <CiSearch className="font-bold" />
              </span>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts
              .slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
              .map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
          </div>

<Navbar/>
<PersonalDetails/>




          {/* Pagination */}
          <div className="flex justify-end items-center mt-6 mb-10 space-x-3">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-600 transition-all disabled:bg-gray-400"
            >
              <span className="material-icons">
                <FaChevronLeft />
              </span>{" "}
              Previous
            </button>
            <span className="text-purple-700 font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-600 transition-all disabled:bg-gray-400"
            >
              Next <span className="material-icons">
                <FaChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
