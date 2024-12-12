import React from 'react';
import RechargeCard from './RechargeCard';
import UserSignup from './UserSignup';
import { IoShieldCheckmarkSharp } from "react-icons/io5";


const WalletSection = () => {
  // Dynamic recharge values
  const rechargeValues = [50, 75, 100, 300, 500, 700, 1000, 1500, 2000, 2500];

  return (
    <div className='px-[10px] lg:px-[65px] py-4 gap-3'>
      <h3 className="text-lg font-bold">Wallet Balance: <span className='text-green-800 '>₹0.00</span> </h3>
      <h3 className="text-xl font-bold mt-4">Recharge Options</h3>
      <p className="text-sm text-gray-500 mb-4">
        Minimum 5 min chat/ call balance is required
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
        {rechargeValues.map((value, index) => (
          <RechargeCard key={index} value={value} />
        ))}
      </div>

      <div className="min-h-[58px] px-3 flex gap-2 justify-center items-center bg-emerald-50 mt-6">
      <IoShieldCheckmarkSharp className='text-[#23a030]' />
        <p className="font-normal text-[12px] md:font-bold md:text-base "> 
        Safe & secure payments. 100% Authentic Service</p>
      </div>
    </div>
  );
};

export default WalletSection;
