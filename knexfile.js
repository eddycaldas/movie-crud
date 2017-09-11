// Update with your config settings.


var env = require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie-crud',
  },
  
  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL',
  }

};
