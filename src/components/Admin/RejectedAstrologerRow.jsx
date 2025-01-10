import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import Link from "next/link";
import CallDetails from "./CallDeatils";

const RejectedAstrologerRow = ({ index, item }) => {
  return (
    <tr className="hover:bg-[#1e2737] transition-colors">
            <td className="px-4 py-2 text-center">{index + 1}</td>

      <td className="px-4 text-center py-2">
      <CallDetails item={item} />
      </td>
      <td className="px-4 py-2 text-center">
        <img
          src={item.photo ? item.photo : "/profileplaceholder.png"}
          alt="User"
          className="w-10 h-10 rounded-full mx-auto"
        />
      </td>
      <td className="px-4 text-center py-2">{item.fullname}</td>
      <td className="px-4 text-center py-2">{item.email}</td>
      <td className="px-4 text-center py-2">{item.mobile}</td>
      <td className="px-4 py-2 text-center">
        {item.date ? new Date(item.date).toLocaleDateString("en-GB") : "N/A"}
      </td>
      <td className="px-4 py-2 font-bold text-red-600 text-center">
        Rejected
      </td>
      <td className="px-4 py-2 flex items-center justify-center gap-2">
        <Link href={`/admin/edit-astrologerprofile/${item._id}`}>
          <FaPen className="text-blue-500 cursor-pointer" />
        </Link>
        <FaTrash className="text-red-500 cursor-pointer" />
      </td>
    </tr>
  );
};

export default RejectedAstrologerRow;
