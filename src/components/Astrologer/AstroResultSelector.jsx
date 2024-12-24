import React from "react";

const AstroResultsSelector = ({ resultsPerPage, onChange, options = [5, 10, 20, 50] }) => {
  return (
    <div>
      <label className="mr-2 text-[#212529] dark:text-[#bfc9d4]">Results:</label>
      <select
        className="border border-purple-500 dark:border-[#22c7d5] bg-white dark:bg-[#0e1726] text-[#212529] dark:text-[#22c7d5] rounded-md px-2 py-1"
        value={resultsPerPage}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option} className=" text-[#212529] dark:text-[#22c7d5]">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AstroResultsSelector;
