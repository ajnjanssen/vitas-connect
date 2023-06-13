'use client'
import React from 'react'
import { Divider } from '@mui/material'

function DefaultHeading({ heading, subheading }) {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-2xl md:text-4xl text-base-content font-bold">
        {heading}
      </h1>
      <p className="text-md md:text-xl text-base-content font-medium">
        {subheading}
      </p>
      <Divider className="py-4" />
    </div>
  )
}

export default DefaultHeading
