'use client'
import React from 'react'
import { IconContext } from 'react-icons'
import { RiCopperCoinLine } from 'react-icons/ri'
import items from './notifications.json'
import Notification from './notifications'
import { List, ListItem } from '@mui/material'

function Window() {
  return (
    <div className="h-screen">
      <div className="relative h-full mx-auto bg-base-100 shadow-md border border-base-200">
        <header className="pt-6 pb-4 px-5 border-b border-base-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <a className="inline-flex items-start mr-3" href="#0">
                <img
                  className="rounded-full"
                  src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg"
                  width="48"
                  height="48"
                  alt="Lauren Marsano"
                />
              </a>
              <div className="pr-1">
                <a
                  className="inline-flex text-base-content hover:text-secondary"
                  href="#0"
                >
                  <h2 className="text-xl leading-snug font-bold">
                    Alexander Janssen
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 py-4">
            <div className="">
              <p className="font-bold text-base-content">ajanssen@vitas.nl</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex">
                <p className="font-bold text-base-content">175</p>
                &nbsp;
                <p className="text-base-content">punten</p>
              </div>
              <div className="flex items-center text-base-content">
                {/* <RiCopperCoinLine /> */}
                <p className="font-bold text-base-content">0</p>
                &nbsp;
                <p className="text-base-content">Credits</p>
              </div>
            </div>
          </div>
        </header>
        <div className="py-3 px-5">
          <h3 className="text-xs font-semibold uppercase text-gray-400 mb-2">
            Meldingen
          </h3>

          <div className="divide-y divide-gray-200 overflow-y-auto no-scrollbar max-h-[calc(100vh-30vh)] border border-base-200 rounded-box">
            <ul className="menu bg-base-100  h-full rounded-box ">
              {items.map((item, index) => (
                <li key={index}>
                  <Notification
                    item={item}
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    image={item.image}
                    date={item.date}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Window
