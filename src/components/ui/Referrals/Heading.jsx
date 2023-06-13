import React, { useEffect, useState } from 'react'
import users from './referrals.json'

function Heading() {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    // Set the amount to the length of the users array
    setAmount(users.length)
  }, [])

  return (
    <div>
      <h1 className="text-4xl text-base-content font-bold">Referrals</h1>
      <p className="text-xl text-base-content font-medium">
        {amount} kandidaten uitgenodigd
      </p>
    </div>
  )
}

export default Heading
