'use client'

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
import { MdOutlineLeaderboard } from 'react-icons/md'
import { GiTargetPrize, GiVendingMachine } from 'react-icons/gi'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { RxColorWheel } from 'react-icons/rx'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RiCopperCoinLine } from 'react-icons/ri'
import { FaCog } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BiPaperPlane } from 'react-icons/bi'
import Link from 'next/link'

function Navigation() {
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

  const list = (anchor) => (
    <div className="flex flex-col justify-between">
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <div className="flex flex-col flex-grow ">
            <div className="flex flex-col flex-grow">
              <ListItem disablePadding>
                <div className="flex">
                  <div className="items-center">
                    <Button
                      onClick={toggleDrawer('left', false)}
                      className="text-base-content btn btn-ghost"
                    >
                      <IconContext.Provider value={{ className: 'w-6 h-6' }}>
                        <AiOutlineCloseCircle />
                      </IconContext.Provider>
                    </Button>
                  </div>

                  <img
                    src="/vconnect.png"
                    className="-pl-2 w-40 object-contain bg-base-200 p-4 rounded-md"
                    alt="logo"
                  />
                </div>
              </ListItem>
              <ListItem disablePadding>
                <div className="flex flex-col space-y-2 py-4">
                  <div className="px-4">
                    <p className="font-medium text-base-content">
                      test@vitas.nl
                    </p>
                  </div>
                  <div className="flex">
                    <div className="px-4 flex">
                      <p className="font-medium text-base-content">175</p>
                      &nbsp;
                      <p className="text-base-content">punten</p>
                    </div>
                    <div className="px-4 flex items-center">
                      <IconContext.Provider
                        value={{ className: 'w-6 h-6 pr-2 text-base-content' }}
                      >
                        <RiCopperCoinLine />
                      </IconContext.Provider>
                      <p className="font-medium text-base-content">0</p>
                      &nbsp;
                      <p className="text-base-content">Credits</p>
                    </div>
                  </div>
                </div>
              </ListItem>
              <Divider />
              <Link href="/vacatures">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <IconContext.Provider
                        value={{ className: 'w-6 h-6 text-base-content' }}
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
              <Link href="/beloningen">
                <ListItem disablePadding>
                  <ListItemButton>
                    <div className="flex justify-start items-center w-full">
                      <ListItemIcon>
                        <IconContext.Provider
                          value={{ className: 'w-6 h-6 text-base-content' }}
                        >
                          <GiTargetPrize />
                        </IconContext.Provider>
                      </ListItemIcon>
                      <ListItemText
                        className="text-base-content"
                        primary="Beloningen"
                      />
                      <div className="badge pl-2 mr-0 bg-base-200 text-base-content text-center">
                        0
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link href="/leaderboard">
                <ListItem disablePadding>
                  <ListItemButton>
                    <div className="flex justify-start items-center w-full">
                      <ListItemIcon>
                        <IconContext.Provider
                          value={{ className: 'w-6 h-6 text-base-content' }}
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
              <Link href="/bookmarks">
                <ListItem disablePadding>
                  <ListItemButton>
                    <div className="flex justify-start items-center w-full">
                      <ListItemIcon>
                        <IconContext.Provider
                          value={{ className: 'w-6 h-6 text-base-content' }}
                        >
                          <BsBookmarkStarFill />
                        </IconContext.Provider>
                      </ListItemIcon>
                      <ListItemText
                        className="text-base-content"
                        primary="Bookmarks"
                      />
                      <div className="badge pl-2 mr-0 bg-base-200 text-base-content">
                        0
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Divider />
              <Link href="/wheel-of-fortune">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <IconContext.Provider
                        value={{ className: 'w-6 h-6 text-base-content' }}
                      >
                        <RxColorWheel />
                      </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText
                      className="text-base-content"
                      primary="Wheel of fortune"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link href="/slotmachine">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <IconContext.Provider
                        value={{ className: 'w-6 h-6 text-base-content' }}
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
            </div>
          </div>
          <Divider />

          <div>
            <Divider />
            <Link href="/account-instellingen">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconContext.Provider
                      value={{ className: 'w-6 h-6 text-base-content' }}
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
            <Link href="/login">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconContext.Provider
                      value={{ className: 'w-6 h-6 text-base-content' }}
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
        </List>
      </Box>
    </div>
  )

  return (
    <>
      <div className="fixed w-full top-0 shadow-md bg-base-200">
        <div className="navbar flex justify-between bg-base-200">
          <div className="drawer-content bg-base-200">
            <Button
              onClick={toggleDrawer('left', true)}
              className="text-base-content btn btn-square btn-ghost -ml-3"
            >
              <IconContext.Provider value={{ className: 'w-6 h-6' }}>
                <HiMenuAlt2 />
              </IconContext.Provider>
            </Button>
            <Drawer
              anchor="left"
              open={state.left}
              onClose={toggleDrawer('left', false)}
            >
              {list('left')}
            </Drawer>
          </div>

          <div className="">
            <Link href="/dashboard">
              <div className="">
                <img src="/vconnect.png" className="w-40" alt="logo" />
              </div>
            </Link>
          </div>
          <div className="">
            <div className="dropdown dropdown-end">
              <Button className="btn btn-ghost">
                <IconContext.Provider
                  value={{ className: 'w-6 h-6 text-base-content -mr-3' }}
                >
                  <BiPaperPlane />
                </IconContext.Provider>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
