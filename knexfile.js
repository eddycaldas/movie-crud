var env = require('dotenv').config()
module.exports = {
    development: {
        client: 'pg',
        connection: 'postgresql://localhost/movie-crud',
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
    }
};