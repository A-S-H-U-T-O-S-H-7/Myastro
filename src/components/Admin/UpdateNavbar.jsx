import React from "react";
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from "react-icons/io";



const Navbar = ({ activeTab, setActiveTab }) => {
    const tabs = ["Personal Details", "Other Details", "Bank A/c Details", "Verification Zone"];
    const router = useRouter(); 

  
    return (
      <div className="flex  flex-wrap  justify-between space-x-4 bg-[#1B2E4B] px-6 py-3 rounded-lg">
        <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-semibold rounded-md ${
              activeTab === index
                ? "bg-[#0e1726] border border-[#22c7d5] text-[#bfc9d4]"
                : "text-[#bfc9d4] hover:text-[#bfc9d4] "
            }`}
          >
            {tab}
          </button>
        ))}
        </div>

              {/* Back Button */}

                  <button
                    onClick={() => router.back()} 
                    className=" text-gray-400 flex font-bold justify-center items-center gap-3 px-4 py-1  focus:outline-none"
                >
                  <IoMdArrowRoundBack />

                    Back
                </button>


      </div>
    );
  };
  
  export default Navbar;
  