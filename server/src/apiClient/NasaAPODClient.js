import got from "got"

const openNasaApiKey = process.env.NASA_APOD_KEY
// we'll want to move this to the ENV file like the Session secret is

class OpenNASAClient {
  static async getImageDetails() {
    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${openNasaApiKey}`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return {error: error.message}
    }
  }
}

export default OpenNASAClient