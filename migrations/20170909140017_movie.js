
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table) {
    table.increments('id')
    table.text('title')
    table.text('director')
    table.integer('year')
    table.integer('rating')
    table.text('url')
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('movie')
};
