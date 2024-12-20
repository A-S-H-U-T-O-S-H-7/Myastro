"use client";

import { useState, useEffect } from "react";
import { FaPen, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";

const ManageTransection = () => {
  const [data, setData] = useState([
    {
      name: "John Doe",
      walletAmount: 100,
      orderId:"order_PXU6qsnGBo9V6Q",
      phone: "123-456-7890",
      paymentId: "pay_PWivJDMZzDHtM",
      date: "2024-01-01",
      status:"success"
    },
    {
        photo: "/user1.jpg",
        name: "John Doe",
        walletAmount: 100,
        orderId:"order_PXU6qsnGBo9V6Q",
        phone: "123-456-7890",
        paymentId: "pay_PWivJDMZzDHtM",
        date: "2024-01-01",
        status:"success"
      },
      {
        photo: "/user1.jpg",
        name: "John Doe",
        walletAmount: 100,
        orderId:"order_PXU6qsnGBo9V6Q",
        phone: "123-456-7890",
        paymentId: "pay_PWivJDMZzDHtM",
        date: "2024-01-01",
        status:"success"
      },
      {
        photo: "/user1.jpg",
        name: "John Doe",
        walletAmount: 300,
        orderId:"order_PXU6qsnGBo9V6Q",
        phone: "123-456-7890",
        paymentId: "pay_PWivJDMZzDHtM",
        date: "2024-01-01",
        status:"success"
      },
      {
        photo: "/user1.jpg",
        name: "John Doe",
        walletAmount: 600,
        orderId:"order_PXU6qsnGBo9V6Q",
        phone: "123-456-7890",
        paymentId: "pay_PWivJDMZzDHtM",
        date: "2024-01-02",
        status:"success"
      },
      {
        photo: "/user1.jpg",
        name: "John Doe",
        walletAmount: 100,
        orderId:"order_PXU6qsnGBo9V6Q",
        phone: "123-456-7890",
        paymentId: "pay_PWivJDMZzDHtM",
        date: "2024-01-01",
        status:"success"
      },
      {
        photo: "/user1.jpg",
        name: "John Doe",
        walletAmount: 100,
        orderId:"order_PXU6qsnGBo9V6Q",
        phone: "123-456-7890",
        paymentId: "pay_PWivJDMZzDHtM",
        date: "2024-01-01",
        status:"success"
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
    <div className=" m-[15px] ml-[100px]">
    <div className="p-4 bg-[#0e1726]  text-[#888ea8] rounded-lg shadow-md">
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
        <table className="w-full table-auto border-collapse min-w-[1200px]">
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
              <th className="px-4 py-2">Name</th>
              
              <th className="px-4 py-2">Phone</th>

              <th className="px-4 py-2">Order Id</th>
              <th className="px-4 py-2">Payment Id</th>
              <th
                className="px-4 py-2 cursor-pointer"
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
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[#1e2737] transition-colors"
              >
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 text-centerr py-2">{item.name}</td>
                <td className="px-4 text-center py-2">{item.phone}</td>

                <td className="px-4 text-center py-2">{item.orderId}</td>
                <td className="px-4 text-cneter py-2">{item.paymentId}</td>

                <td className="px-4   py-2 text-center">{item.walletAmount}</td>

                <td className="px-4 py-2 text-center">{item.date}</td>
                <td className="px-4 py-2 text-center">{item.status}</td>

                
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

export default ManageTransection;
