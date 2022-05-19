class DailyImageSerializer {
  static getSummary(dailyImage) {
    const allowedAttributes = ["id", "dateTaken", "explanation", "imageUrl", "title", "author" ]
    const serializedImage = {}

    for (const attribute of allowedAttributes) {
      serializedImage[attribute] = dailyImage[attribute]
    }
    return serializedImage
  }
}

export default DailyImageSerializer