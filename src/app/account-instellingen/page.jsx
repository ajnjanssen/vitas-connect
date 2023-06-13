import React from 'react'
import DefaultHeading from '../../components/ui/heading/defaultHeading'
import SettingsPageContent from '../../components/settings/settingsPageContent'
function page() {
  return (
    <div>
      <DefaultHeading
        heading="Instellingen"
        subheading="Hier vind je alle instellingen voor je account."
      />
      <SettingsPageContent />
    </div>
  )
}

export default page
