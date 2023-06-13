'use client'
import React from 'react'
import settings from './settings.json'
import { IconContext } from 'react-icons'
import { FaUniversalAccess, FaUser } from 'react-icons/fa'
import { List, ListItem, ListItemText } from '@mui/material'
import { BsBell } from 'react-icons/bs'
import Link from 'next/link'

function SettingsPageContent() {
  return (
    <div>
      <List>
        {settings.map((item, index) => (
          <div key={index} className="">
            <Link href={item.link} passHref>
              <ListItem
                className="group flex flex-row gap-4 items-center"
                key={index}
                sx={{
                  '&:hover': {
                    backgroundColor: 'bg-primary',
                    color: 'white',
                  },
                }}
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:text-base-100 text-base-content',
                    size: '1.5em',
                  }}
                >
                  <div>
                    {item.icon === 'fa fa-user' && <FaUser />}
                    {item.icon === 'fa fa-bell' && <BsBell />}
                    {item.icon === 'fa fa-accessible-icon' && (
                      <FaUniversalAccess />
                    )}
                    {/* Add more conditionals for other icons */}
                  </div>
                </IconContext.Provider>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  className="group-hover:text-base-100 text-base-content"
                  primaryTypographyProps={{
                    className:
                      'text-md font-bold poppins group-hover:text-base-100',
                  }}
                  secondaryTypographyProps={{
                    variant: 'body2',
                    className:
                      'group text-base-content poppins group-hover:text-base-100',
                  }}
                />
              </ListItem>
            </Link>
          </div>
        ))}
      </List>
    </div>
  )
}

export default SettingsPageContent
