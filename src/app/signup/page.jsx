'use client'
import React, { useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import EmailRegistration from '../../components/signup/EmailRegistration'
import PersonData from '../../components/signup/PersonData'
import Avatar from '../../components/signup/Avatar'
// import EmailRegistration from '@/components/signup/EmailRegistration'
// import PersonData from '@/components/signup/PersonData'
// import Avatar from '@/components/signup/Avatar'

function SignupPage() {
  const [step, setStep] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const [customAvatar, setCustomAvatar] = useState(null)

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleAvatarStep = (avatar, customAvatar) => {
    setSelectedAvatar(avatar)
    setCustomAvatar(customAvatar)
    handleNextStep()
  }

  const register = (email, password) => {
    signUp(email, password, {
      firstName,
      lastName,
      selectedAvatar,
      customAvatar,
    })
      .then((user) => {
        // Handle successful registration
        console.log('User registered:', user)
        // Navigate to the desired page
        navigate.push('/')
      })
      .catch((error) => {
        // Handle registration error
        console.log('Registration error:', error)
        alert(error.message)
      })
  }

  return (
    <div>
      <div className="flex flex-col">
        {/* {step > 1 && (
          <IoMdArrowRoundBack
            className="text-4xl text-secondary"
            onClick={handlePreviousStep}
          />
        )}
      </div>
      <div>
        {step === 1 && (
          <EmailRegistration
            firstName={firstName}
            lastName={lastName}
            onNextStep={handleNextStep}
            onRegister={register}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
          />
        )}
        {step === 2 && (
          <PersonData
            onNextStep={handleAvatarStep}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
          />
        )} */}
        {step === 1 && (
          <Avatar onNextStep={handleNextStep} onPrevStep={handlePreviousStep} />
        )}
      </div>
    </div>
  )
}

export default SignupPage
