import React,{ useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const AstroDateFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  // Function to clear both start and end dates
  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    onFilter({ startDate: "", endDate: "" }); // Reset date filter
  };

  return (
    <div className="flex  flex-wrap items-center gap-6">
      {/* Start Date Input with Label */}
      <div className="flex flex-col">
        <label htmlFor="startDate" className="text-xs  mb-1">
          Start Date
        </label>
        <div className="relative">
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              onFilter({ startDate: e.target.value, endDate }); // Apply filter automatically
            }}
            className="px-2 py-1 border-[0.5px] border-purple-500 dark:border-[#22c7d5] bg-white dark:bg-transparent rounded-md focus:outline-none text-purple-500 dark:text-[#22c7d5]"
          />
          <FaCalendarAlt
            onClick={() => document.getElementById("startDate").showPicker()}
            className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-purple-500 dark:text-[#22c7d5] cursor-pointer"
          />
        </div>
      </div>

      {/* End Date Input with Label */}
      <div className="flex flex-col">
        <label htmlFor="endDate" className="text-xs  mb-1">
          End Date
        </label>
        <div className="relative">
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              onFilter({ startDate, endDate: e.target.value }); // Apply filter automatically
            }}
            className="px-2 py-1 border-[0.5px] border-purple-500 dark:border-[#22c7d5] bg-white dark:bg-transparent rounded-md focus:outline-none text-purple-500 dark:text-[#22c7d5]"
          />
          <FaCalendarAlt
            onClick={() => document.getElementById("endDate").showPicker()}
            className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-purple-500 dark:text-[#22c7d5] cursor-pointer"
          />
        </div>
      </div>

      {/* Conditional Buttons */}
      {(startDate || endDate) ? (
        <button
          onClick={handleClear}
          className="px-4 py-[2px] bg-orange-200 text-orange-700 rounded-md hover:bg-orange-300"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default AstroDateFilter;
