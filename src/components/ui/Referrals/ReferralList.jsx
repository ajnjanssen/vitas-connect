'use client'
import React, { useState } from 'react'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import users from './referrals.json'
import SearchInput from '../searchInput/SearchInput'

function ReferralList() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter the users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      <SearchInput
        label="referralsearch"
        placeholder="Zoeken"
        setSearchQuery={setSearchQuery} // Pass setSearchQuery as a prop
      />
      <Box sx={{ overflowY: 'auto', maxHeight: '400px' }}>
        <List>
          {filteredUsers.map((user) => (
            <ListItem className="group" key={user.id}>
              <div className="group-hover:bg-primary w-full">
                <div className="flex justify-between py-2">
                  <div className="flex space-x-4 items-center">
                    <div className="w-16">
                      <img
                        className="rounded-full"
                        src={user.avatar}
                        alt={user.name}
                      />
                    </div>
                    <div>
                      <ListItemText
                        primary={user.name}
                        className="font-bold"
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {'(' + user.referenced + ')'} Vacatures
                              gerefereerd
                            </Typography>
                          </>
                        }
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="badge badge-primary badge-md">
                      {user.referenceState}
                    </div>
                  </div>
                </div>
                <Divider />
              </div>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}

export default ReferralList
