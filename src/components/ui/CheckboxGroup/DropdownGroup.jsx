import React, { useState } from 'react'
import categories from './categories.json'

function DropdownGroup({ setSearchQuery }) {
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCheckboxChange = (e) => {
    const selectedValue = e.target.value
    if (selectedCategories.includes(selectedValue)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== selectedValue),
      )
    } else {
      setSelectedCategories([...selectedCategories, selectedValue])
    }
  }

  const handleClearSelection = () => {
    setSelectedCategories([])
    setSearchQuery('')
  }

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category)
  }

  return (
    <select
      className="select select-primary w-full max-w-xs"
      multiple
      value={selectedCategories}
      onChange={handleCheckboxChange}
    >
      <option disabled value="">
        Select Categories
      </option>
      {categories.map((category) => (
        <option key={category.id} value={category.categorie}>
          {category.categorie}
        </option>
      ))}
      {selectedCategories.length > 0 && (
        <option disabled value="" onClick={handleClearSelection}>
          Clear Selection
        </option>
      )}
    </select>
  )
}

export default DropdownGroup
