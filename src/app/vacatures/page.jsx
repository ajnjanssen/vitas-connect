'use client'
import React, { useState } from 'react'
import CheckboxGroup from '@/components/ui/CheckboxGroup/CheckboxGroup'
import AlignList from '@/components/ui/alignList/AlignList'
import DefaultHeading from '@/components/ui/heading/defaultHeading'
import SearchInput from '@/components/ui/searchInput/SearchInput'
import { Divider } from '@mui/material'
import DropdownGroup from '@/components/ui/CheckboxGroup/DropdownGroup'

function Vacatures() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="flex flex-col space-y-4">
      <DefaultHeading
        heading="Vacatures"
        subheading="Hier vind je alle vacatures"
      />
      <div className="flex flex-col space-y-4 pt-2">
        <SearchInput
          label="referralsearch"
          placeholder="zoeken"
          setSearchQuery={handleSearch} // Pass handleSearch as a prop
        />
        <div className="hidden md:block">
          <CheckboxGroup setSearchQuery={setSearchQuery} />{' '}
        </div>
        <div className="block md:hidden w-full">
          {/* <DropdownGroup setSearchQuery={setSearchQuery} />{' '} */}
        </div>
        {/* Pass setSearchQuery to the CheckboxGroup component */}
      </div>
      <div>
        <h1 className="text-xl font-bold text-base-content">
          Openstaande vacature(s)
        </h1>
        <div>
          <AlignList searchQuery={searchQuery} />{' '}
          {/* Pass searchQuery to the AlignList component */}
        </div>
      </div>
    </div>
  )
}

export default Vacatures
