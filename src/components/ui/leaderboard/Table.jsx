'use client'
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import usersData from './users.json'

function BasicTable() {
  const sortedRows = usersData.sort((a, b) => b.punten - a.punten)
  const rows = sortedRows.slice(3) // Exclude the first 3 ranks

  return (
    <TableContainer component={Paper} className="bg-base-200">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className="bg-base-300 text-base-content">
              Rank
            </TableCell>
            <TableCell align="left" className="bg-base-300 text-base-content">
              Avatar
            </TableCell>
            <TableCell align="left" className="bg-base-300 text-base-content">
              Naam
            </TableCell>
            <TableCell align="left" className="bg-base-300 text-base-content">
              Punten
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.rank}
              className="border-solid border-t-2 border-b-2 border-base-300"
            >
              <TableCell
                className="text-base-content"
                component="th"
                scope="row"
                align="left"
              >
                {index + 4} {/* Add 4 to the index to start the rank at 4 */}
              </TableCell>
              <TableCell align="left">
                <div className="w-12 h-12">
                  <img
                    className="w-full h-full rounded-full object-cover border-base-content border-2"
                    src={row.photo}
                    alt={row.name}
                  />
                </div>
              </TableCell>
              <TableCell className="text-base-content" align="left">
                {row.name}
              </TableCell>
              <TableCell className="text-base-content" align="left">
                {row.punten}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Table
