import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Subfooter = () => {
  return (
    <div className='bg-[#161616] py-8 flex flex-col justify-center'>
        <div className='flex gap-8 justify-center py-4 pb-8'>
          <a href=''>
       <Image  className="  text-white" src="/facebook.svg" alt="Icon" width={30} height={30} /> 
       </a>
       <a href=''>
        <Image  className="  text-white" src="/instagram.svg" alt="Icon" width={30} height={30} />
        </a>
        <a href=''>
        <Image  className="  text-white" src="/youtube.svg" alt="Icon" width={30} height={30} />
        </a>
        <a href=''>
        <Image  className="  text-white" src="/x.svg" alt="Icon" width={30} height={30} />
        </a>



        </div>

      <p className='text-[#c9cfd4] m-auto px-5'>© Copyright 2024 by ATD RETAILS AND DIGITAL NETWORK PRIVATE LIMITED. All right Reserved - Design By www.alltimedata.com</p>
    </div>
  )
}

export default Subfooter
