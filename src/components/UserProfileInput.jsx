import React from 'react'
import Image from 'next/image'
import { LuWallet } from "react-icons/lu";
import RecomendedAstro from './RecomendedAstro';
import Footer from './Footer';
import Subfooter from './Subfooter';
import WalletSection from './WalletSection';
import Link from 'next/link';


const UserProfileInput = () => {
  return <div>
      {" "}<div className="px-[10px] justify-center lg:px-[65px] py-4 gap-3 ">
        <div className=" pt-2 pb-5">
          <h2 className="font-heading text-[20px] font-bold">Edit Profile</h2>
        </div>

        {/* image section */}
        <div className="flex flex-auto justify-center lg:justify-normal md:flex-none ">
          <div className="w-[280px]">
            <Image src="/Heroimage2.png" alt="profile pic" width={190} height={200} />
          </div>
          <div>
            {/* personal info text */}
            <h3 className="font-heading text-[#212529] font-bold pb-3">
              Personal Info
            </h3>

            {/* inputs section */}
            <div className="flex flex-wrap gap-4 justify-between ">
              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  First Name
                </label>
                <input type="text" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="First Name" />
              </div>

              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  Last Name
                </label>
                <input type="text" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="Last Name" />
              </div>

              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  Mobile Number
                </label>
                <input type="text" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="Mobile Number" />
              </div>

              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  Date of Birth
                </label>
                <input type="date" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="First Name" />
              </div>

              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  Time of Birth
                </label>
                <input type="time" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="First Name" />
              </div>

              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  Place of Birth{" "}
                </label>
                <input type="text" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="Place of Birth" />
              </div>

              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  Aniversary Date
                </label>
                <input type="date" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="Aniversary Date" />
              </div>

              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  Zodiac Sign
                </label>
                <input type="text" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="First Name" />
              </div>

              <div className="px-3 ">
                <label className="block text-[10px] text-[#333333]" htmlFor="Fname">
                  Gender
                </label>
                <input type="text" class="w-[284px] min-w-[200px] px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500" placeholder="First Name" />
              </div>
            </div>

            {/* update & cancel button */}
            <div className="flex   md:justify-end justify-center pb-[40px] pt-[25px] gap-5">
              <button className="w-[91px] h-[37px] text-white px-4 rounded-[6px]  bg-slate-600 ">
                Cancel
              </button>
              <button className="w-[125px] h-[37px] text-white text-xs px-4 rounded-[6px]  bg-slate-400 ">
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* Wallet section */}
        <div className="bg-teal-100 min-h-[72px] flex justify-between  items-center px-2">
          <div className="w-[140px] flex gap-6 items-center">
            <Link href="/Wallet">
              <LuWallet className="bg-teal-200 p-2 cursor-pointer rounded-[6px] text-teal-800" size={36} />
            </Link>
            <div>
              <p className="text-[10px] text-[#212529]">Wallet</p>
              <p className="text-teal-800 font-bold">0.00 /-</p>
            </div>
          </div>

          <Link href="/Wallet">
            <div className="min-w-[125px] flex gap-2 rounded-[6px] items-center px-4 h-[35px] bg-teal-800">
              <LuWallet className=" cursor-pointer text-white" size={20} />
              <p className="text-white">Recharge</p>
            </div>
          </Link>
        </div>
      </div>
      <RecomendedAstro />
    </div>;
}

export default UserProfileInput
