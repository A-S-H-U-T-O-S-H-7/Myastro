import React from 'react'
import AstroNavbar from '@/components/AstroNavbar'
import AstrologerCardContainer from '@/components/AstrologerCardContainer'
import DetailsContent from '@/components/DetailsContent'
import FAQ from '@/components/FAQ'

const Astrologers = () => {
  return (
    <>
      <AstroNavbar />
      <AstrologerCardContainer sliceCount={50} />
      <DetailsContent />
      <FAQ/>
    </>
  )
}

export default Astrologers
