"use client";

import { useState, useMemo, useEffect } from "react";
import { FaPen, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
import ResultsSelector from "./ResultSelector";
import SearchBox from "./SearchBox";
import DateFilter from "./DateFilter";
import Pagination from "./Pagination";
import ENV from "../Env";



const ManageTransection = () => {
  const [transactions, setTransactions] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortColumn, setSortColumn] = useState("srno");
  const [sortDirection, setSortDirection] = useState("asc");
  const [loader, setLoader] = useState(false);


  const fetchTransaction = async () => {
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
        `${ENV.API_URL}/admin/transactions?${queryParams}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("myastro-token")}`,
            "Content-Type": "application/json",

          },
          //credentials: 'include',
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const json = await response.json();

      if (json.status) {
        setTransactions(json.transactions);
        setTotalPages(json.pagination.totalPages);
      } else {
        setTransactions([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("Error fetching astrologers:", error.message);
      setTransactions([]);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, [page, limit, searchTerm, startDate, endDate, sortColumn, sortDirection]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearch = () => {

  }
  return (
    <div>
      <h1 className="text-[#22c7d5] text-[25px] mt-3 ml-[130px]">Transactions</h1>
      <div className=" m-[15px] border border-[#22c7d5] rounded-[8px] ml-[120px]">
        <div className="p-4 bg-[#0e1726]  text-[#888ea8] rounded-lg shadow-md">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4">
            <DateFilter onFilter={(dates) => handleDateFilter(dates)} />

            <div className="flex items-center gap-6">
              <ResultsSelector
                resultsPerPage={page}
                onChange={(e) => setPage(Number(e.target.value))}
              />
              <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse min-w-[1500px]">
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
                  <th className="px-4 py-2">GST</th>
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
                {transactions.map((item, index) => {
                  const localDate = new Date(item.transactiondate);
                  const formattedDate = localDate.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  });
                  const formattedTime = localDate.toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  });
                  return (<tr
                    key={index}
                    className="hover:bg-[#1e2737] transition-colors"
                  >
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 text-center py-2">{item.name}</td>
                    <td className="px-4 text-center py-2">{item.phone}</td>
                    <td className="px-4 text-center py-2">{item.orderid}</td>
                    <td className="px-4 text-cneter py-2">{item.paymentid}</td>
                    <td className="px-4   py-2 text-center">{item.amount}</td>
                    <td className="px-4   py-2 text-center">{item.gst.toFixed(2)}</td>
                    <td className="px-4 py-2 text-center">{`${formattedDate} ${formattedTime}`}</td>
                    <td className="px-4 py-2 text-center">{item.transactiontype}</td>
                  </tr>)
                })}
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

export default ManageTransection;
