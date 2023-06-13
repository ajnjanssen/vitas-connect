import DefaultHeading from '@/components/ui/heading/defaultHeading'
import Table from '@/components/ui/leaderboard/Table'
import TopPlayers from '@/components/ui/leaderboard/TopPlayers'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <DefaultHeading
        heading="Leaderboard"
        subheading="Hier vind je het leaderboard"
      />
      <div className="flex flex-col bg-base-200 py-4 rounded-lg">
        <TopPlayers />
      </div>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default page
