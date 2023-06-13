import React from 'react'

function CTACard() {
  return (
    <div className="card w-full">
      <div className="flex gradient-background rounded-box px-4 py-6">
        <div className="flex flex-col space-y-2 w-2/4 justify-center">
          <h2 className="card-title text-md">Refereer & Win</h2>
          <p className="text-xs">
            Nodig je connecties uit en win mooie prijzen!
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-md btn-primary">Check het hier</button>
          </div>
        </div>
        <div className="w-2/4  flex justify-center items-center">
          <img src="/5889299.png" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default CTACard
