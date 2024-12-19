import React from 'react'
import Link from 'next/link'

export default function CallchatReusable() {
  return (
    <div className='flex flex-wrap gap-[50px] lg:gap-[120px] py-16 justify-center'>
      <div className='flex flex-col'>
        <h2 className='text-[26px] font-semibold pb-3'>Call To Live An Astrologer</h2>
        <Link href="/talk-to-astrologer">
        <button className='rounded-[12px] w-[310px] text-white bg-[#ff9900] py-2 text-[13px] border'>Call Now</button>
        </Link>
        </div>
        
      <div className='flex flex-col'>
        <h2 className='text-[26px] font-semibold pb-3'>Chat To Live An Astrologer</h2>
        <Link href="/chat-with-astrologer">
        <button className='rounded-[12px] w-[310px] text-white bg-[#317f7f] py-2 text-[13px] border'>Chat Now</button>
      </Link>
      </div>
    </div>
  )
}
