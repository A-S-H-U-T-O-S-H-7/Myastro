"use client";

import { FaPen, FaTrash } from "react-icons/fa";
import Link from "next/link";
import CallDetails from "./CallDeatils";

const CompleteAstrologerRow = ({ item, index }) => {
  return (
    <tr className="hover:bg-[#1e2737] transition-colors">
            <td className="px-4 py-2 text-center">{index + 1}</td>

      <CallDetails item={item} />

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
      <td className="px-4 py-2 font-bold text-purple-500 text-center">
        {item.status || "N/A"}
      </td>
      <td className="px-4 py-2 mt-2 flex justify-center gap-2">
        <Link href="/admin/edit-astrologerprofile">
          <FaPen className="text-blue-500 cursor-pointer" />
        </Link>
        <FaTrash className="text-red-500 cursor-pointer" />
      </td>
    </tr>
  );
};

export default CompleteAstrologerRow;
