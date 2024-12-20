"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const CallReport = () => {
  const [data, setData] = useState([
    {
      name: "John Doe",
      walletAmount: 100,
      phone: "123-456-7890",
      callStart: "10:00 AM",
      callEnd: "10:30 AM",
      status: "Success",
      astrologerName: "Jane Smith",
      astrologerPhone: "987-654-3210",
      date: "2024-01-01",
    },
    {
        name: "John Doe",
        walletAmount: 100,
        phone: "123-456-7890",
        callStart: "10:00 AM",
        callEnd: "10:30 AM",
        status: "Success",
        astrologerName: "Jane Smith",
        astrologerPhone: "987-654-3210",
        date: "2024-01-01",
      },
      {
        name: "John Doe",
        walletAmount: 100,
        phone: "123-456-7890",
        callStart: "10:00 AM",
        callEnd: "10:30 AM",
        status: "Success",
        astrologerName: "Jane Smith",
        astrologerPhone: "987-654-3210",
        date: "2024-01-01",
      },
      {
        name: "John Doe",
        walletAmount: 100,
        phone: "123-456-7890",
        callStart: "10:00 AM",
        callEnd: "10:30 AM",
        status: "Success",
        astrologerName: "Jane Smith",
        astrologerPhone: "987-654-3210",
        date: "2024-01-01",
      },
      {
        name: "John Doe",
        walletAmount: 100,
        phone: "123-456-7890",
        callStart: "10:00 AM",
        callEnd: "10:30 AM",
        status: "Success",
        astrologerName: "Jane Smith",
        astrologerPhone: "987-654-3210",
        date: "2024-01-01",
      },
      {
        name: "John Doe",
        walletAmount: 100,
        phone: "123-456-7890",
        callStart: "10:00 AM",
        callEnd: "10:30 AM",
        status: "Success",
        astrologerName: "Jane Smith",
        astrologerPhone: "987-654-3210",
        date: "2024-01-01",
      },
    // Add more sample data as needed
  ]);

  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("srno");
  const [sortDirection, setSortDirection] = useState("asc");

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

  const calculateDuration = (start, end) => {
    const [startHour, startMinute] = start.split(/[:\s]/).map(Number);
    const [endHour, endMinute] = end.split(/[:\s]/).map(Number);

    const durationInMinutes =
      (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    return `${hours}h ${minutes}m`;
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
    <div className="m-[15px] ml-[100px]">
      <div className="p-4 bg-[#0e1726] text-[#888ea8] rounded-lg shadow-md">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="mr-2 text-[#bfc9d4]">Results:</label>
            <select
              className="border border-gray-500 bg-[#0e1726] text-[#888ea8] rounded-md px-2 py-1"
              value={resultsPerPage}
              onChange={(e) => setResultsPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-500 bg-[#0e1726] text-[#888ea8] rounded-md px-4 py-2"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse min-w-[1500px]">
            <thead>
              <tr className="bg-gradient-to-r from-[#1e2737] to-[#0e1726] text-[#bfc9d4]">
                <th className="px-6 py-2 whitespace-nowrap">SR No.</th>
                <th className="px-6 py-2 whitespace-nowrap">User Name</th>
                <th className="px-6 py-2 whitespace-nowrap">User Phone</th>
                <th className="px-6 py-2 whitespace-nowrap">Astrologer Name</th>
                <th className="px-6 py-2 whitespace-nowrap">Astrologer Phone</th>
                <th className="px-6 py-2 whitespace-nowrap">Call Start</th>
                <th className="px-6 py-2 whitespace-nowrap">Call End</th>
                <th className="px-6 py-2 whitespace-nowrap">Call Status</th>
                <th className="px-6 py-2 whitespace-nowrap">Call Duration</th>
                <th
                  className="px-6 py-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort("walletAmount")}
                >
                  Amount
                  {sortColumn === "walletAmount" && (
                    sortDirection === "asc" ? (
                      <FaArrowUp className="inline ml-2 text-green-500" />
                    ) : (
                      <FaArrowDown className="inline ml-2 text-red-500" />
                    )
                  )}
                </th>
                <th
                  className="px-6 py-2 whitespace-nowrap cursor-pointer"
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
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#1e2737] transition-colors"
                >
                  <td className="px-6 py-2 text-center">{index + 1}</td>
                  <td className="px-6 py-2">{item.name}</td>
                  <td className="px-6 py-2">{item.phone}</td>
                  <td className="px-6 py-2">{item.astrologerName}</td>
                  <td className="px-6 py-2">{item.astrologerPhone}</td>
                  <td className="px-6 py-2">{item.callStart}</td>
                  <td className="px-6 py-2">{item.callEnd}</td>
                  <td className="px-6 py-2">{item.status}</td>
                  <td className="px-6 py-2">
                    {calculateDuration(item.callStart, item.callEnd)}
                  </td>
                  <td className="px-6 py-2 text-center">{item.walletAmount}</td>
                  <td className="px-6 py-2 text-center">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span>
            Showing page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 bg-[#1e2737] text-[#888ea8] rounded-md hover:bg-[#2d3747]"
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
                    ? "bg-green-500 text-white"
                    : "bg-[#1e2737] text-[#888ea8] hover:bg-[#2d3747]"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 bg-[#1e2737] text-[#888ea8] rounded-md hover:bg-[#2d3747]"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallReport;
