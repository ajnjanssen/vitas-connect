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
} from '@mui/material'

function PersonData({ onNextStep, onFirstNameChange, onLastNameChange }) {
  const [gender, setGender] = useState('man')
  const [day, setDay] = useState(1)
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(2006)
  const [error, setError] = useState('')

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleDayChange = (e) => {
    setDay(e.target.value)
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value)
  }

  const handleYearChange = (e) => {
    setYear(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Perform form validation
    if (!day || !month || !year) {
      setError('Please fill in all the required fields.')
      return
    }

    // Proceed to the next step
    console.log(gender, day, month, year)
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
              <div className="my-4">
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className="font-bold"
                  >
                    Geslacht
                  </FormLabel>
                  <div className="w-full py-4">
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={gender}
                      name="radio-buttons-group"
                      onChange={handleGenderChange}
                    >
                      <div className="flex flex-row justify-between">
                        <FormControlLabel
                          value="man"
                          control={<Radio />}
                          label="Man"
                        />
                        <FormControlLabel
                          value="vrouw"
                          control={<Radio />}
                          label="Vrouw"
                        />
                        <FormControlLabel
                          value="anders"
                          control={<Radio />}
                          label="Anders"
                        />
                      </div>
                    </RadioGroup>
                  </div>
                </FormControl>
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="font-bold text-lg pb-2">Geboortedatum</span>
                </label>
                <div className="flex flex-row space-x-2">
                  {/* Day */}
                  <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                    <InputLabel id="day-select-label">Dag</InputLabel>
                    <Select
                      labelId="day-select-label"
                      id="day-select"
                      value={day}
                      label="Dag"
                      onChange={handleDayChange}
                    >
                      <MenuItem value="" disabled>
                        Selecteer een dag
                      </MenuItem>
                      {Array.from({ length: 31 }, (_, index) => index + 1).map(
                        (value) => (
                          <MenuItem key={value} value={value}>
                            {value}
                          </MenuItem>
                        ),
                      )}
                    </Select>
                  </FormControl>

                  {/* Month */}
                  <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                    <InputLabel id="month-select-label">Maand</InputLabel>
                    <Select
                      labelId="month-select-label"
                      id="month-select"
                      value={month}
                      label="Maand"
                      onChange={handleMonthChange}
                    >
                      <MenuItem value="" disabled>
                        Selecteer een maand
                      </MenuItem>
                      <MenuItem value={'Januari'}>Januari</MenuItem>
                      <MenuItem value={'Februari'}>Februari</MenuItem>
                      <MenuItem value={'Maart'}>Maart</MenuItem>
                      <MenuItem value={'April'}>April</MenuItem>
                      <MenuItem value={'Mei'}>Mei</MenuItem>
                      <MenuItem value={'Juni'}>Juni</MenuItem>
                      <MenuItem value={'Juli'}>Juli</MenuItem>
                      <MenuItem value={'Augustus'}>Augustus</MenuItem>
                      <MenuItem value={'September'}>September</MenuItem>
                      <MenuItem value={'Oktober'}>Oktober</MenuItem>
                      <MenuItem value={'November'}>November</MenuItem>
                      <MenuItem value={'December'}>December</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Year */}
                  <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                    <InputLabel id="year-select-label">Jaar</InputLabel>
                    <Select
                      labelId="year-select-label"
                      id="year-select"
                      value={year}
                      label="Jaar"
                      onChange={handleYearChange}
                    >
                      <MenuItem value="" disabled>
                        Selecteer een jaar
                      </MenuItem>
                      {Array.from(
                        { length: 50 },
                        (_, index) => 2006 - index,
                      ).map((value) => (
                        <MenuItem key={value} value={value}>
                          {value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              {error && <p className="text-red-500">{error}</p>}
              <div className="flex justify-between mt-8">
                <button
                  type="submit"
                  className="bg-secondary text-white text-xl py-2 px-6 rounded-md hover:bg-primary transition-colors duration-300"
                >
                  Volgende
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonData
