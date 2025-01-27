"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import AstroResultsSelector from "./AstroResultSelector";
import AstroSearchBox from "./AstroSearchbox";
import AstroDateFilter from "./AstroDateFilter";
import Pagination from "./Pagination";
import ENV from "../Env";

const Orders = () => {
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
        `${ENV.API_URL}/astrologer/orders?${queryParams}`,
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
        console.log("Orders fetched successfully:", json.data);
        setOrders(json.data);
        setTotalPages(json.pagination?.totalPages || 1);
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

  const formatDate = (date) => {
    if (!date) return "-";
    const formattedDate = new Date(date).toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
    return formattedDate;
  };

  return (
    <div>
      <h1 className="text-[#3C0184] dark:text-[#22c7d5] font-bold font-heading text-[25px] mt-3 ml-[130px]">
        Orders
      </h1>
      <div className="m-[15px] border border-purple-500 dark:border-[#22c7d5] rounded-[8px] ml-[120px]">
        <div className="p-4 bg-[#f8f9fa] dark:bg-[#0e1726] text-[#212529] dark:text-[#888ea8] rounded-lg shadow-md">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            <AstroDateFilter
              onFilter={(dates) => handleDateFilter(dates)}
            />

            <div className="flex flex-wrap items-center gap-6">
              <AstroResultsSelector
                resultsPerPage={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              />
              <AstroSearchBox
                searchTerm={searchTerm}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto shadow-md border-collapse min-w-[1500px]">
              <thead>
                <tr className="bg-[#e9ecef] rounded-md dark:bg-gradient-to-r from-[#1e2737] to-[#0e1726] text-[#495057] dark:text-[#bfc9d4]">
                  <th className="px-6 py-2 whitespace-nowrap">SR No.</th>
                  <th
                    className="px-6 py-2 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSort("date")}
                  >
                    Date
                    {sortColumn === "date" &&
                      (sortDirection === "asc" ? (
                        <FaArrowUp className="inline ml-2 text-green-500" />
                      ) : (
                        <FaArrowDown className="inline ml-2 text-red-500" />
                      ))}
                  </th>
                  <th className="px-6 py-2 whitespace-nowrap">User Name</th>
                  <th className="px-6 py-2 whitespace-nowrap">Call/Chat</th>
                  <th className="px-6 py-2 whitespace-nowrap">Duration</th>
                  <th className="px-6 py-2 whitespace-nowrap">Status</th>
                  <th className="px-6 py-2 whitespace-nowrap">Rate</th>
                  <th
                    className="px-6 py-2 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSort("walletAmount")}
                  >
                    Amount
                    {sortColumn === "walletAmount" &&
                      (sortDirection === "asc" ? (
                        <FaArrowUp className="inline ml-2 text-green-500" />
                      ) : (
                        <FaArrowDown className="inline ml-2 text-red-500" />
                      ))}
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-[#e2d4f1] dark:hover:bg-[#1e2737] transition-colors"
                  >
                    <td className="px-6 py-2 text-center">{index + 1}</td>
                    <td className="px-6 py-2 text-center">
                      {formatDate(item.order_date)}
                    </td>
                    <td className="px-6 text-center py-2">
                      {item.user?.name?.firstname}{" "}
                      {item.user?.name?.lastname}
                    </td>
                    <td className="px-6 text-center py-2">
                      {item.call_id === null
                        ? "Chat"
                        : item.chat_id === null
                        ? "Call"
                        : "-"}
                    </td>
                    <td className="px-6 text-center py-2">
                      {item.duration || "-"}
                    </td>
                    <td className="px-6 text-center py-2">
                      {item.status || "-"}
                    </td>
                    <td className="px-6 text-center py-2">{item.rate || "-"}</td>
                    <td className="px-6 py-2 text-center">
                      {item.walletAmount || "-"}
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
};

export default Orders;
