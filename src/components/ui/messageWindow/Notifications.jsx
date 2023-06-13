'use client'
import React from 'react'
function Notification({ image, title, date, type, description }) {
  const calculateTimeAgo = (date) => {
    const currentDate = new Date()
    const targetDate = new Date(date)

    const timeDiff = Math.abs(currentDate - targetDate)
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60))
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

    if (hoursDiff < 24) {
      return `${hoursDiff} hours ago`
    } else {
      return `${daysDiff} days ago`
    }
  }
  return (
    <button className="w-full flex text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
      <div className="flex items-center">
        <div className="grid place-items-center">
          <img
            className="rounded-full items-start flex-shrink-0 mr-3"
            src={image}
            width="32"
            height="32"
            alt="Marie Zulfikar"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="text-sm font-semibold text-secondary">{title}</h4>
        <div className="text-[13px]">
          <b>{type}</b> - {description}
        </div>
        <div>
          <span className="text-muted text-[13px]">
            {' '}
            {calculateTimeAgo(date)} geleden
          </span>
        </div>
      </div>
    </button>
  )
}

export default Notification
