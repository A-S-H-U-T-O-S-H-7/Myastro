import React from 'react'
import { RxAvatar } from "react-icons/rx";

function FeedbackCard() {
  return (
    <div >

    <div className='max-w-[355px] max-h-[160px] border border-[#2125295f] rounded-md'>
     <div className='flex '>
     <RxAvatar className='p-2 rounded-full mt-[-30px] ml-4 bg-slate-400 z-10' size={80}/>
     <div className='p-2'>
            <h3 className='text-[15px]'>Ashutosh</h3>
            <h4 className='text-[13px] text-[#515151] py-1'>Odisha</h4>
        </div>
     </div>
     <div className='px-4 py-2 text-[#212529BF]'>
        <p>This App is epic !! when i started asking thing they knew it before . he stared telling all true incident</p>
     </div>

    </div>

    </div>
  )
}

export default FeedbackCard
