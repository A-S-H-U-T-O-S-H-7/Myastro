`"use client"`
import { useState } from "react";

const FilterPopup = ({ onClose, onApply }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const categories = ["Tarot", "Numerology", "Astrology"];
  const languages = ["Hindi", "English", "Telugu"];

  const toggleCategory = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleLanguage = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((item) => item !== language)
        : [...prev, language]
    );
  };

  const clearFilters = () => {
    setSelectedCategory([]);
    setPriceRange([0, 200]);
    setSelectedGender("");
    setSelectedLanguages([]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-200">
      <div className="bg-slate-200 w-[498px] h-[416px] rounded-lg p-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-bold">Filter</h2>
          <button onClick={onClose} className="text-gray-500">
            ✖
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-y-auto py-4">
          {/* Left Column */}
          <div className="w-1/2 pr-2">
            <h3 className="font-medium">Category</h3>
            <span className="text-sm text-gray-500">
              {selectedCategory.length}
            </span>
            {categories.map((cat) => (
              <div key={cat} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={selectedCategory.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="mr-2"
                />
                <label>{cat}</label>
              </div>
            ))}

            <h3 className="font-medium mt-4">Price</h3>
            <div className="flex items-center mt-2">
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full"
              />
            </div>
            <div className="text-sm text-gray-500 mt-1">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </div>

            <h3 className="font-medium mt-4">Gender</h3>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={selectedGender === "Male"}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="mr-2"
              />
              <label>Male</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={selectedGender === "Female"}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="mr-2"
              />
              <label>Female</label>
            </div>

            <h3 className="font-medium mt-4">Language</h3>
            {languages.map((lang) => (
              <div key={lang} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(lang)}
                  onChange={() => toggleLanguage(lang)}
                  className="mr-2"
                />
                <label>{lang}</label>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-1/2 pl-2"></div>
        </div>

        {/* Footer */}
        <div className="flex justify-between border-t pt-2">
          <button
            onClick={clearFilters}
            className="bg-white border text-gray-700 px-4 py-2 rounded mr-2"
          >
            Clear Filters
          </button>
          <div>
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={() => onApply({ selectedCategory, priceRange, selectedGender, selectedLanguages })}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
