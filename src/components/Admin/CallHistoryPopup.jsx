"use client";
import React, { useEffect, useState } from "react";
import ENV from "../Env";

const CallHistoryPopup = ({ item, showCallPopup, setShowCallPopup }) => {
  const [remarks, setRemarks] = useState("");
  const [callDate, setCallDate] = useState("");
  const [history, setHistory] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!remarks) {
      setError("Please enter a call comments?")
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      const response = await fetch(`${ENV.API_URL}/admin/astrologer/call/insert`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myastro-token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "astrologer_id": item.id,
          remark: remarks,
          callDate,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit call details");

      const result = await response.json();

      if (result.status) {
        setHistory(result?.calls);
        setRemarks("");
        setCallDate("");
        setIsSubmitting(false);
        setError("");
      } else {
        setError("Failed to update call history.");
        setIsSubmitting(false);
      }
    } catch (error) {
      setError("Failed to update call history." + error.message);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallHistory = async () => {
    try {

      const response = await fetch(`${ENV.API_URL}/admin/manage-calls/${item?.id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("myastro-token")}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      if (!response.ok) throw new Error("Failed to load data");

      const result = await response.json();

      if (result.status) {
        setHistory(result.calls);
      } else {
        setHistory([]);
      }
    } catch (error) {
      setHistory([]);
    } finally {
      setHistory([]);
    }
  }

  useEffect(() => {
    handleCallHistory();
  }, [])

  if (!showCallPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#0e1726] text-white rounded-lg p-6 w-[1100px] ml-[100px] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Call History</h2>
          <button className="text-white hover:text-gray-400" onClick={() => setShowCallPopup(false)}>
            ✕
          </button>
        </div>
        <div className="flex items-center gap-4 mb-4 p-3 border rounded-lg shadow-lg">
          {/* Profile Image */}
          <img
            src={item.photo ? item.photo : "/profileplaceholder.png"}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div className="flex flex-col justify-center">
            {/* Name */}
            <p className="text-sm text-[#888ea8] flex items-center gap-2">
              Name: <span className="font-normal text-[#888ea8]">{item.fullname}</span>
            </p>

            {/* Email */}
            <p className="text-sm text-[#888ea8] flex items-center gap-2">
              <i className="fas fa-envelope text-[#888ea8]"></i>
              Email: <span className="text-[#888ea8]">{item.email}</span>
            </p>

            {/* Mobile */}
            <p className="text-sm text-[#888ea8] flex items-center gap-2">
              <i className="fas fa-phone-alt text-[#888ea8]"></i>
              Mobile: <span className="text-[#888ea8]">{item.mobile}</span>
            </p>
          </div>
        </div>

        <div className="mb-4 text-[15px] text-[#888ea8]">
          <label htmlFor="remarks" className="block text-sm mb-2">Remarks</label>
          <textarea
            id="remarks"
            className="w-full bg-[#1b2e4b] border border-gray-600 rounded p-2 text-white"
            placeholder="Add remarks..."
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="mb-4 flex items-center gap-2">
          <input
            type="date"
            className="bg-[#1b2e4b] min-w-[320px] border border-gray-600 rounded p-2 text-gray-300"
            value={callDate}
            onChange={(e) => setCallDate(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => handleSubmit()}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        <div className="max-h-[220px] overflow-y-auto">
          <table className="w-full border-collapse border border-gray-600 text-sm rounded-md">
            <thead>
              <tr className="bg-[#1e2737]">
                <th className="border border-gray-600 text-[#bfc9d4] px-4 py-2">Call Date</th>
                <th className="border border-gray-600 text-[#bfc9d4] px-4 py-2">Remark</th>
                <th className="border border-gray-600 text-[#bfc9d4] px-4 py-2">User</th>
                <th className="border border-gray-600 text-[#bfc9d4] px-4 py-2">Next Call Date</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 && history.map((entry, index) => (
                <tr key={index} className="hover:bg-[#1e2737]">
                  <td className="border text-center border-gray-600 px-4 py-2">{ new Date(entry.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata'})}</td>
                  <td className="border text-center border-gray-600 px-4 py-2">{entry.remark}</td>
                  <td className="border text-center border-gray-600 px-4 py-2">{entry.admin_id}</td>
                  <td className="border text-center border-gray-600 px-4 py-2">{entry.nextcall || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CallHistoryPopup;
