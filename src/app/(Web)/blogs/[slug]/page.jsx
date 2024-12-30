import React from 'react'
import IndividualBlogContent from '@/components/IndividualBlogContent'
import BlogSection from '@/components/BlogSection'
import RecomendedAstro from '@/components/RecomendedAstro'

function page() {
  return (
    <div>
      <IndividualBlogContent/>
      <h1 className='px-[10px] lg:px-[65px] '>Related Blogs</h1>
      <BlogSection/>
     <RecomendedAstro/>
    </div>
  )
}

export default page
