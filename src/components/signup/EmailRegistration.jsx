'use client'
import React, { useState } from 'react'

function EmailRegistration({ firstName, lastName, onNextStep }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Perform form validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all the required fields.')
      return
    }

    try {
      // Call the signup function
      // await signUp(email, password, {
      //   firstName,
      //   lastName,
      // })

      // Proceed to the next step
      onNextStep()
    } catch (error) {
      setError('Signup failed. Please try again.')
    }
    console.log(email, password, confirmPassword)
  }

  return (
    <div className="flex flex-col items-stretch h-[calc(100vh-200px)] justify-between">
      <div className="py-4">
        <h1 className="text-secondary text-4xl font-extrabold">
          Voer je e-mail adres in{' '}
          <span className="text-primary text-4xl">📧</span>
        </h1>
        <div className="w-full flex flex-col space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="label">
                <span className="font-bold text-lg">Jouw e-mail adres</span>
              </label>
              <input
                type="email"
                placeholder="e-mail adres"
                className="text-neutral font-poppins input input-bordered w-full  h-16"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="">
              <label className="label">
                <span className="font-bold text-lg">Wachtwoord</span>
              </label>
              <input
                type="password"
                placeholder="Wachtwoord"
                className="text-neutral font-poppins input input-bordered w-full  h-16"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="">
              <label className="label">
                <span className="font-bold text-lg">Herhaal wachtwoord</span>
              </label>
              <input
                type="password"
                placeholder="Herhaal wachtwoord"
                className="text-neutral font-poppins input input-bordered w-full  h-16"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div>{error && <p className="text-red-500">{error}</p>}</div>
            <button type="submit" className="btn btn-primary btn-lg w-full">
              Volgende
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailRegistration
