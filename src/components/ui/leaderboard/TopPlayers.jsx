import React from 'react'
import userData from './users.json'

function TopPlayers() {
  const sortedUsers = userData.sort((a, b) => b.punten - a.punten) // Sort users by punten in descending order
  const topThreeUsers = sortedUsers.slice(0, 3) // Get the top three users

  const middleIndex = Math.floor(topThreeUsers.length / 2) // Calculate the middle index

  // Swap the users at index 0 and 1
  ;[topThreeUsers[0], topThreeUsers[1]] = [topThreeUsers[1], topThreeUsers[0]]

  return (
    <div className="flex flex-row justify-around py-8">
      {topThreeUsers.map((user, index) => {
        const isMiddleUser = index === middleIndex // Check if the current user is the middle user
        const marginTop = isMiddleUser ? '-50px' : '50px' // Adjust the marginTop based on whether it's the middle user or not

        return (
          <div
            className={`flex flex-col justify-center mx-auto`}
            style={{ marginTop }}
            key={user.rank}
          >
            <img
              className={`w-20 h-20 rounded-full mx-auto ${
                isMiddleUser
                  ? 'border-primary border-4'
                  : 'border-secondary border-4'
              }`}
              src={user.photo}
              alt={user.name}
            />
            <p className="text-base-content text-center text-sm font-bold">
              {user.name}
            </p>
            <p className="text-base-content text-center text-sm">
              {user.punten}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default TopPlayers
