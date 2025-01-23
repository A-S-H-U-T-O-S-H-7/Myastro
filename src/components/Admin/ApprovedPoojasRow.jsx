"use client";

import { FaPen, FaTrash } from "react-icons/fa";
import Link from "next/link";
import CallDetails from "./CallDeatils";

const PoojaDetailsRow = ({ item, index}) => {
  return (
    <tr className="hover:bg-gradient-to-r from-[#1e2737] to-[#0e1726] text-[#bfc9d4] transition-colors">
      {/* SR No. */}
      <td className="px-4 py-3 text-center font-medium">{index + 1}</td>

      {/* Astrologer */}
      <td className="px-4 py-3 text-center">{item.astrologer || "N/A"}</td>

      {/* Profile */}
      <td className="px-4 py-3 text-center">
        <div className="max-w-[150px] truncate text-sm" title={item.profile}>
          {item.profile || "N/A"}
        </div>
      </td>

      {/* Call Details */}
        <CallDetails/>

      {/* Pooja Name */}
      <td className="px-4 py-3 text-center">{item.poojaName || "N/A"}</td>

      {/* Date */}
      <td className="px-4 py-3 text-center">
        {item.date
          ? new Date(item.date).toLocaleDateString("en-GB")
          : "N/A"}
      </td>

      {/* Status */}
      <td
        className={`px-4 py-3 text-center font-bold ${
          item.status === "Approved"
            ? "text-green-500"
            : item.status === "Pending"
            ? "text-yellow-500"
            : "text-red-500"
        }`}
      >
        {item.status || "N/A"}
      </td>

      {/* Actions */}
      <td className="px-4 py-3 flex justify-center mt-4 gap-4">
      <Link href={`/admin/edit-pooja`}>
          <FaPen className="text-blue-500 cursor-pointer" />
        </Link>
        <FaTrash
          className="text-red-400 hover:text-red-500 cursor-pointer transition-colors"
          title="Delete Pooja"
        />
      </td>
    </tr>
  );
};

export default PoojaDetailsRow;
