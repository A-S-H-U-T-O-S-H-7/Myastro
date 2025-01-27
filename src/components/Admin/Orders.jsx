"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import ResultsSelector from "./ResultSelector";
import SearchBox from "./SearchBox";
import DateFilter from "./DateFilter";
import Pagination from "./Pagination";
import ENV from "../Env";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortColumn, setSortColumn] = useState("srno");
  const [sortDirection, setSortDirection] = useState("asc");
  const [loader, setLoader] = useState(false);

  const fetchOrders = async () => {
    setLoader(true);
    try {
      const queryParams = new URLSearchParams({
        page,
        limit,
        search: searchTerm,
        sortColumn,
        sortDirection,
        startDate: startDate ? new Date(startDate).toISOString() : "",
        endDate: endDate ? new Date(endDate).toISOString() : "",
      });

      const response = await fetch(
        `${ENV.API_URL}/admin/orders?${queryParams}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("myastro-token")}`,
            "Content-Type": "application/json",
          },
        }
      );


      if (!response.ok) throw new Error("Failed to fetch data");

      const json = await response.json();

      if (json.status) {
        console.log("Orders fetched successfully:", json.orders);
        setOrders(json.orders);
        setTotalPages(json.pagination.totalPages);
      } else {
        setOrders([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("Error fetching orders:", error.message);
      setOrders([]);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [page, limit, searchTerm, startDate, endDate, sortColumn, sortDirection]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleDateFilter = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div>
      <h1 className="text-[#22c7d5] text-[25px] mt-3 ml-[130px]">Orders</h1>
      <div className="m-[15px] border border-[#22c7d5] rounded-[8px] ml-[120px]">
        <div className="p-4 bg-[#0e1726] text-[#888ea8] rounded-lg shadow-md">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4">
            <DateFilter onFilter={handleDateFilter} />
            <div className="flex items-center gap-6">
              <ResultsSelector
                resultsPerPage={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              />
              <SearchBox
                searchTerm={searchTerm}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse min-w-[1500px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e2737] to-[#0e1726] text-[#bfc9d4]">
                  <th className="px-6 py-2 whitespace-nowrap">SR No.</th>
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
                  <th className="px-6 py-2 whitespace-nowrap">User</th>
                  <th className="px-6 py-2 whitespace-nowrap">Astrologer</th>
                  <th className="px-6 py-2 whitespace-nowrap">Call/Chat</th>
                  <th className="px-6 py-2 whitespace-nowrap">Duration</th>
                  <th className="px-6 py-2 whitespace-nowrap">Rate</th>
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
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#1e2737] transition-colors"
                  >
                    <td className="px-6 py-2 text-center">{index + 1}</td>
                    <td className="px-6 text-center py-2">
                      {item.order_date
                        ? new Date(item.order_date).toLocaleDateString("en-GB")
                        : "N/A"}
                    </td>
                    <td className="px-6 text-center py-2">
                      {item.user_name || "N/A"}
                    </td>
                    <td className="px-6 text-center py-2">
        {item.astrologer?.fullname || "N/A"}
      </td>
                    <td className="px-6 text-center py-2">
                      {item.chat_id
                        ? "Chat"
                        : item.call_id
                        ? "Call"
                        : "N/A"}
                    </td>
                    <td className="px-6 text-center py-2">
                      {item.duration || "N/A"}
                    </td>
                    <td className="px-6 text-center py-2">
                      {item.rate || "N/A"}
                    </td>
                    <td className="px-6 py-2 text-center">
                      ₹{item.amount || "0.00"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}

export default Orders;
