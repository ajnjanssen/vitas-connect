'use client'
import React, { useEffect, useState } from 'react'
import List from '@mui/material/List'
import ListItems from './ListItems'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function AlignList({ searchQuery }) {
  const router = useRouter()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://test.cms.vitas.nl/api/jobs?populate=deep')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Failed to fetch data')
        }
      })
      .then((responseJson) => {
        if (Array.isArray(responseJson.data)) {
          setData(responseJson.data)
        } else {
          throw new Error('Invalid response format')
        }
      })
      .catch((error) => setError(error.message))
  }, [])

  const timePassed = (date) => {
    const now = new Date()
    const diff = Math.abs(now - new Date(date))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    if (hours < 24) {
      return `${hours} uur`
    } else if (hours < 24 * 30) {
      const days = Math.floor(hours / 24)
      return `${days} dag`
    } else {
      const months = Math.floor(hours / (24 * 30))
      return `${months} maand`
    }
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  // Filter the data based on the search query
  const filteredData = data.filter((item) => {
    const jobTitleMatch = item.attributes.jobOptions.jobTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const regionMatch = item.attributes.jobOptions.region
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const updatedAtMatch = timePassed(item.attributes.updatedAt)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const jobDescriptionMatch = item.attributes.jobOptions.jobDescription
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const diplomaMatch = item.attributes.jobOptions.diploma
      .toLowerCase()
      .includes(searchQuery.toLowerCase())

    return (
      jobTitleMatch ||
      regionMatch ||
      updatedAtMatch ||
      jobDescriptionMatch ||
      diplomaMatch
    )
  })

  return (
    <div>
      <List className="flex flex-col space-y-4" sx={{ width: '100%' }}>
        {filteredData.map((item) => (
          <React.Fragment key={item.id}>
            <Link href="/vacature/[id]" as={`/vacature/${item.id}`}>
              <ListItems
                title={item.attributes.jobOptions.jobTitle}
                dienstverband={item.attributes.jobOptions.region}
                timePassed={timePassed(item.attributes.updatedAt)}
                description={item.attributes.jobOptions.jobDescription}
                degree={item.attributes.jobOptions.diploma}
                minWorkHours={item.attributes.jobOptions.minWorkHours}
                maxWorkHours={item.attributes.jobOptions.maxWorkHours}
              />
            </Link>
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}

export default AlignList
