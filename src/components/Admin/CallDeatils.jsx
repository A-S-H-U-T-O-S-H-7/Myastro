"use client";
import { MdContactPhone } from "react-icons/md";
import CallHistoryPopup from "./CallHistoryPopup";
import { useState } from "react";

const CallDetails = ({ item }) => {
  const [showCallPopup, setShowCallPopup] = useState(false)
  return (
    <>
      <td className="px-4 pl-10 py-2">
        <button type="button" onClick={() => setShowCallPopup(true)}>
          <MdContactPhone className="text-orange-300 w-8 h-8 cursor-pointer" />
        </button>
      </td>
      <CallHistoryPopup item={item} showCallPopup={showCallPopup} setShowCallPopup={setShowCallPopup} />
    </>
  );
};

export default CallDetails;
