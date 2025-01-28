"use client"
import React, { useEffect, useState } from "react";
import { LuIndianRupee } from "react-icons/lu";
import Image from "next/image";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import ENV from "./Env";
import { BeatLoader } from "react-spinners";

function PaymentSection() {

  const { isAuthenticated, details, userToken } = useSelector(state => state.user);
  const searchParams = useSearchParams();
  const planid = searchParams.get('planid');
  const [couponValue, setCouponValue] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [plan, setPlan] = useState({});
  const fetchPlanDetails = async () => {
    try {
      const response = await fetch(`${ENV.API_URL}/user/show-single-recharge-plan/${planid}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch plan details");
      }
      const data = await response.json();
      setPlan(data.data);
      setTotalAmount(data.data.amount)
    } catch (error) {
      setPlan({});
      console.error("Error fetching plan details:", error);
    }
  }
  useEffect(() => {
    if (planid) {
      fetchPlanDetails();
    }
  }, [])
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => reject(false);
      document.body.appendChild(script);
    });
  };
  const handlePayment = async () => {
    setIsLoading(true);

    // Load Razorpay script
    const isScriptLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      setIsLoading(false);
      return;
    }

    try {
      // Create order from the server
      const orderResponse = await fetch(`${ENV.API_URL}/user/create-order`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          amount: Number(totalAmount),
          planid: planid,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create order");
      }

      const order = await orderResponse.json();
      const { order_id, amount, currency } = order.data;

      // Razorpay options
      const options = {
        key: ENV.REACT_APP_RAZORPAY_KEY_ID,
        amount: totalAmount,
        currency,
        name: 'Myastro',
        description: 'Myastro recharge',
        order_id,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          setIsLoading(false);
        },
        prefill: {
          name: `${details.name.firstname} ${details.name.lastname}`,
          email: details.email,
          contact: details.mobile,
        },
        theme: {
          color: '#3399cc',
        },
        modal: {
          escape: false,
          ondismiss: function () {
            alert("Payment was cancelled by the user.");
            setIsLoading(false);
          },
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error', error);
      setIsLoading(false);
    }
  };

  const handleCouponChange = (e) => {
    setCouponValue(e.target.value);
  };

  if (!planid) {
    return (<div className="px-[10px] lg:px-[65px] py-8">Plan ID Required...  </div>)
  }
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
              <LuIndianRupee size={15} /> {plan.amount}/-
            </p>
          </div>
          <div className="flex justify-between px-[10px]">
            <p className="font-sans text-[#212529]">GST @ 18%</p>
            <p className="font-sans text-[#212529] flex items-center">
              <LuIndianRupee size={15} /> {plan.amount * 18 / 100}/-
            </p>
          </div>
          {/* <div className="flex justify-between px-[10px]">
            <p className="font-sans font-semibold text-[#198754]">
              Extra Bonus
            </p>
            <p className="font-sans font-semibold text-[#198754] flex items-center">
              <LuIndianRupee size={15} /> {plan.offer}/-
            </p>
          </div> */}
          <div className="flex justify-between px-[10px]">
            <p className="font-sans font-semibold text-[#e58a5c]">
              Total Amount
            </p>
            <p className="font-sans font-semibold text-[#e58a5c] flex items-center">
              <LuIndianRupee size={15} /> {plan.amount + (plan.amount * 18 / 100)}/-
            </p>
          </div>

          {/* Gift Box */}
          {/* <div className="flex justify-center">
            <div className="w-auto lg:w-[520px] min-h-[75px] px-2 flex rounded-[6px] border justify-center border-dashed border-[#198754]">
              <Image src="/gift.png" width={50} height={50} alt="gift" />
              <div className="flex items-center justify-center">
                <LuIndianRupee size={15} className="text-[#198754]" />{" "}
                <p>
                  <span className="text-lg font-bold text-[#198754]">
                    {plan.offer} Extra
                  </span>{" "}
                  will be added by MyAstro to your wallet.
                </p>
              </div>
            </div>
          </div> */}

          {/* Payment Button */}
          <div className="flex justify-center">
            <button className="border w-[240px] h-[41px] bg-[#9b57ed] text-white flex justify-center py-[9px] rounded-[6px]"
              disabled={isLoading}
              onClick={() => { handlePayment() }}
            >
             {isLoading?(<BeatLoader color="#fff" />):("Proceed to Payment")} 
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
              className={`border px-7 rounded-md gap-3 ${couponValue.trim()
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
