import React from 'react'
import AstroNavbar from '@/components/AstroNavbar'
import AstrologerCardContainer from '@/components/AstrologerCardContainer'
import DetailsContent from '@/components/DetailsContent'
import FAQ from '@/components/FAQ'

function page() {
  return (
    <div>
      <AstroNavbar />
      <AstrologerCardContainer sliceCount={50} />
      <DetailsContent />
      <FAQ/>
    </div>
  )
}

export default page
