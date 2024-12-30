import React from 'react'
import Link from 'next/link'
import ThreeAstrologerCardContainer from './ThreeAstrologerCardContainer'

const RecomendedAstro = () => {
  return (
    <div className='bg-[#f5f5f5] h-[] pt-[24px] pb-[40px]'>
      <h2 className='text-[20px] font-semibold px-[10px] text-[#212529] lg:px-[65px]'>Recomended Astrologers</h2>
      <ThreeAstrologerCardContainer/>
      <div className='w-full mt-4 flex justify-center'>
        <Link href="/astrologers">
      <button className='text-indigo-500] rounded-[6px] hover:bg-[#3C0184] hover:text-white text-[#3C0184]  text-center border border-[#3C0184] px-6 py-[6px]'>View All</button>
      </Link>
      </div>
    </div>
  )
}

export default RecomendedAstro
