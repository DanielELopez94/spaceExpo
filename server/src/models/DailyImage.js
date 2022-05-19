const Model = require("./Model.js")

class DailyImage extends Model {
  static get tableName() {
    return "dailyImages"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["dateTaken", "explanation", "imageUrl", "title", "author"],
      properties: {
        dateTaken: { type: "string" },
        explanation: { type: "string" },
        imageUrl: { type: "string" },
        title: { type: "string" },
        author: { type: "string" },
      }
    }
  }
}

module.exports = DailyImage