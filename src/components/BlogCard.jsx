import React from 'react'
import Image from 'next/image'
import { FaEye } from "react-icons/fa";
import { Fullscreen } from 'lucide-react'

function BlogCard() {
  return <div>

      <div className="min-w-[250px] h-[290px]  hover:shadow-xl flex justify-between flex-col gap-3  relative cursor-pointer rounded-xl border border-purple-700">
        <div className='h-[150px] rounded-t-xl overflow-hidden'>
        <Image src="/Blog1.jpg" alt="demo" width={300} layout="responsive"  height={250}  />
       

        <div className='w-[80px] z-20 min-h-[24px] absolute top-1 right-1 gap-2 px-1 justify-center py-1 items-center  bg-[#f6f7f6] flex rounded-full'>
        <FaEye size={15} className='text-black' /> <span className='text-black text-xs'>2345</span>
        </div>
        
        </div>

        <div className="h-[50px] text-sm font-bold font-heading px-3 pb-3">
        Embrace Change, Embrace Life: The Svadhisthana Experience <span className=' font-semibold text-blue-700'>Read More</span> 
        </div>

        <div className="flex justify-between  px-3 py-2">
          <p className='text-[#616161] text-[13px] '>Ashutosh</p>
          <p className='text-[#616161] text-[13px] '>Dec 16,2024</p>
        </div>

      </div>


    </div>
}

export default BlogCard
