'use client'
import React, { useState } from 'react'
import ReferralList from '../../components/ui/Referrals/ReferralList'
import CTACard from '../../components/ui/Referrals/CTACard'
import Heading from '../../components/ui/heading/defaultHeading'

function Page() {
  // const [amountPreviousUsers, setAmountPreviousUsers] = useState(0)

  return (
    <div className="flex flex-col space-y-4">
      <Heading />
      <CTACard />
      <div>
        <ReferralList />
      </div>
    </div>
  )
}

export default Page
