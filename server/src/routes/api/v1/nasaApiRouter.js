import express from "express"

import OpenNASAClient from "../../../apiClient/NasaAPODClient.js"

const nasaApiRouter = new express.Router()

nasaApiRouter.get("/", async (req, res) => {
  try {
    const spaceResponse = await OpenNASAClient.getImageDetails()
    const spaceImageData = JSON.parse(spaceResponse)
    return res
    .set({ "Content-Type": "application/json" })
    .status(200)
    .json(spaceImageData)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default nasaApiRouter