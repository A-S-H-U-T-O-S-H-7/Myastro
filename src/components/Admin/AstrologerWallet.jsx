"use client";

import { useState, useEffect } from "react";
import { FaPen, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
import ResultsSelector from "./ResultSelector";
import SearchBox from "./SearchBox";
import PaymentPopup from "./PaymentPopup";

const AstrologerWallet = () => {
  const [data, setData] = useState([
    {
      photo: "/user1.jpg",
      name: "John Doe",
      walletAmount: 100,
      gender: "Male",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      date: "2024-01-01",
    },
    {
      photo: "/user2.jpg",
      name: "Jane Smith",
      walletAmount: 700,
      gender: "Female",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      date: "2024-02-15",
    },
    {
        photo: "/user2.jpg",
        name: "Jane Smith",
        walletAmount: 200,
        gender: "Female",
        phone: "987-654-3210",
        email: "jane.smith@example.com",
        date: "2024-02-15",
      },
      {
        photo: "/user2.jpg",
        name: "Jane Smith",
        walletAmount: 900,
        gender: "Female",
        phone: "987-654-3210",
        email: "jane.smith@example.com",
        date: "2024-02-15",
      },
      {
        photo: "/user2.jpg",
        name: "Jane Smith",
        walletAmount: 500,
        gender: "Female",
        phone: "987-654-3210",
        email: "jane.smith@example.com",
        date: "2024-02-15",
      },
      {
        photo: "/user2.jpg",
        name: "Jane Smith",
        walletAmount: 500,
        gender: "Female",
        phone: "987-654-3210",
        email: "jane.smith@example.com",
        date: "2024-02-15",
      },
      {
        photo: "/user2.jpg",
        name: "Jane Smith",
        walletAmount: 500,
        gender: "Female",
        phone: "987-654-3210",
        email: "jane.smith@example.com",
        date: "2024-02-15",
      },
       {
      photo: "/user2.jpg",
      name: "Jane Smith",
      walletAmount: 500,
      gender: "Female",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      date: "2024-02-15",
    },
    // Add more sample data as needed
  ]);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("srno");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  useEffect(() => {
    handleSort("srno"); // Default sorting by SR No. in ascending order
  }, []);

  const totalPages = Math.ceil(data.length / resultsPerPage);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSort = (column) => {
    const direction = sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(direction);

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm)
    )
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div>
      <h1 className="text-[#22c7d5] text-[25px] mt-3 ml-[130px]">Astrologers Wallet</h1>
    <div className=" m-[15px] border border-[#22c7d5] rounded-[8px] ml-[120px]">
    <div className="p-4 bg-[#0e1726]  text-[#888ea8] rounded-lg shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
      <ResultsSelector
            resultsPerPage={resultsPerPage}
            onChange={(e) => setResultsPerPage(Number(e.target.value))}
          />
          <SearchBox
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
          />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-gradient-to-r from-[#1e2737] to-[#0e1726] text-[#bfc9d4]">
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("srno")}
              >
                SR No.
                {sortColumn === "srno" && (
                  sortDirection === "asc" ? (
                    <FaArrowUp className="inline ml-2 text-green-500" />
                  ) : (
                    <FaArrowDown className="inline ml-2 text-red-500" />
                  )
                )}
              </th>
              <th className="px-4 py-2">Photo</th>
              <th className="px-4 py-2">Astrologer</th>
              <th className="px-4 py-2">Phone</th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("walletAmount")}
              >
                Wallet Amount
                {sortColumn === "walletAmount" && (
                  sortDirection === "asc" ? (
                    <FaArrowUp className="inline ml-2 text-green-500" />
                  ) : (
                    <FaArrowDown className="inline ml-2 text-red-500" />
                  )
                )}
              </th>
              
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[#1e2737] transition-colors"
              >
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">
                  <img src={item.photo} alt="User" className="w-10 h-10 rounded-full mx-auto" />
                </td>
                <td className="px-4 text-center py-2">{item.name}</td>
                <td className="px-4 text-center py-2">{item.phone}</td>

                <td className="px-4   py-2 text-center">{item.walletAmount}</td>
                <td className="px-4 py-2 flex justify-center gap-2">
                 <button
                  onClick={() => setIsPopupOpen(true)}
                   className="bg-[#00ab55] px-[20px] py-[7px] rounded-[6px] text-[11px] text-white text-center">Pay Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
      <span className="text-[#22c7d5] border border-[#22c7d5] rounded-[8px] px-4 py-2">
          Showing page <span className="font-bold font-heading">{currentPage}</span> of <span className="font-bold font-heading">{totalPages}</span>
        </span>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 bg-[#1e2737] text-[#22c7d5] rounded-md hover:bg-[#2d3747]"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-[#22c7d5] text-white"
                  : "bg-[#1e2737] text-[#888ea8] hover:bg-[#2d3747]"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-[#1e2737] text-[#22c7d5] rounded-md hover:bg-[#2d3747]"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
    </div>
    <PaymentPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default AstrologerWallet;
