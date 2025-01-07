"use client"
import Edituser from '@/components/Admin/Edituser';
import React from 'react'
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from "react-icons/io";


function page() {
    const initialValues = {
        firstName: "Ashu",
        lastName: "Tosh",
        mobile: "9876543210",
        dob: "1990-01-01", 
        tob: "10:30", 
        pob: "Balasore",
        anniversaryDate: "2015-06-15",
        zodiacSign: "Leo", 
        gender: "Male", 
        email: "ashu@example.com",
        state: "Odisha",
        city: "Balasore",
      };

      const router = useRouter(); 
      
      
  return (
    <div>
 {/* Back Button */}
<div className='flex justify-end mt-5 mr-[15px] items-center'>
                  <button
                    onClick={() => router.back()} 
                    className="bg-blue-700 rounded-md text-gray-400 flex font-bold justify-center items-center gap-3 px-4 py-1  focus:outline-none"
                >
                  <IoMdArrowRoundBack />

                    Back
                </button>
                </div>
      <Edituser initialValues={initialValues}/>
    </div>
  )
}

export default page
