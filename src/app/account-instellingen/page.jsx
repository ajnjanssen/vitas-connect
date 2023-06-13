import SettingsPageContent from '@/components/settings/SettingsPageContent'
import DefaultHeading from '@/components/ui/heading/defaultHeading'
import React from 'react'

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
