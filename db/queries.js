const knex = require('./knex');

module.exports = {
  movie: {
    
    getAll: function() {
        return knex('movie');
    },
    
    // getOne: function(id) {    
    //   return knex('movie').where('id', id);
    // },
    
    create: function(movie) {
       return knex('movie').insert(movie).returning('*')
    },
    
 }    
}