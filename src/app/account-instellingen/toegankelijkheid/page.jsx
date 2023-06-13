import DefaultHeading from '../../../components/ui/heading/defaultHeading'
import ThemeSelector from '../../../components/ui/themeSelector/themeSelector'
import React from 'react'

function page() {
  return (
    <div>
      <DefaultHeading
        heading="Toegankelijkheid"
        subheading="Hier vind je alle instellingen voor je account."
      />
      <div className="flex flex-col space-y-4 py-4">
        <div>
          <h2 className="text-lg text-base-content font-bold">Look and feel</h2>
          <div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-base-content">Kies een thema:</p>
              <ThemeSelector />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-base-content font-bold">Tekstgrootte</h2>
          <div className="flex flex-row items-center justify-between">
            <p className="text-base-content">Kies een tekstgrootte:</p>
            <select
              className="select  max-w-xs font-poppins bg-base-100 text-base-content border-base-200 rounded-box focus:ring-2"
              name="theme"
              id="theme"
              data-choose-theme
            >
              <option value="mytheme">Klein</option>
              <option value="dark">Normaal</option>
              <option value="bumblebee">Groot</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
