import React from "react";

const ResultsSelector = ({ limit, onChange, options = [5, 10, 20, 50] }) => {
  return (
    <div>
      <label className="mr-2 text-[#bfc9d4]">Results:</label>
      <select
        className="border border-[#22c7d5] bg-[#0e1726] text-[#22c7d5] rounded-md px-2 py-1"
        value={limit}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option} className=" text-[#22c7d5]">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ResultsSelector;
