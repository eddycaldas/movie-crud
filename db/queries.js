const knex = require('./knex');

module.exports = {
  
  movie: {    
    getAll: function() {
        return knex('movie');
    },
    
    getOne: function(id) {    
      return knex('movie').where('id', id).first();//first use only if one item inside array
    },
    
    create: function(movie) {
       return knex('movie').insert(movie).returning('*')
    },
    
    updated: function(id, movie) {
      return knex('movie').where('id', id).update(movie, '*');
    }
    
 }    
}



// 
// function deleteMovie(id) {
//   return knex('movie').where('id', id).del();
// }