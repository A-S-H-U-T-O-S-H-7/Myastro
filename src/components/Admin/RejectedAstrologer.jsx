"use client";

import { useState, useEffect } from "react";
import ResultsSelector from "./ResultSelector";
import SearchBox from "./SearchBox";
import DateFilter from "./DateFilter";
import Pagination from "./Pagination";
import ENV from "../Env";
import RejectedAstrologerRow from "./RejectedAstrologerRow";

const RejectedAstrologer = () => {
  const [astrologers, setAstrologers] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortColumn, setSortColumn] = useState("srno");
  const [sortDirection, setSortDirection] = useState("asc");
  const [loader, setLoader] = useState(false);

  const fetchAstrologers = async () => {
    setLoader(true);
    try {
      // Build query params
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
        `${ENV.API_URL}/admin/manage-rejected-astrologers?${queryParams}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("myastro-token")}`,
            "Content-Type": "application/json",
            credentials: 'include',
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const json = await response.json();

      if (json.status) {
        setAstrologers(json.astrologers);
        setTotalPages(json.pagination.totalPages);
      } else {
        setAstrologers([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("Error fetching astrologers:", error.message);
      setAstrologers([]);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchAstrologers();
  }, [page, limit, searchTerm, startDate, endDate, sortColumn, sortDirection]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div>
      <h1 className="text-[#22c7d5] text-[25px] mt-3 ml-[130px]">
        Rejected Astrologers
      </h1>
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
                onSearchChange={(e) => {
                  console.log(e.target.value); 
                  setSearchTerm(e.target.value); 
                }}
              />
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
                  </th>
                  <th className="px-4 py-2">Call Details</th>
                  <th className="px-4 py-2">Photo</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => handleSort("created_at")}
                  >
                    Date
                  </th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {astrologers.length > 0 ? (
                  astrologers.map((item, index) => (
                    <RejectedAstrologerRow
            key={item._id}
            item={item}
            index={index}
           
          />
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="9"
                      className="text-center text-[#888ea8] py-4"
                    >
                      No results found.
                    </td>
                  </tr>
                )}
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

export default RejectedAstrologer;
