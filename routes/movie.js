const express = require('express');
const router = express.Router();
const queries = require('../db/queries'); //require the queries file
const path = require('path');






router.get('/movie', (req, res) => {
  queries
  .movie
  .getAll()
  .then(movies => {
    res.json(movies);
  });
})




  router.get('/movie/:id', (req, res) => {
    queries
      .movie
      .getOne(req.params.id)
      .then(movie => {
        res.json(movie);
      });
  });

router.post('/movie', (req, res) => {
  queries
    .movie
    .create(req.body)
    .then(results => {
      res.send(results[0]);
  })
});


module.exports =router;