"use client";

import React from 'react';
import { FaPen, FaTrash } from "react-icons/fa";

function NotificationRow({ item, index, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <tr className="hover:bg-[#1e2737] transition-colors">
      <td className="px-4 py-2 text-center">{index + 1}</td>
      <td className="px-4 py-2 text-center">{formatDate(item.date)}</td>
      <td className="px-4 py-2 text-center">{item.title}</td>
      <td className="px-4 py-2 text-center">{item.message}</td>
      <td className="px-4 py-2 text-center">{item.user}</td>
      <td className="px-4 py-2 flex justify-center gap-2">
        <button
          className="bg-[#22c7d5] flex items-center gap-2 px-[20px] py-[7px] rounded-[6px] text-[11px] text-white"
          onClick={() => onEdit(item)}
        >
          <FaPen />
          Edit
        </button>
        <button
          className="bg-red-500 flex items-center gap-2 px-[20px] py-[7px] rounded-[6px] text-[11px] text-white"
          onClick={() => onDelete(item.id)}
        >
          <FaTrash />
          Delete
        </button>
      </td>
    </tr>
  );
}

export default NotificationRow;