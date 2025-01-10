"use client";

import { FaPen, FaTrash } from "react-icons/fa";
import Link from "next/link";

const ManageUserRow = ({ user, index }) => {
  return (
    <tr className="hover:bg-[#1e2737] transition-colors">
      <td className="px-4 py-2 text-center">{index + 1}</td>
      <td className="px-4 py-2 text-center">
        <img
          src={user.photo || "/profileplaceholder.png"}
          alt="User"
          className="w-10 h-10 rounded-full mx-auto"
        />
      </td>
      <td className="px-4 py-2 text-center">
        {`${user.fullname?.firstname || ""} ${user.fullname?.lastname || ""}`}
      </td>
      <td className="px-4 py-2 text-center">{user.walletAmount || 0}</td>
      <td className="px-4 py-2 text-center">{user.gender || "N/A"}</td>
      <td className="px-4 py-2 text-center">{user.mobile || "N/A"}</td>
      <td className="px-4 py-2 text-center">{user.email || "N/A"}</td>
      <td className="px-4 py-2 text-center">
        {user.created_at
          ? new Date(user.created_at).toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
          : "N/A"}
      </td>
      <td className="px-4 py-2 mt-2 flex justify-center gap-2">
        <Link href="edit-userprofile">
          <FaPen className="text-blue-500 cursor-pointer" />
        </Link>
        <FaTrash className="text-red-500 cursor-pointer" />
      </td>
    </tr>
  );
};

export default ManageUserRow;
