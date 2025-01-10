"use client";

import CallDetails from "./CallDeatils";
import { FaPen, FaTrash } from "react-icons/fa";

const PendingAstrologerRow = ({ item, index }) => {
  return (
    <tr className="hover:bg-[#1e2737] transition-colors">
      <td className="px-4 py-2 text-center">{index + 1}</td>

      <td className="px-4 text-center py-2">
      <CallDetails item={item} />
      </td>

      <td className="px-4 py-2 text-center">
        <img
          src={item.photo || "/profileplaceholder.png"}
          alt="User"
          className="w-10 h-10 rounded-full mx-auto"
        />
      </td>

      <td className="px-4 text-center py-2">{item.fullname || "N/A"}</td>
      <td className="px-4 text-center py-2">{item.email || "N/A"}</td>
      <td className="px-4 text-center py-2">{item.mobile || "N/A"}</td>
      <td className="px-4 py-2 text-center">
        {item.date
          ? new Date(item.date).toLocaleDateString("en-GB")
          : "N/A"}
      </td>
      <td className="px-4 py-2 text-orange-500 font-bold text-center">
        {item.status || "N/A"}
      </td>
      <td className="px-4 py-2 text-center">
        <button className="text-sm text-white px-4 py-1 rounded-[6px] bg-[#22c7d5]">
          Send
        </button>
      </td>
      <td className="px-4 py-2 text-center">
        <button className="text-sm text-white px-4 py-1 rounded-[6px] bg-[#22c7d5]">
          Send
        </button>
      </td>

      <td className="px-4 py-2 flex justify-center gap-2">
        <FaPen className="text-blue-500 cursor-pointer" />
        <FaTrash className="text-red-500 cursor-pointer" />
      </td>
    </tr>
  );
};

export default PendingAstrologerRow;
