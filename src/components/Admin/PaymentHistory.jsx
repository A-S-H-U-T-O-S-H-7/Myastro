"use client";

import { useState, useMemo } from "react";
import { FaPen, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
import ResultsSelector from "./ResultSelector";
import SearchBox from "./SearchBox";
import DateFilter from "./DateFilter";


const PaymentHistory = () => {
  const [data, setData] = useState([
    {
        photo: "/user1.jpg",
        name: "Ashutosh kumar mohanty",
        walletAmount: 1000,
        totalAmount: 500,
        phone: "9556508941",
        date: "2024-01-01",
        astrologerAmount: 600,
        astrologerAmountGST: 72,
        astrologerAmountTDS: 60,
        myastroAmount: 268,
        transactionId: "TXN12345-TXN12345",
        transactionBy: "Credit Card",
      },
      {
        photo: "/user2.jpg",
        name: "Jane Smith",
        walletAmount: 1500,
        totalAmount: 500,
        phone: "987-654-3210",
        date: "2024-02-15",
        astrologerAmount: 900,
        astrologerAmountGST: 108,
        astrologerAmountTDS: 90,
        myastroAmount: 402,
        transactionId: "TXN12346",
        transactionBy: "UPI",
      },
      {
        photo: "/user3.jpg",
        name: "Alice Brown",
        walletAmount: 2000,
        totalAmount: 500,
        phone: "567-890-1234",
        date: "2024-03-01",
        astrologerAmount: 1200,
        astrologerAmountGST: 144,
        astrologerAmountTDS: 120,
        myastroAmount: 536,
        transactionId: "TXN12347",
        transactionBy: "Debit Card",
      },
    // Add more sample data as needed
  ]);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("srno");
  const [sortDirection, setSortDirection] = useState("asc");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  

  // Memoized filtered data
  const filteredData = useMemo(() => {
    return data
      .filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm)
        )
      )
      .filter((item) => {
        if (!startDate && !endDate) return true;
        const itemDate = new Date(item.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        return (!start || itemDate >= start) && (!end || itemDate <= end);
      });
  }, [data, searchTerm, startDate, endDate]);

  // Memoized paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    return filteredData.slice(startIndex, startIndex + resultsPerPage);
  }, [filteredData, currentPage, resultsPerPage]);

  // Sorting logic
  const handleSort = (column) => {
    const direction =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(direction);

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const handleSearch = (event) => setSearchTerm(event.target.value.toLowerCase());

  const handleDateFilter = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const totalPages = Math.ceil(filteredData.length / resultsPerPage);


  return (
    <div>
      <h1 className="text-[#22c7d5] text-[25px] mt-3 ml-[130px]">Payment History</h1>
    <div className=" m-[15px] border border-[#22c7d5] rounded-[8px] ml-[120px]">
    <div className="p-4 bg-[#0e1726]  text-[#888ea8] rounded-lg shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
      <DateFilter onFilter={(dates) => handleDateFilter(dates)} />

           <div className="flex items-center gap-6">
            <ResultsSelector
              resultsPerPage={resultsPerPage}
              onChange={(e) => setResultsPerPage(Number(e.target.value))}
            />
            <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
            </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse min-w-[2200px]">
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
              {/* date */}
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date
                {sortColumn === "date" && (
                  sortDirection === "asc" ? (
                    <FaArrowUp className="inline ml-2 text-green-500" />
                  ) : (
                    <FaArrowDown className="inline ml-2 text-red-500" />
                  )
                )}
              </th>
              {/* others */}
              <th className="px-4 py-2">Astrologer</th>
              <th className="px-4 py-2">Phone</th>

              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("walletAmount")}
              >
                Total Amount
                {sortColumn === "totalAmount" && (
                  sortDirection === "asc" ? (
                    <FaArrowUp className="inline ml-2 text-green-500" />
                  ) : (
                    <FaArrowDown className="inline ml-2 text-red-500" />
                  )
                )}
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("walletAmount")}
              >
                Astrologer Amount
                {sortColumn === "astrologerAmount" && (
                  sortDirection === "asc" ? (
                    <FaArrowUp className="inline ml-2 text-green-500" />
                  ) : (
                    <FaArrowDown className="inline ml-2 text-red-500" />
                  )
                )}
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("walletAmount")}
              >
                Astrologer Amount GST
                {sortColumn === "walletAmount" && (
                  sortDirection === "asc" ? (
                    <FaArrowUp className="inline ml-2 text-green-500" />
                  ) : (
                    <FaArrowDown className="inline ml-2 text-red-500" />
                  )
                )}
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("walletAmount")}
              >
               Astrologer Amount TDS
                {sortColumn === "walletAmount" && (
                  sortDirection === "asc" ? (
                    <FaArrowUp className="inline ml-2 text-green-500" />
                  ) : (
                    <FaArrowDown className="inline ml-2 text-red-500" />
                  )
                )}
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("walletAmount")}
              >
               Myastro Amount
                {sortColumn === "walletAmount" && (
                  sortDirection === "asc" ? (
                    <FaArrowUp className="inline ml-2 text-green-500" />
                  ) : (
                    <FaArrowDown className="inline ml-2 text-red-500" />
                  )
                )}
              </th>
              

              <th className="px-4 py-2">Transaction Id</th>
              <th className="px-4 py-2">Transaction By</th>
              
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[#1e2737] transition-colors"
              >
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">{item.date}</td>
                <td className="px-4 text-center py-2">{item.name}</td>
                <td className="px-4 text-center py-2">{item.phone}</td>
                <td className="px-4 text-center py-2">{item.totalAmount}</td>
                <td className="px-4 text-center py-2">{item.astrologerAmount}</td>
                <td className="px-4 text-center py-2">{item.astrologerAmountGST}</td>
                <td className="px-4 text-center py-2">{item.astrologerAmountTDS}</td>
                <td className="px-4 text-center py-2">{item.myastroAmount}</td>
                <td className="px-4 text-center py-2">{item.transactionId}</td>
                <td className="px-4 text-center py-2">{item.transactionBy}</td>

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
    </div>
  );
};

export default PaymentHistory;