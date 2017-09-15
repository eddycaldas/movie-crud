const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(cors())
const movie = require('./routes/movie');
app.use(movie);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});