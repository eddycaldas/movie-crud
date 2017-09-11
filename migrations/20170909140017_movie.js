
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table) {
    table.increments('id')
    table.text('title')
    table.text('director')
    table.integer('year')
    table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('movie')
};
