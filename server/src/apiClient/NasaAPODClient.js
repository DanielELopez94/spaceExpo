import got from "got"
import dotenv from 'dotenv'
dotenv.config()

const openNasaApiKey = process.env.NASA_APOD_API

class OpenNASAClient {
  static async getImageDetails() {
    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${openNasaApiKey}`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default OpenNASAClient