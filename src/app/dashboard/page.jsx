'use client'
import CTACard from '../../components/ui/Referrals/CTACard'
import Tab from '../../components/ui/Referrals/Tab'

import { Container } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  // tab content is an array of objects
  const items = [
    {
      title: 'Vacatures',
      content: [
        {
          type: {
            image:
              'https://media.licdn.com/dms/image/C560BAQEUSP1bt4ggxg/company-logo_200_200/0/1519891129999?e=2147483647&v=beta&t=DAtoyDDCqkG--925NRSZmN7Mm9WvckJeKrbkKeRPyME',
            title: 'Vitas',
            subtitle: 'subtext',
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
    <>
      <div className="flex flex-col space-y-4 max-w-xl justify-center items-center mx-auto">
        <CTACard />
        <Tab tabs={items} />
      </div>
    </>
  )
}
