import AstrologerRegistration from '@/components/Registration'
import { AstrologerRegistrationProvider } from '@/lib/AstrologerRegistrationContext'
import React from 'react'

function page() {
  return (
    <AstrologerRegistrationProvider>
      <AstrologerRegistration />
    </AstrologerRegistrationProvider>
  )
}

export default page;
