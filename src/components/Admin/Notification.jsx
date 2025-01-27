"use client";

import { useState, useEffect } from "react";
import { FaPen, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
import ResultsSelector from "./ResultSelector";
import SearchBox from "./SearchBox";
import DateFilter from "./DateFilter";
import Pagination from "./Pagination";
import EditNotification from "./EditNotification";
import NotificationRow from "./NotificationRow";
import ENV from "../Env";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortColumn, setSortColumn] = useState("srno");
  const [sortDirection, setSortDirection] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotifications = async () => {
    setLoading(true);
    setError(null);
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

      const response = await fetch(`${ENV.API_URL}/admin/notifications?${queryParams}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myastro-token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch notifications");
      }

      const json = await response.json();

      if (json.status) {
        setNotifications(json.notifications || []);
        setTotalPages(json.pagination.totalPages);
      } else {
        setNotifications([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error.message);
      setError(error.message);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notification?")) return;

    try {
      const response = await fetch(`${ENV.API_URL}/admin/notification/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myastro-token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to delete notification");

      alert("Notification deleted successfully");
      fetchNotifications();
    } catch (error) {
      console.error("Error deleting notification:", error.message);
      alert("Failed to delete notification");
    }
  };

  const handleEdit = (notification) => {
    setSelectedNotification(notification);
    setIsModalVisible(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mr-[15px]">
        <h1 className="text-[#22c7d5] text-[25px] mt-3 ml-[130px]">Notifications</h1>
        <button
          onClick={() => {
            setSelectedNotification(null);
            setIsModalVisible(true);
          }}
          className="rounded-md px-4 py-2 mt-2 hover:bg-green-700 shadow-sm shadow-green-300 text-white font-medium bg-green-600"
        >
          Send Notification
        </button>
      </div>
      <div className="m-[15px] border border-[#22c7d5] rounded-[8px] ml-[120px]">
        <div className="p-4 bg-[#0e1726] text-[#888ea8] rounded-lg shadow-md">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4">
            <DateFilter onFilter={handleDateFilter} />
            <div className="flex items-center gap-6">
              <ResultsSelector resultsPerPage={limit} onChange={(e) => setLimit(Number(e.target.value))} />
              <SearchBox searchTerm={searchTerm} onSearchChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e2737] to-[#0e1726] text-[#bfc9d4]">
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("srno")}>
                    SR No.
                    {sortColumn === "srno" && (sortDirection === "asc" ? <FaArrowUp className="inline ml-2 text-green-500" /> : <FaArrowDown className="inline ml-2 text-red-500" />)}
                  </th>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("date")}>
                    Date
                    {sortColumn === "date" && (sortDirection === "asc" ? <FaArrowUp className="inline ml-2 text-green-500" /> : <FaArrowDown className="inline ml-2 text-red-500" />)}
                  </th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Message</th>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-red-500">{error}</td>
                  </tr>
                ) : notifications.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">No notifications found</td>
                  </tr>
                ) : (
                  notifications.map((item, index) => (
                    <NotificationRow 
                      key={item.id} 
                      item={item} 
                      index={index} 
                      onEdit={handleEdit} 
                      onDelete={handleDelete} 
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && !error && notifications.length > 0 && (
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          )}
        </div>
      </div>

      {/* Edit Notification Modal */}
      {isModalVisible && (
        <EditNotification
          isVisible={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
            setSelectedNotification(null);
          }}
          notification={selectedNotification}
          onSuccess={fetchNotifications}
          isEdit={!!selectedNotification}
        />
      )}
    </div>
  );
};

export default Notification;