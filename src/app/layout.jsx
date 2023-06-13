import React from 'react'
import '../app/globals.css'
import { Inter } from 'next/font/google'
import BottomNav from '@/components/ui/navigation/BottomNav'
import MobileNavigation from '@/components/ui/navigation/MobileNavigation'
import DesktopNavigation from '@/components/ui/navigation/DesktopNavigation'
import Window from '@/components/ui/messageWindow/Window'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vitas Connect',
  description: 'Referral program for Vitas employees ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="bg-base-100 flex no-scrollbar">
          <div className="z-20 top-0 sticky pb-16 md:w-1/6">
            <div className="hidden lg:block">
              <DesktopNavigation />
            </div>
            <div className="lg:hidden">
              <MobileNavigation />
            </div>
          </div>

          <div className="relative w-full lg:w-4/6 h-full lg:flex justify-center py-20 lg:py-20 px-4 lg:px-24 mx-auto no-scrollbar">
            <div className="w-full no-scrollbar">{children}</div>
          </div>

          <div className="mr-0 h-full hidden w-1/6 lg:block top-0 sticky">
            <Window />
          </div>

          <div className="lg:hidden">
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  )
}
