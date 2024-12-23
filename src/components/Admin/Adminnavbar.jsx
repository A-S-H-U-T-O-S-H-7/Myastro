import React from 'react'
import Image from 'next/image'
import { FaBell } from "react-icons/fa6";


function Adminnavbar() {
  return (
    <div >
      <div className=' h-[61px] flex justify-end items-center  mr-[15px] ml-[120px] gap-5 px-5 bg-[#191e3afc] rounded-[8px]'>

<FaBell className='text-[#bfc9d4] w-[25px] h-[25px]'  width={20} height={20}/>
<Image className='rounded-full' src="/Adminprofile.jpg" width={40} height={40} alt="profile"/>
      </div>
    </div>
  )
}

export default Adminnavbar
