'use client'
import React from 'react'

function SearchInput({ label, placeholder, setSearchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value) // Call setSearchQuery when the input value changes
  }

  return (
    <div>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-base-content sr-only"
        >
          {label}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-base-content"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-base-content border border-base-content rounded-lg placeholder:text-base-content bg-base-100 focus:ring-primary focus:border-primary"
            placeholder={placeholder}
            onChange={handleSearch} // Call handleSearch when the input value changes
            required
          />
          {/* <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-primary-focus focus:ring-4 focus:outline-none focus:ring-primary-focus font-medium rounded-lg text-sm px-4 py-2"
          >
            zoeken
          </button> */}
        </div>
      </form>
    </div>
  )
}

export default SearchInput
