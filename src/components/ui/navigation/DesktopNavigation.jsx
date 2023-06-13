'use client'
import { Alert } from 'flowbite-react'
import React, { useState } from 'react'
import { HiMenuAlt2, HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { IconContext } from 'react-icons'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineDashboard } from 'react-icons/ai'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { GiTargetPrize, GiVendingMachine } from 'react-icons/gi'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { RxColorWheel } from 'react-icons/rx'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RiCopperCoinLine } from 'react-icons/ri'
import { FaCog } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BiPaperPlane } from 'react-icons/bi'
import Image from 'next/image'
import { Chip, CssBaseline, Typography } from '@mui/material'
import Link from 'next/link'
import { MdIosShare, MdOutlineLeaderboard } from 'react-icons/md'

function Navigation() {
  const drawerWidth = '16.6666%'
  const [state, setState] = useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  return (
    <>
      <div className="fixed w-full top-0 bg-base-100 shadow-md ">
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <Drawer
            sx={{
              // Use Tailwind CSS classes for width
              'sm:w-full': true,
              'lg:w-5/6': true,
              'md:w-4/6': true,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                // Use Tailwind CSS classes for width
                'sm:w-full': true,
                'lg:w-5/6': true,
                'md:w-4/6': true,
                boxSizing: 'border-box',
              },
              display: 'grid',
              gridTemplateRows: 'auto 1fr auto',
              height: '100%',
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider />
            <List>
              <div className="flex flex-col justify-between h-[calc(100vh-20px)]">
                <div className="flex flex-col">
                  <ListItem disablePadding>
                    <div className="flex justify-start p-2">
                      <img
                        src="/vconnect.png"
                        className="-pl-2 w-40 object-contain rounded-md p-4"
                        alt="logo"
                      />
                    </div>
                  </ListItem>
                  <Divider />
                  <Link href="/dashboard" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <IconContext.Provider
                            value={{ className: 'desktop-icons' }}
                          >
                            <AiOutlineDashboard />
                          </IconContext.Provider>
                        </ListItemIcon>
                        <ListItemText
                          className="text-base-content"
                          primary="Dashboard"
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link href="/referrals" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="flex justify-start items-center w-full">
                          <ListItemIcon>
                            <IconContext.Provider
                              value={{ className: 'desktop-icons' }}
                            >
                              <RiContactsBook2Fill />
                            </IconContext.Provider>
                          </ListItemIcon>
                          <ListItemText
                            className="text-base-content"
                            primary="Referrals"
                          />
                          <div className="badge badge-primary flex justify-center mr-0  rounded-full ">
                            0
                          </div>
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link href="/profile" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <IconContext.Provider
                            value={{ className: 'desktop-icons' }}
                          >
                            <CgProfile />
                          </IconContext.Provider>
                        </ListItemIcon>
                        <ListItemText
                          className="text-base-content"
                          primary="Profile"
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link href="/vacatures" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <IconContext.Provider
                            value={{ className: 'desktop-icons' }}
                          >
                            <HiOutlineDocumentDuplicate />
                          </IconContext.Provider>
                        </ListItemIcon>
                        <ListItemText
                          className="text-base-content"
                          primary="Vacatures"
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link href="/beloningen" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="flex justify-start items-center w-full">
                          <ListItemIcon>
                            <IconContext.Provider
                              value={{ className: 'desktop-icons' }}
                            >
                              <GiTargetPrize />
                            </IconContext.Provider>
                          </ListItemIcon>
                          <ListItemText
                            className="text-base-content"
                            primary="Beloningen"
                          />
                          <div className="badge badge-primary flex justify-center mr-0  rounded-full ">
                            0
                          </div>
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link href="/leaderboard" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="flex justify-start items-center w-full">
                          <ListItemIcon>
                            <IconContext.Provider
                              value={{ className: 'desktop-icons' }}
                            >
                              <MdOutlineLeaderboard />
                            </IconContext.Provider>
                          </ListItemIcon>
                          <ListItemText
                            className="text-base-content"
                            primary="Leaderboard"
                          />
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link href="/bookmarks" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="flex justify-start items-center w-full">
                          <ListItemIcon>
                            <IconContext.Provider
                              value={{ className: 'desktop-icons' }}
                            >
                              <BsBookmarkStarFill />
                            </IconContext.Provider>
                          </ListItemIcon>
                          <ListItemText
                            className="text-base-content"
                            primary="Bookmarks"
                          />
                          <div className="badge badge-primary flex justify-center mr-0  rounded-full ">
                            0
                          </div>
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link href="/wheel-of-fortune" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <IconContext.Provider
                            value={{ className: 'desktop-icons' }}
                          >
                            <RxColorWheel />
                          </IconContext.Provider>
                        </ListItemIcon>
                        <ListItemText
                          className="text-base-content"
                          primary="Wheel of Fortune"
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link href="/slotmachine" prefetch={false}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <IconContext.Provider
                            value={{ className: 'desktop-icons' }}
                          >
                            <GiVendingMachine />
                          </IconContext.Provider>
                        </ListItemIcon>
                        <ListItemText
                          className="text-base-content"
                          primary="Slotmachine"
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Divider />
                  <div className="p-4 flex items-center space-x-4 justify-center">
                    <button className="btn btn-primary rounded-full w-full text-lg font-medium">
                      Refereer
                    </button>
                  </div>
                </div>

                <div>
                  <Divider />
                  <div>
                    <Divider />
                    <Link href="/account-instellingen" prefetch={false}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <IconContext.Provider
                              value={{ className: 'desktop-icons' }}
                            >
                              <FaCog />
                            </IconContext.Provider>
                          </ListItemIcon>
                          <ListItemText
                            className="text-base-content"
                            primary="Account instellingen"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                    <Link href="/login" prefetch={false}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <IconContext.Provider
                              value={{ className: 'desktop-icons' }}
                            >
                              <ImExit />
                            </IconContext.Provider>
                          </ListItemIcon>
                          <ListItemText
                            className="text-base-content"
                            primary="Uitloggen"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </div>
                </div>
              </div>
            </List>
          </Drawer>
        </Box>
      </div>
    </>
  )
}

export default Navigation
