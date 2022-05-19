/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("images", (table) => {
    table.bigIncrements("id")
    table.string("dateTaken").notNullable()
    table.string("explanation").notNullable()
    table.string("imageUrl").notNullable()
    table.string("title").notNullable()
    table.string("copyright").notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("images")
}
