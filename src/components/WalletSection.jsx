"use client";
import React, { useEffect, useState } from 'react';
import RechargeCard from './RechargeCard';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import ENV from './Env';
import { useSelector } from 'react-redux';

const WalletSection = () => {
  const [loader, setLoader] = useState(true);
  const [plans, setPlans] = useState([]);
  const { isAuthenticated, userToken } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch(`${ENV.API_URL}/user/show-recharge-plans`, {
          method: "GET",
          headers: { Authorization: `Bearer ${userToken}` },
        });
        const result = await response.json();
        if (response.ok) {
          setPlans(result.data || []);
        } else {
          setPlans([]);
        }
      } catch (error) {
        setPlans([]);
      } finally {
        setLoader(false);
      }
    };

    if (userToken) {
      fetchPlan();
    }
  }, [userToken]);

  if (loader) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (!loader && plans.length === 0) {
    return <div className="text-center py-4">No recharge plans available. Please try again later.</div>;
  }

  return (
    <div className="px-[10px] lg:px-[65px] py-4 gap-3">
      <h3 className="text-lg font-bold">Wallet Balance: <span className="text-green-800">₹0.00</span></h3>

      <h3 className="text-xl font-bold mt-4">Recharge Options</h3>
      <p className="text-sm text-gray-500 mb-4">
        Minimum 5 min chat/ call balance is required
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
        {plans.map((value, index) => (
          <RechargeCard key={index} data={value} />
        ))}
      </div>

      <div className="min-h-[58px] px-3 flex gap-2 justify-center items-center bg-emerald-50 mt-6">
        <IoShieldCheckmarkSharp className="text-[#23a030]" />
        <p className="font-normal text-[12px] md:font-bold md:text-base">
          Safe & secure payments. 100% Authentic Service
        </p>
      </div>
    </div>
  );
};

export default WalletSection;
