
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table) {
    table.increments('id')
    table.text('title').notNullable();
    table.text('director').notNullable();
    table.integer('year').notNullable();
    table.integer('rating').notNullable();
    table.text('url').notNullable();
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('movie')
};
