'use client'
import React from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function ThemeSelector() {
  const themeValues = ['mytheme']

  useEffect(() => {
    themeChange({
      themes: themeValues,
      defaultTheme: 'mytheme',
      persist: true,
      onChange: (theme) => {
        console.log(theme)
      },
    })
  }, [])
  return (
    <div>
      <select
        className="select w-full max-w-xs font-poppins bg-base-100 text-base-content border-base-200 rounded-box focus:ring-2"
        name="theme"
        id="theme"
        data-choose-theme
      >
        <option value="mytheme">Licht</option>
        <option value="dark">Donker</option>
        <option value="black">Hoog contrast</option>
        <option value="bumblebee">Bumblebee</option>
        <option value="corporate">Corporate</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="dracula">Dracula</option>
        <option value="halloween">Halloween</option>
        <option value="lofi">Lofi</option>
        <option value="retro">Retro</option>
        <option value="synthwave">Synthwave</option>
      </select>
    </div>
  )
}

export default ThemeSelector
