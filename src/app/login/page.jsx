'use client'
import React, { useState } from 'react'
import LoginWindow from '../../components/login/LoginWindow'
import Link from 'next/link'

function Page() {
  const [showLoginWindow, setShowLoginWindow] = useState(false)

  const handleLoginClick = () => {
    setShowLoginWindow(true)
  }

  const handleBackClick = () => {
    setShowLoginWindow(false)
  }

  return (
    <div className="flex flex-col mx-auto justify-center items-center h-[calc(100vh-17vh)] max-w-xl w-full">
      {!showLoginWindow && (
        <div>
          <div className="h-1/2 flex items-center">
            <img src="/vconnect.png" alt="logo" />
          </div>
          <div className="flex flex-col space-y-8 h-1/2 w-full pt-8">
            <button
              className="btn btn-primary btn-lg w-full"
              onClick={handleLoginClick}
            >
              Inloggen
            </button>
            <Link href="/signup">
              <button className="btn btn-ghost text-base-content border-base-200 border btn-lg w-full">
                Account aanmaken
              </button>
            </Link>
          </div>
        </div>
      )}
      {showLoginWindow && <LoginWindow onBack={handleBackClick} />}
    </div>
  )
}

export default Page
