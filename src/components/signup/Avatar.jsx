'use client'
import React, { useState } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  InputLabel,
  Divider,
} from '@mui/material'
import avatars from './avatars.json'

function Avatar({ onNextStep, onPrevStep }) {
  const [selectedAvatar, setSelectedAvatar] = useState('')
  const [customAvatar, setCustomAvatar] = useState(null)
  const [isNextDisabled, setIsNextDisabled] = useState(true)

  const handleAvatarChange = (e) => {
    setSelectedAvatar(e.target.value)
    setIsNextDisabled(false)
  }

  const handleCustomAvatarChange = (e) => {
    const file = e.target.files[0]
    setCustomAvatar(file)
    setIsNextDisabled(false)
  }

  const handleNextClick = () => {
    onNextStep(selectedAvatar, customAvatar)
    console.log(selectedAvatar, customAvatar)
  }

  return (
    <div className="py-4">
      <h1 className="text-secondary text-4xl font-extrabold flex items-center">
        Selecteer een avatar
      </h1>

      <FormControl component="fieldset">
        <FormLabel component="legend">Standaardavatars</FormLabel>
        <RadioGroup
          aria-label="avatar"
          name="avatar"
          value={selectedAvatar}
          onChange={handleAvatarChange}
        >
          <div className="flex justify-center gap-2 my-4 flex-wrap">
            {avatars.map((avatar) => (
              <FormControlLabel
                key={avatar.id}
                value={avatar.id}
                control={<Radio style={{ display: 'none' }} />}
                label={
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden hover:border-primary transition-colors duration-300 group ${
                      avatar.id === selectedAvatar
                        ? 'border-4 border-primary opacity-100'
                        : 'border opacity-70'
                    }`}
                  >
                    <img
                      className="group-hover:scale-20 w-full h-full object-cover"
                      src={avatar.url}
                      alt={avatar.id}
                    />
                  </div>
                }
              />
            ))}
          </div>
        </RadioGroup>
      </FormControl>
      <Divider className="my-4" />
      <div>
        <label
          className="block mb-2 text-sm font-medium text-secondary"
          htmlFor="file_input"
        >
          Een afbeelding uploaden
        </label>
        <input
          className="p-4 block w-full text-sm text-base-content border rounded-lg cursor-pointer bg-base-200"
          id="file_input"
          type="file"
          onChange={handleCustomAvatarChange}
        />
      </div>

      <div className="flex justify-between mt-4 w-full">
        <button
          type="submit"
          onClick={handleNextClick}
          disabled={isNextDisabled}
          className="bg-secondary text-white text-xl py-2 px-6 rounded-md hover:bg-primary transition-colors duration-300 w-full"
        >
          Afronden
        </button>
      </div>
    </div>
  )
}

export default Avatar
