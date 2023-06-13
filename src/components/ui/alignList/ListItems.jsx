import React from 'react'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { BookmarkAdd } from '@mui/icons-material'
import { IconContext } from 'react-icons'
import { Button } from '@mui/material'
import { IoMdSchool } from 'react-icons/io'

function ListItems({
  title,
  dienstverband,
  timePassed,
  description,
  degree,
  minWorkHours,
  maxWorkHours,
}) {
  return (
    <>
      <ListItem
        className="border border-base-200 rounded-box flex justify-between space-x-8 px-4  hover:border-primary-focus hover:cursor-pointer"
        alignItems="flex-start"
      >
        <ListItemAvatar className="flex justify-center w-1/12">
          <Avatar
            alt="Remy Sharp"
            className="w-full h-full"
            src="/vitas.jpg"
            placeholder="blur"
          />
        </ListItemAvatar>
        <div className="flex w-full justify-between items-center my-auto">
          <div className="flex flex-col w-full md:w-5/6">
            <ListItemText
              className="text-primary font-bold py-auto"
              style={{
                color: 'text-primary',
                FontFace: 'Poppins',
                fontWeight: 'bold',
              }}
              primary={
                <div className="flex space-x-2 items-center">
                  <React.Fragment>
                    <div className="flex items-center space-x-2">
                      <IconContext.Provider
                        value={{
                          className:
                            'text-base-content md:font-bold text-md md:text-lg',
                        }}
                      >
                        <IoMdSchool />
                      </IconContext.Provider>
                      <div>
                        <p className="text-base-content font-medium md:font-bold text-md md:text-lg">
                          {degree}
                        </p>
                      </div>
                      <div>
                        <p className="text-base-content">-</p>
                      </div>
                      <div className="md:font-bold text-sm  md:text-lg">
                        {title}
                      </div>
                    </div>
                  </React.Fragment>
                </div>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    className="text-base-content font-medium font-poppins"
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                  >
                    <span>{timePassed} geleden</span>
                    <span className="text-muted text-xs">
                      {' — '} {dienstverband}
                      {' — '} {minWorkHours} - {maxWorkHours} uur
                    </span>
                  </Typography>
                </React.Fragment>
              }
            />

            <div className="flex items-center">
              <label className="text-xs font-medium text-base-content ">
                {description}
              </label>
            </div>
          </div>
          {/* <div className="hidden md:block w-1/6">
            <button className="btn-sm btn-primary btn-outlined btn-circle mr-0 ">
              <IconContext.Provider value={{ className: 'm-2' }}>
                <BookmarkAdd />
              </IconContext.Provider>
            </button>
          </div> */}
        </div>
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
    </>
  )
}

export default ListItems
