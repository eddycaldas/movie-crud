const knex = require('./knex');
module.exports = {
    movie: {
        getAll: function() {
            return knex('movie');
        },
        getOne: function(id) {
            return knex('movie').where('id', id).first(); //first use only if one item inside array
        },
        create: function(movie) {
            return knex('movie').insert(movie, 'id').returning('*')
        },
        updated: function(id, movie) {
            return knex('movie').where('id', id).update(movie, '*');
        },
        delete(id) {
            return knex('movie').where('id', id).del();
        },
    }
}