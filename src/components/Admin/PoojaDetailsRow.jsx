"use client";

import { FaPen, FaTrash } from "react-icons/fa";
import Link from "next/link";

const PoojaDetailsRow = ({ item, index }) => {
  return (
    <tr className="hover:bg-[#1e2737] transition-colors">
      <td className="px-4 py-2 text-center">{index + 1}</td>
      
      <td className="px-4 py-2 text-center">{item.poojaName || "N/A"}</td>
      <td className="px-4 py-2 text-center">
        <div className="max-w-[200px] truncate">{item.description || "N/A"}</div>
      </td>
      
        <td className="px-4 py-2 text-center">
        {item.date
          ? new Date(item.date).toLocaleDateString("en-GB")
          : "N/A"}
      </td>
      <td className="px-4 py-2 text-green-500 font-bold text-center">
        {item.status || "N/A"}
      </td>
      <td className="px-4 py-2 flex justify-center gap-2">
        <Link href={`/admin/edit-pooja/${item.id}`}>
          <FaPen className="text-blue-500 cursor-pointer" />
        </Link>
        <FaTrash className="text-red-500 cursor-pointer" />
      </td>
    </tr>
  );
};

export default PoojaDetailsRow;