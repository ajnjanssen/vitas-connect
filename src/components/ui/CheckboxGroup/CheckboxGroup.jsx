import { Container } from '@mui/material'
import React, { useState } from 'react'
import categories from './categories.json'

function CheckboxGroup({ setSearchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCheckboxChange = (e) => {
    const selectedValue = e.target.value

    if (selectedValue === selectedCategory) {
      setSelectedCategory('') // Clear the selected category if the same checkbox is clicked again
      setSearchQuery('') // Clear the search query
    } else {
      setSelectedCategory(selectedValue) // Set the selected category
      setSearchQuery(selectedValue) // Call setSearchQuery with the selected category value
    }
  }

  return (
    <div className="flex flex-wrap gap-x-1 gap-y-2">
      {categories.map((category) => (
        <span
          className="badge badge-outline border-base-content h-8"
          key={category.id}
        >
          <div className="flex items-center">
            <input
              id={category.id}
              type="checkbox"
              className="w-4 h-4 text-base-content border-base-content rounded focus:ring-secondary"
              value={category.categorie}
              checked={selectedCategory === category.categorie} // Check if the current category is selected
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor={category.id}
              className="ml-2 text-sm font-medium text-base-content"
            >
              {category.categorie}
            </label>
          </div>
        </span>
      ))}
      <span className="badge badge-primary border-primary-content h-8">
        <div className="flex items-center">
          <label
            htmlFor="default-checkbox"
            className="px-1 text-sm font-medium text-base-100"
          >
            Meer
          </label>
        </div>
      </span>
    </div>
  )
}

export default CheckboxGroup
