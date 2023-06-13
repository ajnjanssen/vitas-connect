'use client'
import React, { useState } from 'react'
import ReferralList from '@/components/ui/Referrals/ReferralList'
import SearchInput from '@/components/ui/searchInput/SearchInput'
import Heading from '@/components/ui/Referrals/Heading'
import CTACard from '@/components/ui/Referrals/CTACard'

function Referrals() {
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

export default Referrals
