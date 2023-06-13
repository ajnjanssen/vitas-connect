import React from 'react'

function CTACard() {
  return (
    <div>
      <div className="card w-full max-w-xl">
        <div className="flex gradient-background-alternative rounded-box px-4 py-6">
          <div className="flex flex-col space-y-2 w-2/4 justify-center">
            <h2 className="card-title text-md">Refereer & Win</h2>
            <p className="text-sm font-medium">
              Nodig je connecties uit in de applicatie!
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-md btn-primary">Uitnodigen</button>
            </div>
          </div>
          <div className="w-2/4 bg-secondary rounded-full flex justify-center items-center">
            <img src="/megaphone.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTACard
