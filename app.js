var dotenv = require('dotenv');
dotenv.config(); // read in .env file and parse it

var express = require('express');
var app = express()
var Sequelize = require('sequelize');
var cors = require('cors'); // Cross Origin Resource Sharing
var bodyParser = require('body-parser');
var yelp = require('./api/yelp');

app.use(cors());
app.use(bodyParser());

app.get('/results/:s/:l?/:r?', function(request, response) {
  var location = request.params.l || 'Berkeley'
  var sort = request.params.r || '2'
  var deals_filter = request.params.d || 'true'
  console.log(location);
  yelp.search({ term: request.params.s, location: location, sort: sort, deals_filter: deals_filter }).then(function(results) {
    response.json(results);
  }, function(err) {
    response.json(err);
  });
});

app.listen(3000);
