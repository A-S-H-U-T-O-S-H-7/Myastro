import PaymentSection from '@/components/PaymentSection'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSection />
    </Suspense>
  )
}

export default page
