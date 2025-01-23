"use client";

import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import ResultsSelector from "./ResultSelector";
import SearchBox from "./SearchBox";
import DateFilter from "./DateFilter";
import Pagination from "./Pagination";
import PoojaDetailsRow from "./ApprovedPoojasRow";

const PendingPoojas = () => {
  const [poojas, setPoojas] = useState([
    {
      id: 1,
      srno: 1,
      astrologer: "Astrologer A",
      profile: "View Profile",
      callDetails: "Call Now",
      poojaName: "Lakshmi Pooja",
      date: "2025-01-20",
      status: "Pending",
    },
    {
      id: 2,
      srno: 2,
      astrologer: "Astrologer B",
      profile: "View Profile",
      callDetails: "Call Now",
      poojaName: "Ganesh Pooja",
      date: "2025-01-21",
      status: "Pending",
    },
  ]);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortColumn, setSortColumn] = useState("srno");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-[#22c7d5] text-[25px] mt-3 ml-[130px]">Pending Poojas</h1>
      <div className="m-[15px] border border-[#22c7d5] rounded-[8px] ml-[120px]">
        <div className="p-4 bg-[#0e1726] text-[#888ea8] rounded-lg shadow-md">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4">
            <DateFilter 
              onFilter={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
            />
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
          <div className="overflow-x-auto rounded-[8px]">
            <table className="w-full table-auto border-collapse min-w-[1400px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e2737] to-[#0e1726] text-[#bfc9d4]">
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("srno")}>SR No.
                    {sortColumn === "srno" && (
                      sortDirection === "asc" ? (
                        <FaArrowUp className="inline ml-2 text-green-500" />
                      ) : (
                        <FaArrowDown className="inline ml-2 text-red-500" />
                      )
                    )}
                  </th>
                  <th className="px-4 py-2">Astrologer</th>
                  <th className="px-4 py-2">Profile</th>
                  <th className="px-4 py-2">Call Details</th>
                  <th className="px-4 py-2">Pooja Name</th>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("date")}>Date
                    {sortColumn === "date" && (
                      sortDirection === "asc" ? (
                        <FaArrowUp className="inline ml-2 text-green-500" />
                      ) : (
                        <FaArrowDown className="inline ml-2 text-red-500" />
                      )
                    )}
                  </th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {poojas.map((item, index) => (
                  <PoojaDetailsRow key={item.id} item={item} index={index} />
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

export default PendingPoojas;
