'use client'
import React from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaUserCircle } from 'react-icons/fa'
import Tab from '../../components/ui/tabs/Tab'
function Page() {
  // tab content is an array of objects
  const [username, setUsername] = useState('Gebruikersnaam')
  const [points, setPoints] = useState(0)
  const items = [
    {
      title: 'Badges',
      content: [
        {
          type: {
            image:
              'https://media.licdn.com/dms/image/C560BAQEUSP1bt4ggxg/company-logo_200_200/0/1519891129999?e=2147483647&v=beta&t=DAtoyDDCqkG--925NRSZmN7Mm9WvckJeKrbkKeRPyME',
            title: 'SPEAKING-OUT-LOUD',
            subtitle: 'Nodig kennisen uit',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrizLsv51fySJRx3rIO9N5gKoGMcKPxz163lS2bk&s',
            title: 'UMCG',
            subtitle: 'DEV OPS ENGINEER',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://www.sksg.nl/custom/uploads/2021/11/Logo_SKSG_PMS_Uncoated.png',
            title: 'SKSG',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://media.licdn.com/dms/image/C560BAQEUSP1bt4ggxg/company-logo_200_200/0/1519891129999?e=2147483647&v=beta&t=DAtoyDDCqkG--925NRSZmN7Mm9WvckJeKrbkKeRPyME',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://media.licdn.com/dms/image/C560BAQEUSP1bt4ggxg/company-logo_200_200/0/1519891129999?e=2147483647&v=beta&t=DAtoyDDCqkG--925NRSZmN7Mm9WvckJeKrbkKeRPyME',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
      ],
    },
    {
      title: 'Statistieken',
      content: [
        {
          type: {
            image:
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
      ],
    },
    {
      title: 'Referrals',
      content: [
        {
          type: {
            image:
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
        {
          type: {
            image:
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
            title: 'Google',
            subtitle: 'subtext',
            dienstverband: 'Fulltime',
          },
        },
      ],
    },
  ]
  return (
    <div>
      <div className="flex flex-col mx-auto items-center justify-center py-4">
        <div>
          <IconContext.Provider
            value={{ className: 'text-base-200 w-32 h-32' }}
          >
            <FaUserCircle />
          </IconContext.Provider>
        </div>
        <div>
          <h1 className="text-lg text-center text-base-content font-medium">
            {username}
          </h1>
          <h1 className="text-md text-base-200 text-center font-normal">
            {points} <span>punten</span>
          </h1>
        </div>
      </div>
      <Tab tabs={items} />
    </div>
  )
}

export default Page
