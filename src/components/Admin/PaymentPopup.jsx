import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const PaymentPopup = ({ isOpen, onClose }) => {
  // Static Astrologer Details
  const astrologerDetails = {
    name: "Ashutosh Mohanty",
    bank: "XYZ Bank",
    branch: "Central Branch",
    ifsc: "XYZ123456",
    accountNo: "9876543210",
    walletAmount: 10000, // Static wallet amount
    profitShare: 40, // Static profit percentage
  };

  // States for GST, TDS, and Transaction ID
  const [gst, setGst] = useState(0); // Default: 0%
  const [tds, setTds] = useState(0); // Default: 0%
  const [transactionId, setTransactionId] = useState("");

  // Calculations
  const myastroAmount = (astrologerDetails.walletAmount * astrologerDetails.profitShare) / 100;

  const astrologerAmount = astrologerDetails.walletAmount - myastroAmount;
    
  const gstAmount = (gst / 100) * astrologerAmount;
  const tdsAmount = (tds / 100) * astrologerAmount;
  const payableAmount = astrologerAmount - gstAmount - tdsAmount;

  // If popup is closed, render nothing
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-[#1f2937] border-2 border-[#22c7d5] text-white rounded-lg w-[90%] max-w-[800px] h-[90%] shadow-lg p-6 relative overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">
          Payment of <span className="text-green-500"> {astrologerDetails.name}</span>
        </h2>

        <div className="overflow-y-auto flex-1">
          <div className="text-sm flex flex-col gap-4 mb-4">
            <p>
              <strong>Astrologer Bank Details:</strong>
            </p>
            <div className="flex flex-wrap gap-3">
            <p className=" border border-dashed border-[#22c7d5] rounded-md px-4 py-1">Bank: {astrologerDetails.bank}</p>
            <p className=" border border-dashed border-[#22c7d5] rounded-md px-4 py-1">Branch: {astrologerDetails.branch}</p>
            <p className=" border border-dashed border-[#22c7d5] rounded-md px-4 py-1">IFSC: {astrologerDetails.ifsc}</p>
            </div>
            <div className="flex flex-wrap gap-3">
            <p className=" border border-dashed border-[#22c7d5] rounded-md px-4 py-1">A/c No.: {astrologerDetails.accountNo}</p>
            <p className=" border border-dashed border-[#22c7d5] rounded-md px-4 py-1">Profit Share: <span className="text-green-400 font-bold"> {astrologerDetails.profitShare}%</span></p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Astrologer Wallet Amount</label>
            <input
              type="text"
              value={astrologerDetails.walletAmount}
              disabled
              className="w-[95%] px-3 py-2 text-[#22c7d5] bg-[#374151] font-bold rounded-md border-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm  mb-1">Astrologer Amount</label>
            <input
              type="text"
              value={astrologerAmount.toFixed(2)}
              disabled
              className="w-[95%] px-3 py-2 bg-[#374151] text-[#22c7d5] rounded-md border-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm  mb-1">Myastro Amount</label>
            <input
              type="text"
              value={myastroAmount.toFixed(2)}
              disabled
              className="w-[95%] px-3 py-2 bg-[#374151] text-[#22c7d5] rounded-md border-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm  mb-1">GST</label>
            <select
              value={gst}
              onChange={(e) => setGst(Number(e.target.value))}
              className="w-[95%] px-3 py-2 bg-[#374151] text-[#22c7d5] rounded-md border-none"
            >
              <option value={0}>NILL</option>
              <option value={18}>18%</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm  mb-1">GST Amount</label>
            <input
              type="text"
              value={gstAmount.toFixed(2)}
              disabled
              className="w-[95%] px-3 py-2 bg-[#374151] text-[#22c7d5] rounded-md border-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm  mb-1">TDS</label>
            <select
              value={tds}
              onChange={(e) => setTds(Number(e.target.value))}
              className="w-[95%] px-3 py-2 bg-[#374151] text-[#22c7d5] rounded-md border-none"
            >
              <option value={0}>NILL</option>
              <option value={10}>10%</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm  mb-1">TDS Amount</label>
            <input
              type="text"
              value={tdsAmount.toFixed(2)}
              disabled
              className="w-[95%] px-3 py-2 bg-[#374151] text-[#22c7d5] rounded-md border-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm  mb-1">Payable Amount</label>
            <input
              type="text"
              value={payableAmount.toFixed(2)}
              disabled
              className="w-[95%] px-3 py-2 bg-[#374151] text-[#22c7d5] rounded-md border-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm  mb-1">Transaction ID</label>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="w-[95%] px-3 py-2 bg-[#374151] border-[] text-white rounded-md border-none"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md"
          >
            Close
          </button>
          <button
            onClick={() => {
              console.log("Payment Processed", { transactionId });
              onClose();
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
