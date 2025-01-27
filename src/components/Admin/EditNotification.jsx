"use client";

import React, { useState, useEffect } from "react";
import ENV from "../Env";

const EditNotification = ({
  isVisible,
  onClose,
  onSuccess,
  notification = null,
  isEdit = false,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (notification) {
      setTitle(notification.title || "Default Title"); // Set default title
      setContent(notification.message || "Default Message"); // Set default message
    } else {
      setTitle("Default Title"); // Default title for new notifications
      setContent("Default Message"); // Default message for new notifications
    }
  }, [notification]);

  if (!isVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate inputs
    if (!title.trim() || !content.trim()) {
      setError("Title and message are required.");
      setLoading(false);
      return;
    }

    const notificationData = { title, message: content };
    const endpoint = isEdit
      ? `${ENV.API_URL}/admin/notification/edit/${notification?.id}`
      : `${ENV.API_URL}/admin/notification/create`;
    const method = isEdit ? "PUT" : "POST";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myastro-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notificationData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Failed to ${isEdit ? "edit" : "create"} notification`);
      }

      // Reset form and notify success
      setTitle("");
      setContent("");
      onSuccess(result);
      onClose();
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#0e1726] border border-[#22c7d5] text-gray-300 w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 bg-[#101c35] border-b border-gray-700">
          <h2 className="text-lg font-semibold">
            {isEdit ? "Edit Notification" : "Send Notification"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div>
            <label
              htmlFor="notificationTitle"
              className="block text-sm font-medium text-gray-400"
            >
              Notification Title
            </label>
            <input
              id="notificationTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="w-full mt-1 p-2 rounded bg-[#101c35] text-gray-300 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="notificationContent"
              className="block text-sm font-medium text-gray-400"
            >
              Notification Content
            </label>
            <textarea
              id="notificationContent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter content"
              rows="4"
              className="w-full mt-1 p-2 rounded bg-[#101c35] text-gray-300 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded-md text-white ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNotification;
