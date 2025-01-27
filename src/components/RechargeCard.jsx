import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import Link from 'next/link';


function RechargeCard({ data }) {
  return <div>
    <Link href={`/user/payment?planid=${data._id}`}><div className="min-w-[240px] cursor-pointer hover:shadow-[0_4px_15px_rgba(93,102,255,0.5)] transition-shadow duration-300 min-h-[119px] border  rounded-[6px] ">
      <div className='flex justify-center h-[70px] items-center border rounded-t-[6px] '>
        <FaRupeeSign size={20} /> <p className='text-[32px]  font-semibold'>{data.amount}</p>
      </div>
      <div className='bg-green-300 py-[12px] flex justify-center rounded-b-[6px] overflow-hidden'>
        <p className='font-semibold'>Recharge</p>
      </div>
    </div>
    </Link>
  </div>
}

export default RechargeCard 
