import React, { useState } from 'react'

function Password({ onNextStep }) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Perform form validation
    if (!password || !confirmPassword) {
      setError('Please fill in all the required fields.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    // Proceed to the next step
    onNextStep()
  }

  return (
    <div>
      <div className="flex flex-col items-stretch h-[calc(100vh-200px)] justify-between">
        <div className="py-4">
          <h1 className="text-secondary text-4xl font-extrabold flex items-center">
            Stel je profiel in <span className="text-primary text-4xl">✍️</span>
          </h1>
          <div className="w-full flex flex-col space-y-4">
            <form onSubmit={handleSubmit}>
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
                  placeholder="Wachtwoord"
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
    </div>
  )
}

export default Password
