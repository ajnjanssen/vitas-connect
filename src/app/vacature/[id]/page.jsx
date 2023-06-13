'use client'
import React, { useEffect, useState } from 'react'
import { Box, Modal, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function Page({ params }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [jobData, setJobData] = useState(null)
  const { id } = params

  useEffect(() => {
    fetch(`https://test.cms.vitas.nl/api/jobs/${id}?populate=deep`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Failed to fetch data')
        }
      })
      .then((responseJson) => {
        setJobData(responseJson.data)
        console.log(jobData)
      })
      .catch((error) => setError(error.message))
  }, [])

  return (
    <>
      <div className="w-full lg:w-1/2 mx-auto">
        <h1>Vacature ID: {id}</h1>
        <div className="bg-secondary rounded-box p-4">
          <div className="flex justify-center flex-col items-center space-y-4">
            <img
              className="rounded-full object-scale-down h-24 w-24 lg:h-48 lg:w-48 bg-white"
              src="data:image/png;base64,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"
              alt="avatar"
            />
            <h1 className="text-xl font-bold text-base-100 text-center">
              Vitas
            </h1>
            <p className="text-base-200 text-lg text-center">
              {jobData && jobData.attributes.jobOptions.jobTitle}
            </p>
          </div>
          <div className="flex justify-between space-x-2 lg:justify-center lg:space-x-4 px-4 py-4">
            <div className="bg-base-100 rounded-lg px-4 py-2 ">
              <p className="text-xs lg:text-sm text-base-content font-bold">
                {jobData && jobData.attributes.jobOptions.minWorkHours} -{' '}
                {jobData && jobData.attributes.jobOptions.maxWorkHours}
                {'u'}
              </p>
            </div>
            <div className="bg-base-100 rounded-lg px-4 py-2 ">
              <p className="text-xs lg:text-sm text-base-content font-bold text-center">
                {jobData && jobData.attributes.jobOptions.region}
              </p>
            </div>
            <div className="bg-base-100 rounded-lg px-4 py-2 ">
              <p className="text-xs lg:text-sm text-base-content font-bold">
                32 - 40u
              </p>
            </div>
          </div>
        </div>
        <div className="w-full py-4 flex flex-col space-y-4 ">
          <div className="stats stats-vertical lg:stats-horizontal shadow-md w-full">
            <div className="stat">
              <div className="stat-title">Referrals</div>
              <div className="stat-value">2</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">Vacature weergave</div>
              <div className="stat-value">23x</div>
              <div className="stat-desc">↗︎ keer gezien</div>
            </div>
          </div>
          <div className="">
            <button
              onClick={handleOpen}
              className="btn-lg btn-primary w-full rounded-box"
            >
              Refereer
            </button>
          </div>
          <div>
            {jobData &&
              jobData.attributes.row[0].paragraph &&
              jobData.attributes.row[0].paragraph
                .split('###')
                .map((section, index) => {
                  const [title, ...paragraphs] = section.split('\n')

                  return (
                    <div className="flex flex-col space-y-4" key={index}>
                      <h2 className="font-bold text-lg">{title}</h2>
                      {paragraphs.map((paragraph, pIndex) => (
                        <p className="text-muted leading-relaxed" key={pIndex}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className=" w-full  lg:w-2/5 border-0 rounded-box shadow-lg"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Refereer naar Vitas
          </Typography>
          <div className="py-8 flex flex-col space-y-4 w-full">
            <div className="flex space-x-4 w-full">
              <div className="w-full">
                <label className="label">
                  <span className="font-bold text-lg">Voornaam</span>
                </label>
                <input
                  type="text"
                  placeholder="Voornaam"
                  className="text-neutral font-poppins input input-bordered w-full  h-16"
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="font-bold text-lg">Achternaam</span>
                </label>
                <input
                  type="email"
                  placeholder="Achternaam"
                  className="text-neutral font-poppins input input-bordered w-full  h-16"
                />
              </div>
            </div>
            <div className="flex space-x-4 w-full">
              <div className="w-full">
                <label className="label">
                  <span className="font-bold text-lg">e-mailadres</span>
                </label>
                <input
                  type="email"
                  placeholder="e-mailadres"
                  className="text-neutral font-poppins input input-bordered w-full  h-16"
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="font-bold text-lg">Telefoonnummer</span>
                </label>
                <input
                  type="number"
                  placeholder="0612345678"
                  className="text-neutral font-poppins input input-bordered w-full  h-16"
                />
              </div>
            </div>
            <div className="flex  justify-between">
              <button
                onClick={handleClose}
                className="btn-lg btn-primary btn rounded-box"
              >
                Refereer
              </button>
              <button onClick={handleClose} className="btn btn-lg btn-outline">
                Annuleer
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Page
