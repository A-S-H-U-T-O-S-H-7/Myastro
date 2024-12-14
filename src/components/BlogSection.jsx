import React from 'react'
import BlogCard from './BlogCard'

export default function BlogSection() {
  return (
    
      <div className="px-[10px] lg:px-[65px] py-4  ">
      <h2 className="text-[30px] pb-7 text-[#3C0184] font-heading font-bold">Latest Blogs</h2>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 '>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>


      </div>
      <div className='flex justify-center mt-7'> 
      <div className="max-w-[250px] min-h-[41px] rounded-3xl px-8 py-2  hover:text-white   text-[#317f7f] hover:bg-[#3C0184] border border-[#3C0184] ">
          <h3 className="font-semibold cursor-pointer flex justify-center ">
            View All
          </h3>
        </div>
      </div>
      </div>
    
  )
}
