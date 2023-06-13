import Link from 'next/link'
import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai'
import { BsMicrosoft } from 'react-icons/bs'

const LoginWindow = ({ onBack }) => {
  return (
    <div className="overlay flex flex-col items-center max-w-xl">
      <div className="login-container w-full">
        <img src="/vconnect.png" alt="logo" />
      </div>
      <div className="w-full flex flex-col space-y-4">
        <div className="py-8 flex flex-col space-y-4">
          <input
            type="email"
            placeholder="e-mail adres"
            className="text-neutral font-poppins input input-bordered w-full  h-16"
          />

          <input
            type="email"
            placeholder="wachtwoord"
            className="text-neutral font-poppins input input-bordered w-full  h-16"
          />
        </div>
        <Link href="/dashboard">
          <button className="btn btn-primary btn-lg w-full">Log in</button>
        </Link>
        <button
          className="btn btn-ghost text-base-200 border-base-200 border btn-lg w-full"
          onClick={onBack}
        >
          Terug
        </button>
        <div className="divider pt-8">OF</div>
        <div className="h-32 items-center justify-center flex my-auto">
          <div className="flex flex-row justify-center gap-4">
            <button className="btn  btn-square rounded-md">
              <IconContext.Provider value={{ className: 'w-8 h-8' }}>
                <AiOutlineGoogle />
              </IconContext.Provider>
            </button>
            <button className="btn btn-square rounded-md">
              <IconContext.Provider value={{ className: 'w-6 h-6' }}>
                <BsMicrosoft />
              </IconContext.Provider>
            </button>
            <button className="btn  btn-square rounded-md">
              <IconContext.Provider value={{ className: 'w-8 h-8' }}>
                <AiFillLinkedin />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginWindow
