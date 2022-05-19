import express from "express";
import { DailyImage } from "../../../models/DailyImage.js";
import DailyImageSerializer from "../../../serializers/DailyImageSerializer.js";

const dailyMainPageRouter = new express.Router()

dailyMainPageRouter.get("/", async (req, res) => {
  try {
    const images = await DailyImage.query()
    const serializedImages = images.map((image) => {
      return DailyImageSerializer.getSummary(image)
    })
    return res.status(200).json({ images: serializedImages })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default dailyMainPageRouter