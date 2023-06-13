import React from 'react'

function omschrijving(title, description) {
  return (
    <div>
      <h2 className="text-lg font-bold text-secondary">{title}</h2>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  )
}

export default omschrijving
