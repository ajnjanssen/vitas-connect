'use client'
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineDashboard } from 'react-icons/ai'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import Link from 'next/link'

function BottomNav() {
  const [activeButton, setActiveButton] = useState('dashboard')

  const handleButtonClick = (button) => {
    setActiveButton(button)
  }

  return (
    <div className="fixed bottom-0 left-0 w-full  shadow-md flex justify-center">
      <div className="btm-nav flex justify-between bg-base-200 mx-auto  mr-0">
        <button
          className={`${
            activeButton === 'dashboard'
              ? 'text-primary font-medium border-t-2 border-primary'
              : 'text-neutral border-t-2 border-neutral'
          }`}
          onClick={() => handleButtonClick('dashboard')}
        >
          <Link href="/dashboard">
            <div className="flex flex-col items-center justify-center">
              <IconContext.Provider value={{ className: 'w-6 h-6' }}>
                <AiOutlineDashboard />
              </IconContext.Provider>
              <span className="btm-nav-label">Dashboard</span>
            </div>
          </Link>
          {activeButton === 'dashboard' && (
            <div className="btm-nav-indicator bg-primary"></div>
          )}
        </button>
        <button
          className={`${
            activeButton === 'referrals'
              ? 'text-primary font-medium border-t-2 border-primary'
              : 'text-neutral border-t-2 border-neutral'
          }`}
          onClick={() => handleButtonClick('referrals')}
        >
          <Link href="/referrals">
            <div className="flex flex-col items-center justify-center">
              <IconContext.Provider value={{ className: 'w-6 h-6' }}>
                <RiContactsBook2Fill />
              </IconContext.Provider>
              <span className="btm-nav-label">Referrals</span>
            </div>
          </Link>
          {activeButton === 'referrals' && (
            <div className="btm-nav-indicator bg-primary"></div>
          )}
        </button>
        <button
          className={`${
            activeButton === 'profile'
              ? 'text-primary font-medium border-t-2 border-primary'
              : 'text-neutral border-t-2 border-neutral'
          }`}
          onClick={() => handleButtonClick('profile')}
        >
          <Link href="/profile">
            <div className="flex flex-col items-center justify-center">
              <IconContext.Provider value={{ className: 'w-6 h-6' }}>
                <CgProfile />
              </IconContext.Provider>
              <span className="btm-nav-label">Profile</span>
            </div>
          </Link>
          {activeButton === 'profile' && (
            <div className="btm-nav-indicator bg-primary"></div>
          )}
        </button>
      </div>
    </div>
  )
}

export default BottomNav
