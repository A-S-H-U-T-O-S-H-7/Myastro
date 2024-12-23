import React from "react";

const SearchBox = ({ searchTerm, onSearchChange, placeholder = "Search..." }) => {
  return (
    <div className="relative w-[230px]">
      <input
        type="text"
        placeholder={placeholder}
        className="border border-[#22c7d5] bg-[#0e1726] text-[#22c7d5] rounded-md px-4 py-2 w-full pr-10"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#22c7d5]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m1.7-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
