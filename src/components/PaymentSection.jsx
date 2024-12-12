"use client"
import React, { useState } from "react";
import { LuIndianRupee } from "react-icons/lu";
import Image from "next/image";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

function PaymentSection() {
  const [couponValue, setCouponValue] = useState("");

  const handleCouponChange = (e) => {
    setCouponValue(e.target.value);
  };

  return (
    <div className="px-[10px] lg:px-[65px] py-8">
      <h3 className="text-lg font-bold pb-[24px]">
        Wallet Balance: <span className="text-green-800">₹0.00</span>
      </h3>
      <div className="flex flex-wrap gap-6">
       

        {/* Payment Breakdown */}
        <div className="w-auto lg:w-[540px] max-h-[410px] border rounded-lg flex px-[10px] py-[17px] flex-col order-2 lg:order-1 flex-1 gap-4">
          <p className="font-sans font-bold px-[5px]">Payment Details</p>
          <div className="flex justify-between px-[10px]">
            <p className="font-sans text-[#212529]">Recharge Amount</p>
            <p className="font-sans text-[#212529] flex items-center">
              <LuIndianRupee size={15} /> 100/-
            </p>
          </div>
          <div className="flex justify-between px-[10px]">
            <p className="font-sans text-[#212529]">GST @ 18%</p>
            <p className="font-sans text-[#212529] flex items-center">
              <LuIndianRupee size={15} /> 18/-
            </p>
          </div>
          <div className="flex justify-between px-[10px]">
            <p className="font-sans font-semibold text-[#198754]">
              Extra Bonus
            </p>
            <p className="font-sans font-semibold text-[#198754] flex items-center">
              <LuIndianRupee size={15} /> 50/-
            </p>
          </div>
          <div className="flex justify-between px-[10px]">
            <p className="font-sans font-semibold text-[#e58a5c]">
              Total Amount
            </p>
            <p className="font-sans font-semibold text-[#e58a5c] flex items-center">
              <LuIndianRupee size={15} /> 118/-
            </p>
          </div>

          {/* Gift Box */}
          <div className="flex justify-center">
            <div className="w-auto lg:w-[520px] min-h-[75px] px-2 flex rounded-[6px] border justify-center border-dashed border-[#198754]">
              <Image src="/gift.png" width={50} height={50} alt="gift" />
              <div className="flex items-center justify-center">
                <LuIndianRupee size={15} className="text-[#198754]" />{" "}
                <p>
                  <span className="text-lg font-bold text-[#198754]">
                    50 Extra
                  </span>{" "}
                  will be added by MyAstro to your wallet.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <div className="flex justify-center">
            <button className="border w-[240px] h-[41px] bg-[#9b57ed] text-white flex justify-center py-[9px] rounded-[6px]">
              Proceed to Payment
            </button>
          </div>
        </div>
         {/* Coupon Section */}
         <div className="w-auto lg:w-[540px] max-h-[130px] shadow-md border rounded-lg py-[17px] px-[13px] order-1 lg:order-2 flex-1">
          <h3 className="font-sans font-bold pb-[7px]">Do you have a coupon?</h3>
          <div className="flex gap-4">
            <input
              type="text"
              value={couponValue}
              onChange={handleCouponChange}
              className="w-auto lg:w-[384px] h-[41px] border focus:outline-none focus:border-[#9b57ed] rounded-md text-[#9b57ed] px-2"
              placeholder="Enter coupon code"
            />
            <button
              className={`border px-7 rounded-md gap-3 ${
                couponValue.trim()
                  ? "bg-[#9b57ed] text-white border-[#9b57ed]"
                  : "border-black text-black bg-white"
              }`}
            >
              Apply
            </button>
          </div>
          <p className=" hidden text-red-600 pt-1">Invalid Coupon Code!!</p>
        </div>
      </div>
      <div className="min-h-[58px] px-3 mt-[48px] flex gap-2 justify-center items-center bg-emerald-50">
        <IoShieldCheckmarkSharp className="text-[#23a030]" />
        <p className="font-normal text-[12px] md:font-bold md:text-base">
          Safe & secure payments. 100% Authentic Service
        </p>
      </div>
    </div>
  );
}

export default PaymentSection;
